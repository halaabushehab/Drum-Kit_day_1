console.log("16/11/2024")

//اولا للاستماع لكل مفتاح لدينا 
 //======DOM=======
window.addEventListener('keydown',function(e){

const audio =document.querySelector(`audio[data-key='${e.keyCode}']`)
 const key =document.querySelector(`.key[data-key='${e.keyCode}']`)
if(!audio)return;
audio.currentTime=0;
audio.play();
key.classList.add('playing');

setTimeout(function() {
    key.classList.remove('playing');
}, 500);
});

 
// ازالة اشاره playing بعد الانتهاء من الانتقال






















//=============JQUERY
// $(document).keydown(function(e) {

// const audio=$(`audio[data-key='${e.keyCode}']`)
// const key =$(`.key[data-key='${e.keyCode}']`)
// if(!audio)return;
// audio.currentTime=0;
// audio.play();
// key.addClass('playing')
// });


// function removeTransition(e){
//     if(e.orginalEvent.propertyName !== 'transform')return;
//     $(this).removeClass('playing');
// }

// $('.key').on('transitionend', removeTransition);