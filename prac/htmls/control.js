var LyThuyetBtn = document.getElementsByClassName("TypeBtnn")[0];
var BTBtn = document.getElementsByClassName("TypeBtn2")[0];
var MainFrame = document.getElementById("Fra");

LyThuyetBtn.addEventListener('click', () => {
    MainFrame.setAttribute('src',MainFrame.getAttribute('src').replace('BT','LYTHUYET'));
    window.location = MainFrame.getAttribute("src");
});
BTBtn.addEventListener('click', () => {
    MainFrame.setAttribute('src',MainFrame.getAttribute('src').replace('LYTHUYET','BT'));
    window.location = MainFrame.getAttribute("src");
});