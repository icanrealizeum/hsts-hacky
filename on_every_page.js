//src: https://github.com/nemrod/chrome-disable-f12/blob/master/extension/disablef12.js
document.addEventListener("keydown",
function keydownfunc(e) {
  if (123 == e.keyCode) {
    e.returnValue=false;
  }
}
, false);
