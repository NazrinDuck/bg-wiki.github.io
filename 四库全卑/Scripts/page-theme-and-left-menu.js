function generateTheme(){
    const theme = document.createElement("div");
    const themeHeader = document.createElement("h1");
    const themeText = document.createTextNode("四库全卑");

    theme.setAttribute("class","theme");
    themeHeader.appendChild(themeText);
    theme.appendChild(themeHeader);

    document.getElementById("main-page").insertBefore();
}