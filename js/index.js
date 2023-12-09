var listArr=["listArr","listArr2","listArr3","listArr4","listArr5","listArr6"];

var aLi = document.getElementById("list").children;
for (let i = 0; i < aLi.length; i++) {
  aLi[i].addEventListener("click", function () {
    for (let index = 0; index < aLi.length; index++) {
      aLi[index].className = "";
     var list=document.getElementById(listArr[index]);
      list.style.display = 'none';

    }
    // for (let j = 0; j < listArr.length; j++) {
    //   listArr[j].className = "hiden";
    // }
    aLi[i].className = "active";
    var ll=document.getElementById(listArr[i]);
    ll.style.display='block';
    // listArr[i].className = "show";
  });
}


document.getElementById("search").addEventListener("click", function(){
  window.location.href = "./pages/search.html";
  
});







// 动态生成首页数据
function getIndexData(data) {
  let ul = document.getElementById("list-ul1");
  let msg = [...data];
  msg.forEach((value) => {
    let li = document.createElement("li");
    // li.setAttribute("class", "");
    li.innerHTML = `
     
      <img src="${value.img}" alt="" >
  
      <p class="title">${value.title}</p>
  
      `;
    ul.appendChild(li);
  });
}

window.onload = () => {
  //获取首页数据
  ajax({
    url: "/index/getIndexData",
    type: "get",
    data: "",
    success: function (msg) {
      if (msg.isable) {
        getIndexData(msg.data);
      } else {
        alert("获取信息失败");
      }
    },
  }); 
};


// btnArr[1].onclick = function () {
//   if (falg) {
//     move(true);
//   }
// };
// btnArr[0].onclick = function () {
//   if (falg) {
//     move(false);
//   }
// };


// // 判断是否登录
// function lanjie() {
//   var url = window.location.href;
//   var backToPreUrl = url.split("?");
//   if (backToPreUrl[1] == null) {
//     return false;
//   } else {
//     return true;
//   }
// }
