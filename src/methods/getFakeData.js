function getRandomInt (max) {
  return Math.floor(Math.random() * max);
}

export function getFakeImage () {
  // https://www.google.com/search?q=%E9%9F%93%E5%9C%8B%E6%98%9F%E5%B7%B4%E5%85%8B%E6%AB%BB%E8%8A%B1%E9%80%A0%E5%9E%8B&tbm=isch&tbs=rimg:CZIB6DxKAEXYYbfHmOCRdSdusgIGCgIIABAA&hl=zh-TW&sa=X&ved=0CAIQrnZqFwoTCOiq2_ib0_ICFQAAAAAdAAAAABAl&biw=1416&bih=704
  const fakeImages = [
    // 角落生物櫻花大福
    'https://cimg.pcstore.com.tw/cprd/C1169812182/3.jpg',

    // 櫻花旅遊 櫻花公路
    'https://data.whicdn.com/images/356927742/original.jpg',

    // 櫻花旅遊 櫻花寺廟
    'https://data.whicdn.com/images/355543396/original.jpg',

    // 星巴克日本本櫻花星冰樂行銷照
    'https://data.whicdn.com/images/276115868/original.jpg',

    // 星巴克 2021 新款粉色櫻花冷水杯
    'https://media.bunjang.co.kr/product/155342462_3_1624172901_w320.jpg',

    // 星巴克杯子俯視擺拍照
    'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile24.uf.tistory.com%2Fimage%2F2443BF4B58CF810D2C3224',

    // 星巴克韓國冷水杯行銷照
    'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile5.uf.tistory.com%2Fimage%2F2548694B58CF810922FCA8',

    // 星巴克韓國粉色保溫瓶行銷照
    'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F2471524B58CF810A077305',

    // 星巴克日本粉色不鏽鋼杯
    'https://images.zi.org.tw/bigfang/2020/02/06185222/1580986342-6118559a3c8b29ab685f3a7783d2450c.jpg',

    // 韓國星巴克紫色保溫瓶 (小)
    'https://i0.wp.com/starbucks.vincent-chen.com/wp-content/uploads/2017/20170404_CBII/IMG_2248.jpeg',

    // 星巴克櫻花星冰樂
    'https://lh3.googleusercontent.com/YRR3kRxP62bI53V1ygajVZvs6GMMaMvJsqB8h5WkbXOmaCP_rhXu7WTu0cGto4I3_gywwhkuEEYM8jhfjb0xA8lgH9yidUMd=s780',

    // 星巴克紫色琺瑯杯
    'https://i1.wp.com/starbucks.vincent-chen.com/wp-content/uploads/2017/20170321_CB/IMG_1208.jpeg?fit=900%2C940&ssl=1',

    // 星巴克多款杯子行銷照
    'https://dw6vrgax4fzym.cloudfront.net/userfiles/sm/sm640480_images_A1/10530/2017032100960797.jpg',

    // 星巴克手帳
    'https://ct.yimg.com/xd/api/res/1.2/1ScM.TpS8SKOj4ZeB148kA--/YXBwaWQ9eXR3YXVjdGlvbnNlcnZpY2U7aD00MDA7cT04NTtyb3RhdGU9YXV0bzt3PTQwMA--/https://s.yimg.com/ob/image/47da3ce8-f63e-468a-a183-f4892d0347b5.jpg',

    // 星巴克粉色櫻花星冰樂
    'https://pic.pimg.tw/goris/1580992940-2113945792_wn.jpg',

    // 星巴克櫻花星冰樂 櫻花鐵罐
    'https://inews.gtimg.com/newsapp_bt/0/10086869692/1000',

    // 大創櫻花抱枕
    'https://ds1hi2ngsqn97.cloudfront.net/wpcontent/uploads/2021/02/147131081_443621466849159_5475165961924463764_n.jpg',

    // 大創櫻花文具
    'https://cdn2.ettoday.net/images/3135/3135557.jpg',
  ];
  const index = getRandomInt(fakeImages.length);

  console.log('測試: 假圖', index + ' ' + fakeImages[index]);
  return fakeImages[index];
}

export function getFakeAdBanners () {
  const fakeBanners = [
    // 大創 4 格拼接
    'https://cdn.bella.tw/files/FotoJet%20(64)(4).jpg',

    // 日本賞櫻 24 景點交通
    'https://res.klook.com/image/upload/fl_lossy.progressive/q_65/c_fill,w_1360/blogtw/2019/01/japansakura.jpg',
  ];

  const index = Math.randomInt(fakeBanners.length);

  return fakeBanners[index];
}
