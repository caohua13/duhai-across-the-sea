// 八仙与法宝：民间传说存在版本差异，本页按《渡海》一片的艺术设定呈现，不宣称唯一标准
export const immortals = [
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

export const timeline = [
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
