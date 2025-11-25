let ismouse=false;
document.body.addEventListener('keydown', function(dets) {
   if(ismouse)return;
    let key = dets.key.toUpperCase();
   let pressedKey = document.getElementById(key);
    if(pressedKey) {
       pressKey(pressedKey);
    }

});
document.body.addEventListener('keyup', function(dets) {
    if(ismouse)return;
   let key = dets.key.toUpperCase();
   let pressedKey = document.getElementById(key);
    if(pressedKey) {
       releaseKey(pressedKey);
    }
});
let mouse =document.querySelectorAll('.black, .white');

mouse.forEach(function(key){
    key.addEventListener("mousedown",()=>{
        pressKey(key);
});
    key.addEventListener("mouseup",()=>{
        releaseKey(key);

    });
    key.addEventListener("mouseleave",()=>{
        releaseKey(key);
    });
});
function pressKey(el){
    el.style.transform = "translateY(4px)";
    el.style.boxShadow = "0px 0px 0px";
    let sound = el.id;
    let audio = new Audio(`notes/${sound}.mp3`);
    audio.currentTime = 0;
    audio.play();
}
function releaseKey(el){
    el.style.transform = "translateY(0px)";
    el.style.boxShadow = "3px 3px 3px rgb(136, 136, 136)";
}