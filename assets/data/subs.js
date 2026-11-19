// 字幕时间轴：依据音频语音段（VAD 50ms 窗）+ 原片字幕条核对得出
// 前 144s：原片画面实为"中文在上、原始外文在下"；本数据同时给出按剧本规则应有的英文译行供参考
export const subs = [
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
export const asShipped = {
  9:  { zh: '各显神通', note: '语气词/非台词被做成字幕' },
  11: { zh: '海那边也有人这样望着我们吗', note: '缺英文' },
  13: { zh: '（无字幕 · 屏上静默约 7 秒）', note: '56–62s 画面几乎不动' },
  18: { zh: '瓷器', note: '缺英文' },
  19: { zh: '呃 / 瓷器', note: '语气词入字幕' },
  25: { zh: '在我的家乡 大海也诉说着故事', ru: '俄语 [Давайте поделимся нашими историями]', note: '法语台词配了俄语原文，说话人还是低头看手机的女生' },
  27: { zh: '让我们分享彼此的故事吧', fr: '法语 [Chez moi aussi la mer raconte des histoires]', note: '俄语台词配了法语原文，说话人画外无对应画面' }
};

// 人物与场景段落（对应剧本 S01–S10 与实际成片）
export const scenes = [
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
