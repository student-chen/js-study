JS_Demo1 关于任务列表实战DEMO，

主要是实现以下功能：
    1、添加任务并进行本地存储与页面渲染；
    2、实现单个任务的删除与一键清除的功能，并删除本地储存；
    3、进行过滤并实现页面渲染；
    4、完成框架渲染与代码实现。

主要是学习JS中事件监听、事件响应、页面渲染几点，
学习到JS中：
    1、querySelector,querySelectorAll选择器
        document.querySelector('id名/类名/标签名');

    2、加载事件的监听：addEventListener：
        let aaa = document.querySelector("xxx");    //获取节点
        aaa.addEventListener("click", getInfo);     //监听节点的点击事件
        function getInfo(){...}                     //节点的点击事件

    3、createElement 创建节点：
        let li = document.createElement("标签名")   //创建某个标签

    4、appendChild 插入数据：
        let ul;
        let li;
        ul.appendChild(li);                         //将li标签插入ul标签

    5、当表单的type="submit"时，当我们触发个人设置的点击事件时，需要将原来form自带的点击事件删除：preventDefault：
        function submit(e){
            e.preventDefault();                     //删除原本form自带的点击事件
            ...
        }

    6、forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。如app.js中的 filterTasks 事件。

    7、localStorage事件本地储存与清除：localStorage.getItem("json")、localStorage.setItem("json")、localStorage.clear();(这里的json必须是严格的json格式)

    8、JSON.parse()是将将数据转换为 JavaScript 对象。JSON.stringify("数组") 将JavaScript 对象转换为字符串。

源码地址：https://github.com/student-chen/js-study 仅供参考。
        