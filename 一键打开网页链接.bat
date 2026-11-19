@echo off
title 渡海 · 一键打开网页链接
cd /d "%~dp0"
echo.
echo   [渡海] 正在启动本地链接，请稍候...
echo.
where node >nul 2>nul
if errorlevel 1 goto NONODE
node "%~dp0_工具\serve.cjs" 8899
goto END

:NONODE
echo   未检测到 Node.js，改为直接双击打开网页（离线模式，功能不变）。
start "" "%~dp0index.html"
pause
goto END

:END