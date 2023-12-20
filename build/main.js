let body = document.querySelector('body')
let half_window = body.clientWidth / 2
let half_height = body.clientHeight / 2
let mymouse = { x: undefined, y: undefined };
let banner = document.getElementById('banner')
let banner2 = document.getElementById('banner2')
let gears = document.querySelectorAll('span')
let touchContainer = document.getElementById('touch')
let nav_container = document.querySelector('#nav')
let tailwind_left = document.querySelector('.li1').getBoundingClientRect().x
let react_right = document.querySelector('.li5').getBoundingClientRect().x + document.querySelector('.li5').getBoundingClientRect().width
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
let arrowTest = document.querySelector('.down-arrow')
let elementPos = arrowTest.getBoundingClientRect().y
window.addEventListener('scroll', ()=> {
   c+=1
   wh_all.forEach((head,i)=>{
      if(i%2==0){
         head.style=`transform:translate(${window.scrollY}px,0);`
      }
      else{
         head.style=`transform:translate(${window.scrollY*-1}px,0);`

      }
   })
   directives.forEach((dir,i)=>{
      if(i%2==0){
         dir.style=`transform:translate(${(window.scrollY-body.clientHeight)}px,0);`
      }
      else{
         dir.style=`transform:translate(${((window.scrollY-body.clientHeight)*-1)}px,0);`

      }

   })


 if(window.scrollY >= window.innerHeight-1){
   directives.forEach((dir,i)=>{
      let icon = dir.children[0]
      setTimeout(()=>{
         icon.classList.remove('fa-gone')
         icon.classList.add('fa-appear')
      },500*(i+1))
   })
 }
 if(window.scrollY <= window.innerHeight/3){
   directives.forEach((dir,i)=>{
      let icon = dir.children[0]
      setTimeout(()=>{
         icon.classList.add('fa-gone')
         icon.classList.remove('fa-appear')
      },150*(i+1))
   })
 }
 

})
//floating name of category to choose from
let float = () => {
   message0.classList.add('float-up')
}
document.querySelectorAll('*').forEach(element => element.setAttribute('notab', 'notab'))
let section = document.querySelector('.blank-container')

wh_all.forEach(header => {
   header.classList.add('wh-centered-seq')
})
// directives.forEach(dir=>{
//    dir.classList.add('wh-centered-seq')
// })

//Keydown that detects the "Tab" key & disables every element when pressing "Tab"
window.addEventListener('keydown', e => {
   if (e.key === 'Tab') {
      e.preventDefault()
   }

})
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

//Function list
//function to force scroll to start at top(Jquery)
// $(document).ready(function () {
//    $(this).scrollTop(0)
// });
function noPointer() {
   body.classList.add('pointer-events-none')
}
function hiPointer() {
   body.classList.remove('pointer-events-none')
}
function autoTextFn(text, heading) {
   noPointer()
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
      if (arr.length === len) {
         clearInterval(timer)
         hiPointer()
      }//clearInterval once both lengths are the same.
   }, 50)
}

function previewAppear() {
   preview.classList.remove('opacity-0')
   preview.classList.add('opacity-1')
   preview.classList.remove('pointer-events-none')
   preview.classList.add('shadow-2xl')
   preview.children[0].classList.add('opacity-1')
   preview.children[0].classList.remove('opacity-0')
   return
}
function hiddenMessageAppear() {
   setTimeout(float, 250)
   message0.classList.remove('message-gone')
   message0.classList.add('message-appear')
   message.classList.remove('message-gone')
   message.classList.add('message-appear')
}
function bannerAppear() {
   banner.classList.remove('opacity-1')
   banner.classList.add('opacity-0')
   banner.classList.add('pointer-events-none')
   banner2.classList.remove('opacity-1')
   banner2.classList.add('opacity-0')
   banner2.classList.add('pointer-events-none')
   return
}
function scrollDownDisappear() {
   scrollDown.classList.remove('opacity-1')
   scrollDown.classList.add('opacity-0')
   scrollDown.classList.add('pointer-events-none')
   return
}
function scrollDownDisappear2() {
   scrollDown2.classList.remove('opacity-1')
   scrollDown2.classList.add('opacity-0')
   scrollDown2.classList.add('pointer-events-none')
   return
}
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
function hiddenMessageDisappear() {
   clearTimeout(float)
   message0.classList.remove('float-up')
   message0.classList.remove('message-appear')
   message0.classList.add('message-gone')
   message.classList.remove('message-appear')
   message.classList.add('message-gone')
}
function bannerDisappear() {
   banner.classList.remove('pointer-events-none')
   banner.classList.remove('opacity-0')
   banner.classList.add('opacity-1')
   banner2.classList.remove('pointer-events-none')
   banner2.classList.remove('opacity-0')
   banner2.classList.add('opacity-1')
   return
}
function scrollDownAppear() {
   scrollDown.classList.add('opacity-1')
   scrollDown.classList.remove('opacity-0')
   scrollDown.classList.remove('pointer-events-none')
   return
}
function scrollDownAppear2() {
   scrollDown2.classList.add('opacity-1')
   scrollDown2.classList.remove('opacity-0')
   scrollDown2.classList.remove('pointer-events-none')
   return
}

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
}
function disappear() {
   previewDisappear()
   hiddenMessageDisappear()
   bannerDisappear()
}
function mouse_over_out() {
   let caption = document.createElement('h1')
   let text = 'Click to see more'
   preview_arr.forEach((item, i) => {
      let video = item.children[0].children[0]
      video.addEventListener('mouseover', e => {
         message.classList.remove('message-appear')
         message.classList.add('message-gone')
         message0.classList.remove('message-appear')
         message0.classList.add('message-gone')
         e.currentTarget.classList.remove('opacity-0')
         e.currentTarget.classList.add('opacity-1')
         let li = e.target.parentElement.parentElement
         li.appendChild(caption)
         caption.textContent = text
         caption.classList.add('figCap')
         // caption.classList.add('text-gray-500')
         caption.classList.add('text-red-500')

         let source = e.currentTarget.children[0]
         if (e.currentTarget.paused || e.currentTarget.played.length === 0) { //play e.currentTarget if it has not started
            e.currentTarget.muted = true
            e.currentTarget.play()
         }
      })
      video.addEventListener('mouseout', e => {
         let li = e.target.parentElement.parentElement
         li.removeChild(caption)
         e.currentTarget.classList.remove('opacity-1')
         e.currentTarget.classList.add('opacity-0')
         let source = e.currentTarget.children[0]
         message.classList.add('message-appear')
         message.classList.remove('message-gone')
         message0.classList.add('message-appear')
         message0.classList.remove('message-gone')
         if (e.currentTarget.played.length > 0) {
            e.currentTarget.pause()

         }
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
let acc = 0;
//backround appear/disappear mouse event
window.addEventListener('mousemove', e => {
   e.preventDefault()
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
         unpressed()
         scrollDownAppear()
         scrollDownAppear2()
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
window.addEventListener('resize', e => {
   let myWidth = e.target.innerWidth;
   let arr = [...nav_container.children[0].children]
})
function pressed(li) {
   li.classList.add('pressed')
}
//remove all that is pressed
function unpressed() {
   nav_arr.forEach(li => {
      li.classList.remove('pressed')
   })
}
//assigning video sources depending on nav-list-item
nav_arr.forEach((li, i) => {
   let idx;
   li.addEventListener('mouseover', e => {
      unpressed()
      appear()
      scrollDownDisappear()
      scrollDownDisappear2()

      pressed(e.currentTarget)
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


