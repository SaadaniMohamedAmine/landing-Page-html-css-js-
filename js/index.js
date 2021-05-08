//javascript code for the responsive navigation menu

const openMenu=document.getElementById('menu-open') ;
const exitMenu=document.getElementById('menu-exit') ;
const nav=document.querySelector('nav') ;

openMenu.addEventListener('click',()=>{
    nav.classList.add("show") ;
})
exitMenu.addEventListener('click',()=>{
    setTimeout(() => {
        nav.classList.remove('show') ;
    }, 500);
    
})