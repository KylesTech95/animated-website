//Global variables
let body = document.querySelector('body')
let mymouse = { x: undefined, y: undefined };
let half_width = body.clientWidth / 2
let half_height = body.clientHeight / 2

let banner = document.getElementById('banner')
let banner2 = document.getElementById('banner2')

let gears = document.querySelectorAll('span')
let touchContainer = document.getElementById('touch')
let nav_container = document.querySelector('#nav')
let tailwind_left = 5
let react_right = body.clientWidth - 5
let wh_all = document.querySelectorAll('.wh')
let section1 = document.querySelector('.flex-control')
let preview = document.getElementById('preview')
let preview_daddy = document.querySelector('.preview-container-daddy')
let preview_arr = document.querySelectorAll('.preview-item')
let nav_arr = document.querySelectorAll('#nav>.list-container>.list-item')
let media = ["./media/tailwindrec.mp4", "./media/css_log_animation.webm", "./media/form_scroll.webm", "./media/autotxtFn.webm", "./media/eightballjs.mp4",]
let scrollDown = document.querySelector('.scroll-down-container');
let scrollDown2 = document.querySelector('.scroll-down-container2');
let side = {
   left: preview_daddy.getBoundingClientRect().x,
   right: preview_daddy.getBoundingClientRect().x + preview_daddy.getBoundingClientRect().width
}
let directives = document.querySelectorAll('.directive')
let preview_href = document.querySelectorAll('section>div>div>ul>li>a')
let major_src;
let message0 = document.querySelector('.hidden-message0')
let message = document.querySelector('.hidden-message')
let instructions = document.querySelectorAll('.opacity-instructions-container')
let c = 1;
let acc = 0;
let arrowTest = document.querySelector('.down-arrow')
let elementPos = arrowTest.getBoundingClientRect().y
let myText = ['User-friendly & easy to use web solutions','Code refactoring/Bug fixing','Learn to code with me']
let section = document.querySelector('.blank-container')
//Disable tab for every element present
document.querySelectorAll('*').forEach(element => element.setAttribute('notab', 'notab'))
//ajax ready function
$(document).ready(function() {
//The user is directed to the top of the page on refresh
  scrollTo(0,0);
})
//Translate banner text on scroll
function scrollTextToCenter(){

   c+=1
   wh_all.forEach((wh,index)=>{
      if(index%2==0){
         wh.style=`transform:translate(${window.scrollY}px,0);`
      }
      else{
         wh.style=`transform:translate(${window.scrollY*-1}px,0);`

      }
   })
   directives.forEach((dir,index)=>{
      if(index%2==0){
         dir.style=`transform:translate(${(window.scrollY-body.clientHeight)}px,0);`
      }
      else{
         dir.style=`transform:translate(${((window.scrollY-body.clientHeight)*-1)}px,0);`

      }

   })
//When scrollY meets bottom of page, directives/icons appear
   if(window.scrollY >= window.innerHeight-1){
      directives.forEach((dir,i)=>{
         let icon = dir.children[0]
         let textActual = dir.children[1]
         if(icon.classList.contains('fa-gone')){
            setTimeout(()=>{
             //timeout set to appaer after each index
               icon.classList.remove('fa-gone')
               icon.classList.add('fa-appear')
               autoTextFn(myText[i],textActual)
         },800*(i))
         

      } 
   })
      
         
   }
   //When scrollY meets 3/4 of page, directives/icons disappear
   if(window.scrollY <= window.innerHeight/3){
      directives.forEach((dir,i)=>{
         let icon = dir.children[0]
         let textActual = dir.children[1]
         if(icon.classList.contains('fa-appear')){
            //timeout set to disappear after each index
            icon.classList.add('fa-gone')
            icon.classList.remove('fa-appear')
            textActual.textContent = ''
      }
   })
      
   }
 
} 
window.addEventListener('scroll',scrollTextToCenter)

