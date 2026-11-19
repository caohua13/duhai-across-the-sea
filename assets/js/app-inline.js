/* ===== 单文件构建产物（由 _build/build-inline.cjs 生成；源码见 assets/js/app.js 与 assets/data/*.js） ===== */

/* ===== 数据层：assets/data/subs.js ===== */
// 字幕时间轴：依据音频语音段（VAD 50ms 窗）+ 原片字幕条核对得出
// 前 144s：原片画面实为"中文在上、原始外文在下"；本数据同时给出按剧本规则应有的英文译行供参考
const subs = [
  { i: 1,  start: 2.45,  end: 4.40,  zh: '海那边，会有什么？', en: 'What lies beyond the sea?', type: 'drawfo' },
  { i: 2,  start: 5.30,  end: 6.60,  zh: '在山东蓬莱，', en: 'In Penglai, Shandong,', type: 'narration' },
  { i: 3,  start: 7.15,  end: 8.70,  zh: '人们把向海的想象，', en: "dreams of the sea", type: 'narration' },
  { i: 4,  start: 9.10,  end: 12.30, zh: '讲成了八仙过海的故事。', en: 'became the tale of the Eight Immortals.', type: 'narration' },
  { i: 5,  start: 13.80, end: 16.60, zh: '在山东蓬莱，人们把向海的想象，', en: 'In Penglai, Shandong, dreams of the sea', type: 'narration' },
  { i: 6,  start: 16.80, end: 21.20, zh: '讲成了八仙过海的故事。', en: 'became the tale of the Eight Immortals.', type: 'narration' },
  { i: 7,  start: 22.15, end: 24.60, zh: '不坐船，咱各凭本事，过海去！', en: "No boats. Let's cross the sea, each in our own way!", type: 'dialogue', who: '铁拐李' },
  { i: 8,  start: 25.15, end: 27.80, zh: '好！看谁先到！', en: "All right! Let's see who gets there first!", type: 'dialogue', who: '汉钟离' },
  { i: 9,  start: 32.60, end: 35.60, zh: '各显神通', en: 'Each with their own power', type: 'note' },
  { i: 10, start: 38.00, end: 43.30, zh: '各有本领，也能并肩同行。', en: 'Different gifts can carry us forward together.', type: 'narration' },
  { i: 11, start: 45.15, end: 49.80, zh: '海那边，也有人这样望着我们吗？', en: 'Beyond the sea, is someone looking this way too?', type: 'dialogue', who: '吕洞宾' },
  { i: 12, start: 50.30, end: 53.60, zh: '去相见，才会知道。', en: "We'll only know when we meet.", type: 'dialogue', who: '何仙姑' },
  { i: 13, start: 57.35, end: 59.80, zh: '（海浪声，无台词）', en: '(waves, no dialogue)', type: 'silent' },
  { i: 14, start: 63.10, end: 66.60, zh: '（海浪声，无台词）', en: '(waves, no dialogue)', type: 'silent' },
  { i: 15, start: 69.00, end: 71.50, zh: '传说之外，', en: 'Beyond the legend,', type: 'narration' },
  { i: 16, start: 72.85, end: 76.20, zh: '人们早已扬帆远行。', en: 'people had long set sail.', type: 'narration' },
  { i: 17, start: 76.60, end: 80.00, zh: '海上丝绸之路，连接起不同的港口与生活。', en: 'The Maritime Silk Roads connected ports and ways of life.', type: 'narration' },
  { i: 18, start: 85.70, end: 89.00, zh: '瓷器', en: 'Porcelain.', type: 'dialogue', who: '中国客商' },
  { i: 19, start: 99.05, end: 101.30, zh: '呃……瓷器。', en: 'Porcelain.', type: 'dialogue', who: '海外客商' },
  { i: 20, start: 102.70, end: 105.40, zh: '跨过海的不只是货物。', en: 'More than goods crossed the sea.', type: 'narration' },
  { i: 21, start: 111.95, end: 117.00, zh: '一句新学的话，一次耐心的倾听，让陌生的人慢慢走近。', en: 'A newly learned word and a moment of listening brought strangers closer.', type: 'narration' },
  { i: 22, start: 123.00, end: 128.70, zh: '今天，远洋航线仍在延伸；文化交流又有了新的渡口。', en: 'Today ocean routes still continue, and exchange has found new places to meet.', type: 'narration' },
  { i: 23, start: 136.10, end: 142.30, zh: '八位仙人，八种渡海方式？', en: 'Eight immortals, eight ways across?', type: 'dialogue', who: '英语青年' },
  { i: 24, start: 148.40, end: 148.90, zh: '（书页翻动，无台词）', en: '(pages turning)', type: 'silent' },
  { i: 25, start: 151.15, end: 152.25, zh: '在我的家乡，大海也诉说着故事。', en: 'Back home, the sea tells stories too.', type: 'dialogue', who: '法语青年' },
  { i: 26, start: 162.80, end: 165.90, zh: '从八仙的想象，到帆船的远航，再到今天的相遇，', en: "From the Eight Immortals' imagined crossing to voyages under sail and encounters today,", type: 'narration' },
  { i: 27, start: 165.90, end: 169.05, zh: '大海让不同的故事有机会彼此听见。', en: 'the sea brings different stories within reach of one another.', type: 'narration' }
];

// 原片实际显示的字幕（用于指出现版问题）
const asShipped = {
  9:  { zh: '各显神通', note: '语气词/非台词被做成字幕' },
  11: { zh: '海那边也有人这样望着我们吗', note: '缺英文' },
  13: { zh: '（无字幕 · 屏上静默约 7 秒）', note: '56–62s 画面几乎不动' },
  18: { zh: '瓷器', note: '缺英文' },
  19: { zh: '呃 / 瓷器', note: '语气词入字幕' },
  25: { zh: '在我的家乡 大海也诉说着故事', ru: '俄语 [Давайте поделимся нашими историями]', note: '法语台词配了俄语原文，说话人还是低头看手机的女生' },
  27: { zh: '让我们分享彼此的故事吧', fr: '法语 [Chez moi aussi la mer raconte des histoires]', note: '俄语台词配了法语原文，说话人画外无对应画面' }
};

// 人物与场景段落（对应剧本 S01–S10 与实际成片）
const scenes = [
  { id: 'S01', t: 0,   dur: 10,  zh: '海那边',       en: 'Beyond the Sea',  img: 'frame_01.jpg', summary: '从浪花、帆影到片名，先提出一个问题。', quote: '海那边，会有什么？' },
  { id: 'S02', t: 10,  dur: 17,  zh: '各显其能',     en: 'All Their Own',   img: 'frame_03.jpg', summary: '蓬莱海岸，八仙走向大海，提议不坐船、各凭本事。' },
  { id: 'S03', t: 27,  dur: 20,  zh: '八种本领，一片海', en: 'One Sea, Eight Gifts', img: 'frame_05.jpg', summary: '葫芦、蒲扇、花篮、玉板、白驴、莲花、剑与云，八人并肩前行。' },
  { id: 'S04', t: 47,  dur: 15,  zh: '把问题交给帆',  en: 'A Question for the Sail', img: 'frame_07.jpg', summary: '暮色礁石，把好奇交给远方的帆影，从神话进入历史。' },
  { id: 'S05', t: 62,  dur: 14,  zh: '真实的远航',    en: 'The Real Voyages', img: 'frame_09.jpg', summary: '古港：拉索、修帆、运箱，海上丝绸之路把港口与生活连起来。' },
  { id: 'S06', t: 76,  dur: 22,  zh: '先学会一句话',  en: 'Learning a Word First', img: 'frame_10.jpg', summary: '一位客商教另一位说"瓷器"，另一位请他闻香料——介绍与倾听互换。' },
  { id: 'S07', t: 98,  dur: 18,  zh: '从相遇到远航',  en: 'From Meeting to Voyage', img: 'frame_11.jpg', summary: '货物收箱，帆影从近到远展开。' },
  { id: 'S08', t: 116, dur: 14,  zh: '同一片海，新的来往', en: 'The Same Sea, New Encounters', img: 'frame_12.jpg', summary: '古船船首切到现代货轮，展厅里的碗形展览呼应古港的碗口。' },
  { id: 'S09', t: 130, dur: 23,  zh: '让故事听见回应', en: 'Let Stories Hear Each Other', img: 'frame_13.jpg', summary: '中国青年摊开八仙册页，外国朋友问、说法语、说俄语，互相分享自己的海。' },
  { id: 'S10', t: 153, dur: 27,  zh: '渡海，也是走近彼此', en: 'Crossing the Sea Is Reaching Each Other', img: 'frame_17.jpg', summary: '四人在桌边共读不同故事，日落海面上的航迹通向远方。' }
];

