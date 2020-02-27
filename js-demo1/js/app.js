//获取节点
const form = document.querySelector('#task-form')               // 获取
const taskInput = document.querySelector('#task')               // 获取输入框
const filter = document.querySelector('#filter')                // 获取filter输入框
const taskList = document.querySelector('.collection')          // 获取列表
const clearBtn = document.querySelector('.clear-tasks')         // 获取clear task

//加载所有事件监听
loadEventListeners();

//定义所有事件监听函数
function loadEventListeners() {
    // 添加任务事件
    form.addEventListener('submit', addTask);

    // 清除任务事件（单个清除）
    // 给ul这个列表元素绑定一个单击事件
    taskList.addEventListener('click', removeTask);

    // 一键清除所有
    clearBtn.addEventListener('click', clearTasks);

    //过滤任务
    filter.addEventListener('keyup', filterTasks);

    // 加载完所用dom内容时候就加载本地已保存的数据
    document.addEventListener('DOMContentLoaded', getTask);

}

//addTask
function addTask(e) {
    // 判断任务输入框是否为空，为空则弹出提醒
    if (taskInput.value == "") {
        alert("Please Add a task");
    } else {
        // 若任务不为空则说明有这个值，需要把这个值插入到列表中
        // 创建节点li
        const li = document.createElement('li');
        //添加li类名
        li.className = "collection-item";
        // 创建文本节点，插入li中
        li.appendChild(document.createTextNode(taskInput.value));
        //创建a标签来添加删除的图标
        const link = document.createElement('a');
        //添加类名，这样才有对应的样式
        link.className = 'delete-item secondary-content';
        //添加字体图标
        link.innerHTML = '<i class="fa fa-times"></i>';
        // 将a标签插入li中
        li.appendChild(link);
        // 将li插入ul当中
        taskList.appendChild(li);

        // 将添加的任务进行本地存储
        storeTaskInLocalStorage(taskInput.value);
        // 添加完成后清空输入框
        taskInput.value = "";
    }
    // 移除form表单的默认事件
    e.preventDefault();
}

// removeTask
function removeTask(e) {
    // 查看返回的元素
    // console.log(e.target);
    // 判断
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('是否确认完成？')) {
            e.target.parentElement.parentElement.remove();
            //删除本地存储任务
            removeTaskFormLocalStorage(e.target.parentElement.parentElement);
        }
    }

}

// clearTasks
function clearTasks(e) {
    if (confirm('是否确认删除所有任务？')) {
        // 方法1
        // taskList.innerHTML = "";
        //方法2
        // 如果ul有第一个子元素则删除第一个子元素，一直循环
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
        // 删除所有任务并保存本地
        removeAllTasksFormLocalStorage();
    }
}
//过滤任务函数
function filterTasks(e) {
    // 获取用户输入内容 并转换小写
    const text = e.target.value.toLowerCase();

    // 获取数组通过过滤输入框的类名
    document.querySelectorAll(".collection-item").forEach(
        function(task) {
            // console.log(task);
            // 这个task就是通过类名获取的数组返回的是整个h5元素
            // 设置变量item来获取数组中的文本内容
            const item = task.firstChild.textContent;
            // console.log(item);
            // 将item转小写名判断是否包含text的值，如果包含则不等于-1
            if (item.toLowerCase().indexOf(text) != -1) {
                task.style.display = "block";
            } else {
                task.style.display = "none";
            }
        }
    );
}

// 本地存储函数
function storeTaskInLocalStorage(task) {
    // 创建tasks的变量
    let tasks;
    // 从本地存储中判断tasks是否为空，如果为空则创建tasks为空数组
    if (localStorage.getItem('tasks') == null) {
        tasks = [];
    } else {
        // 若不为空则将本地存储的值赋值给tasks 用json转换下值类型为数组
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    // 将传入的task添加到tasks中
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//getTask 获取本地存储的任务
function getTask() {
    // 创建tasks的变量
    let tasks;
    // 从本地存储中判断tasks是否为空，如果为空则创建tasks为空数组
    if (localStorage.getItem('tasks') == null) {
        tasks = [];
    } else {
        // 若不为空则将本地存储的值赋值给tasks 用json转换下值类型为数组
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    // console.log(tasks);
    // 通过foreach来进行循环的遍历
    tasks.forEach(function(task) {
        // 创建节点li
        const li = document.createElement('li');
        //添加li类名
        li.className = "collection-item";
        // 创建文本节点，插入li中
        li.appendChild(document.createTextNode(task));
        //创建a标签来添加删除的图标
        const link = document.createElement('a');
        //添加类名，这样才有对应的样式
        link.className = 'delete-item secondary-content';
        //添加字体图标
        link.innerHTML = '<i class="fa fa-times"></i>';
        // 将a标签插入li中
        li.appendChild(link);
        // 将li插入ul当中
        taskList.appendChild(li);
    })
}

// 从本地存储中删除目标任务
function removeTaskFormLocalStorage(taskItem) {
    // console.log(taskItem);
    // 创建tasks的变量
    let tasks;
    // 从本地存储中判断tasks是否为空，如果为空则创建tasks为空数组
    if (localStorage.getItem('tasks') == null) {
        tasks = [];
    } else {
        // 若不为空则将本地存储的值赋值给tasks 用json转换下值类型为数组
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    // 通过判断被删除的tasks的值在本地存储中是否存在来选择是否更新本地存储
    tasks.forEach(function(task, index) {
        if (taskItem.textContent === task) {
            // splice方法第一个参数是表示从哪一个下标开始删除，第二个参数是表示删除几个
            tasks.splice(index, 1);
            // 将tasks更新到本地存储
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    })
}

// 从本地存储中删除所有任务
function removeAllTasksFormLocalStorage(taskItem) {
    // 直接清空localStorage
    localStorage.clear();
}