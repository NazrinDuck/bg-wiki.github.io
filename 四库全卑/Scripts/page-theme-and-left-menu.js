function generateTheme(){
    const theme = document.createElement("div");
    const themeHeader = document.createElement("h1");
    const themeText = document.createTextNode("四库全卑");

    theme.setAttribute("class","theme");
    themeHeader.appendChild(themeText);
    theme.appendChild(themeHeader);

    document.getElementById("main-page").appendChild(theme);
}
function generateLeftMenu(){
    const leftMenu = document.createElement("ul");
 //   for(var i=1;i<=6;i++){
    const list1 = document.createElement("li");
    const a1 = document.createElement("a");
    a1.setAttribute("href","bg-hidden-page1.html");
    a1.setAttribute("target","_blank");

    const image = document.createElement("img");
    image.setAttribute("alt","图片击败！！");
    image.setAttribute("src","Images/Heads/bg-daoli-head (4).png");

    a1.appendChild(image);
    list1.appendChild(a1);



    const list2 = document.createElement("li");
    const a2 = document.createElement("a");
    a2.setAttribute("href","bg.html#self");
    a2.setAttribute("class","left-menu-content");

    const list2Text = document.createTextNode("主页");

    a2.appendChild(list2Text);
    list2.appendChild(a2);



    const list3 = document.createElement("li");
    const a3 = document.createElement("a");
    a3.setAttribute("href","bg-image.html");
    a3.setAttribute("class","left-menu-content");

    const list3Text = document.createTextNode("图片");

    a3.appendChild(list3Text);
    list3.appendChild(a3);



    const list4 = document.createElement("li");
    const a4 = document.createElement("a");
    a4.setAttribute("href","bg-figures.html");
    a4.setAttribute("class","left-menu-content");

    const list4Text = document.createTextNode("人物");

    a4.appendChild(list4Text);
    list4.appendChild(a4);



    const list5 = document.createElement("li");
    const a5 = document.createElement("a");
    a5.setAttribute("href","bg-history.html");
    a5.setAttribute("class","left-menu-content");

    const list5Text = document.createTextNode("卑史");

    a5.appendChild(list5Text);
    list5.appendChild(a5);



    const list6 = document.createElement("li");
    const a6 = document.createElement("a");
    a6.setAttribute("href","bg-others.html");
    a6.setAttribute("class","left-menu-content");

    const list6Text = document.createTextNode("其他");

    a6.appendChild(list6Text);
    list6.appendChild(a6);



    leftMenu.appendChild(list1);
    leftMenu.appendChild(list2);
    leftMenu.appendChild(list3);
    leftMenu.appendChild(list4);
    leftMenu.appendChild(list5);
    leftMenu.appendChild(list6);
    document.getElementById("main-page").appendChild(leftMenu);
}