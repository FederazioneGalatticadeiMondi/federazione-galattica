
const menu=document.querySelector('.menu');const nav=document.querySelector('.nav');if(menu){menu.addEventListener('click',()=>nav.classList.toggle('open'));}
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const form=document.getElementById('membershipForm');if(form){form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const d=new FormData(form);const subject=encodeURIComponent('Candidatura alla Federazione Galattica dei Mondi');const body=encodeURIComponent(`Nome e cognome: ${d.get('nome')}
Email: ${d.get('email')}
Tipo di candidatura: ${d.get('tipo')}
Paese/Mondo di origine: ${d.get('paese')}

Motivazione:
${d.get('motivazione')}

Consenso privacy: Sì`);window.location.href=`mailto:federazionegalatticadeimondi@gmail.com?subject=${subject}&body=${body}`;});}
