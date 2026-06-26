// City image styles (gradient backgrounds with emoji icons)
export const cityImages = {
  beijing: {
    photo: 'https://cdn.pixabay.com/photo/2019/08/25/08/06/the-national-palace-museum-4428906_1280.jpg',
    gradient: 'linear-gradient(135deg, #c0392b 0%, #e74c3c 50%, #f39c12 100%)',
    emoji: '🏯',
    label: '故宫·长城',
  },
  shanghai: {
    photo: 'https://cdn.pixabay.com/photo/2020/08/19/15/31/huangpu-river-5501210_1280.jpg',
    gradient: 'linear-gradient(135deg, #1a237e 0%, #283593 50%, #5c6bc0 100%)',
    emoji: '🌃',
    label: '外滩·东方明珠',
  },
  xian: {
    photo: 'https://cdn.pixabay.com/photo/2015/11/06/14/00/terracotta-1028105_1280.jpg',
    gradient: 'linear-gradient(135deg, #4e342e 0%, #6d4c41 50%, #a1887f 100%)',
    emoji: '🗿',
    label: '兵马俑·古城墙',
  },
  chengdu: {
    photo: 'https://cdn.pixabay.com/photo/2016/10/03/06/58/black-and-white-1711000_1280.jpg',
    gradient: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 50%, #66bb6a 100%)',
    emoji: '🐼',
    label: '大熊猫·火锅',
  },
  guilin: {
    photo: 'https://cdn.pixabay.com/photo/2016/02/05/04/51/china-1180398_1280.jpg',
    gradient: 'linear-gradient(135deg, #004d40 0%, #00695c 50%, #26a69a 100%)',
    emoji: '🏔',
    label: '漓江山水',
  },
  hangzhou: {
    photo: 'https://cdn.pixabay.com/photo/2017/03/08/14/22/west-lake-2126888_1280.jpg',
    gradient: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 50%, #42a5f5 100%)',
    emoji: '🌊',
    label: '西湖·龙井',
  },
  lijiang: {
    photo: 'https://cdn.pixabay.com/photo/2015/03/27/10/46/china-694597_1280.jpg',
    gradient: 'linear-gradient(135deg, #1a237e 0%, #311b92 50%, #7c4dff 100%)',
    emoji: '🏔',
    label: '古城·雪山',
  },
  ningbo: {
    gradient: 'linear-gradient(135deg, #b71c1c 0%, #d84315 50%, #f9a825 100%)',
    emoji: '👣',
    label: '十七房·海防',
  },
};

export function getCityImage(cityId) {
  return cityImages[cityId] || {
    gradient: 'linear-gradient(135deg, #37474f, #607d8b)',
    emoji: '🏙',
    label: '',
  };
}