/* ===== 数据层：assets/data/immortals.js ===== */
// 八仙与法宝：民间传说存在版本差异，本页按《渡海》一片的艺术设定呈现，不宣称唯一标准
const immortals = [
  {
    id: 'tieguaili', name: '铁拐李', en: 'Tieguai Li', hue: '#8a5a3b',
    item: '葫芦', itemEn: 'Gourd',
    from: '本名李玄，传说中拄铁拐而行，以葫芦盛药济人。',
    inFilm: '片中主角。他提议"不坐船，咱各凭本事，过海去"，把自己的葫芦放大成渡海的船。',
    gifts: '葫芦口小肚大，可盛水、盛药；在片子里，葫芦也是"能装下远方"的意象。',
    tags: ['发起者', '爽朗', '葫芦']
  },
  {
    id: 'hanzhongli', name: '汉钟离', en: 'Han Zhongli', hue: '#7a4a3a',
    item: '蒲扇', itemEn: 'Palm-leaf fan',
    from: '又称钟离权，传说生得体态魁梧，手持芭蕉扇。',
    inFilm: '第二个响应的人。他"好！看谁先到！"，把蒲扇展开当作渡海的舟。',
    gifts: '扇面开阔，一扫生风；片中他与铁拐李互相照应，是旅途里的"搭话者"。',
    tags: ['回应者', '从容', '蒲扇']
  },
  {
    id: 'zhangguolao', name: '张果老', en: 'Zhang Guolao', hue: '#4b5c50',
    item: '白驴', itemEn: 'White donkey',
    from: '传说中东倒西歪的"倒骑驴"老者，常常倒骑着驴四处行走。',
    inFilm: '片中他倒骑白驴，行进方向和队伍一致，"倒着走、往前看"的姿态很有戏味。',
    gifts: '驴可以歇脚、也可以歇息；倒骑的方向感，是片中带给观众的一点小乐趣。',
    tags: ['倒骑', '悠然', '白驴']
  },
  {
    id: 'lanxiehe', name: '蓝采和', en: 'Lan Caihe', hue: '#3f6f7a',
    item: '花篮', itemEn: 'Basket of flowers',
    from: '传说中手持花篮、边走边唱的少年形象。',
    inFilm: '片中乘着盛满鲜花的花篮追上来，与曹国舅的玉板形成速度的对比。',
    gifts: '花篮里的花四季不谢，在片中负责"轻快"的那一拍。',
    tags: ['少年', '轻快', '花篮']
  },
  {
    id: 'lvdonbin', name: '吕洞宾', en: 'Lu Dongbin', hue: '#55608a',
    item: '宝剑', itemEn: 'Sword',
    from: '道教传说中常被称作"纯阳子"的仙人，佩剑行走。',
    inFilm: '片中从"海那边，会有什么？"这句问话开始，最后在礁石上又问："也有另一头的人吗？"',
    gifts: '宝剑踏在脚下当渡海之器；在片中，他是把"好奇"传给下一场的人。',
    tags: ['好奇', '提问', '宝剑']
  },
  {
    id: 'hexiangu', name: '何仙姑', en: 'He Xiangu', hue: '#a06a7a',
    item: '莲花', itemEn: 'Lotus',
    from: '八仙中常见唯一的女性形象，常持荷花。',
    inFilm: '她说"去相见，才会知道"，把好奇从"远方"带到"见面"这件事上。',
    gifts: '莲花浮在水面，不沉不湿；片中由她把话推进下一步。',
    tags: ['温和', '笃定', '莲花']
  },
  {
    id: 'hanxiangzi', name: '韩湘子', en: 'Han Xiangzi', hue: '#4f7a6a',
    item: '玉笛', itemEn: 'Jade flute',
    from: '传说中擅长吹笛的仙人，常与音乐相连。',
    inFilm: '片中他立于轻云吹笛，笛声连着海浪，是片中唯一"声音主角"。',
    gifts: '笛声也是他的渡海方式；在片中负责把神话段和海浪连在一起。',
    tags: ['音乐', '专注', '玉笛']
  },
  {
    id: 'caoguoj', name: '曹国舅', en: 'Cao Guojiu', hue: '#6a5a8a',
    item: '玉板', itemEn: 'Jade tablets',
    from: '八仙中最常见的高官形象，常持玉板（简板）。',
    inFilm: '片中他乘玉板沉稳前行，与蓝采和的花篮快慢对比。',
    gifts: '玉板端正平稳；片子里他负责稳住队伍节奏。',
    tags: ['沉稳', '高官', '玉板']
  }
];

const timeline = [
  { t: '00:00', label: '开场', text: '浪花与帆影，片名《渡海 / ACROSS THE SEA》' },
  { t: '00:10', label: '蓬莱', text: '海岸上人们修网，八仙站成一排' },
  { t: '00:22', label: '提议', text: '铁拐李：不坐船，咱各凭本事，过海去' },
  { t: '00:27', label: '渡海', text: '葫芦、蒲扇、花篮、玉板、白驴、莲花、剑、云' },
  { t: '00:47', label: '暮色', text: '礁石上的人望着远方的帆' },
  { t: '01:02', label: '古港', text: '海上丝绸之路，帆与货箱' },
  { t: '01:16', label: '学词', text: '"瓷器"与香料盒，介绍者和倾听者互换' },
  { t: '01:38', label: '启航', text: '帆影由近到远' },
  { t: '01:56', label: '今天', text: '货轮进港，展厅里的碗形展览' },
  { t: '02:10', label: '回应', text: '八仙册页、手机里的家乡海湾' },
  { t: '02:33', label: '收束', text: '海面落日，航迹通向远方' }
];

/* ===== 数据层：assets/data/langs.js ===== */
// 多语言台词（台词原文与片中保持一致；法/俄为片中实际出现的外语）
const langs = [
  {
    flag: '🇨🇳', name: '中文', lang: 'Chinese', ln: 'ZH · 旁白与对白主语言',
    say: '不坐船，咱各凭本事，过海去！',
    orig: '铁拐李 · 轻山东口音',
    use: '全片旁白与古港、展厅的主要对白都用中文，约占全部人声的 70%。',
    who: '八仙对白 · 古港客商 · 中国青年 · 旁白'
  },
  {
    flag: '🇬🇧', name: '英语', lang: 'English', ln: 'EN · 国际通用 · 字幕层',
    say: 'Eight immortals, eight ways across?',
    orig: '英语青年 · 英文台词',
    use: '也是所有台词与旁白的英文译行。中文行在上、英文行在下，画面里不堆第三种语言。',
    who: '英语青年 · 全片英文字幕'
  },
  {
    flag: '🇫🇷', name: '法语', lang: 'Français', ln: 'FR · 共享型短句',
    say: '在我的家乡，大海也诉说着故事。',
    orig: 'Chez moi aussi, la mer raconte des histoires.',
    use: '一句短句，用"我家乡的海"接住"传说的海"，把交流从"听我说"变成"你也有"。',
    who: '法语青年（片中为现代展厅场景）'
  },
  {
    flag: '🇷🇺', name: '俄语', lang: 'Русский', ln: 'RU · 邀请型短句',
    say: '让我们分享彼此的故事吧。',
    orig: 'Давайте поделимся нашими историями.',
    use: '最后一个话轮用俄语发出邀请，接回 S09 的"分享"主题，然后收束到海面。',
    who: '俄语青年（片中为现代展厅场景）'
  }
];

// 互动例句库：中文台词 + 参考英文 + 三个可选写法
const labLines = [
  {
    zh: '海那边，会有什么？', ref: 'What lies beyond the sea?',
    alt: ['What is out there across the water?', 'What could be waiting past the horizon?', 'What might we find on the other side of the sea?'],
    talk: '好译法保留了"未知"，不把"海那边"直译成 the other shore。'
  },
  {
    zh: '不坐船，咱各凭本事，过海去！', ref: "No boats. Let's cross the sea, each in our own way!",
    alt: ["Nobody needs a boat — let's get across, each in our own style!", 'No boats for us: we cross by our own talents!', "Skip the boat. Every one of us has a way across."],
    talk: '"各凭本事"对应 each in their own way / each with their own talent，"咱"是口语，英文也用 Let\'s 才不失语气。'
  },
  {
    zh: '各有本领，也能并肩同行。', ref: 'Different gifts can carry us forward together.',
    alt: ['Different strengths, one road.', "Each has a gift, and yet we walk side by side.", 'Many gifts, one crossing.'],
    talk: '"并肩同行"在这里是"一起往前走"，不是并肩"站着"，所以用 carry us forward / walk side by side。'
  },
  {
    zh: '去相见，才会知道。', ref: "We'll only know when we meet.",
    alt: ['Only meeting will tell.', "You'll know once we meet.", "Go and meet them — then you'll see."],
    talk: '短句最好保持"轻"，避免 while/until 这类书面连接词。'
  },
  {
    zh: '传说之外，人们早已扬帆远行。', ref: 'Beyond the legend, people had long set sail.',
    alt: ['Outside the tale, people had already been sailing for ages.', 'Long before the legend, they were out on the water.', 'The legend aside — people had been setting sail for ages.'],
    talk: '"传说之外"用 beyond / outside the legend；"早已"用 had long set sail 表达"早于故事"。'
  },
  {
    zh: '跨过海的不只是货物。', ref: 'More than goods crossed the sea.',
    alt: ['Crossing the sea carried more than goods.', 'It was not only cargo that crossed the water.', 'What crossed the sea was more than trade.'],
    talk: '"不只是"比用 not only…but also 更顺，因为下一句才接出"人"。'
  },
  {
    zh: '让我分享彼此的故事吧。', ref: "Let's share our stories.",
    alt: ['Shall we swap stories?', "Let's tell each other our stories.", 'Why not share the stories we each brought?'],
    talk: '邀请语气在英语里用 Let\'s / Shall we 最自然，避免直译祈使句。'
  },
  {
    zh: '渡海，是走向远方，也是走近彼此。', ref: 'To cross the sea is to reach distant shores — and to reach one another.',
    alt: ['Crossing the sea means going far — and coming closer.', 'The sea takes us far, and brings us close.', 'We cross the sea to reach the far shore, and the people on it.'],
    talk: '"远方／彼此"是对照，英文用 reach distant shores / reach one another 保留句法上的对称。'
  }
];


/* ===== 数据层：assets/data/depth.js ===== */
// 创新转化的内容层：把一支"拍完 3 分钟就结束"的短片，延伸成可以参与、可以理解、可以传播的东西。
// 原则：所有史实性内容只引用可核查的来源；创作性内容明确标注"本片创意"。

