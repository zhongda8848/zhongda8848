// 动态获取今日精选数据
function getDData(data) {
  let ul = document.getElementById("day_list_ul1");
  let msg = [...data];
  msg.forEach((value) => {
    let li = document.createElement("li");
    // li.setAttribute("class", "movies-model");
    li.innerHTML = `
      <p class="top"> <span class="span_month">${value.month}</span> <span class="span_day">${value.day}</span> </p>
                        <img src="${value.img}" alt="">
  
      `;
    ul.appendChild(li);
  });
}

window.onload = () => {
  //获取分类数据集
  ajax({
    url: "/day/getDayData",
    type: "get",
    data: "",
    success: function (msg) {
      if (msg.isable) {
        getDData(msg.data);
      } else {
        alert("获取信息失败");
      }
    },
  });

}



