let body = document.querySelector('body')
let half_window = body.clientWidth / 2
let half_height = body.clientHeight / 2
let mymouse = { x: undefined, y: undefined };
let banner = document.getElementById('banner')
let gears = document.querySelectorAll('span')

let nav_container = document.querySelector('#nav')
let tailwind_left = document.querySelector('.li1').getBoundingClientRect().x
let react_right = document.querySelector('.li5').getBoundingClientRect().x + document.querySelector('.li5').getBoundingClientRect().width

let section1 = document.querySelector('.flex-control')
let preview = document.getElementById('preview')
let preview_daddy = document.querySelector('.preview-container-daddy')
let preview_arr = document.querySelectorAll('.preview-item')
let nav_arr = document.querySelectorAll('#nav>.list-container>.list-item')
let media = [undefined,"./media/int_nav_updated.webm", "./media/form_scroll.webm", "./media/autotxtFn.webm",undefined,]

let side = {
   left: preview_daddy.getBoundingClientRect().x,
   right: preview_daddy.getBoundingClientRect().x + preview_daddy.getBoundingClientRect().width
}
let preview_href = document.querySelectorAll('section>div>div>ul>li>a')
let major_src;
let message0 = document.querySelector('.hidden-message0')
let message = document.querySelector('.hidden-message')
let instructions = document.querySelectorAll('.opacity-instructions-container')
let c = 1;
//floating name of category to choose from
let float = ()=> {
   message0.classList.add('float-up')
}
document.querySelectorAll('*').forEach(element=>element.setAttribute('notab','notab'))



//Keydown that detects the "Tab" key & disables every element when pressing "Tab"
window.addEventListener('keydown',e=>{
   if(e.key==='Tab'){
      e.preventDefault()
      console.log('Tab' + c++)
   }
   
})
instructions.forEach((ins,i)=>{
  
   setTimeout(()=>{
      ins.style.opacity='0'
   },8000)
   setTimeout(()=>{
      if(i===0){
         ins.classList.remove('-left-40')
         ins.classList.add('left-24')
      }
      else{
         ins.classList.remove('-right-40')
         ins.classList.add('right-24')
      }
   },750*(i+1))
})

//Function list
//function to force scroll to start at top(Jquery)
$(document).ready(function () {
   $(this).scrollTop(0)
});
function autoTextFn(text, heading) {
   text = [...text]//text.split``
   let i = 0, arr = [], len = text.length
   let timer = setInterval(() => {
     let take = text.shift(text[i])
     i += 1
     arr.push(take)
     heading.textContent = arr.join``
     // console.log(text)//sender
     // console.log(arr)//receiver
     // console.log(arr.length,len)//compare arr's length w/ original text length
     if (arr.length === len) clearInterval(timer)//clearInterval once both lengths are the same.
   }, 50)
}
function previewAppear(){
   preview.classList.remove('opacity-0')
   preview.classList.add('opacity-1')
   preview.classList.remove('pointer-events-none')
   preview.classList.add('shadow-2xl')
   preview.children[0].classList.add('opacity-1')
   preview.children[0].classList.remove('opacity-0')
   return
}
function hiddenMessageAppear(){
   setTimeout(float,750)
   message0.classList.remove('message-gone')
   message0.classList.add('message-appear')
   message.classList.remove('message-gone')
   message.classList.add('message-appear')
}
function bannerAppear(){
   banner.classList.remove('opacity-1')
   banner.classList.add('opacity-0')
   banner.classList.add('pointer-events-none')
   return
}
function previewDisappear(){
   preview.classList.remove('opacity-1')
   preview.classList.add('opacity-0')
   preview.classList.add('pointer-events-none')
   preview.classList.add('shadow-2xl')
   preview.children[0].classList.add('opacity-1')
   preview.children[0].classList.remove('opacity-0')
   preview.classList.remove('shadow-2xl')
   return
}
function hiddenMessageDisappear(){
   clearTimeout(float)
   message0.classList.remove('float-up')
   message0.classList.remove('message-appear')
   message0.classList.add('message-gone')
   message.classList.remove('message-appear')
   message.classList.add('message-gone')
}
function bannerDisappear(){
   banner.classList.remove('pointer-events-none')
   banner.classList.remove('opacity-0')
   banner.classList.add('opacity-1')
   return
}