/* ========== 一、海那边：观众与片中人同一句话 ========== */
const horizonQuestion = {
  question: '海那边，会有什么？',
  en: 'What lies beyond the sea?',
  askedBy: [
    { who: '吕洞宾', at: '00:02', en: 'What lies beyond the sea?', note: '神话里的神仙问的第一句' },
    { who: '海外客商', at: '01:25', en: 'Porcelain.', note: '被“瓷器”这个词带过一片海' },
    { who: '英语青年', at: '02:16', en: 'Eight immortals, eight ways across?', note: '问的是另一种“渡”的方式' },
    { who: '法语青年', at: '02:31', en: 'Back home, the sea tells stories too.', note: '他没有回答这个问题，而是把问题带回了家' },
    { who: '俄语青年', at: '02:38', en: "Let's share our stories.", note: '把问题变成邀请' }
  ],
  // 供观众"接力"回答的提示（纯前端保存）
  prompts: [
    { q: '你家那边的海，有什么？', hint: '港口、渔村、赶海、台风天、海边长大的朋友…' },
    { q: '你第一次和“海那边的人”说话是什么时候？', hint: '一句没说出口的招呼，也值得记下来' },
    { q: '你会用哪一句话，把“渡海”讲给不懂中文的人？', hint: '中文一句 + 英文一句即可' }
  ]
};

/* ========== 二、同一片海：八个港口的各自提问（创作性内容，已标注） ========== */
const ports = [
  { flag: '🇨🇳', name: '蓬莱', en: 'Penglai', lon: 120.75, lat: 37.8, q: '八位仙人，怎么各显神通过海？', note: '八仙过海传说的主要流传地之一；本片以此为起点。' },
  { flag: '🇨🇳', name: '泉州', en: 'Quanzhou', lon: 118.68, lat: 24.9, q: '一船瓷器出港以前，要在码头说清多少件事？', note: '宋元时期的重要海上贸易港口，2021 年列入世界遗产（“泉州：宋元中国的世界海洋商贸中心”）。' },
  { flag: '🇨🇳', name: '广州', en: 'Guangzhou', lon: 113.26, lat: 23.13, q: '香料落船以后，先闻到的是哪一种？', note: '海上丝绸之路的重要港口城市，长期是海外贸易与人口交汇地。' },
  { flag: '🇲🇾', name: '马六甲', en: 'Malacca', lon: 102.25, lat: 2.2, q: '季风换向时，停靠的人会聊聊自己的家吗？', note: '海峡要冲；自古受季风制约，航海依赖风向与等待。' },
  { flag: '🇮🇳', name: '卡利卡特（古里）', en: 'Calicut', lon: 75.78, lat: 11.25, q: '换季的市场上，先学哪一句当地话？', note: '印度西南海岸古代重要商港，郑和船队曾到访。' },
  { flag: '🇮🇷', name: '霍尔木兹', en: 'Hormuz', lon: 56.45, lat: 27.1, q: '这一片海，和东边那一片，颜色一样吗？', note: '波斯湾东口的要冲港口，历史上有“香料与珍珠中转”之名。' },
  { flag: '🇮🇹', name: '威尼斯', en: 'Venice', lon: 12.33, lat: 45.44, q: '从船上下来以后，你会记住哪一栋房子？', note: '地中海贸易网络的重要节点，与东方商品长期来往。' },
  { flag: '🇪🇬', name: '亚喀巴湾', en: 'Gulf of Aqaba', lon: 35.0, lat: 29.4, q: '红海的浪，和南海的浪，拍岸的声音一样吗？', note: '红海北端海域，是许多航海者故事里“另一端”的意象。' }
];

/* ========== 三、十二件渡海物：物的叙述代替宏大的口号 ========== */
const objects = [
  { name: '船舵', en: 'Rudder', t: '00:40', from: '片中风帆下的船', line: '先有一个方向，才有一片海。' },
  { name: '罗盘', en: 'Compass', t: '', from: '无数海船靠它辨认方向', line: '在没有灯的海上，方向本身是一种语言。' },
  { name: '海图', en: 'Sea chart', t: '', from: '把海画成可以商量的地方', line: '纸上的海，是第一批可以“被讨论”的海。' },
  { name: '瓷碗', en: 'Porcelain bowl', t: '01:25', from: '片中主角，一位客商学说的第一个词', line: '一句“瓷器”，是从碗口开始的语言课。' },
  { name: '香料盒', en: 'Spice box', t: '01:33', from: '片中互换介绍与倾听的那个动作', line: '闻一下，是比握手更快的自我介绍。' },
  { name: '丝绸', en: 'Silk', t: '01:20', from: '古港货架上的卷布', line: '柔和的东西，也能穿过很长的路。' },
  { name: '竹笛', en: 'Flute', t: '00:47', from: '韩湘子的玉笛与海浪', line: '音乐不需要翻译，却会把说话的人带出来。' },
  { name: '八仙册页', en: 'Picture book', t: '02:10', from: '展厅里那本翻开的册页', line: '会讲故事的小书，是平民也能带走的博物馆。' },
  { name: '一张全家福', en: 'Family photo', t: '', from: '水手行囊里最常见的物件', line: '向海的人，常常带着“岸上”的照片。' },
  { name: '一封信', en: 'A letter', t: '', from: '在港口等船时写的字', line: '海把距离拉长，信把日子拉回。' },
  { name: '一通电话', en: 'A phone call', t: '', from: '船上甲板的一小段通话', line: '卫星信号代替了季风，家还在同一个方向。' },
  { name: '手机相册里的海岸线', en: 'Shoreline, in a gallery', t: '02:31', from: '片中女孩手机里的家乡照片', line: '现在的“宝物”，是一张能给陌生人看的照片。' }
];

/* ========== 四、多声部：四种语言讲的，不是同一句话 ========== */
const voices = [
  { lang: '中文', name: '中文 · 铁拐李', t: '00:22', say: '不坐船，咱各凭本事，过海去！', en: "No boats. Let's cross the sea, each in our own way!", frame: '别人都说要坐船，他偏要说“不”。', value: '起点：勇气不是不看条件，是敢先说话。' },
  { lang: 'English', name: 'English · 英语青年', t: '02:16', say: 'Eight immortals, eight ways across?', en: '八位仙人，八种渡海方式？', frame: '他先看画，再提问，最后才笑。', value: '看见 + 发问，是理解的第一种方式。' },
  { lang: 'Français', name: 'Français · 法语青年', t: '02:31', say: 'Chez moi aussi, la mer raconte des histoires.', en: '在我的家乡，大海也诉说着故事。', frame: '他不是在观众席上，而是把一张自家的照片推到了桌上。', value: '分享，而不是赞叹。' },
  { lang: 'Русский', name: 'Русский · 俄语青年', t: '02:38', say: 'Давайте поделимся нашими историями.', en: '让我们分享彼此的故事吧。', frame: '这是一句邀请，不是评价。', value: '把话交给别人说。' }
];
const registerNote = {
  title: '语域对照：同一句邀请，四种说法',
  en: "One invitation, four registers",
  rows: [
    { lang: '中文', form: '咱们各凭本事过海去吧', register: '口语 · 方言味 · 带点豪气' },
    { lang: 'English', form: "Let's cross, each in our own way!", register: '口语 · 协作 · 标准英文' },
    { lang: 'Français', form: 'Chez moi aussi, la mer raconte des histoires.', register: '叙述 · 日常 · 略带诗意' },
    { lang: 'Русский', form: 'Давайте поделимся нашими историями.', register: '邀请 · 正式但温和' }
  ],
  note: '四种语言不是互相翻译，“咱们”那种方言味翻不出英文，英文的协作感也不必硬塞进俄语。语言服务要做的，是保留每句话原本在讲什么。'
};

/* ========== 五、字幕无障碍：一条字幕的十秒钟 ========== */
const captionSculpture = {
  title: '一条字幕的十秒钟',
  steps: [
    { t: '0s', zh: '她低头看手机', note: '画面先给出一个动作，字幕还没出现。' },
    { t: '1s', zh: '在我的家乡', note: '字幕进入：中文行先出现，读得慢的人不会错过。' },
    { t: '1.5s', zh: '大海也诉说着故事', note: '中文行完成，英文行在下一帧出现。' },
    { t: '2s', zh: 'Chez moi aussi, la mer raconte des histoires.', note: '原文（法语）字幕同步出现，但不压中文。' },
    { t: '2.5s', zh: 'Back home, the sea tells stories too.', note: '英文行补齐，画面上只有两种文字。' },
    { t: '7s', zh: '（保留 3 秒静止）', note: '字幕停留比语音长 2–3 秒，给阅读慢的人留时间。' }
  ],
  standards: [
    { k: '中国', v: '《电视节目制作与交换规范》等对中文单行字幕字数有上限要求，实践中通行为单行不超过约 14–22 个汉字。' },
    { k: '国际', v: 'BBC / Netflix 字幕规范常见的经验值是单行 40–45 个字符、每秒约 15–17 个字符的阅读速度、每条最短 1.5 秒。' },
    { k: '本片', v: '本片台词都为短句；法语/俄语句尽量单独成行，避免和英文挤在同一画面。' }
  ],
  braille: {
    title: '盲文对照',
    note: '盲文（六点制）以两列三行表示字符。下面用点阵示意“渡海”二字的点位读法（示意，非正式盲文转写），帮助非视障观众建立“文字也可以被触摸”的印象。',
    chars: [
      { zh: '渡', cells: [[1, 2, 3, 4], [2, 4]] },
      { zh: '海', cells: [[1, 3, 4, 6], [2]] }
    ]
  }
};

/* ========== 六、翻译工作台：三方协作（人机协作示范） ========== */
const workbench = [
  {
    zh: '海那边，会有什么？',
    literal: 'Beyond the sea, what will there be?',
    human: 'What lies beyond the sea?',
    why: '机器直译是“会有什么”，人译改用 lies（躺在那儿），比 will be 更安静，也更像一个人自言自语。',
    whyEn: 'A machine reads it as a question of inventory; the human version keeps the hush.'
  },
  {
    zh: '去相见，才会知道。',
    literal: 'Only when we meet, then we will know.',
    human: "We'll only know when we meet.",
    why: '人译把“才知道”提前，句子更短，作为对白更像一句话，而不是一段解释。'
  },
  {
    zh: '跨过海的不只是货物。',
    literal: 'Not only goods cross the sea.',
    human: 'More than goods crossed the sea.',
    why: '机器给出“不只是”，人译改成“多于”，让下一句“一句新学的话”自然接上。'
  },
  {
    zh: '以海为桥，让文明在交流中相知，在互鉴中共生。',
    literal: 'Use the sea as a bridge, let civilizations know each other in communication and coexist in mutual learning.',
    human: 'Let the sea be a bridge where civilizations learn from one another and flourish together.',
    why: '把三个并列动词收成 learn / flourish 两个，节奏更适合收尾的口播。'
  }
];

