let mouse = {x:undefined,y:undefined}
let body = document.querySelector('body')
let half_window = body.clientWidth/2
let half_height = body.clientHeight/2
let gears = document.querySelectorAll('span')
let btn = document.querySelector('.btn-press')
let nav_container = document.querySelector('#nav')

//backround appear/disappear mouse event
window.addEventListener('mousemove',e=>{
   e.preventDefault()
    mouse = {x:e.pageX,y:e.pageY}
    let quotient = mouse.x/1000
if(mouse.x <= half_window){
     gears.forEach(x=> {
        x.style = `opacity:${quotient}`
     })
}
else{
   quotient = (body.clientWidth/1000) - quotient
   gears.forEach(x=> {
   x.style = `opacity:${quotient}`
   })
}
})
function navFn(){
      let animation = document.getElementById('btn-pressID')
   if(nav_container.classList.contains('nav-left')){
         nav_container.classList.toggle('nav-center')
         animation.style.animation="none";
         animation.style.left=0;
   }
   
   
}
window.addEventListener('resize',(e)=>{
   if(e.target.innerWidth>750 && nav_container.classList.contains('nav-center')){
      nav_container.classList.remove('nav-center')
   }
})

window.addEventListener('click',(e)=>{
   if(['bod','nav'].includes(e.target.id) && nav_container.classList.contains('nav-center')){
      nav_container.classList.remove('nav-center')
   }
})
