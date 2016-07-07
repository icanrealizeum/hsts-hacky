//src: https://github.com/nemrod/chrome-disable-f12/blob/master/extension/disablef12.js
document.addEventListener("keydown", keydownfunc, false);
//document.addEventListener("keyup", keyupfunc, false);

//XXX: ok, this wants to prevent Ctrl+Enter from working, on github.com pages!
//But it can't! because for some reason the POST happens and it doesn't even trigger the keydownfunc!! while in editor of the post(in issues on github), but works if editor isn't focused(eg. click outside it).

var holdingCtrl=0;

function keydownfunc(e) {
/*  if (17 == e.keyCode) {
    holdingCtrl++;
    console.log("holdingCtrl1=",holdingCtrl);
  }*/
  //if (holdingCtrl>0 && 13 == e.keyCode) {
  if (e.ctrlKey && 13 == e.keyCode) {
    console.log("PREVENTED");
    e.returnValue=false;
    event.defaultPrevented=true;
    event.cancelBubble=true;
    event.bubbles=false;
    event.stopImmediatePropagation(); //src: https://stackoverflow.com/questions/8118489/how-to-prevent-other-event-handlers-from-first-handler-in-jquery/8118508#8118508
    return false;
  }
}
/*
function keyupfunc(e) {
  if (17 == e.keyCode) {
    holdingCtrl--;
    console.log("holdingCtrl2=",holdingCtrl);
    if (holdingCtrl<0) {
      //alert("unexpected holdingCtrl=",holdingctrl);
      holdingCtrl=0;
    }
  }
}*/