/* ========== 七、五种角色：把“渡海”变成可以参加的事 ========== */
const roles = [
  { id: 'hist', name: '史料与考据', duty: '为每个港口、每件器物标出处；把“可以虚构”和“不能虚构”分开写清楚。', output: '一页索引 + 每条 1 句出处' },
  { id: 'trans', name: '译写与审校', duty: '把台词译为中文/英文，并请法语、俄语方向的同学互校，标注“可朗读度”。', output: '四语台本 + 译注 4 条' },
  { id: 'host', name: '访谈与讲述', duty: '采访身边的海外生、留学生或船员家庭，一句原话就是故事的入口。', output: '3 段 60 秒采访音频' },
  { id: 'a11y', name: '字幕与无障碍', duty: '按《字幕规范》做双语字幕、口述影像提示与转写稿。', output: '字幕文件 + 转写稿' },
  { id: 'tech', name: '网页与交互', duty: '把以上做成可点选、可搜索、可分享的网页，而不是一个 PDF。', output: '本站点 + 二维码卡' }
];

/* ========== 八、社会价值：让“以语为桥”落在具体的地方 ========== */
const social = [
  { k: '为什么是海', v: '把“海洋强国”讲成“人与人的来往”，比“我们很强”更容易被听懂。片中十个场次里，没有一个人说“我们很厉害”。' },
  { k: '为什么是八仙', v: '八仙的故事本质上是“各有本领，也能同行”。这与“多语种、多文化同行”是同一个意思，而不是一个比喻。' },
  { k: '为什么是古港', v: '海上丝绸之路的货物是瓷与香料，真正被运过去的是语言和记忆。' },
  { k: '为什么是展厅', v: '博物馆常被当作展示，本片把展厅改成“分享现场”：外国青年先从看，到问，到拿出自己的照片。' },
  { k: '为什么是网页', v: '视频只能被看一次，网页可以被检索、被对照、被引用、被带进课堂。' },
  { k: '可落地场景', v: '高校国际学生的入学导览、地方博物馆的双语讲解、中学生“读懂一支短片”的课堂作业。' }
];

/* ========== 九、方法论：创新性转化五步 ========== */
const method = [
  { n: '01', t: '从叙事到可读：给影片配一份“读懂它”的地图', d: '把视频的每个镜头对应到场景 ID、台词、说话人和时间码，让观众可以“读”一支短片。' },
  { n: '02', t: '从画面到多声部：让四种语言各自发言', d: '不追求四种语言“说同一句话”，而是让每种语言带入它自己的语域与人物。' },
  { n: '03', t: '从欣赏到参与：把观众变成接力的人', d: '"海那边有什么"不是片中的问题，而是邀请观众续写的问题。' },
  { n: '04', t: '从视频到无障碍：让节奏为读得慢的人停一拍', d: '字幕字数、停留时长、双语分行、原文标注，都是内容的一部分，不是技术细节。' },
  { n: '05', t: '从作品到方法：给同赛道的人一份可复用的工作稿', d: '把“史料—译写—采访—字幕—网页”做成协同流程，队伍可以按角色的五种分工直接复用。' }
];

/* ========== 十、情绪曲线：十个场次的一次呼吸（创作意图，非实测） ========== */
const storyCurve = {
  title: '情绪曲线：三分钟里的十次呼吸',
  note: '纵轴是情绪强度（1–10），横轴是片长（0–180 秒）。这条线是导演意图的记录，不是数据测量；它要说明的是“什么时候该停、什么时候该快”。',
  beats: [
    { id: 'S01', t: 0,   v: 6.0, mood: '好奇', text: '先给一个问句，不给答案。', q: '海那边，会有什么？' },
    { id: 'S02', t: 10,  v: 5.0, mood: '落回日常', text: '修网、结绳，先把人放回生活里。', q: '不坐船，咱各凭本事，过海去！' },
    { id: 'S03', t: 27,  v: 8.0, mood: '开阔', text: '八件法宝依次入海，全片最轻快的一段。', q: '各有本领，也能并肩同行。' },
    { id: 'S04', t: 47,  v: 3.5, mood: '收住', text: '暮色礁石，故意把节奏慢下来。', q: '去相见，才会知道。' },
    { id: 'S05', t: 62,  v: 5.5, mood: '转入历史', text: '帆与港口，把想象落到人间。', q: '传说之外，人们早已扬帆远行。' },
    { id: 'S06', t: 76,  v: 6.5, mood: '温暖', text: '学说一个词，第一次露出笑意。', q: '瓷器。' },
    { id: 'S07', t: 98,  v: 5.0, mood: '过渡', text: '货物收箱，帆影由近到远。', q: '跨过海的不只是货物。' },
    { id: 'S08', t: 116, v: 6.0, mood: '今天', text: '古船船首对现代货轮，时间被折叠。', q: '今天，远洋航线仍在延伸。' },
    { id: 'S09', t: 130, v: 8.5, mood: '相遇', text: '展厅里的问、笑、分享，全片情绪最高点。', q: '八位仙人，八种渡海方式？' },
    { id: 'S10', t: 153, v: 6.5, mood: '克制地收', text: '不喊口号，用一句邀请和一片海结束。', q: '渡海，是走向远方，也是走近彼此。' }
  ],
  turns: [
    { at: 3.5, label: '最低点：暮色礁石', why: '全片唯一一处让观众“等一等”的地方。' },
    { at: 8.5, label: '最高点：展厅相遇', why: '不是特效最高，是人物之间的距离最近。' }
  ]
};

/* ===== 交互逻辑：assets/js/app.js ===== */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const pad = (n) => String(Math.floor(n)).padStart(2, '0');
const clock = (s) => `${pad(s / 60)}:${pad(s % 60)}`;
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const toast = (() => {
  const el = $('#toast');
  let t = 0;
  return (msg) => {
    el.textContent = msg;
    el.classList.add('on');
    clearTimeout(t);
    t = setTimeout(() => el.classList.remove('on'), 2200);
  };
})();

/* ---------- 场次补充信息：每场"替观众问什么"、前后连接 ---------- */
const sceneMeta = {
  S01: { ask: '它先问：海那边有什么？', link: '下一场把这个问句交给一群人。' },
  S02: { ask: '它替观众问：去远方，非要坐同一条船吗？', link: '上一场是一句问话；下一场用行动回答。' },
  S03: { ask: '它替观众问：不一样的人，能一起走吗？', link: '上一场提出“各凭本事”；下一场让默契停下来回头。' },
  S04: { ask: '它替观众问：想象之外，还有谁在海的另一边？', link: '上一场是同行；这一场从神话望向历史的帆。' },
  S05: { ask: '它替观众问：真实的远航，运走了什么？', link: '上一场是帆与暮色；这一场是港口与货物。' },
  S06: { ask: '它替观众问：语言不一样，怎么开始？', link: '上一场运的是货；这一场运的是词。' },
  S07: { ask: '它替观众问：相遇之后，留下了什么？', link: '上一场学会了一个词；这一场带着它出海。' },
  S08: { ask: '它替观众问：今天还有这样的事吗？', link: '上一场的帆化作今天的船首。' },
  S09: { ask: '它替观众问：我能不能也讲讲自己的海？', link: '上一场是新的港口；这一场是新的相遇。' },
  S10: { ask: '它回答了开头那个问题。', link: '全片的问句，在最后一分钟被收回。' }
};

const timelineExtra = {
  0: { look: '浪花—海岸—片名', cue: '先闻海声，再见辽阔。' },
  10: { look: '修网的手—岸边八人', cue: '生活细节先于神话奇观。' },
  22: { look: '葫芦落水、长大、浮稳', cue: '“不坐船，咱各凭本事，过海去！”' },
  27: { look: '蒲扇、花篮、玉板、白驴、莲花、剑、云', cue: '不同的本领，先后落在同一片海上。' },
  47: { look: '暮色礁石，远处一抹帆', cue: '“去相见，才会知道。”' },
  62: { look: '木箱沿码头转运', cue: '“传说之外，人们早已扬帆远行。”' },
  76: { look: '桌上瓷碗与香料盒', cue: '“瓷器。”——第一次，也说了一次不是母语的字。' },
  98: { look: '绢布落桌、碗与盒子并排', cue: '“跨过海的不只是货物。”' },
  116: { look: '古船船首—现代货轮船首', cue: '相同方向、相近占比的直接匹配。' },
  130: { look: '展厅里摊开的八仙册页', cue: '“八位仙人，八种渡海方式？”' },
  153: { look: '手机里的家乡海湾—日落航迹', cue: '“渡海，是走向远方，也是走近彼此。”' }
};

/* ---------- 界面语言 / 无障碍模式 ---------- */
$$('.lang-switch button').forEach((b) => b.addEventListener('click', () => {
  $$('.lang-switch button').forEach((x) => x.classList.remove('on'));
  b.classList.add('on');
  document.documentElement.setAttribute('data-ui', b.dataset.ui);
}));
const themeBtn = $('#themeToggle');
themeBtn.addEventListener('click', () => {
  const on = document.body.getAttribute('data-theme') === 'a11y';
  document.body.setAttribute('data-theme', on ? 'sea' : 'a11y');
  themeBtn.setAttribute('aria-pressed', String(!on));
  themeBtn.textContent = on ? '◐ 无障碍' : '◑ 退出无障碍';
});

