import ningboHero from '../assets/ningbo-hero.jpg';
import shiqifangAncient from '../assets/shiqifang-ancient.jpg';
import shiqifangComfort from '../assets/shiqifang-comfort.jpg';
import zhaobaoshan from '../assets/zhaobaoshan.jpg';
import cichengImg from '../assets/cicheng.jpg';

export const cities = [
  {
    id: 'beijing',
    name: '北京',
    nameEn: 'Beijing',
    tagline: '千年古都，现代之心',
    taglineEn: 'Ancient Capital, Modern Heart',
    region: '华北',
    bestSeason: '秋季（9-11月）',
    avgBudget: '500-1500元/天',
    description: '中国首都，拥有三千多年建城史和八百多年建都史。故宫、长城、天坛等世界级文化遗产与现代都市风貌完美融合。',
    image: 'https://cdn.pixabay.com/photo/2019/08/25/08/06/the-national-palace-museum-4428906_1280.jpg',
    attractions: [
      { name: '故宫博物院', nameEn: 'The Forbidden City', rating: 4.9, type: '历史古迹', price: '60元', duration: '4-6小时', description: '世界上现存最大的宫殿建筑群，明清两代皇家宫殿，占地72万平方米，拥有9000多间房屋。', tips: '建议提前网上购票，周一闭馆，早上8点开门建议尽早入园' },
      { name: '八达岭长城', nameEn: 'Badaling Great Wall', rating: 4.8, type: '历史古迹', price: '40元', duration: '3-5小时', description: '万里长城的精华段落，是明代长城中保存最好、最具代表性的一段。', tips: '旺季人多，可选择慕田埳长城作为替代' },
      { name: '天坛公园', nameEn: 'Temple of Heaven', rating: 4.8, type: '历史古迹', price: '15元', duration: '2-3小时', description: '明清皇帝祭天祈谷的地方，世界文化遗产，祈年殿是中国古代建筑的杰作。', tips: '建议上午去，可以看到当地老人晨练' },
      { name: '王府井大街', nameEn: 'Wangfujing Street', rating: 4.5, type: '购物美食', price: '免费', duration: '2-3小时', description: '北京最著名的商业街，汇聚了众多百货公司、品牌专卖店和美食小吃。', tips: '晚上更热闹，小吃街值得一试' },
    ],
    hotels: [
      { name: '北京王府井大饭店', nameEn: 'Wangfujing Grand Hotel', stars: 5, priceRange: '800-2000元/晚', location: '东城区王府井', features: ['地铁直达', '早餐丰富', '景观房'], description: '位于王府井商业区核心位置，步行即可到达王府井大街，交通便利。' },
      { name: '北京四季酒店', nameEn: 'Four Seasons Beijing', stars: 5, priceRange: '1500-4000元/晚', location: '朝阳区亮马桥', features: ['顶级服务', 'SPA', '米其林餐厅'], description: '国际顶级豪华酒店，设计融合中西美学，服务一流。' },
      { name: '北京青年旅舍', nameEn: 'Beijing Youth Hostel', stars: 3, priceRange: '80-200元/晚', location: '多店分布', features: ['经济实惠', '社交氛围', '位置优越'], description: '适合背包客和预算有限的旅行者，多数位于地铁站附近。' },
    ],
    tips: [
      { title: '交通', content: '地铁是最方便的出行方式，建议办理一卡通或使用手机乘车码。打车可用滴滴出行。' },
      { title: '美食', content: '必吃：北京烤鸭（全聚德/便宜坊）、炸酱面、豆汁儿、驴打滚、糖董烧。' },
      { title: '最佳时间', content: '9-10月秋高气爽，是游览故宫和长城的最佳季节。避开国庆黄金周。' },
    ],
  },
  {
    id: 'shanghai',
    name: '上海',
    nameEn: 'Shanghai',
    tagline: '东方明珠，魔都风华',
    taglineEn: 'Pearl of the Orient',
    region: '华东',
    bestSeason: '春秋（3-5月，9-11月）',
    avgBudget: '600-2000元/天',
    description: '中国最大的经济中心和国际化大都市。外滩的万国建筑博览群与陆家嘴的摩天大楼遥相呼应，展现了中西文化的完美碰撞。',
    image: 'https://cdn.pixabay.com/photo/2020/08/19/15/31/huangpu-river-5501210_1280.jpg',
    attractions: [
      { name: '外滩', nameEn: 'The Bund', rating: 4.9, type: '城市景观', price: '免费', duration: '2-3小时', description: '上海最标志性的景观，52幢各种风格的古典主义大楼沿黄浦江排列，被誉为“万国建筑博览群”。', tips: '晚上的灯光秀最美，建议日落时分前往' },
      { name: '东方明珠广播电视塔', nameEn: 'Oriental Pearl Tower', rating: 4.7, type: '城市景观', price: '199元', duration: '2-3小时', description: '上海的标志性建筑，高468米，可在观光层俯瞰浦江两岸全景。', tips: '建议购买含透明观光层的套票' },
      { name: '豫园', nameEn: 'Yu Garden', rating: 4.7, type: '历史古迹', price: '40元', duration: '2-3小时', description: '始建于明代的古典园林，江南园林艺术的经典之作，周边城隍庙小吃丰富。', tips: '周末人多，城隍庙的小笼包和南翔香头必吃' },
      { name: '田子坊', nameEn: 'Tianzifang', rating: 4.5, type: '文化艺术', price: '免费', duration: '2-3小时', description: '由石库门弄堂改造而成的艺术区，汇聚了众多画廊、工艺品店、咖啡馆和餐厅。', tips: '下午去最好，很多小店上午不开门' },
    ],
    hotels: [
      { name: '上海和平饭店', nameEn: 'Fairmont Peace Hotel', stars: 5, priceRange: '1200-3000元/晚', location: '外滩', features: ['江景房', '历史建筑', '顶楼酒吧'], description: '位于外滩的经典老牌酒店，始建于1929年，是上海的历史地标。' },
      { name: '上海浦东丽思卡尔顿酒店', nameEn: 'Ritz-Carlton Pudong', stars: 5, priceRange: '1800-5000元/晚', location: '陆家嘴', features: ['无敌江景', '空中大厅', '顶级SPA'], description: '位于上海国际金融中心，52层的空中大厅可俯瞰外滩全景。' },
      { name: '上海老西门青年旅舍', nameEn: 'Shanghai Laoximen Hostel', stars: 3, priceRange: '100-250元/晚', location: '黄浦区', features: ['石库门风格', '位置优越', '社交氛围'], description: '由老上海石库门改造，体验地道上海生活氛围。' },
    ],
    tips: [
      { title: '交通', content: '地铁网络发达，覆盖所有主要景点。磁悬浮列车从浦东机场到30分钟可达市中心。' },
      { title: '美食', content: '必吃：小笼包、生煎包、大闸蟹、红烧肉、鱼头豆腐汤。南翔香头是美食打卡圣地。' },
      { title: '最佳时间', content: '春季（3-5月）和秋季（9-11月）气候宜人，避开梅雨季和盛夏酷暑。' },
    ],
  },
  {
    id: 'xian',
    name: '西安',
    nameEn: "Xi'an",
    tagline: '十三朝古都，丝路起点',
    taglineEn: 'Eternal Ancient Capital',
    region: '西北',
    bestSeason: '春秋（3-5月，9-11月）',
    avgBudget: '400-1200元/天',
    description: '世界四大古都之一，丝绸之路的东方起点。秦始皇兵马俑、大雁塔、古城墙等让人感受千年帝都的震撼。',
    image: 'https://cdn.pixabay.com/photo/2015/11/06/14/00/terracotta-1028105_1280.jpg',
    attractions: [
      { name: '秦始皇兵马俑博物馆', nameEn: 'Terracotta Warriors', rating: 4.9, type: '历史古迹', price: '120元', duration: '3-4小时', description: '世界第八大奇迹，秦始皇陵墓的陶瓷军队，8000多个真人大小的陶俑，形态各异，世界罕见。', tips: '距离市区约1小时车程，建议包车或参团' },
      { name: '西安古城墙', nameEn: 'Xian City Wall', rating: 4.8, type: '历史古迹', price: '54元', duration: '2-3小时', description: '中国现存最完整的古代城墙，周长13.7公里，可以在城墙上骑自行车环游。', tips: '傍晚时分最美，可租自行车骑行一圈' },
      { name: '大雁塔', nameEn: 'Giant Wild Goose Pagoda', rating: 4.7, type: '历史古迹', price: '40元', duration: '2小时', description: '唐代建筑，玄奘法师从印度取经归来后主持修建，用于收藏经卷。', tips: '晚上北广场有音乐喷泉表演' },
      { name: '回民街', nameEn: 'Muslim Quarter', rating: 4.6, type: '美食购物', price: '免费', duration: '2-3小时', description: '西安最著名的美食街，汇聚了各种回民特色小吃，是吃货的天堂。', tips: '必吃：肉夹馍、羊肉泡馍、凉皮、甘梅汁' },
    ],
    hotels: [
      { name: '西安唐西市酒店', nameEn: 'Tang West Market Hotel', stars: 5, priceRange: '600-1500元/晚', location: '莲湖区', features: ['唐文化主题', '中庭花园', '位置优越'], description: '以盛唐文化为主题的豪华酒店，融合古典与现代设计。' },
      { name: '西安帝景酒店', nameEn: 'Grand Dynasty Hotel', stars: 4, priceRange: '400-800元/晚', location: '碑林区', features: ['近古城墙', '早餐丰富', '价格合理'], description: '位于古城区核心位置，步行即可游览主要景点。' },
      { name: '西安湘子洋国际青年旅舍', nameEn: 'Xian Xiangziyang Hostel', stars: 3, priceRange: '60-150元/晚', location: '碑林区', features: ['经济实惠', '地道体验', '交通便利'], description: '位于古城区的特色旅舍，老建筑改造，氛围独特。' },
    ],
    tips: [
      { title: '交通', content: '地铁覆盖主要景点，兵马俑可乘游公司大巴或打车前往。' },
      { title: '美食', content: '必吃：肉夹馍、羊肉泡馍、凉皮、锅盔、biangbiang面。回民街和永兴坊是美食聚集地。' },
      { title: '最佳时间', content: '4-5月和9-10月最宜人，夏天炎热，冬天较冷。' },
    ],
  },
  {
    id: 'chengdu',
    name: '成都',
    nameEn: 'Chengdu',
    tagline: '天府之国，美食之都',
    taglineEn: 'Land of Abundance',
    region: '西南',
    bestSeason: '春秋（3-6月，9-11月）',
    avgBudget: '400-1200元/天',
    description: '四川省会，以悠闲的生活方式、麻辣的美食和可爱的大熊猫闻名世界。有“一座来了就不想走的城市”之美誉。',
    image: 'https://cdn.pixabay.com/photo/2016/10/03/06/58/black-and-white-1711000_1280.jpg',
    attractions: [
      { name: '成都大熊猫繁育研究基地', nameEn: 'Chengdu Panda Base', rating: 4.9, type: '自然生态', price: '55元', duration: '3-4小时', description: '世界最大的大熊猫人工繁育基地，可近距离观赏大熊猫和小熊猫。', tips: '建议早上8点前到达，上午熊猫最活跃' },
      { name: '宽窄巷子', nameEn: 'Kuanzhai Alley', rating: 4.6, type: '文化休闲', price: '免费', duration: '2-3小时', description: '清代古街遗址改造的文化休闲街区，由宽巷子、窄巷子、井巷子三条平行排列的古街组成。', tips: '晚上有川剧变脸表演，值得一看' },
      { name: '武侯祠', nameEn: 'Wuhou Shrine', rating: 4.7, type: '历史古迹', price: '50元', duration: '2-3小时', description: '纪念三国时期蜀汉丞相诸葛亮的祠庙，是中国唯一一座合葬君臣的祠庙。', tips: '与锦里相邻，可一起游览' },
      { name: '锦里古街', nameEn: 'Jinli Ancient Street', rating: 4.5, type: '文化休闲', price: '免费', duration: '2小时', description: '西锦历史上著名的商业街，现为成都版的“清明上河图”，汇聚川西民俗文化精华。', tips: '夜景特别美，红灯笼下的古街很有氛围' },
    ],
    hotels: [
      { name: '成都博美酒店', nameEn: 'Niccolo Chengdu', stars: 5, priceRange: '800-2500元/晚', location: '锦江区IFS', features: ['城市天際线', '空中泳池', '网红熊猫塑像'], description: '位于IFS国际金融中心顶层，可俯瞰成都全景。' },
      { name: '成都太古里豪生酒店', nameEn: 'The Temple House', stars: 5, priceRange: '1000-3000元/晚', location: '锦江区太古里', features: ['设计感强', '临近大慈寺', '精品氛围'], description: '与大慈寺相邻的设计型酒店，融合传统与现代美学。' },
      { name: '成都梦旅青年旅舍', nameEn: 'Chengdu Dream Traveler Hostel', stars: 3, priceRange: '60-180元/晚', location: '武侯区', features: ['经济实惠', '旅行信息', '社交氛围'], description: '背包客的理想之选，可以结交来自世界各地的旅行者。' },
    ],
    tips: [
      { title: '交通', content: '地铁覆盖主要景点，出租车起步价低。火锅店多在晚上排队，建议提前取号。' },
      { title: '美食', content: '必吃：火锅、麻辣烫、担担面、钟水饺、龙担手、夫妇肺片。小吃之都名不虚传！' },
      { title: '最佳时间', content: '春季和秋季最佳，成都多雾少晴，夏天闷热。' },
    ],
  },
  {
    id: 'guilin',
    name: '桂林',
    nameEn: 'Guilin',
    tagline: '桂林山水甲天下',
    taglineEn: 'Finest Scenery Under Heaven',
    region: '华南',
    bestSeason: '四季皆宜，4-10月最佳',
    avgBudget: '300-1000元/天',
    description: '以山青、水秀、洞奇、石美闻名世界。漓江山水如诗如画，是中国山水风光的代表。',
    image: 'https://cdn.pixabay.com/photo/2016/02/05/04/51/china-1180398_1280.jpg',
    attractions: [
      { name: '漓江', nameEn: 'Li River', rating: 4.9, type: '自然风光', price: '215元（竹筏游）', duration: '4-5小时', description: '从桂林到阳朔的漓江游览，沿途山峰倒影、田园风光，被誉为“百里画廊”。', tips: '建议选择竹筏游，比游船更贴近自然' },
      { name: '阳朔西街', nameEn: 'Yangshuo West Street', rating: 4.5, type: '文化休闲', price: '免费', duration: '2-3小时', description: '阳朔最古老繁华的街道，中西文化交汇，酒吧、咖啡馆、工艺品店林立。', tips: '晚上最热闹，可以看印象刘三姐演出' },
      { name: '龙脊梯田', nameEn: 'Longji Rice Terraces', rating: 4.8, type: '自然风光', price: '80元', duration: '半天-1天', description: '始建于元代的梯田，如链条般从山脚盘绕至山顶，四季景色各异。', tips: '平安壮寨和金坑壮寨是两个最佳观赏点' },
    ],
    hotels: [
      { name: '桂林香格里拉酒店', nameEn: 'Shangri-La Guilin', stars: 5, priceRange: '600-1500元/晚', location: '象山区', features: ['江景房', '山景无敌', '中西餐厅'], description: '位于漓江之滨，可直接欣赏漓江山水。' },
      { name: '阳朔秘境酒店', nameEn: 'Yangshuo Secret Garden', stars: 4, priceRange: '400-1000元/晚', location: '阳朔遇龙河', features: ['田园风光', '精品民宿', '骑行体验'], description: '隐藏在山水田园间的精品酒店，远离喧嚣。' },
    ],
    tips: [
      { title: '交通', content: '桂林市区可乘公交或出租车，去阳朔建议包车或乘班车。骑行是游览阳朔的最佳方式。' },
      { title: '美食', content: '必吃：桂林米粉、喜乐粉、啡菜酿、油茶。阳朔的啤酒鱼也很有名。' },
      { title: '最佳时间', content: '4-10月是游览漓江的最佳时期，雨季的烟雨漓江更如仙境。' },
    ],
  },
  {
    id: 'hangzhou',
    name: '杭州',
    nameEn: 'Hangzhou',
    tagline: '人间天堂，诗画江南',
    taglineEn: 'Paradise on Earth',
    region: '华东',
    bestSeason: '春秋（3-5月，9-11月）',
    avgBudget: '500-1500元/天',
    description: '“上有天堂，下有苏杭”。西湖的潘潘水色、龙井的清香茶韵、灵隐寺的千年禅意，让杭州成为中国最具诗意的城市之一。',
    image: 'https://cdn.pixabay.com/photo/2017/03/08/14/22/west-lake-2126888_1280.jpg',
    attractions: [
      { name: '西湖', nameEn: 'West Lake', rating: 4.9, type: '自然风光', price: '免费', duration: '半天-1天', description: '世界文化遗产，以“淡妆浓抹总相宜”的美景闻名。断桥残雪、苏堤春晓等十景美不胜收。', tips: '租自行车环湖游览最佳，免费开放' },
      { name: '灵隐寺', nameEn: 'Lingyin Temple', rating: 4.8, type: '历史古迹', price: '75元（含飞来峰）', duration: '2-3小时', description: '中国最古老的佛教寺院之一，始建于东晋，飞来峰石刻造像美轮美奂。', tips: '早上去人少，可以感受寺院的清幽' },
      { name: '龙井茶村', nameEn: 'Longjing Tea Village', rating: 4.7, type: '自然风光', price: '免费', duration: '2-3小时', description: '中国十大名茶之首的龙井茶产地，可以品茶、观茶园、了解茶文化。', tips: '明前茶最贵，可以在茶农家品尝新鲜龙井' },
    ],
    hotels: [
      { name: '杭州西湖四季酒店', nameEn: 'Four Seasons Hangzhou at West Lake', stars: 5, priceRange: '2000-5000元/晚', location: '西湖景区', features: ['西湖私家园林', '顶级SPA', '中式庭院'], description: '坐落于西湖边的绝美度假酒店，拥有私家园林。' },
      { name: '杭州法云滨江酒店', nameEn: 'Hangzhou Fanyun Hotel', stars: 4, priceRange: '500-1000元/晚', location: '滨江区', features: ['江景房', '近地铁', '性价比高'], description: '位于钱塘江边，可观赏钱塘江大潮。' },
    ],
    tips: [
      { title: '交通', content: '地铁覆盖主要区域，西湖周边建议骑行或步行。公共自行车非常方便。' },
      { title: '美食', content: '必吃：西湖醋鱼、东坡肉、龙井虾仁、宋嫂鱼羹、片儿川。' },
      { title: '最佳时间', content: '3-5月桃红柳绿，9-11月桂花香满城。' },
    ],
  },
  {
    id: 'lijiang',
    name: '丽江',
    nameEn: 'Lijiang',
    tagline: '纳西古韵，雪山古城',
    taglineEn: 'Naxi Heritage & Snow Mountains',
    region: '西南',
    bestSeason: '四季皆宜，春秋最佳',
    avgBudget: '300-1000元/天',
    description: '世界文化遗产城市，纳西族古乐、东巴文化与玉龙雪山的壮美相得益彰，是云南最具魅力的城市之一。',
    image: 'https://cdn.pixabay.com/photo/2015/03/27/10/46/china-694597_1280.jpg',
    attractions: [
      { name: '丽江古城', nameEn: 'Lijiang Old Town', rating: 4.8, type: '历史古迹', price: '免费（古城维护超50元）', duration: '半天-1天', description: '世界文化遗产，800多年历史的纳西族古城，小桥流水人家，充满浪漫气息。', tips: '清晨和深夜最能感受古城韵味，避开白天人流' },
      { name: '玉龙雪山', nameEn: 'Jade Dragon Snow Mountain', rating: 4.9, type: '自然风光', price: '180元', duration: '1天', description: '纳西族的神山，海拔5596米，山下蓝月谷、白水河、云杉坪等景点美不胜收。', tips: '注意高反，提前准备氧气瓶' },
      { name: '泸沽湖', nameEn: 'Lugu Lake', rating: 4.9, type: '自然风光', price: '70元', duration: '2天', description: '高原深山湖泊，摩梭人的母系社会和“走婚”习俗闻名世界，被誉为“东方女儿国”。', tips: '距离丽江较远，建议安排两天行程' },
    ],
    hotels: [
      { name: '丽江古城花间堂度假酒店', nameEn: 'Banyan Tree Lijiang', stars: 5, priceRange: '1500-4000元/晚', location: '束河古镇', features: ['雪山景观', '纳西建筑风格', 'SPA'], description: '位于束河古镇，每间房都能看到玉龙雪山。' },
      { name: '丽江古城客栈', nameEn: 'Lijiang Old Town Inn', stars: 3, priceRange: '100-300元/晚', location: '古城内', features: ['纳西风格', '庭院民宿', '古城中心'], description: '古城内的纳西风格客栈，体验地道古城生活。' },
    ],
    tips: [
      { title: '交通', content: '古城内步行，去玉龙雪山可乘景区大巴或包车。' },
      { title: '美食', content: '必吃：丽江粙米饭、腊排骨火锅、纳西烧肉、鸡豆凉粉。' },
      { title: '最佳时间', content: '四季皆宜，春季花开，秋季天高气爽，冬季可看雪山。注意紫外线防晒。' },
    ],
  },
  {
    id: 'ningbo',
    name: '宁波',
    nameEn: 'Ningbo',
    tagline: '海定则波宁，港通天下',
    taglineEn: 'Where the Sea Calms and Waves Rest',
    region: '华南',
    isFootprint: true,
    footprintNote: '我的足迹 · 亲身到访',
    bestSeason: '春秋（3-5月，9-11月）',
    avgBudget: '400-1000元/天',
    description: '宁波，简称"甬"，地处东南沿海，是具有7000多年文明史的河姆渡文化发祥地。"海定则波宁"，这座古老的港口城市既是"海上丝绸之路"的东方始发港，也是"宁波帮"商人的故里。从镇海的郑氏十七房到江北的慈城古县城，千年海防与江南古韵在这里交织，是我亲身到访、最难忘的足迹之一。',
    image: ningboHero,
    attractions: [
      {
        name: '宁波十七房开元观堂',
        nameEn: "Kaiyuan Guantang · Zheng's Seventeen Houses",
        rating: 4.8,
        type: '历史古迹',
        tagline: '酒店即景区 · 住在明清古宅里的穿越之旅',
        price: '入住即含景区体验',
        duration: '1-2天',
        description: '国内罕见的"酒店即景区"——整座酒店就坐落在郑氏十七房明清古建筑群之中。白墙黛瓦、马头墙高耸，宅中有街、街中有市，入住即等于沉浸式游览一座活的明清古村落，白天是游客、夜深是主人。',
        tips: '建议入住一晚，清晨和夜晚游人散去后的古宅最静谧；景区含恒德房、恒祥房、源茂房等多处老宅可参观。',
        image: shiqifangAncient,
        highlights: [
          '酒店即景区：一证在手，整座明清古村任你漫步，白天是游客、夜深是主人。',
          '夜游古宅：入夜后游人散去，灯笼点亮马头墙与弄堂，独享静谧的穿越感。',
          '商帮文化：寻访恒德房、恒祥房、源茂房等老宅，触摸"宁波帮"的发家脉络。',
          '非遗体验：可参与年糕、酿酒、扎染等江南传统手作活动。',
          '摄影圣地：白墙黛瓦、天井回廊，随手一拍都是江南水墨意境。',
        ],
        gallery: [
          {
            title: '郑氏十七房的历史文化背景',
            image: ningboHero,
            content: '郑氏十七房位于宁波市镇海区澥浦镇，是郑氏一支自南宋由河南荥阳南迁后的世居之地，距今已有800余年。它是国内现存规模最大、保存最完整的明清古建筑群落之一，建筑面积4万多平方米，现存建筑绝大部分为清乾隆至光绪年间所建。郑氏家族世代经商，是"宁波帮"的重要发源之一，英雄墨水厂的肇始者郑尊发便出自此族。宅院群呈"宅中有街、街中有市"的独特格局，马头墙高耸、雕梁画栋，典当行、邮政代办所、酒作坊、栈房、恒德房、恒祥房、源茂房等一应俱全，是一座凝固的明清商帮"活化石"。',
          },
          {
            title: '一期 · 古韵',
            image: shiqifangAncient,
            content: '一期以"古韵"为主题，依托原汁原味修复的明清老宅院落，保留马头墙、天井、木雕花窗、石板甬道等原有构造。入住其中，青砖黛瓦、回廊曲径，夜里红灯笼映照马头墙，仿佛穿越回数百年前的商贾之家，是追求沉浸式历史文化体验者的首选。',
          },
          {
            title: '二期 · 舒适',
            image: shiqifangComfort,
            content: '二期以"舒适"为主题，在延续江南古建形制的同时，对客房的采光、隔音、卫浴与床品进行现代化升级。木质家具温润内敛，设施更贴合当代旅人的起居习惯，让游客既能感受古宅风韵，又能享受现代酒店的舒适与便利。',
          },
        ],
      },
      {
        name: '招宝山',
        nameEn: 'Zhaobao Mountain',
        rating: 4.6,
        type: '历史古迹',
        tagline: '甬江入海口的海防丰碑',
        price: '免费',
        duration: '2-3小时',
        description: '招宝山位于宁波市镇海区甬江入海口，与对岸金鸡山夹江对峙，自古为镇海关隘、"浙东门户"。山虽不高（约80米），却因扼守海口而成为历代海防重地，山上至今留存威远城、安远炮台、月城、明清古炮等海防工事遗址，是全国重点文物保护单位。',
        tips: '爬山强度不大，登顶可同时俯瞰甬江入海与海防工事；建议与十七房同游（同属镇海区）。',
        image: zhaobaoshan,
        highlights: [
          '免费开放，爬山强度低，老少皆宜',
          '登顶俯瞰甬江入海口与远洋轮船',
          '国家级海防遗址：威远城、安远炮台、月城、古炮',
          '与郑氏十七房同处镇海区，可串联一日游',
        ],
        gallery: [
          {
            title: '爬山看海防工事',
            image: zhaobaoshan,
            content: '沿石阶缓步而上，山道两旁绿树成荫，约半小时即可登顶。山顶的威远城为明代抗倭所筑，安远炮台、月城与多尊古炮诉说着镇海口"百战不殆"的海防史。登临鳌柱塔或城墙，甬江入海口、远洋轮船与对岸金鸡山尽收眼底，海风猎猎，"爬山看海防"的独特体验在此一站集齐。',
          },
        ],
      },
      {
        name: '慈城古县城',
        nameEn: 'Cicheng Ancient County Town',
        rating: 4.7,
        type: '历史古迹',
        tagline: '江南第一古县城 · 央视推荐年糕之乡',
        price: '部分景点联票约60元',
        duration: '半天',
        description: '慈城古县城位于宁波市江北区，距郑氏十七房不远，是中国江南地区保存最完整的古县城之一，始建于唐开元二十六年（738年），至今已有近1300年历史。县城格局完整，县衙、孔庙、校士馆（考棚）、城隍庙等明清建筑遗存星罗棋布，被誉为"江南第一古县城"。',
        tips: '一定要尝央视《舌尖上的中国》推荐的慈城年糕；县衙、孔庙、校士馆值得逐一慢逛。',
        image: cichengImg,
        highlights: [
          '江南第一古县城，格局完整保存近1300年',
          '央视《舌尖上的中国》推荐的慈城年糕',
          '县衙 · 孔庙 · 校士馆（考棚） · 城隍庙',
          '距十七房不远，可与镇海行程同游',
        ],
        gallery: [
          {
            title: '古县城里吃年糕',
            image: cichengImg,
            content: '慈城年糕以优质粳米水磨而成，口感软糯弹滑，曾登上央视《舌尖上的中国》而名扬全国。古县城街巷间遍布年糕作坊与小吃店，可现买现尝年糕饺、炒年糕、雪菜年糕汤。吃饱后漫步县衙、孔庙与校士馆，在青砖黛瓦间感受一座千年古县城的市井烟火与科举文脉。',
          },
        ],
      },
    ],
    hotels: [
      {
        name: '宁波十七房开元观堂',
        nameEn: "Kaiyuan Guantang · Seventeen Houses",
        stars: 5,
        isScenic: true,
        priceRange: '600-1500元/晚',
        location: '镇海区澥浦镇·十七房景区内',
        features: ['酒店即景区', '明清古宅', '一期古韵', '二期舒适', '沉浸式体验'],
        description: '国内罕见的"酒店即景区"主题酒店，整座酒店坐落于郑氏十七房明清古建筑群中。分一期古韵与二期舒适两大区域：一期住进原汁原味的明清老宅，二期享受现代化升级的舒适客房，入住即等于游览整座古村落。',
      },
      {
        name: '宁波香格里拉大酒店',
        nameEn: 'Shangri-La Ningbo',
        stars: 5,
        priceRange: '800-2000元/晚',
        location: '鄞州区',
        features: ['江景房', '近天一阁', '交通便利', '中西餐厅'],
        description: '位于宁波市中心三江口，可俯瞰甬江风光，邻近天一阁与老外滩，适合城市观光与商务出行。',
      },
      {
        name: '宁波老外滩青年旅舍',
        nameEn: 'Ningbo Old Bund Hostel',
        stars: 3,
        priceRange: '100-250元/晚',
        location: '江北区老外滩',
        features: ['经济实惠', '历史街区', '夜生活丰富', '社交氛围'],
        description: '坐落于宁波老外滩历史街区，适合背包客与预算有限的旅行者，夜晚可感受外滩酒吧街的烟火气。',
      },
    ],
    tips: [
      { title: '交通', content: '宁波地铁与公交便利；郑氏十七房、招宝山同处镇海区可串联游览，慈城古县城位于江北区，建议自驾或打车前往。' },
      { title: '美食', content: '必吃：央视推荐的慈城年糕、宁波汤圆、红膏炝蟹、雪菜大汤黄鱼、宁波三臭。年糕饺和炒年糕别错过。' },
      { title: '最佳时间', content: '春秋两季最宜人，避开台风季与梅雨季；十七房古宅夜游四季皆可，别有一番风味。' },
    ],
  },
];

export function getCityById(id) { return cities.find(c => c.id === id); }
export function getFootprintCities() { return cities.filter(c => c.isFootprint); }
export function getCitiesByRegion(region) {
  if (region === '本地') return [];
  if (region === '全部') return cities.filter(c => !c.isFootprint);
  return cities.filter(c => c.region === region && !c.isFootprint);
}
export function getRegions() { return ['全部', '本地', ...new Set(cities.map(c => c.region))]; }
export function searchCities(query) {
  if (!query) return cities;
  const q = query.toLowerCase();
  return cities.filter(c => c.name.includes(q) || c.nameEn.toLowerCase().includes(q) || c.description.includes(q));
}