wh_all.forEach(header => {
   header.classList.add('wh-centered-seq')
})
//Keydown that detects the "Tab" key & disables every element when pressing "Tab"
window.addEventListener('keydown', e => {
   if (e.key === 'Tab') {
      e.preventDefault()
   }

})
//instructions on left and right side of page w/ arrows
instructions.forEach((ins, i) => {

   setTimeout(() => {
      ins.style.opacity = '0'
   }, 8000)
   setTimeout(() => {
      if (i === 0) {
         ins.classList.remove('-left-40')
         ins.classList.add('left-24')
      }
      else {
         ins.classList.remove('-right-40')
         ins.classList.add('right-24')
      }
   }, 750 * (i + 1))
})
//Disable pointer events
function noPointer() {
   body.classList.add('pointer-events-none')
}
//Activate pointer events
function hiPointer() {
   body.classList.remove('pointer-events-none')
}
//auto type with 2 arguments:1)string of text,2)element.
function autoTextFn(text, element) {
   noPointer()
   text = [...text]//text.split``
   let i = 0, arr = [], len = text.length
   let timer = setInterval(() => {
      let take = text.shift(text[i])
      i += 1
      arr.push(take)
      element.textContent = arr.join``
      // console.log(text)//sender
      // console.log(arr)//receiver
      // console.log(arr.length,len)//compare arr's length w/ original text length
      if (arr.length === len) {
         clearInterval(timer)
         hiPointer()
      }//clearInterval once both lengths are the same.
   }, 50)
}
//Floating heading that reflects the current nav-list-item
let float = () => {
   message0.classList.add('float-up')
}
//Preview pane appears
function previewAppear() {
   preview.classList.remove('opacity-0')
   preview.classList.add('opacity-1')
   preview.classList.remove('pointer-events-none')
   preview.classList.add('shadow-2xl')
   preview.children[0].classList.add('opacity-1')
   preview.children[0].classList.remove('opacity-0')
   return
}
//Preview pane disappears
function previewDisappear() {
   preview.classList.remove('opacity-1')
   preview.classList.add('opacity-0')
   preview.classList.add('pointer-events-none')
   preview.classList.add('shadow-2xl')
   preview.children[0].classList.add('opacity-1')
   preview.children[0].classList.remove('opacity-0')
   preview.classList.remove('shadow-2xl')
   return
}
//hidden message header appears
//The word 'Hover' appears
function hiddenMessageAppear() {
   setTimeout(float, 250)
   message0.classList.remove('message-gone')
   message0.classList.add('message-appear')
   message.classList.remove('message-gone')
   message.classList.add('message-appear')
}
//hidden message header disappears
//The word 'Hover' disappears
function hiddenMessageDisappear() {
   clearTimeout(float)
   message0.classList.remove('float-up')
   message0.classList.remove('message-appear')
   message0.classList.add('message-gone')
   message.classList.remove('message-appear')
   message.classList.add('message-gone')
}
//banners appear
function bannerAppear() {
   banner.classList.remove('opacity-1')
   banner.classList.add('opacity-0')
   banner.classList.add('pointer-events-none')
   banner2.classList.remove('opacity-1')
   banner2.classList.add('opacity-0')
   banner2.classList.add('pointer-events-none')
   return
}
//banner disappear
function bannerDisappear() {
   banner.classList.remove('pointer-events-none')
   banner.classList.remove('opacity-0')
   banner.classList.add('opacity-1')
   banner2.classList.remove('pointer-events-none')
   banner2.classList.remove('opacity-0')
   banner2.classList.add('opacity-1')
   return
}
//scroll-helper (bottom of 1st section) appears
function scrollDownAppear() {
   scrollDown.classList.add('opacity-1')
   scrollDown.classList.remove('opacity-0')
   scrollDown.classList.remove('pointer-events-none')
   return
}
//scroll-helper (Top of 2nd section) appears
function scrollDownAppear2() {
   scrollDown2.classList.add('opacity-1')
   scrollDown2.classList.remove('opacity-0')
   scrollDown2.classList.remove('pointer-events-none')
   return
}
//scroll-helper (bottom of 1st section) disappears
function scrollDownDisappear() {
   scrollDown.classList.remove('opacity-1')
   scrollDown.classList.add('opacity-0')
   scrollDown.classList.add('pointer-events-none')
   return
}
//scroll-helper (Top of 2nd section) disappears
function scrollDownDisappear2() {
   scrollDown2.classList.remove('opacity-1')
   scrollDown2.classList.add('opacity-0')
   scrollDown2.classList.add('pointer-events-none')
   return
}
//onClick functions when pressing scroll-helpers
function scrollDownFn() {
   let target = body.clientHeight;
   window.scrollTo(0, target);
}
function scrollUpFn() {
   let home = document.scrollTop;
   window.scrollTo(0, home);

}
function appear() {
   bannerAppear()
   hiddenMessageAppear()
   previewAppear()
   scrollDownDisappear()
   scrollDownDisappear2()
}
function disappear() {
   previewDisappear()
   hiddenMessageDisappear()
   bannerDisappear()
   scrollDownAppear()
   scrollDownAppear2()
}
function createFigCaption(caption,text){
         caption.textContent = text
         caption.classList.add('figCap')
         caption.classList.add('text-red-500')
}
function videoAppears(video){
video.classList.remove('opacity-0')
video.classList.add('opacity-1')
}
function videoDisappears(video){
   video.classList.remove('opacity-1')
   video.classList.add('opacity-0')
}
function mouse_over_out() {
   let caption = document.createElement('h1')
   let text = 'Click to see more'
   preview_arr.forEach((item, i) => {
      let video = item.children[0].children[0]
      video.addEventListener('mouseover', e => {
         //Hidden message disappears hovering over a video
         hiddenMessageDisappear()
         videoAppears()
         let li = e.target.parentElement.parentElement
         li.appendChild(caption)
         createFigCaption(caption,text)

         if (e.currentTarget.paused || e.currentTarget.played.length === 0) { //play e.currentTarget if it has not started
            e.currentTarget.muted = true
            e.currentTarget.play()
         }
      })
      video.addEventListener('mouseout', e => {
         let li = e.target.parentElement.parentElement
            li.removeChild(caption)
            videoDisappears()
            hiddenMessageAppear()
         if(e.currentTarget.played.length > 0){
            e.currentTarget.pause()
         }
      })
   })
}
//backround appear/disappear mousemove event
winTypes = ['mousemove']
function winMoveFn(type){
   window.addEventListener(type, e => {
      mymouse = { x: e.pageX, y: e.pageY }
      //convert mous's px to decimal by dividing by 1000
      let quotient = mymouse.x / 1000
   
      //If mouse.x <= half the screen, opacity changes  
      if (mymouse.x <= half_width) {
         gears.forEach(x => {
            x.style = `opacity:${quotient}`
         })
      }
      else {
         //else, redefine quotient as the full width/1000 - original quotient
         quotient = (body.clientWidth / 1000) - quotient
         gears.forEach(x => {
            x.style = `opacity:${quotient}`
         })
      }
      
      //mobile version
      let animation = document.getElementById('btn-pressID')
      animation_x_pos = animation.getBoundingClientRect().x
      if((mymouse.x < animation_x_pos+25 || mymouse.x > side.right) && body.clientWidth <= 750 && nav_container.classList.contains('nav-center')){
         console.log(nav_container.classList)
            nav_container.classList.remove('nav-center')
            animation.style.animation = "none";
            animation.style.left = 0;
            bannerAppear();
         if (!/nav-center/g.test(nav_container.classList.value)) {
            animation.style = "animation:peek 1s ease-in-out infinite alternate";
            animation.style.left = `-125px`;
            bannerDisappear()
         }
         
        
      }
   
      //if the user moves their mouse outside of the preview pane and/or nav-items(resources or back-end)
         if (preview.classList.contains('opacity-1') && ((mymouse.x < side.left || mymouse.x > side.right) || (mymouse.y < 105 && (mymouse.x < tailwind_left || mymouse.x > react_right)))) {
            disappear()
            unpressed()
            
            //pause video when you are out of bounds
            preview_arr.forEach((item, i) => {
               let video = item.children[0].children[0]
               let source = video.children[0]
               
            })
         
   
         //If the preview pane is visible, remove restricted pointer event-none
         if (preview.classList.contains('opacity-1')) {
            preview.classList.remove('pointer-events-none')
         }
      }
   })
}
winTypes.forEach(type=>{
   winMoveFn(type)
})

