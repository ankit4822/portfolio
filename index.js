const navlinks=document.querySelector('.navlinks');
const menu=document.querySelector('.open_menu');
const close=document.querySelector('.close_menu');
const navLi=document.querySelectorAll(".navlinks ul ");
// console.log(nav_li)
// console.log(navLi[i]);
console.log(navLi);
menu.addEventListener("click",()=>{
    navlinks.style.right=0;
})
close.addEventListener('click',()=>{
    navlinks.style.right='-200px';
})



// changing bg of header...............................




window.addEventListener('scroll',()=>{
    const header=   document.querySelector('.header').classList.toggle('head',window.scrollY>1);
         header.style.display='none';
       
   });