/* ---------- 导航高亮 ---------- */
const navLinks = $$('.nav a');
const navObs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      navLinks.forEach((a) => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
navLinks.map((a) => $(a.getAttribute('href'))).filter(Boolean).forEach((s) => navObs.observe(s));

/* ============================================================
   01 · 方法论
   ============================================================ */
$('#methodList').innerHTML = method.map((m) => `
  <li data-n="${esc(m.n)}"><div class="mt">${esc(m.t)}</div><div class="md">${esc(m.d)}</div></li>`).join('');

/* ============================================================
   02 · 成片 + 陪看
   ============================================================ */
const player = $('#player');
const cuesEl = $('#cues');
const cueItems = scenes.map((s) => {
  const li = document.createElement('li');
  li.innerHTML = `<span class="t">${clock(s.t)}</span><span><b>${esc(s.zh)}</b><br><span class="scene-en" style="margin:0">${esc(s.en)}</span></span>`;
  li.addEventListener('click', () => {
    player.currentTime = Math.max(0, s.t - 0.3);
    player.play().catch(() => {});
    player.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  cuesEl.appendChild(li);
  return li;
});
let rafId = 0;
const tick = () => {
  if (!player.paused) {
    const abs = player.currentTime;
    const active = scenes.findIndex((s, i) => { const n = scenes[i + 1]; return abs >= s.t && (!n || abs < n.t); });
    cueItems.forEach((li, i) => li.classList.toggle('on', i === active));
    rafId = requestAnimationFrame(tick);
  }
};
player.addEventListener('play', () => { cancelAnimationFrame(rafId); rafId = requestAnimationFrame(tick); });
player.addEventListener('pause', () => cancelAnimationFrame(rafId));

/* ============================================================
   03 · 海那边：片中五答 + 观众接力墙
   ============================================================ */
$('#horizonFlow').innerHTML = horizonQuestion.askedBy.map((a) => `
  <li><span class="at">${esc(a.at)}</span><div class="who">${esc(a.who)}</div>
  <div class="say" lang="en">“${esc(a.en)}”</div><div class="nt">${esc(a.note)}</div></li>`).join('');

/* ---------- 留言墙：共享模式（ntfy.sh）＋ 本机回退 ---------- */
const WALL = (() => {
  const cfg = { endpoint: 'https://ntfy.sh', topic: 'duhai-wall-2026-7k3m9q', ttlHours: 12 };
  // 可用 ?wall=主题名 换一面墙（不同班级/活动互不干扰）；?wallApi= 指向自建后端
  try {
    const qs = new URLSearchParams(location.search);
    const t = (qs.get('wall') || '').replace(/[^A-Za-z0-9_-]/g, '').slice(0, 48);
    if (t) cfg.topic = t;
    const a = (qs.get('wallApi') || '').replace(/\/+$/, '');
    if (a) cfg.endpoint = a;
  } catch { /* 老浏览器忽略 */ }

  const LS_LOCAL = 'duhai.wall.v2.local';
  const LS_HIDE = 'duhai.wall.v2.hide';
  const lsRead = (k, def) => { try { return JSON.parse(localStorage.getItem(k) || def); } catch { return JSON.parse(def); } };
  const lsWrite = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* 隐私模式 */ } };

  const el = {
    form: $('#wallForm'), text: $('#wallText'), name: $('#wallName'),
    cards: $('#wallCards'), count: $('#wallCount'), mode: $('#wallMode'),
    copy: $('#wallCopy'), clear: $('#wallClear'), refresh: $('#wallRefresh')
  };
  if (!el.form) return null;

  let items = [];           // 远端 + 本机合并后的条目
  let mode = 'connecting';
  let lastPost = 0;
  let timer = 0;

  const hidden = () => new Set(lsRead(LS_HIDE, '[]'));
  const localList = () => lsRead(LS_LOCAL, '[]');

  const when = (ts) => {
    const d = new Date(ts);
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    return `${hh}:${mm}`;
  };
  const ago = (ts) => {
    const s = Math.max(0, (Date.now() - ts) / 1000);
    if (s < 90) return '刚刚';
    if (s < 3600) return `${Math.round(s / 60)} 分钟前`;
    if (s < 86400) return `${Math.round(s / 3600)} 小时前`;
    return `${Math.round(s / 86400)} 天前`;
  };

  const parse = (raw) => {
    try {
      const o = JSON.parse(raw);
      if (!o || typeof o.t !== 'string' || !o.t.trim()) return null;
      return {
        id: String(o.id || '').slice(0, 40) || ('x' + Math.random().toString(36).slice(2)),
        text: String(o.t).slice(0, 90),
        name: String(o.n || '').slice(0, 14),
        ts: Number(o.ts) || Date.now(),
        mine: false
      };
    } catch { return null; }
  };

  const setMode = (m) => {
    mode = m;
    if (!el.mode) return;
    const map = {
      shared: ['共享中', 'badge-ok'],
      local: ['离线 · 仅本机', 'badge-off'],
      connecting: ['连接中…', 'badge-wait'],
      error: ['共享暂不可用 · 仅本机', 'badge-off']
    };
    const [txt, cls] = map[m] || map.local;
    el.mode.textContent = txt;
    el.mode.className = 'wall-mode ' + cls;
  };

  const render = () => {
    const hide = hidden();
    const list = items
      .filter((x) => !hide.has(x.id))
      .sort((a, b) => b.ts - a.ts)
      .slice(0, 60);
    const total = list.length;
    if (el.count) {
      el.count.textContent = total ? `${total} 条回答 · 共 ${items.length} 条记录` : '还没有回答';
    }
    if (!total) {
      el.cards.innerHTML = '<p class="tiny" style="grid-column:1/-1">按"海那边，会有什么？"写一句，你的回答会挂在这里——所有人打开这个页面都能看见。</p>';
      return;
    }
    el.cards.innerHTML = list.map((w) => `
      <div class="wall-card${w.mine ? ' mine' : ''}">
        <div class="txt">${esc(w.text)}</div>
        <div class="sig">
          <span>${esc(w.name || '匿名')} · ${esc(when(w.ts))} · ${esc(ago(w.ts))}</span>
          ${w.mine ? `<button type="button" class="del" data-id="${esc(w.id)}" aria-label="从我的墙上移除">移除</button>` : ''}
        </div>
      </div>`).join('');
    $$('#wallCards .del').forEach((b) => b.addEventListener('click', () => {
      const h = hidden();
      h.add(b.dataset.id);
      lsWrite(LS_HIDE, [...h].slice(-200));
      render();
      toast('已从你的界面移除（不影响其他人）');
    }));
  };

  const oldest = () => items.reduce((m, x) => (m && m.ts < x.ts ? m : x), null);
  const tideLine = () => {
    const o = oldest();
    if (!o) return '';
    const left = Math.max(0, o.ts + cfg.ttlHours * 3600e3 - Date.now());
    const h = Math.floor(left / 3600e3);
    const m = Math.round((left % 3600e3) / 60e3);
    return `潮水每 ${cfg.ttlHours} 小时退一次：最早的一条将在 ${h} 小时 ${m} 分后随潮离开。`;
  };

  const merge = (remote) => {
    const map = new Map();
    [...remote, ...localList()].forEach((x) => { if (x && x.id) map.set(x.id, x); });
    items = [...map.values()];
  };

  const refresh = async (silent) => {
    if (mode === 'connecting' && !silent) setMode('connecting');
    try {
      const url = `${cfg.endpoint}/${cfg.topic}/json?poll=1&since=all`;
      const ctl = new AbortController();
      const t = setTimeout(() => ctl.abort(), 8000);
      const r = await fetch(url, { signal: ctl.signal, headers: { Accept: 'application/x-ndjson' }, cache: 'no-store' });
      clearTimeout(t);
      if (!r.ok) throw new Error('HTTP ' + r.status);
      const text = await r.text();
      const remote = [];
      text.trim().split('\n').filter(Boolean).forEach((line) => {
        try {
          const ev = JSON.parse(line);
          if (ev.event !== 'message' || !ev.message) return;
          const p = parse(ev.message);
          if (p) remote.push(p);
        } catch { /* 忽略坏行 */ }
      });
      merge(remote);
      setMode('shared');
    } catch (err) {
      merge([]);
      setMode(localList().length ? 'local' : 'error');
    }
    render();
    const tip = $('#wallTide');
    if (tip) tip.textContent = mode === 'shared' ? tideLine() : '当前离线：你的留言只保存在这台设备上。';
  };

  const post = async (text, name) => {
    const now = Date.now();
    if (now - lastPost < 8000) { toast('慢一点，等浪过去再写下一句'); return; }
    lastPost = now;
    const payload = { id: 'w' + now.toString(36) + Math.random().toString(36).slice(2, 6), t: text.slice(0, 90), n: name.slice(0, 14), ts: now };
    const mine = { ...payload, text: payload.t, mine: true };

    if (mode === 'shared' || mode === 'connecting') {
      try {
        const r = await fetch(`${cfg.endpoint}/${cfg.topic}`, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain; charset=utf-8' },
          body: JSON.stringify(payload)
        });
        if (!r.ok) throw new Error('HTTP ' + r.status);
        merge([mine]);
        setMode('shared');
        render();
        toast('已挂上墙，所有人都能看见了');
        return;
      } catch {
        setMode('error');
      }
    }
    // 离线回退：存本机
    const l = localList();
    l.unshift(mine);
    lsWrite(LS_LOCAL, l.slice(0, 40));
    merge([]);
    render();
    toast('当前离线，已存在本机（联网后刷新仍会显示）');
  };

  el.form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const text = el.text.value.trim();
    if (!text) return;
    el.text.value = '';
    post(text, el.name.value.trim());
  });

  if (el.copy) el.copy.addEventListener('click', async () => {
    const h = hidden();
    const list = items.filter((x) => !h.has(x.id)).sort((a, b) => b.ts - a.ts);
    if (!list.length) return toast('墙上还没有回答');
    const txt = ['海那边，会有什么？', `（${new Date().toLocaleString('zh-CN', { hour12: false })}）`, '',
      ...list.map((w, i) => `${i + 1}. ${w.text}${w.name ? ' —— ' + w.name : ''}`)].join('\n');
    try { await navigator.clipboard.writeText(txt); toast('已复制全部回答'); }
    catch { toast('复制失败：请手动选择文本'); }
  });

  if (el.clear) el.clear.addEventListener('click', () => {
    if (!confirm('只清空你本机保存的留言（共享墙上的内容不会受影响）？')) return;
    lsWrite(LS_LOCAL, '[]');
    merge([]);
    render();
    toast('已清空本机记录');
  });

  if (el.refresh) el.refresh.addEventListener('click', () => { refresh(true); toast('正在刷新'); });

  // 首次加载 + 定时刷新 + 回到页面时刷新
  setMode('connecting');
  refresh();
  timer = setInterval(() => { if (!document.hidden) refresh(true); }, 20000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) refresh(true); });
  window.addEventListener('beforeunload', () => clearInterval(timer));
  return { refresh, render };
})();

