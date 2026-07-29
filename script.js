(()=>{
  const menuButton=document.querySelector('.menu-toggle');
  const navigation=document.querySelector('.main-nav');
  if(menuButton&&navigation){
    menuButton.addEventListener('click',()=>{
      const open=navigation.classList.toggle('open');
      menuButton.setAttribute('aria-expanded',String(open));
    });
    navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded','false');
    }));
  }

  const lightbox=document.querySelector('.artwork-lightbox');
  const artworkButtons=document.querySelectorAll('.artwork-zoom');
  if(lightbox&&artworkButtons.length){
    const lightboxImage=lightbox.querySelector('img');
    const closeButton=lightbox.querySelector('.artwork-lightbox-close');
    artworkButtons.forEach((button)=>{
      button.addEventListener('click',()=>{
        const sourceImage=button.querySelector('img');
        lightboxImage.src=button.dataset.lightboxImage||sourceImage.src;
        lightboxImage.alt=sourceImage.alt;
        lightbox.showModal();
      });
    });
    closeButton.addEventListener('click',()=>lightbox.close());
    lightbox.addEventListener('click',(event)=>{
      if(event.target===lightbox)lightbox.close();
    });
    lightbox.addEventListener('close',()=>{
      lightboxImage.removeAttribute('src');
      lightboxImage.alt='Opera del Grande Consiglio visualizzata in formato ingrandito';
    });
  }

  const form=document.getElementById('adhesionForm');
  if(!form)return;

  const requestDate=document.getElementById('requestDate');
  if(requestDate&&!requestDate.value){
    const now=new Date();
    const localDate=new Date(now.getTime()-now.getTimezoneOffset()*60000).toISOString().slice(0,10);
    requestDate.value=localDate;
  }

  const value=name=>(new FormData(form).get(name)||'').toString().trim();
  const selected=name=>[...form.querySelectorAll(`input[name="${name}"]:checked`)].map(input=>input.value);
  const withOther=(items,other)=>other?[...items,`Altro: ${other}`]:items;

  form.addEventListener('submit',event=>{
    event.preventDefault();
    if(!form.reportValidity())return;

    const interests=withOther(selected('interessi'),value('interessi_altro'));
    const contacts=withOther(selected('contatto'),value('contatto_altro'));
    const lines=[
      'FEDERAZIONE GALATTICA DEI MONDI',
      'RICHIESTA DI ADESIONE',
      '',
      '1. DATI DEL RICHIEDENTE',
      `Nome: ${value('nome')}`,
      `Cognome: ${value('cognome')}`,
      `Email: ${value('email')}`,
      `Telefono: ${value('telefono')||'Non indicato'}`,
      `Città / Paese: ${value('citta')}`,
      '',
      '2. RICHIESTA DI ADESIONE',
      'Desidero presentare richiesta di adesione alla Federazione Galattica dei Mondi, condividendone i valori fondamentali di pace, giustizia, verità, armonia, collaborazione, conoscenza e rispetto tra i popoli.',
      '',
      '3. MOTIVAZIONE PERSONALE',
      value('motivazione'),
      '',
      '4. CONTRIBUTO ALLA MISSIONE',
      value('contributo'),
      `Modalità o categoria di partecipazione: ${value('partecipazione')||'Non indicata'}`,
      '',
      '5. AMBITI DI INTERESSE',
      interests.length?interests.join(', '):'Non indicati',
      '',
      '6. MODALITÀ PREFERITA DI CONTATTO',
      contacts.length?contacts.join(', '):'Non indicata',
      '',
      '7. DICHIARAZIONE PERSONALE',
      'Con la presente richiesta dichiaro di voler partecipare con spirito pacifico, rispettoso e collaborativo, contribuendo alla costruzione di un futuro fondato sull’unione, sulla conoscenza, sulla verità e sulla pace universale.',
      `Data della richiesta: ${value('data')}`,
      'Conferma e consapevolezza: Sì',
      '',
      '8. CONSENSO AL TRATTAMENTO DEI DATI',
      'Autorizzo l’utilizzo dei dati inseriti in questo modulo esclusivamente per essere ricontattato/a e per gestire la richiesta di adesione alla Federazione Galattica dei Mondi.',
      'Informativa Privacy consultata: Sì',
      'Consenso: Sì'
    ];
    const subject='Richiesta di adesione — Federazione Galattica dei Mondi';
    window.location.href=`mailto:federazionegalatticadeimondi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
  });
})();
