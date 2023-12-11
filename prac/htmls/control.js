var LyThuyetBtn = document.getElementsByClassName("TypeBtnn")[0];
var BTBtn = document.getElementsByClassName("TypeBtn2")[0];
var MainFrame = document.getElementById("Fra");

LyThuyetBtn.addEventListener('click', () => {
    if (LyThuyetBtn.getAttribute("id") == "DIS") {
        LyThuyetBtn.setAttribute("id","ACT");
        BTBtn.setAttribute("id","DIS");
        MainFrame.setAttribute('src',MainFrame.getAttribute('src').replace('BT','LYTHUYET'));
    }
});
BTBtn.addEventListener('click', () => {
    if (BTBtn.getAttribute("id") == "DIS") {
        BTBtn.setAttribute("id","ACT");
        LyThuyetBtn.setAttribute("id","DIS");
        MainFrame.setAttribute('src',MainFrame.getAttribute('src').replace('LYTHUYET','BT'));
    };
    
});