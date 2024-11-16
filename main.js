console.log("16/11/2024")

//اولا للاستماع لكل مفتاح لدينا 
 //======DOM=======
window.addEventListener('keydown',function(e){

const audio =this.document.querySelector(`audio[data-key='${e.keyCode}']`)
console.log(audio);

})


//=============JQUERY
// $(document).keydown(function(e) {

// const audio=$(`audio[data-key='${e.keyCode}']`)
//    console.log(audio);
// });
