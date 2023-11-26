function en() {
    document.getElementById("ent").innerHTML = "点我进入！";
    document.getElementById("ent").href = "四库全卑/bg.html";
}
function enex() {
    document.getElementById("ent").innerHTML = "点我进入！";
    document.getElementById("ent").href = "俗世淇人/aosh.html";
}
function che() {
    var text;
    text = document.forms["form0"]["code"].value
    if (text == "114514") {
        document.getElementById("ch").innerHTML = "还真是，天才！";
        setTimeout(en(), 3000);
    }
    else if (text == "7418") {
        document.getElementById("ch").innerHTML = "天才！恭喜发现秘密网址！";
        setTimeout(enex(), 3000);
    }
    else {
        document.getElementById("ch").innerHTML = "你输入的是牛魔啊？再来！";
    }
}