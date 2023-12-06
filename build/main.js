let body = document.querySelector('body')
let half_window = body.clientWidth / 2
let half_height = body.clientHeight / 2
let mymouse = { x: undefined, y: undefined };
let banner = document.getElementById('banner')
let gears = document.querySelectorAll('span')

let nav_container = document.querySelector('#nav')
let html_left = document.querySelector('.li1').getBoundingClientRect().x
let js_right = document.querySelector('.li3').getBoundingClientRect().x + document.querySelector('.li3').getBoundingClientRect().width

let section1 = document.querySelector('.flex-control')
let preview = document.getElementById('preview')
let preview_daddy = document.querySelector('.preview-container-daddy')
let preview_arr = document.querySelectorAll('.preview-item')
let nav_arr = document.querySelectorAll('#nav>.list-container>.list-item')
let media = ["./media/int_nav_updated.webm", "./media/form_scroll.webm", undefined]

let side = {
   left: preview_daddy.getBoundingClientRect().x,
   right: preview_daddy.getBoundingClientRect().x + preview_daddy.getBoundingClientRect().width
}
let preview_href = document.querySelectorAll('section>div>div>ul>li>a')
let major_src;
let message = document.querySelector('.hidden-message')

//function to force scroll to start at top(Jquery)
$(document).ready(function () {
   $(this).scrollTop(0)
});
function appear() {
   preview.classList.remove('opacity-0')
   preview.classList.add('opacity-1')
   preview.classList.remove('pointer-events-none')
   preview.classList.add('shadow-2xl')
   banner.classList.remove('opacity-1')
   banner.classList.add('opacity-0')
   banner.classList.add('pointer-events-none')
   preview.children[0].classList.add('opacity-1')
   preview.children[0].classList.remove('opacity-0')
   message.classList.remove('message-gone')
   message.classList.add('message-appear')
}
function disappear() {
   preview.classList.remove('opacity-1')
   preview.classList.add('opacity-0')
   preview.classList.add('pointer-events-none')
   banner.classList.remove('pointer-events-none')
   banner.classList.remove('opacity-0')
   banner.classList.add('opacity-1')
   message.classList.remove('message-appear')
   message.classList.add('message-gone')
   preview.classList.remove('shadow-2xl')
}
function mouse_over_out() {
   preview_arr.forEach((item, i) => {
      let video = item.children[0].children[0]
      video.addEventListener('mouseover', e => {
         message.classList.remove('message-appear')
         message.classList.add('message-gone')
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
   }
   if (!/nav-center/g.test(nav_container.classList.value)) {
      {
         animation.style = "animation:peek 1s ease-in-out infinite alternate";
         animation.style.left = `-125px`;
      }
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
      if (preview.classList.contains('opacity-1') && ((mymouse.x < side.left || mymouse.x > side.right) || (mymouse.y < 105 && (mymouse.x < html_left || mymouse.x > js_right)))) {
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
window.addEventListener('resize', (e) => {
   let animation = document.getElementById('btn-pressID')
   if (e.target.innerWidth > 600) {
      if (preview.parentElement.classList.contains('hidden')) {
         preview.parentElement.classList.remove('hidden')
      }

      nav_container.classList.remove('nav-center')
      animation.style = "animation:peek 1s ease-in-out infinite alternate";
      animation.style.left = `-125px`;
   }
   //If the user resizes the window below 600px
   if (e.target.innerWidth < 600) {
      if (!preview.parentElement.classList.contains('hidden')) {
         preview.parentElement.classList.add('hidden')
      }
      preview.classList.add('opacity-0')
      preview.classList.remove('opacity-1')
      preview.classList.add('pointer-events-none')
   }
})
//assigning video sources depending on nav-list-item
nav_arr.forEach((li, i) => {
   let idx;
   li.addEventListener('mouseover', e => {
      appear()
      if (li === e.currentTarget) idx = i;
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