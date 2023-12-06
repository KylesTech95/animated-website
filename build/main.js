let body = document.querySelector('body')
let half_window = body.clientWidth/2
let half_height = body.clientHeight/2
let mymouse = {x:undefined,y:undefined};

let gears = document.querySelectorAll('span')

let nav_container = document.querySelector('#nav')
let html_left = document.querySelector('.li1').getBoundingClientRect().x
let js_right = document.querySelector('.li3').getBoundingClientRect().x+document.querySelector('.li3').getBoundingClientRect().width

let preview = document.getElementById('preview')
let preview_daddy = document.querySelector('.preview-container-daddy')
let preview_arr = document.querySelectorAll('.preview-item')
let side = {
   left:preview_daddy.getBoundingClientRect().x,
   right: preview_daddy.getBoundingClientRect().x + preview_daddy.getBoundingClientRect().width
}

let preview_href = document.querySelectorAll('section>div>div>ul>li>a')

$(document).ready(function(){
    $(this).scrollTop(0)
});

//backround appear/disappear mouse event
window.addEventListener('mousemove',e=>{
    mymouse = {x:e.pageX,y:e.pageY}
    let quotient = mymouse.x/1000
      
//opacity effect on Gears background with css (style)   
if(mymouse.x <= half_window){
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

//if the user moves their mouse outside of the preview pane and/or nav-items(html or Js)
if(body.clientWidth > 600){
   if(preview.classList.contains('opacity-1') && ((mymouse.x < side.left || mymouse.x > side.right)||(mymouse.y < 105 && (mymouse.x < html_left || mymouse.x > js_right)))){
      preview.classList.remove('opacity-1')
      preview.classList.add('opacity-0')
      preview.classList.add('pointer-events-none')

      //pause video when you are out of bounds
      preview_arr.forEach((item,i)=>{
      let video = item.children[0].children[0]
      if(video.played.length>=0){
         video.played.length = 0;
         video.pause();
      }
   })
   }
   //If the preview pane is visible, remove restricted pointer event-none
   if(preview.classList.contains('opacity-1')){
      preview.classList.remove('pointer-events-none')
   }
}
 
})

window.addEventListener('resize',(e)=>{
   let animation = document.getElementById('btn-pressID')
   if(e.target.innerWidth > 600){
      if(preview.parentElement.classList.contains('hidden')){
         preview.parentElement.classList.remove ('hidden')
      }
      
      nav_container.classList.remove('nav-center')
      animation.style="animation:peek 1s ease-in-out infinite alternate";
      animation.style.left=`-125px`;
   }
   //If the user resizes the window below 600px
   if(e.target.innerWidth < 600){
      if(!preview.parentElement.classList.contains('hidden')){
         preview.parentElement.classList.add('hidden')
      }
      preview.classList.add('opacity-0')
      preview.classList.remove('opacity-1')
      preview.classList.add('pointer-events-none')
   }
})
//For now, this Fn manipulates btn "Press Me"
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
 //Preview should state should disappear once mouseover nav
function appear_preview(){
   if(body.clientWidth > 600){
      preview.classList.remove('opacity-0')
      preview.classList.add('opacity-1')
      preview.classList.remove('pointer-events-none')
   }
      
}
if(body.clientWidth > 600){
      preview_arr.forEach((item,i)=>{
         item.addEventListener('mouseover',e=>{
            let video = e.currentTarget.children[0].children[0]
            if(video.classList.contains('opacity-25')){
               video.classList.remove('opacity-25')
               video.classList.add('opacity-1')
            }
            if(video.played.length===0){ //play video if it has not started
               video.muted=true
               video.play();
               if(video.played)video.load()
            }
            if(video.paused){ //pickup video from where you left off
               video.muted=true
               video.play();
            }  
          })  
          item.addEventListener('mouseout',e=>{
            let video = e.currentTarget.children[0].children[0]
            if(video.classList.contains('opacity-1')){
               video.classList.remove('opacity-1')
               video.classList.add('opacity-25')
              
            }
          })  
      })
}

// //render data into html
// function render(d){
// let data = JSON.parse(d.target.responseText).html_data

// //forEach loop on preview-tiles
// preview_href.forEach((src,i)=>{
//    //target <a></a> tag (parent)
//    src.href=data[0].link; //testing
//    src.target=data[0].target//testing
// })
// }

// //upload json
// let xml = new XMLHttpRequest();
// let url='./mydata/html.json';
// let method = 'GET';
// //open xml
// xml.open(method,url,false)//false for async operations

// //xml.onload
// xml.onload=(d)=>{
//    JSON.parse(d.target.response)
//    render(d)
// }
// xml.send();