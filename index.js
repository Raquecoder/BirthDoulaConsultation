const openBtn = document.getElementById('open-btn')
//console.log(openBtn)
const closeBtn = document.getElementById('close-btn')
//console.log(closeBtn)
const navList = document.getElementById('nav-list')
//console.log(navList)
const nav = document.getElementById('nav')
//console.log(nav)
const Modal = document.getElementById('modal')
//console.log(Modal)
const closeBtnModal = document.getElementById('close-btn-modal')
//console.log(closeBtnModal)
const consultationBtn = document.getElementById('consultation-btn')
//console.log(consultationBtn)


//NAVIGATION//
openBtn.addEventListener('click',function(){
 nav.style.display='block';
 closeBtn.style.display="block";
})

closeBtn.addEventListener('click',function(){
navList.style.display='none';
})

//CONSULTATION FORM//
consultationBtn.addEventListener('click', function(){
    Modal.style.display= 'block';
})
closeBtnModal.addEventListener('click', function(){
    Modal.style.display='none';
 })