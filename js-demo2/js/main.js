//获取input节点
let filterInput = document.getElementById("filterInput");

//添加事件监听
filterInput.addEventListener("keyup", filterNames);

//filterNames方法
function filterNames(){
    //获取inputValue值
    let filterInputValue = document.getElementById("filterInput").value.toUpperCase();
    //获取ul.name
    let ul = document.getElementById("names");

    let li = ul.querySelectorAll("li.collection-item");

    for(let i = 0; i <= li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filterInputValue) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}