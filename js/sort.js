var aLi = document.getElementById("list").children;
var listArr = document.getElementById("listArr").children;
for (let i = 0; i < aLi.length; i++) {
  aLi[i].addEventListener("click", function () {
    for (let index = 0; index < aLi.length; index++) {
      aLi[index].className = "";
    }
    // for (let j = 0; j < listArr.length; j++) {
    //   listArr[j].className = "hiden";
    // }
    aLi[i].className = "active";
    // listArr[i].className = "show";
  });
}

// 动态获取分类数据
function getSData(data) {
  let ul = document.getElementById("sort_list_ul1");
  let msg = [...data];
  msg.forEach((value) => {
    let li = document.createElement("li");
    // li.setAttribute("class", "movies-model");
    li.innerHTML = `
     
      <img src="${value.img}" alt="" >
  
      `;
    ul.appendChild(li);
  });
}

window.onload = () => {
  //获取分类数据集
  ajax({
    url: "/sort/getSortData",
    type: "get",
    data: "",
    success: function (msg) {
      if (msg.isable) {
        getSData(msg.data);
      } else {
        alert("获取信息失败");
      }
    },
  });
  
};


