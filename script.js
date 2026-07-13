
document.addEventListener('DOMContentLoaded',()=>{
 const f=(location.pathname.split('/').pop()||'index.html').toLowerCase();
 document.querySelectorAll('nav a').forEach(a=>{if((a.getAttribute('href')||'').toLowerCase()===f)a.classList.add('active')});
});
