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
let preview_ul = document.querySelector('.preview-container')
let mymouse = {x:undefined,y:undefined};
let preview_src = document.querySelectorAll('video>source')



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
let side = {
   left:preview_daddy.getBoundingClientRect().x,
   right: preview_daddy.getBoundingClientRect().x + preview_daddy.getBoundingClientRect().width
}
let html_left = document.querySelector('.li1').getBoundingClientRect().x
let js_right = document.querySelector('.li3').getBoundingClientRect().x+document.querySelector('.li3').getBoundingClientRect().width
mymouse = {x:e.pageX,y:e.pageY}

if(body.clientWidth > 600){
   if(preview.classList.contains('opacity-1') && ((mymouse.x < side.left || mymouse.x > side.right)||(mymouse.y < 105 && (mymouse.x < html_left || mouse.x > js_right)))){
      preview.classList.remove('opacity-1')
      preview.classList.add('opacity-0')
      preview.classList.add('pointer-events-none')

      preview_arr.forEach((item,i)=>{
      let video = item.children[0].children[0]
      console.log(video)
      if(video.played.length>=0){
         video.played.length = 0;
         video.pause();
      }
   })
   }
   if(preview.classList.contains('opacity-1')){
      preview.classList.remove('pointer-events-none')
   }
}

else{
   if(preview.classList.contains('opacity-1') && (mymouse.x < side.left || mymouse.x > side.right)){
      preview.classList.remove('opacity-1')
      preview.classList.add('opacity-0')
      preview.classList.add('pointer-events-none')
   }
   if(preview.classList.contains('opacity-1')){
      preview.classList.remove('pointer-events-none')
   }
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
   if(body.clientWidth < 600){
      if(preview.classList.contains('opacity-1')){
         {
            setTimeout(()=>{
               preview.classList.add('opacity-0')
               preview.classList.remove('opacity-1')
               preview.classList.add('pointer-events-none')
            },250)
         }
      }
   }
   
   
}
window.addEventListener('resize',(e)=>{

   let animation = document.getElementById('btn-pressID')
   if(e.target.innerWidth > 600 && nav_container.classList.contains('nav-center')){
      nav_container.classList.remove('nav-center')
      animation.style="animation:peek 1s ease-in-out infinite alternate";
      animation.style.left=`-125px`;
   }
   if(e.target.innerWidth < 600){
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
         preview.classList.remove('opacity-1')
         preview.classList.add('opacity-0')
         preview.classList.add('pointer-events-none')
      }
      

   }
})


   function appear_preview(){
      preview.classList.remove('opacity-0')
      preview.classList.add('opacity-1')
   }

if(body.clientWidth < 600){
   let preview_width = body.clientWidth
   let preview_height = body.clientWidth
   preview_arr.forEach((item,i)=>{
      let mod_idx = i%3
   if(i > 2 && i < 6){
      if(i==3){
         item.style=`top:75px;left:25px`
      }
      if(i===4){
         item.style=`left:${preview_width < 500 ? (preview_width/2.75):(preview_width/2.35)}px;top:75px;`
         
      }
      if(i===5){
         item.style=`top:75px;right:25px` 
      }
   }
   if(i >= 6){item.style=`top:${(mod_idx * (preview_height/3))+225}px;right:25px`}      
   if(i <= 2){item.style=`top:${(mod_idx * (preview_height/3))+225}px;left:25px`}      

})
}
else{
   preview_arr.forEach((item,i)=>{
   item.classList.add(`item${i+1}`)  
   item.addEventListener('mouseover',e=>{
      let video = e.currentTarget.children[0].children[0]
      if(video.played.length===0){ //play video if it has not started
         video.muted=true
         video.play();
      }
      if(video.paused){ //pickup video from where you left off
         video.muted=true
         video.play();
      }
    })  

})
}


//render data into html
function render(d){
let data = JSON.parse(d.target.responseText).html_data

//forEach loop on preview-tiles
preview_src.forEach((src,i)=>{
   //target <a></a> tag (parent)
   let link = src.parentElement.parentElement
   link.href=data[0].link; //testing
   link.target=data[0].target//testing
})
}

//upload json
let xml = new XMLHttpRequest();
let url='./mydata/html.json';
let method = 'GET';
//open xml
xml.open(method,url,false)//false for async operations

//xml.onload
xml.onload=(d)=>{
   JSON.parse(d.target.response)
   render(d)
}
xml.send();