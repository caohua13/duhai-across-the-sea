// 多语言台词（台词原文与片中保持一致；法/俄为片中实际出现的外语）
export const langs = [
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
export const labLines = [
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