function appear() {
bannerAppear()
hiddenMessageAppear()
previewAppear()
}
function disappear() {
previewDisappear()
hiddenMessageDisappear()
bannerDisappear()
}
function mouse_over_out() {
   preview_arr.forEach((item, i) => {
      let video = item.children[0].children[0]
      video.addEventListener('mouseover', e => {
         message.classList.remove('message-appear')
         message.classList.add('message-gone')
         message0.classList.remove('message-appear')
         message0.classList.add('message-gone')
         e.currentTarget.classList.remove('opacity-0')
         e.currentTarget.classList.add('opacity-1')
         let source = e.currentTarget.children[0]
         if (e.currentTarget.played.length === 0) { //play e.currentTarget if it has not started
            e.currentTarget.muted = true
            e.currentTarget.play()
         }
      })
      video.addEventListener('mouseout', e => {
         e.currentTarget.classList.remove('opacity-1')
         e.currentTarget.classList.add('opacity-0')
         let source = e.currentTarget.children[0]
         message.classList.add('message-appear')
         message.classList.remove('message-gone')
         message0.classList.add('message-appear')
         message0.classList.remove('message-gone')
         if(e.currentTarget.played.length < 0)e.currentTarget.pause()
      })
   })
}
//Mobile "Press Me" animation
function navFn() {
   let animation = document.getElementById('btn-pressID')
   if (nav_container.classList.contains('nav-left')) {
      nav_container.classList.toggle('nav-center')
      animation.style.animation = "none";
      animation.style.left = 0;
      bannerAppear();
   }
   if (!/nav-center/g.test(nav_container.classList.value)) {
         animation.style = "animation:peek 1s ease-in-out infinite alternate";
         animation.style.left = `-125px`;
         bannerDisappear()
   }
}
//backround appear/disappear mouse event
window.addEventListener('mousemove', e => {

   mymouse = { x: e.pageX, y: e.pageY }
   let quotient = mymouse.x / 1000

   //opacity effect on Gears background with css (style)   
   if (mymouse.x <= half_window) {
      gears.forEach(x => {
         x.style = `opacity:${quotient}`
      })
   }
   else {
      quotient = (body.clientWidth / 1000) - quotient
      gears.forEach(x => {
         x.style = `opacity:${quotient}`
      })
   }

   //if the user moves their mouse outside of the preview pane and/or nav-items(html or Js)
   if (body.clientWidth > 600) {
      if (preview.classList.contains('opacity-1') && ((mymouse.x < side.left || mymouse.x > side.right) || (mymouse.y < 105 && (mymouse.x < tailwind_left || mymouse.x > react_right)))) {
         disappear()
         //pause video when you are out of bounds
         preview_arr.forEach((item, i) => {
            let video = item.children[0].children[0]
            let source = video.children[0]

         })
      }

      //If the preview pane is visible, remove restricted pointer event-none
      if (preview.classList.contains('opacity-1')) {
         preview.classList.remove('pointer-events-none')
      }
   }
})
//resize window listener
window.addEventListener('resize', e =>{
let myWidth = e.target.innerWidth;
let arr = [...nav_container.children[0].children]
//on resize,target first & last navigation items.
if(myWidth <= 1210){
let temp = []
arr.forEach((element,i)=>{
   if(i === 0 || i === arr.length-1){
      temp.push(element)
   }
})
temp.forEach(el=>{
   nav_container.removeChild(el)
})
}








})
//assigning video sources depending on nav-list-item
nav_arr.forEach((li, i) => {
   let idx;
   li.addEventListener('mouseover', e => {
      appear()
      if (li === e.currentTarget) idx = i;
      message0.textContent = nav_arr[idx].children[0].textContent
      preview_arr.forEach(item => {
         let source = item.children[0].children[0]
         source.src !== undefined ? source.src = media[idx] : source.src = ''
      })
   })
})
//appearing video on mouseover
//disappearing video on mouseout
mouse_over_out()


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