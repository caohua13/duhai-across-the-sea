/**
 * 渡海 · 本地链接服务
 * 双击同目录的「一键打开网页链接.bat」即可启动，浏览器会自动打开
 *   http://127.0.0.1:8899/index.html
 * 同一 WiFi 下的手机/平板也可以用打印出来的「局域网链接」打开。
 *
 * 只读取本文件夹内的文件，不联网、不上传任何内容。
 */
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { spawn } = require('node:child_process');

const ROOT = path.resolve(__dirname, '..');
const START_PORT = Number(process.argv[2] || 8899);
const MAX_TRIES = 20;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.htm': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.cjs': 'text/plain; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.csv': 'text/csv; charset=utf-8',
  '.srt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.m4a': 'audio/mp4',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.pdf': 'application/pdf',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  '.zip': 'application/zip',
};

function safePath(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0].split('#')[0]);
  const target = path.normalize(path.join(ROOT, clean));
  if (!target.startsWith(ROOT)) return null;
  return target;
}

function send(res, code, headers, body) {
  res.writeHead(code, headers);
  if (body) res.end(body);
  else res.end();
}

const server = http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return send(res, 405, { 'Content-Type': 'text/plain; charset=utf-8' }, '只支持 GET');
  }
  let target = safePath(req.url === '/' ? '/index.html' : req.url);
  if (!target) return send(res, 403, { 'Content-Type': 'text/plain; charset=utf-8' }, '越界路径');

  fs.stat(target, (err, st) => {
    if (!err && st.isDirectory()) target = path.join(target, 'index.html');
    fs.stat(target, (err2, stat) => {
      if (err2 || !stat.isFile()) {
        return send(res, 404, { 'Content-Type': 'text/html; charset=utf-8' },
          '<meta charset="utf-8"><h1>404</h1><p>找不到该文件：' + target + '</p>');
      }
      const type = MIME[path.extname(target).toLowerCase()] || 'application/octet-stream';
      const range = req.headers.range;
      if (range && /^bytes=\d*-\d*$/.test(range)) {
        const [s, e] = range.replace('bytes=', '').split('-');
        let start = s ? parseInt(s, 10) : 0;
        let end = e ? parseInt(e, 10) : stat.size - 1;
        if (isNaN(start) || isNaN(end) || start > end || start >= stat.size) {
          return send(res, 416, { 'Content-Range': 'bytes */' + stat.size });
        }
        end = Math.min(end, stat.size - 1);
        res.writeHead(206, {
          'Content-Type': type,
          'Content-Length': end - start + 1,
          'Content-Range': 'bytes ' + start + '-' + end + '/' + stat.size,
          'Accept-Ranges': 'bytes',
          'Cache-Control': 'no-cache',
        });
        if (req.method === 'HEAD') return res.end();
        fs.createReadStream(target, { start, end }).pipe(res);
        return;
      }
      res.writeHead(200, {
        'Content-Type': type,
        'Content-Length': stat.size,
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'no-cache',
      });
      if (req.method === 'HEAD') return res.end();
      fs.createReadStream(target).pipe(res);
    });
  });
});

function lanAddresses() {
  const out = [];
  for (const list of Object.values(os.networkInterfaces())) {
    for (const ip of list || []) {
      if (ip.family === 'IPv4' && !ip.internal) out.push(ip.address);
    }
  }
  return out;
}

function openBrowser(url) {
  try {
    spawn('cmd.exe', ['/c', 'start', '""', url], { detached: true, stdio: 'ignore' }).unref();
  } catch (_) { /* 用户手动在浏览器里粘贴链接即可 */ }
}

function listen(port, tries) {
  const onError = (err) => {
    if (err.code === 'EADDRINUSE' && tries < MAX_TRIES) {
      listen(port + 1, tries + 1);
    } else {
      console.error('启动失败：', err.message);
    }
  };
  server.once('error', onError);
  server.listen(port, '0.0.0.0', () => {
    server.removeListener('error', onError);
    const local = `http://127.0.0.1:${port}/index.html`;
    console.log('');
    console.log('  ╭───────────────────────────────────────────────╮');
    console.log('  │  渡海 · 网页链接已就绪，保持本窗口开着即可     │');
    console.log('  ╰───────────────────────────────────────────────╯');
    console.log('');
    console.log('  本机链接     ' + local);
    for (const ip of lanAddresses()) {
      console.log('  局域网链接   ' + `http://${ip}:${port}/index.html` + '   （同一 WiFi 的手机/平板可打开）');
    }
    console.log('');
    console.log('  关闭本窗口 ＝ 停止服务；网页本身是离线的，关掉也不影响双击 index.html。');
    console.log('');
    openBrowser(local);
  });
}

listen(START_PORT, 0);
