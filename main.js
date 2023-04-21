let body = document.querySelector("body")
let linksContainer = document.querySelector(".links-container")
function toggleLightMode(){
body.classList.toggle("dark")
linksContainer.classList.toggle("dark-m")
console.log("dark mode selected")
}

let form_group = document.getElementById('cFormgroup')
let alt_message = document.querySelector('.alt_message')
let aeroplane = document.querySelector('.aeroplane')
let cForm = document.forms.contact_form
cForm.onsubmit = processForm

function processForm(){
   
 
form_group.classList.toggle('formTraverse')
alt_message.style.display='block';
aeroplane.style.display='block';
return false;

}
let progress_section = document.querySelector('.progress_section')
let progress = document.querySelector('.progress-tracker')
let scroller = document.querySelector('.scroll-progress')
window.onscroll = scrollPercentage

function scrollPercentage(){
if(window.scrollY===0){
    progress.classList.add("progress-tracker-hide") 
}else{
    progress.classList.remove("progress-tracker-hide") 
}
progress_section.style.display ='block';
let pos = document.documentElement.scrollTop;
let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
let scrollValue = (pos*100)/calcHeight;
progress.style.background = `conic-gradient(tomato ${scrollValue}%, white ${scrollValue}%)`;
}

scroller.onclick = scrollTop    

function scrollTop(){

// console.log("clicked")
window.scrollTo({
top:0,
})
progress_section.style.display ='none';

}