let sizer = document.querySelector('.resize-txt')
window.addEventListener('resize',e=>{
   sizer.textContent = e.target.innerWidth
})
//helper function to press nav-list-item - adding classlist to list-item
function pressed(li) {
   li.classList.add('pressed')
}
//unpress all nav-list-items
function unpressed() {
   nav_arr.forEach(li => {
      li.classList.remove('pressed')
   })
}
types = ['mousemove','touchstart','click']

//assigning video sources depending on nav-list-items
function navTouchTypes(li,type,idx,i){
   li.addEventListener(type, e => {
      unpressed()
      appear()
      pressed(e.currentTarget)
      if (li === e.currentTarget) idx = i;
      message0.textContent = nav_arr[idx].children[0].textContent
      preview_arr.forEach(item => {
         let source = item.children[0].children[0]
         source.src !== undefined ? source.src = media[idx] : source.src = ''
      })
   })
}

nav_arr.forEach((li, i) => {
   let idx;
   types.forEach((type,index)=>{
      navTouchTypes(li,type,idx,i)
   })
   
   // li.addEventListener('mouseover', e => {
   //    unpressed()
   //    appear()
   //    pressed(e.currentTarget)
   //    if (li === e.currentTarget) idx = i;
   //    message0.textContent = nav_arr[idx].children[0].textContent
   //    preview_arr.forEach(item => {
   //       let source = item.children[0].children[0]
   //       source.src !== undefined ? source.src = media[idx] : source.src = ''
   //    })
   // })
   // li.addEventListener('click', e => {
   //    unpressed()
   //    appear()
   //    pressed(e.currentTarget)
   //    if (li === e.currentTarget) idx = i;
   //    message0.textContent = nav_arr[idx].children[0].textContent
   //    preview_arr.forEach(item => {
   //       let source = item.children[0].children[0]
   //       source.src !== undefined ? source.src = media[idx] : source.src = ''
   //    })
   // })
})
//appearing video on mouseover
//disappearing video on mouseout
mouse_over_out()
//Mobile "Press Me" toggle Fn
function navFn() {
   let animation = document.getElementById('btn-pressID')
   if (nav_container.classList.contains('nav-left')) {
      nav_container.classList.toggle('nav-center')
      animation.style.animation = "none";
      animation.style.left = 0;
      bannerAppear();
      previewDisappear()
   }
   if (!/nav-center/g.test(nav_container.classList.value)) {
      animation.style = "animation:peek 1s ease-in-out infinite alternate";
      animation.style.left = `-125px`;
      bannerDisappear()
   }
}

