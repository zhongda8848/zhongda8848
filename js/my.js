// 动态获取我的页面数据集
function getMData(data) {
  let ul = document.getElementById("card");
  let msg = [...data];
  msg.forEach((value) => {
    let li = document.createElement("li");
    li.setAttribute("id", "tag");
    li.innerHTML = `
    <img class="card-img" src="${value.img}" >
                    <p class="frist" >${value.title}</p>
                    <p class="second">${value.num}</p>
  
      `;
    ul.appendChild(li);
  });
}

window.onload = () => {
  //获取我的图标信息数据集
  ajax({
    url: "/my/getMyData",
    type: "get",
    data: "",
    success: function (msg) {
      if (msg.isable) {
        getMData(msg.data);
      } else {
        alert("获取信息失败");
      }
    },
  });

}



