
document.addEventListener('DOMContentLoaded',()=>{
 const file=(location.pathname.split('/').pop()||'index.html').toLowerCase();
 document.querySelectorAll('nav a').forEach(a=>{
   const href=(a.getAttribute('href')||'').toLowerCase();
   if(href===file || (file==='missione.html' && href==='missioni.html')) a.classList.add('active');
 });
});