/* ============================================================
   04 · 故事卡（悬停播放 3 秒循环，点开看连接）
   ============================================================ */
const sceneGrid = $('#scenes');
scenes.forEach((s) => {
  const meta = sceneMeta[s.id] || {};
  const el = document.createElement('article');
  el.className = 'scene';
  const line = (subs.find((x) => x.who && x.start >= s.t - 0.2 && x.start < s.t + s.dur) || {}).zh;
  el.innerHTML = `
    <div class="scene-media">
      <img src="assets/img/${s.img}" alt="${esc(s.zh)} 剧照" loading="lazy">
      <video src="assets/media/cards/${s.id.toLowerCase()}.mp4" muted loop playsinline preload="none" aria-hidden="true"></video>
    </div>
    <div class="scene-body">
      <div class="scene-id">${s.id}</div>
      <div class="scene-title">${esc(s.zh)}</div>
      <div class="scene-en">${esc(s.en)}</div>
      <p class="scene-sum" style="margin:0">${esc(s.summary)}</p>
      <div class="scene-ask">${esc(meta.ask || '')}</div>
      <div class="scene-foot"><span class="t">${clock(s.t)} – ${clock(s.t + s.dur)}</span>
        <span class="tiny">点击展开 ↧</span></div>
    </div>
    <div class="scene-detail">
      <div class="row"><b>前后</b><span>${esc(meta.link || '')}</span></div>
      <div class="row"><b>台词</b><span class="q">${esc(line || '（本场以画面与旁白为主）')}</span></div>
      <div class="row"><b>片长</b><span>${s.dur} 秒 · 第 ${scenes.indexOf(s) + 1} / ${scenes.length} 场</span></div>
      <div class="row"><b>去看</b><span><button type="button" class="btn" style="padding:4px 10px;font-size:12px" data-jump="${s.t}">定位时间轴</button></span></div>
    </div>`;
  const video = el.querySelector('video');
  el.addEventListener('mouseenter', () => { video.play().catch(() => {}); });
  el.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
  el.addEventListener('click', (ev) => {
    if (ev.target.closest('[data-jump]')) {
      $('#tlRange').value = s.t;
      $('#tlRange').dispatchEvent(new Event('input'));
      $('#timeline').scrollIntoView({ behavior: 'smooth' });
      return;
    }
    el.classList.toggle('open');
  });
  sceneGrid.appendChild(el);
});

/* ============================================================
   05 · 时间轴
   ============================================================ */
const tlRange = $('#tlRange');
const tlMarks = $('#tlMarks');
const tlDetail = $('#tlDetail');
timeline.forEach((m) => {
  const [mm, ss] = m.t.split(':').map(Number);
  const sec = mm * 60 + ss;
  const li = document.createElement('li');
  li.style.left = (sec / 180) * 100 + '%';
  li.textContent = m.label;
  li.title = `${m.t} ${m.text}`;
  li.addEventListener('click', () => { tlRange.value = sec; tlRange.dispatchEvent(new Event('input')); });
  tlMarks.appendChild(li);
});
const renderTl = (sec) => {
  const idx = scenes.findIndex((s, i) => { const n = scenes[i + 1]; return sec >= s.t && (!n || sec < n.t); });
  const scene = scenes[Math.max(0, idx)];
  const extra = timelineExtra[scene.t] || {};
  $('#tlLabel').textContent = `${clock(sec)} · ${scene.zh}`;
  tlDetail.innerHTML = `
    <figure style="margin:0"><img src="assets/img/${scene.img}" alt="${esc(scene.zh)} 剧照"></figure>
    <div>
      <div class="tt">${esc(scene.zh)}</div>
      <div class="te">${esc(scene.en)} · ${scene.id} · ${clock(scene.t)}–${clock(scene.t + scene.dur)}</div>
      <div class="td">${esc(scene.summary)}</div>
      ${extra.look ? `<div class="td"><b style="color:var(--seafoam);font-weight:500">画面：</b>${esc(extra.look)}</div>` : ''}
      ${scene.quote ? `<div class="dl">“${esc(scene.quote)}”</div>` : ''}
      ${extra.cue ? `<div class="td" style="margin-top:10px;color:var(--seafoam)">${esc(extra.cue)}</div>` : ''}
    </div>`;
};
tlRange.addEventListener('input', () => renderTl(Number(tlRange.value)));
renderTl(0);

/* ---------- 情绪曲线（SVG，可点） ---------- */
(() => {
  const host = $('#curve');
  if (!host) return;
  const noteEl = $('#curveNote');
  if (noteEl) noteEl.textContent = storyCurve.note;
  const W = 1000, H = 300;
  const PAD = { l: 46, r: 24, t: 28, b: 44 };
  const X = (t) => PAD.l + (t / 180) * (W - PAD.l - PAD.r);
  const Y = (v) => PAD.t + (1 - (v - 1) / 9) * (H - PAD.t - PAD.b);
  const pts = storyCurve.beats.map((b) => ({ ...b, x: X(b.t), y: Y(b.v) }));

  const smooth = (p) => {
    let d = `M ${p[0].x.toFixed(1)} ${p[0].y.toFixed(1)}`;
    for (let i = 0; i < p.length - 1; i++) {
      const p0 = p[i - 1] || p[i], p1 = p[i], p2 = p[i + 1], p3 = p[i + 2] || p2;
      const c1x = p1.x + (p2.x - p0.x) / 6, c1y = p1.y + (p2.y - p0.y) / 6;
      const c2x = p2.x - (p3.x - p1.x) / 6, c2y = p2.y - (p3.y - p1.y) / 6;
      d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
    }
    return d;
  };
  const line = smooth(pts);
  const area = `${line} L ${pts[pts.length - 1].x.toFixed(1)} ${Y(1)} L ${pts[0].x.toFixed(1)} ${Y(1)} Z`;

  const gridLines = [2, 4, 6, 8].map((v) => `<line class="grid" x1="${PAD.l}" y1="${Y(v)}" x2="${W - PAD.r}" y2="${Y(v)}"/>`).join('');
  const yLabels = [2, 4, 6, 8, 10].map((v) => `<text class="lbl" x="${PAD.l - 10}" y="${Y(v) + 3}" text-anchor="end">${v}</text>`).join('');
  const xLabels = [0, 30, 60, 90, 120, 150, 180].map((t) => `<text class="lbl" x="${X(t)}" y="${H - 14}" text-anchor="middle">${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}</text>`).join('');
  const dots = pts.map((p, i) => `
    <g class="pt" data-i="${i}" tabindex="0" role="button" aria-label="${esc(p.id)} ${esc(p.mood)}">
      <circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="6"></circle>
      <text x="${p.x.toFixed(1)}" y="${(p.y - 13).toFixed(1)}" text-anchor="middle">${esc(p.mood)}</text>
    </g>`).join('');

  host.innerHTML = `
    <svg class="curve-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="十个场次的情绪曲线">
      <defs>
        <linearGradient id="curveStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#7fd1c0"/><stop offset="55%" stop-color="#f0c46a"/><stop offset="100%" stop-color="#f08a6a"/>
        </linearGradient>
        <linearGradient id="curveFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f0c46a" stop-opacity=".35"/><stop offset="100%" stop-color="#7fd1c0" stop-opacity=".02"/>
        </linearGradient>
      </defs>
      ${gridLines}${yLabels}${xLabels}
      <line class="axis" x1="${PAD.l}" y1="${Y(1)}" x2="${W - PAD.r}" y2="${Y(1)}"/>
      <path class="area" d="${area}"/>
      <path class="line" d="${line}"/>
      ${dots}
    </svg>`;

  const tip = $('#curveTip');
  const show = (i) => {
    const p = pts[i];
    const sc = scenes.find((s) => s.id === p.id) || {};
    host.querySelectorAll('.pt').forEach((g) => g.classList.remove('on'));
    const g = host.querySelector(`.pt[data-i="${i}"]`);
    if (g) g.classList.add('on');
    if (tip) {
      tip.innerHTML = `<div class="ct">${esc(p.id)} · ${esc(sc.zh || '')} · 情绪 ${p.v}｜${esc(p.mood)}</div>
        <div>${esc(p.text)}</div><div class="cq">“${esc(p.q)}”</div>`;
    }
  };
  host.querySelectorAll('.pt').forEach((g) => {
    const i = Number(g.dataset.i);
    g.addEventListener('mouseenter', () => show(i));
    g.addEventListener('focus', () => show(i));
    g.addEventListener('click', () => show(i));
    g.addEventListener('keydown', (ev) => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); show(i); } });
  });
  show(0);
})();

/* ============================================================
   06 · 八仙（加"现在"一层）
   ============================================================ */
