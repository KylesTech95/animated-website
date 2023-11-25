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
   if(nav_container.classList.contains('nav-left')){
      nav_container.classList.toggle('nav-center')
   }
}
window.addEventListener('resize',(e)=>{
   if(e.target.innerWidth>750 && nav_container.classList.contains('nav-center')){
      nav_container.classList.remove('nav-center')
   }
   else{
      return null
   }
})