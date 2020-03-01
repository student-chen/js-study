//设置随机生成函数
//随机小写
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
//随机大写
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
//随机数字
function getRandomNumbers() {
    return +String.fromCharCode(Math.floor(Math.random()*10)+48);
}
//随机符号
function getRandomSymbols() {
    let symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random()*symbols.length)];
}

//创建随机函数对象
let randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    numbers: getRandomNumbers,
    symbols: getRandomSymbols
}

//获取 DOM 节点
let resultEl = document.getElementById("result");
let lengthEl = document.getElementById("length");
let uppercaseEl = document.getElementById("uppercase");
let lowercaseEl = document.getElementById("lowercase");
let numbersEl = document.getElementById("numbers");
let symbolsEl = document.getElementById("symbols");
let generateEl = document.getElementById("generate");
let clipboardEl = document.getElementById("clipboard");

//设置生成密码按钮的事件监听
generateEl.addEventListener("click", () => {
    let length = lengthEl.value;
    let hasUpper = uppercaseEl.checked;
    let hasLower = lowercaseEl.checked;
    let hasNumber = numbersEl.checked;
    let hasSymbols = symbolsEl.checked;
    resultEl.innerHTML = generatePassword(
        length,
        hasUpper,
        hasLower,
        hasNumber,
        hasSymbols
    );
});

//设置copy事件监听
clipboardEl.addEventListener("click", () => {
    let textarea = document.createElement('textarea');
    let password = resultEl.innerText;
    if(!password){
        alert("当前密码为空");
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    alert("已复制到剪切板");
});

//设置generatePassword事件
function generatePassword(length, upper, lower, numbers, symbols) {
    //1.初始化密码；
    let generatedPassword = "";
    //2.过滤出没有被选中的密码类型；
    let typesCount = upper + lower + numbers + symbols;
    let typeArr = [{upper}, {lower}, {numbers}, {symbols}].filter(item => Object.values(item)[0]);
    if(typesCount === 0){
        return "";
    }
    //3.通过循环获得每个密码的并返回给储存密码的变量；
    for(let i = 0; i < length; i+=typesCount){
        typeArr.forEach(type => {
            let funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        })
    }
    let finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
    //4.将处理好的随机密码进行保存返回。
}