const nowMap = {
  tieguaili: '葫芦里装的药，在今天可以由一个“社区急救包”接住。',
  hanzhongli: '蒲扇带来的风，是今天港口候船厅里那台风扇。',
  zhangguolao: '倒骑的方向感，是地图上“我怎么来、怎么回去”。',
  lanxiehe: '花篮是走一路带一路的伴手礼：明信片、邮票、纪念品。',
  lvdonbin: '宝剑是“先问一句”：好奇心在今天的样子，是一个问题。',
  hexiangu: '莲花是“不急着上岸”：先看完、听清楚，再回答。',
  hanxiangzi: '玉笛是背景音乐：旋律能把“听不懂”变成“还想听”。',
  caoguoj: '玉板是稳定的节奏：保证一次交流有开头、有收尾。'
};
const imGrid = $('#immortals');
const imDetail = $('#imDetail');
const renderIm = (p) => {
  imDetail.innerHTML = `
    <h3>${esc(p.name)} <span class="scene-en" style="margin-left:8px">${esc(p.en)}</span></h3>
    <div class="it">法宝：${esc(p.item)} · ${esc(p.itemEn)}</div>
    <div class="fields">
      <div><b>传说背景</b>${esc(p.from)}</div>
      <div><b>在《渡海》里</b>${esc(p.inFilm)}</div>
      <div><b>这件法宝</b>${esc(p.gifts)}</div>
      <div class="now"><span class="now-tag">本片创意</span>${esc(nowMap[p.id] || '')}</div>
    </div>
    <p class="tiny">说明：八仙传说版本较多，以上造型与法宝为《渡海》的艺术化设定，不作为民间传说的标准定本。</p>`;
};
immortals.forEach((p, i) => {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'im' + (i === 0 ? ' on' : '');
  b.innerHTML = `<span class="dot" style="background:${p.hue}"></span><div class="nm">${esc(p.name)}</div><div class="en">${esc(p.en)}</div><div class="it">${esc(p.item)}</div>`;
  b.addEventListener('click', () => { $$('.im').forEach((x) => x.classList.remove('on')); b.classList.add('on'); renderIm(p); });
  imGrid.appendChild(b);
});
renderIm(immortals[0]);

/* ============================================================
   07 · 多声部（带逐句语音与波形）
   ============================================================ */
const voiceFiles = {
  '00:22': 'assets/media/voices/s02_07.m4a',
  '02:16': 'assets/media/voices/s09_23.m4a',
  '02:31': 'assets/media/voices/s09_25.m4a',
  '02:38': 'assets/media/voices/s10_26.m4a'
};
const voiceWave = {
  '00:22': 'assets/media/rails/s02_07.png',
  '02:16': 'assets/media/rails/s09_23.png',
  '02:31': 'assets/media/rails/s09_25.png',
  '02:38': 'assets/media/rails/s10_26.png'
};
$('#voiceGrid').innerHTML = voices.map((v) => `
  <article class="vs">
    <div class="vs-head"><span class="vs-lang">${esc(v.lang)}</span><span class="vs-at">${esc(v.t)}</span></div>
    <div class="vs-say">${esc(v.say)}</div>
    <div class="vs-en" lang="en">${esc(v.en)}</div>
    <div class="vs-frame">${esc(v.frame)}</div>
    <div class="vs-value">${esc(v.value)}</div>
    ${voiceFiles[v.t] ? `<img class="vs-wave" src="${voiceWave[v.t]}" alt="语音波形">
    <audio controls preload="none" src="${voiceFiles[v.t]}" aria-label="${esc(v.name)} 原声"></audio>` : '<p class="tiny" style="padding:0 16px 14px">（此句为情景句，未单独截取原声）</p>'}
  </article>`).join('');

$('#regTitle').textContent = registerNote.title;
$('#regNote').textContent = registerNote.note;
$('#regTable').innerHTML = `<thead><tr><th>语言</th><th>台词</th><th>语域</th></tr></thead><tbody>${
  registerNote.rows.map((r) => `<tr><td>${esc(r.lang)}</td><td>${esc(r.form)}</td><td>${esc(r.register)}</td></tr>`).join('')}</tbody>`;

$('#langCards').innerHTML = langs.map((l) => `
  <article class="lc"><div class="flag">${l.flag}</div><div class="nm">${esc(l.name)}</div><div class="ln">${esc(l.ln)}</div>
  <div class="say">${esc(l.say)}<span class="orig">${esc(l.orig)}</span></div>
  <p class="use">${esc(l.use)}</p><div class="who">${esc(l.who)}</div></article>`).join('');

/* ============================================================
   08 · 无障碍：字幕十秒 + 盲文点阵
   ============================================================ */
const sculpt = captionSculpture;
$('#brailleNote').textContent = sculpt.braille.note;
$('#braille').innerHTML = sculpt.braille.chars.map((c) => `
  <div class="ch">${c.cells.map((onCells) => `<div class="cells">${
    [1, 4, 2, 5, 3, 6].map((dot) => `<div class="cell"><i class="${onCells.includes(dot) ? 'on' : ''}"></i></div>`).join('')
  }</div>`).join('')}<span class="lbl">${esc(c.zh)}</span></div>`).join('');
$('#captionStandards').innerHTML = sculpt.standards.map((s) => `<li><b>${esc(s.k)}</b>${esc(s.v)}</li>`).join('');

const sculptEl = $('#sculpt');
sculptEl.innerHTML = `
  <img class="bg" src="assets/img/frame_13.jpg" alt="片中展厅画面">
  <div class="step" id="scStep">0s</div>
  <div class="cap"><div class="zh" id="scZh"></div><div class="en" id="scEn" lang="en"></div></div>
  <div class="step-note" id="scNote"></div>`;
const scStep = $('#scStep'); const scZh = $('#scZh'); const scEn = $('#scEn'); const scNote = $('#scNote');
const scRange = $('#sculptRange');
scRange.max = String(sculpt.steps.length - 1);
const renderSculpt = (i) => {
  const st = sculpt.steps[i];
  scStep.textContent = st.t;
  scNote.textContent = st.note;
  const zhText = i === 0 || i === 6 ? '' : '在我的家乡，大海也诉说着故事。';
  const enText = i >= 3 && i !== 6 ? (i === 3 ? 'Chez moi aussi, la mer raconte des histoires.' : 'Back home, the sea tells stories too.') : '';
  scZh.textContent = zhText;
  scEn.textContent = enText;
  scZh.classList.toggle('on', !!zhText);
  scEn.classList.toggle('on', !!enText);
  scRange.value = String(i);
};
$('#sculptPrev').addEventListener('click', (e) => { e.stopPropagation(); renderSculpt(Math.max(0, Number(scRange.value) - 1)); });
$('#sculptNext').addEventListener('click', (e) => { e.stopPropagation(); renderSculpt(Math.min(sculpt.steps.length - 1, Number(scRange.value) + 1)); });
scRange.addEventListener('input', () => renderSculpt(Number(scRange.value)));
let scTimer = 0;
$('#sculptPlay').addEventListener('click', () => {
  clearInterval(scTimer);
  let i = 0;
  renderSculpt(0);
  scTimer = setInterval(() => {
    i++;
    if (i >= sculpt.steps.length) { clearInterval(scTimer); return; }
    renderSculpt(i);
  }, 1400);
});
renderSculpt(0);

/* ============================================================
   09 · 声音地图：逐句听
   ============================================================ */
const soundTurns = [
  { t: '00:02', zh: '海那边，会有什么？', en: 'What lies beyond the sea?', who: '吕洞宾（画外）', file: 's01_01' },
  { t: '00:22', zh: '不坐船，咱各凭本事，过海去！', en: "No boats. Let's cross the sea, each in our own way!", who: '铁拐李', file: 's02_07' },
  { t: '00:25', zh: '好！看谁先到！', en: "All right! Let's see who gets there first!", who: '汉钟离', file: 's02_08' },
  { t: '00:45', zh: '海那边，也有人这样望着我们吗？', en: 'Beyond the sea, is someone looking this way too?', who: '吕洞宾', file: 's04_11' },
  { t: '00:50', zh: '去相见，才会知道。', en: "We'll only know when we meet.", who: '何仙姑', file: 's04_12' },
  { t: '01:25', zh: '瓷器', en: 'Porcelain.', who: '中国客商', file: 's06_18' },
  { t: '01:39', zh: '呃……瓷器', en: 'Porcelain.', who: '海外客商', file: 's06_19' },
  { t: '02:16', zh: '八位仙人，八种渡海方式？', en: 'Eight immortals, eight ways across?', who: '英语青年', file: 's09_23' },
  { t: '02:31', zh: '在我的家乡，大海也诉说着故事。', en: 'Back home, the sea tells stories too.', who: '法语青年', file: 's09_25' },
  { t: '02:42', zh: '大海让不同的故事有机会彼此听见。', en: 'The sea brings different stories within reach of one another.', who: '旁白', file: 's10_26' }
];
const soundMap = $('#soundMap');
soundMap.innerHTML = '<img class="sm-wave" style="width:100%;height:110px;object-fit:fill;opacity:.75;margin-bottom:4px" src="assets/media/rails/all.png" alt="全片 3 分钟声音波形">'
  + soundTurns.map((s, i) => `
  <div class="sm-row" data-i="${i}">
    <div class="sm-t">${esc(s.t)}</div>
    <div><div class="sm-zh">${esc(s.zh)}</div><div class="sm-en" lang="en">${esc(s.en)}</div></div>
    <div class="sm-right">
      <img class="sm-wave" src="assets/media/rails/${s.file}.png" alt="波形">
      <button type="button" class="sm-play" data-i="${i}" aria-label="播放${esc(s.who)}这句">▶</button>
    </div>
    <div class="sm-who">${esc(s.who)}</div>
  </div>`).join('');

