
(()=>{const b=document.querySelector('.menu-toggle'),n=document.querySelector('.site-header nav');if(b&&n){b.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',String(o));});n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>n.classList.remove('open')));}const f=document.getElementById('adhesionForm');if(f){f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);const body=`Nome: ${d.get('nome')}\nEmail: ${d.get('email')}\nCittà: ${d.get('citta')}\n\nCome desidero contribuire:\n${d.get('messaggio')}`;location.href='mailto:perlacorallo@yahoo.it?subject='+encodeURIComponent('Richiesta di adesione — Federazione Galattica dei Mondi')+'&body='+encodeURIComponent(body);});}})();

document.addEventListener('DOMContentLoaded', function(){
  const form=document.getElementById('adesione-form');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      const data=new FormData(form);
      const subject=encodeURIComponent('Richiesta di adesione - Federazione Galattica dei Mondi');
      const body=encodeURIComponent(
        'Nome e cognome: '+(data.get('nome')||'')+'\n'+
        'Email: '+(data.get('email')||'')+'\n\n'+
        'Messaggio:\n'+(data.get('messaggio')||'')
      );
      window.location.href='mailto:?subject='+subject+'&body='+body;
    });
  }
});
