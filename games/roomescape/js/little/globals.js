c=document.getElementById("mainCanvas");
ctx=c.getContext("2d");
ctx.save();

var keys = [];
var click = [0,0];
var mouseDown = false;

window.addEventListener("keydown", function (e) {
    e.preventDefault();
    keys[e.keyCode] = true;
});
  window.addEventListener("keyup", function (e) {
    e.preventDefault();
    keys[e.keyCode] = false;
});

c.addEventListener("click", function (e) {
    e.preventDefault();
    click[0] = e.layerX;
    click[1] = e.layerY;
});

c.addEventListener("touchstart", function (e) {
    e.preventDefault();
    mouseDown = true;
    click[0] = e.touches[0].pageX;
    click[1] = e.touches[0].pageY - e.path[0].offsetTop;
}, false);

c.addEventListener("touchend", function (e) {
    e.preventDefault();
    mouseDown = false;
}, false);

c.addEventListener("touchmove", function (e) {
    e.preventDefault();
    if(mouseDown){
        var touch = e.touches[0];
        click[0] = touch.pageX;
        click[1] = touch.pageY - e.path[0].offsetTop;
    }
}, false);


doNotRepeat = false;
phrases = [["Keep Up Trying...", "Try to reach level 5!", "Keep up good work", "This level can be passed!", "Focus to fingers!"],
            ["Good work", "Try to reach level 10!", "Keep typing! You will win", "Thats a challenge!", "Try to focus!"],
            ["Great!", "You are great", "Wow!", "More levels waiting..", "Typing is fun!"],
            ["Excellent!", "Can you reach next?", "Try to reach next!", "Super Typist!", "Typing is fun!"],
            ["Superb!", "Good Work", "WOW!", "Excellent", "Super Typer!"]];
