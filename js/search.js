

// 动态生成热搜数数据
function getHotData(data) {
  let ul = document.getElementById("search-ul1");
  let msg = [...data];
  msg.forEach((value) => {
    let li = document.createElement("li");
    // li.setAttribute("class", "");
    li.innerHTML = `
     
      ${value.name}
  
      `;
    ul.appendChild(li);
  });
}

window.onload = () => {
  //获取搜索热词
  ajax({
    url: "/search/getHotData",
    type: "get",
    data: "",
    success: function (msg) {
      if (msg.isable) {
        getHotData(msg.data);
      } else {
        alert("获取信息失败");
      }
    },
  }); 
};