const audioCache = new Map();
function getAudio(i) {
  if (audioCache.has(i)) return audioCache.get(i);
  const row = $$('.sm-row')[i];
  const audio = new Audio(`assets/media/voices/${soundTurns[i].file}.m4a`);
  audio.preload = 'auto';
  const btn = row.querySelector('.sm-play');
  audio.addEventListener('play', () => {
    $$('.sm-row').forEach((r) => { r.classList.remove('playing'); const b = r.querySelector('.sm-play'); if (b) b.textContent = '▶'; });
    row.classList.add('playing');
    btn.textContent = '⏸';
  });
  audio.addEventListener('ended', () => { row.classList.remove('playing'); btn.textContent = '▶'; });
  audio.addEventListener('pause', () => { if (audio.currentTime === 0 || audio.ended) { row.classList.remove('playing'); btn.textContent = '▶'; } });
  row.appendChild(audio);
  audioCache.set(i, audio);
  return audio;
}
$$('.sm-play').forEach((btn) => btn.addEventListener('click', () => {
  const idx = Number(btn.dataset.i);
  audioCache.forEach((a) => { if (!a.paused) a.pause(); });
  const a = getAudio(idx);
  if (!a.paused) { a.pause(); a.currentTime = 0; return; }
  a.currentTime = 0;
  a.play().catch(() => toast('浏览器阻止了播放：再点一次即可'));
}));

/* ============================================================
   10 · 工坊：译写台 / 双语卡 / 港口卡 / 十二物
   ============================================================ */
const wbPick = $('#wbPick');
workbench.forEach((w, i) => { const o = document.createElement('option'); o.value = String(i); o.textContent = w.zh; wbPick.appendChild(o); });
const wbMachine = $('#wbMachine'); const wbHuman = $('#wbHuman'); const wbOut = $('#wbOut');
const showWb = () => {
  const w = workbench[Number(wbPick.value)];
  wbMachine.textContent = w.literal;
  wbHuman.textContent = w.human;
  wbOut.innerHTML = '';
};
wbPick.addEventListener('change', showWb); showWb();
const tokensOf = (s) => new Set(s.toLowerCase().replace(/[.,!?;:'"“”‘’—–-]/g, '').split(/\s+/).filter((w) => w.length > 1));
$('#wbGo').addEventListener('click', () => {
  const w = workbench[Number(wbPick.value)];
  const typed = $('#wbTyped').value.trim();
  if (!typed) { wbOut.innerHTML = '<span class="why">先写一版英文，再点“对照”。</span>'; return; }
  const a = tokensOf(typed), b = tokensOf(w.human);
  const hit = [...a].filter((t) => b.has(t)).length;
  const ratio = a.size ? hit / a.size : 0;
  let msg;
  if (ratio >= 0.7) msg = '很近：和片中版本用词重合度高，语气也接得住。';
  else if (ratio >= 0.35) msg = '方向对：意思到位的部分超过一半，注意句子是不是“说得出口”。';
  else msg = '差别较大：检查有没有漏掉关键信息，或者语气是不是太书面。';
  wbOut.innerHTML = `<div class="rate">${esc(msg)}</div><div class="why">你的写法：<i>${esc(typed)}</i></div>`;
  toast('对照完成');
});
$('#wbWhy').addEventListener('click', () => {
  const w = workbench[Number(wbPick.value)];
  wbOut.innerHTML = `<div class="why">${esc(w.why)}</div>`;
});

const cbWho = $('#cbWho');
immortals.forEach((p, i) => { const o = document.createElement('option'); o.value = String(i); o.textContent = `${p.name} · ${p.item}`; cbWho.appendChild(o); });
const cbOut = $('#cbOut');
cbOut.innerHTML = '<div class="empty-hint">选一位仙人、写一句话，生成双语卡片。</div>';
$('#cbGo').addEventListener('click', () => {
  const p = immortals[Number(cbWho.value)];
  const line = $('#cbLine').value.trim() || '各有本领，也能并肩同行。';
  const ref = labLines.find((l) => l.zh === line) || labLines.find((l) => l.zh.includes(line.slice(0, 4)));
  const en = ref ? ref.ref : 'Different gifts, one sea.';
  cbOut.innerHTML = `<div class="card-own" style="background:linear-gradient(135deg,${p.hue},#0b2530 88%)">
    <div class="tag">渡海 · ACROSS THE SEA</div>
    <div><div class="cn">${esc(line)}</div><div class="en" lang="en">${esc(en)}</div></div>
    <div class="en" style="font-size:11.5px">${esc(p.name)} · ${esc(p.item)}</div></div>`;
});

const portPick = $('#portPick');
ports.forEach((p, i) => { const o = document.createElement('option'); o.value = String(i); o.textContent = `${p.flag} ${p.name}`; portPick.appendChild(o); });
const portOut = $('#portOut');
const renderPort = () => {
  const p = ports[Number(portPick.value)];
  portOut.innerHTML = `<div class="pn">${p.flag} ${esc(p.name)} <span class="tiny">${esc(p.en)}</span></div>
    <div class="pq">“${esc(p.q)}”</div><div class="pnote">${esc(p.note)}</div>`;
};
portPick.addEventListener('change', renderPort); renderPort();

const objectGrid = $('#objectGrid');
const objectDetail = $('#objectDetail');
objects.forEach((o, i) => {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'obj' + (i === 0 ? ' on' : '');
  b.innerHTML = `<div class="n">${esc(o.name)}</div><div class="e">${esc(o.en)}</div>${o.t ? `<div class="t">${esc(o.t)}</div>` : ''}`;
  b.addEventListener('click', () => {
    $$('.obj').forEach((x) => x.classList.remove('on'));
    b.classList.add('on');
    objectDetail.innerHTML = `<div class="ln">“${esc(o.line)}”</div><div class="fr">${esc(o.from)} · ${esc(o.en)}</div>`;
  });
  objectGrid.appendChild(b);
});
objectDetail.innerHTML = `<div class="ln">“${esc(objects[0].line)}”</div><div class="fr">${esc(objects[0].from)} · ${esc(objects[0].en)}</div>`;

/* ============================================================
   11 · 社会价值 + 五种角色
   ============================================================ */
$('#valueGrid').innerHTML = social.map((s) => `<div class="vg"><div class="k">${esc(s.k)}</div><div class="v">${esc(s.v)}</div></div>`).join('');
$('#roles').innerHTML = roles.map((r) => `<div class="role"><div class="rn">${esc(r.name)}</div><div class="rd">${esc(r.duty)}</div><div class="ro">产出：${esc(r.output)}</div></div>`).join('');

/* ============================================================
   13 · 十幕读片模式（全屏，一幕一幕读完整片）
   ============================================================ */
(() => {
  const el = $('#reader');
  const openBtn = $('#openReader');
  if (!el || !openBtn) return;
  const bg = $('#readerBg'), zhEl = $('#readerZh'), enEl = $('#readerEn');
  const lineEl = $('#readerLine'), askEl = $('#readerAsk');
  const timeEl = $('#readerTime'), cntEl = $('#readerCount'), dots = $('#readerDots');
  const prevBtn = $('#readerPrev'), nextBtn = $('#readerNext');
  let idx = 0;

  const lineOf = (s) => {
    const found = subs.filter((x) => x.type !== 'silent' && x.type !== 'note' && x.start >= s.t - 0.3 && x.start < s.t + s.dur);
    if (found.length) return found.map((x) => x.zh).join('　');
    return s.quote || '';
  };

  dots.innerHTML = scenes.map((s, i) => `<button type="button" data-i="${i}" aria-label="第 ${i + 1} 幕：${esc(s.zh)}"></button>`).join('');

  const render = (i) => {
    idx = Math.max(0, Math.min(scenes.length - 1, i));
    const s = scenes[idx];
    const meta = sceneMeta[s.id] || {};
    bg.style.backgroundImage = `url("assets/img/${s.img}")`;
    timeEl.textContent = `${clock(s.t)} – ${clock(s.t + s.dur)} · ${s.id}`;
    zhEl.textContent = s.zh;
    enEl.textContent = s.en;
    const ln = lineOf(s);
    lineEl.textContent = ln ? `“${ln}”` : '';
    lineEl.style.display = ln ? '' : 'none';
    askEl.textContent = meta.ask || '';
    cntEl.textContent = `${idx + 1} / ${scenes.length}`;
    [...dots.children].forEach((b, k) => b.classList.toggle('on', k === idx));
    prevBtn.disabled = idx === 0;
    nextBtn.textContent = idx === scenes.length - 1 ? '回到第一幕 ↺' : '下一幕 ›';
  };
  const open = () => {
    el.classList.add('on');
    el.setAttribute('aria-hidden', 'false');
    document.body.classList.add('reader-open');
    render(0);
    $('#readerClose').focus();
  };
  const close = () => {
    el.classList.remove('on');
    el.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('reader-open');
    openBtn.focus();
  };
  const next = () => render(idx >= scenes.length - 1 ? 0 : idx + 1);
  const prev = () => render(idx <= 0 ? 0 : idx - 1);

  openBtn.addEventListener('click', open);
  $('#readerClose').addEventListener('click', close);
  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);
  dots.addEventListener('click', (ev) => {
    const b = ev.target.closest('button[data-i]');
    if (b) render(Number(b.dataset.i));
  });
  $('#readerWall').addEventListener('click', () => {
    close();
    $('#beyond').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => { const t = $('#wallText'); if (t) t.focus(); }, 700);
  });
  document.addEventListener('keydown', (ev) => {
    if (!el.classList.contains('on')) return;
    if (ev.key === 'Escape') { ev.preventDefault(); close(); }
    else if (ev.key === 'ArrowRight' || ev.key === 'Enter') { ev.preventDefault(); next(); }
    else if (ev.key === 'ArrowLeft') { ev.preventDefault(); prev(); }
    else if (ev.key === 'Tab') {
      const focusables = el.querySelectorAll('button:not([disabled])');
      const first = focusables[0], last = focusables[focusables.length - 1];
      if (ev.shiftKey && document.activeElement === first) { ev.preventDefault(); last.focus(); }
      else if (!ev.shiftKey && document.activeElement === last) { ev.preventDefault(); first.focus(); }
    }
  });
})();
