// 首页图集数据
let indexData = [
  {
    img: "./img/img1.png",
    title: "海绵宝宝",
  },
  {
    img: "./img/img2.png",
    title: "ap14超级景",
  },
  {
    img: "./img/img3.png",
    title: "小情绪",
  },
  {
    img: "./img/img4.png",
    title: "ap15超级景",
  },
  {
    img: "./img/img5.png",
    title: "潮Pro",
  },
  {
    img: "./img/img6.png",
    title: "极简主义",
  },
];

//分类页面数据集
let sortData = [
  {
    img: "../img/sort-f1.png",
  },
  {
    img: "../img/sort-f2.png",
  },
  {
    img: "../img/sort-f3.png",
  },
  {
    img: "../img/sort-f4.png",
  },
  {
    img: "../img/sort-f5.png",
  },
  {
    img: "../img/sort-f6.png",
  },
  {
    img: "../img/sort-f7.png",
  },
  {
    img: "../img/sort-f8.png",
  },
  {
    img: "../img/sort-f9.png",
  },
  {
    img: "../img/sort-f10.png",
  },
  {
    img: "../img/sort-f11.png",
  },
  {
    img: "../img/sort-f12.png",
  },
];

//每日精选页面数据集
let dayData = [
  {
    img: "../img/day1.png",
    month: "12月7日",
    day: "星期四",
  },
  {
    img: "../img/day2.png",
    month: "12月6日",
    day: "星期三",
  },
  {
    img: "../img/day3.png",
    month: "12月5日",
    day: "星期二",
  },
  {
    img: "../img/day4.png",
    month: "12月4日",
    day: "星期一",
  },
  {
    img: "../img/day5.png",
    month: "12月3日",
    day: "星期日",
  },
  {
    img: "../img/day6.png",
    month: "12月2日",
    day: "星期六",
  },
  {
    img: "../img/day7.png",
    month: "12月1日",
    day: "星期五",
  },
];

//我的页面数据集
let myData = [
  {
    img: "../img/my1.png",
    title: "小部件",
    num: "1",
  },
  {
    img: "../img/my2.png",
    title: "主题",
    num: "5",
  },
  {
    img: "../img/my3.png",
    title: "壁纸",
    num: "16",
  },
  {
    img: "../img/my4.png",
    title: "大图标",
    num: "3",
  },
  {
    img: "../img/my5.png",
    title: "字体",
    num: "12",
  },
  {
    img: "../img/my6.png",
    title: "铃声",
    num: "88",
  },
  {
    img: "../img/my7.png",
    title: "动态壁纸",
    num: "17",
  },
  {
    img: "../img/my8.png",
    title: "息屏",
    num: "3",
  },
  {
    img: "../img/my9.png",
    title: "图标",
    num: "5",
  },
];

//热搜词
let searchHotData = [
  {
    name: "可爱",
  },
  {
    name: "简约",
  },
  {
    name: "小部件",
  },
  {
    name: "手绘",
  },
  {
    name: "清新",
  },
  {
    name: "彩虹电池",
  },
  {
    name: "文艺",
  },
  {
    name: "护眼",
  },
  {
    name: "海绵宝宝",
  },
  {
    name: "航海王",
  },
  {
    name: "蜡笔小新",
  },
  {
    name: "三丽鸥",
  },
  {
    name: "迪士尼",
  },
  {
    name: "线条小狗",
  },
  {
    name: "蛋仔派对",
  },
];

// 获取首页图数据
Mock.mock(/\/index\/getIndexData/, "get", function (options) {
  return (msg = {
    data: indexData,
    isable: true,
  });
});

// 获取分类数据集
Mock.mock(/\/sort\/getSortData/, "get", function (options) {
  return (msg = {
    data: sortData,
    isable: true,
  });
});

// 获取每日精选数据集
Mock.mock(/\/day\/getDayData/, "get", function (options) {
  return (msg = {
    data: dayData,
    isable: true,
  });
});

// 获取每日精选数据集
Mock.mock(/\/my\/getMyData/, "get", function (options) {
  return (msg = {
    data: myData,
    isable: true,
  });
});

// 获取热搜词数据
Mock.mock(/\/search\/getHotData/, "get", function (options) {
  return (msg = {
    data: searchHotData,
    isable: true,
  });
});

// 注册验证
Mock.mock(/\/users\/sign/, "post", function (options) {
  let user = getdata("users");
  if (user.length == 0) {
    let arr = {
      name: options.body.name,
      pwd: options.body.pwd,
    };
    return (msg = {
      data: arr,
      isable: true,
    });
  } else {
    let data = user.filter((value) => value.name == options.body.name);
    if (data.length == 0) {
      let arr = {
        name: options.body.name,
        pwd: options.body.pwd,
      };
      return (msg = {
        data: arr,
        isable: true,
      });
    } else {
      return (msg = {
        data: null,
        isable: false,
      });
    }
  }
});

// 登录验证
Mock.mock(/\/users\/login/, "post", function (options) {
  let user = getdata("users");
  console.log(user);
  let data = user.filter(
    (value) => value.name == options.body.name && value.pwd == options.body.pwd
  );
  console.log(data);
  if (data.length != 0) {
    return (msg = true);
  } else {
    return (msg = false);
  }
});
