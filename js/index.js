const slideBox = document.querySelectorAll('.sllideBox')
const simProducts = document.querySelector('.simProducts')
if(window.innerWidth <= 355){
slideBox[0].style.scale = 1.1
   simProducts.addEventListener('scroll' , ()=>{
   let simScroll =  simProducts.scrollLeft
   if(simScroll < 152){
   slideBox[0].style.scale = 1.1
   slideBox[1].style.scale = 1
   slideBox[2].style.scale = 1
   slideBox[3].style.scale = 1
}
else if ( simScroll <= 395){
   slideBox[0].style.scale = 1
   slideBox[1].style.scale = 1.1
   slideBox[2].style.scale = 1
   slideBox[3].style.scale = 1
}
else if(simScroll <= 500){
   slideBox[1].style.scale = 1
   slideBox[0].style.scale = 1
   slideBox[2].style.scale = 1.1
   slideBox[3].style.scale = 1
}
else{
   slideBox[1].style.scale = 1
   slideBox[0].style.scale = 1
   slideBox[2].style.scale = 1
   slideBox[3].style.scale = 1.1
}
})
}
function responsive(){
    if(window.innerWidth > 355){
        slideBox[1].style.scale = 1
        slideBox[0].style.scale = 1
        slideBox[2].style.scale = 1
        slideBox[3].style.scale = 1
        simProducts.addEventListener('scroll' , ()=>{
            slideBox[1].style.scale = 1
            slideBox[0].style.scale = 1
            slideBox[2].style.scale = 1
            slideBox[3].style.scale = 1
        })
    }
    else{
   slideBox[0].style.scale = 1.1
   simProducts.scrollLeft = 0
   simProducts.addEventListener('scroll' , ()=>{
   let simScroll =  simProducts.scrollLeft
   if(simScroll < 152){
   slideBox[0].style.scale = 1.1
   slideBox[1].style.scale = 1
   slideBox[2].style.scale = 1
   slideBox[3].style.scale = 1
}
else if ( simScroll <= 395){
   slideBox[0].style.scale = 1
   slideBox[1].style.scale = 1.1
   slideBox[2].style.scale = 1
   slideBox[3].style.scale = 1
}
else if(simScroll <= 500){
   slideBox[1].style.scale = 1
   slideBox[0].style.scale = 1
   slideBox[2].style.scale = 1.1
   slideBox[3].style.scale = 1
}
else{
   slideBox[1].style.scale = 1
   slideBox[0].style.scale = 1
   slideBox[2].style.scale = 1
   slideBox[3].style.scale = 1.1
}
})
    }
}