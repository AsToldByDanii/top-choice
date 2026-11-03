
document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.getElementById('mobileToggle');
 const nav=document.getElementById('navLinks');
 if(toggle&&nav)toggle.addEventListener('click',()=>{
   const open=nav.classList.toggle('open');
   toggle.setAttribute('aria-expanded',String(open));
   toggle.textContent=open?'×':'☰';
 });
 const page=location.pathname.split('/').pop()||'index.html';
 document.querySelectorAll('.navlinks a').forEach(a=>{
   if(a.getAttribute('href')===page)a.classList.add('active');
 });
});
