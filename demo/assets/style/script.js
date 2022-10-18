const tog = document.querySelector('.toggle');
const navBar = document.querySelector('.nav-bar');

tog.addEventListener('click', ( )=>{
    tog.classList.toggle('active')
    navBar.classList.toggle('active'); 
})
document.querySelectorAll('.nav-bar').forEach(n =>n.addEventListener('click', ()=>{
  tog.classList.remove('active')
  navBar.classList.remove('active'); 
}))