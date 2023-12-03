let mouse = {x:undefined,y:undefined}
let body = document.querySelector('body')
let half_window = body.clientWidth/2
let half_height = body.clientHeight/2
let gears = document.querySelectorAll('span')
let btn = document.querySelector('.btn-press')
let nav_container = document.querySelector('#nav')
let preview = document.getElementById('preview')
let preview_daddy = document.querySelector('.preview-container-daddy')
let preview_arr = document.querySelectorAll('.preview-item')
let mymouse = {x:undefined,y:undefined};


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
   if(!/nav-center/g.test(nav_container.classList.value)){{
      animation.style="animation:peek 1s ease-in-out infinite alternate";
      animation.style.left=`-125px`;
   }}
   
   
}
window.addEventListener('resize',(e)=>{
   let animation = document.getElementById('btn-pressID')
   if(e.target.innerWidth>750 && nav_container.classList.contains('nav-center')){
      nav_container.classList.remove('nav-center')
      animation.style="animation:peek 1s ease-in-out infinite alternate";
      animation.style.left=`-125px`;
   }
   if(e.target.innerWidth < 750){
      preview.classList.add('opacity-0')
      preview.classList.remove('opacity-1')
      preview.classList.add('pointer-events-none')
   }
})

window.addEventListener('click',(e)=>{
   let animation = document.getElementById('btn-pressID')
   if(['bod','nav'].includes(e.target.id) && nav_container.classList.contains('nav-center')){
      nav_container.classList.remove('nav-center')
      if(body.clientWidth <= 725){
         animation.style="animation:peek 1s ease-in-out infinite alternate";
         animation.style.left=`-125px`;
      }

   }
})
window.addEventListener('mousemove', e =>{
   let side = {
      left:preview_daddy.getBoundingClientRect().x,
      right: preview_daddy.getBoundingClientRect().x + preview_daddy.getBoundingClientRect().width
   }
   mymouse = {x:e.pageX,y:e.pageY}
   // console.log([mymouse.x,mymouse.y])
   if(preview.classList.contains('opacity-1') && (mymouse.x < side.left || mymouse.x > side.right)){
      preview.classList.remove('opacity-1')
      preview.classList.add('opacity-0')
      preview.classList.add('pointer-events-none')
   }
   if(preview.classList.contains('opacity-1')){
      preview.classList.remove('pointer-events-none')
   }
})

   function html_preview(){
      preview.classList.remove('opacity-0')
      preview.classList.add('opacity-1')
      
   }
   function css_preview(){
      preview.classList.remove('opacity-0')
      preview.classList.add('opacity-1')
      
   }
   function js_preview(){
      preview.classList.remove('opacity-0')
      preview.classList.add('opacity-1')
      
   }

preview_arr.forEach((item,i)=>{
   item.classList.add('item' + (i+1))
   item.addEventListener('mouseover', e =>{
      if(e.target.classList.contains(`item${i+1}`)){
         e.target.style=`transition:.3s ease;transform:scale(1.25); background:red`
      }
   })
   item.addEventListener('mouseout', e =>{
      if(e.target.classList.contains(`item${i+1}`)){
         e.target.style=`transition:.3s ease;width: 100%; height: 100%;transform:scale(1); position:none;`
      }
   })
})
