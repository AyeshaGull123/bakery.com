burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.navList')
rightNav = document.querySelector('.rightNav')



burger.addEventListener('click',()=>{
    rightNav.classList-Toggle('v-class-resp');
    navList.classList-Toggle('v-class-resp');
    navbar.classList-Toggle('h-class-resp');
})