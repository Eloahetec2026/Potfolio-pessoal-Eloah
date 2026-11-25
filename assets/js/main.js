/* Eloáh Portfolio — Animações de entrada */
(function(){
  /* Intersection Observer — fade-in das seções */
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('is-visible'); io.unobserve(e.target); }
    });
  },{ threshold: 0.1 });

  document.querySelectorAll('.edu-card, .skill__item, .sobre__title, .objetivo__title, .typo-dark__phrase')
    .forEach(el=>{
      el.style.opacity='0';
      el.style.transform='translateY(28px)';
      el.style.transition='opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)';
      io.observe(el);
    });

  document.addEventListener('animationend', e=>{
    if(e.target.classList.contains('hero__photo')){
      document.querySelectorAll('.hero__meta .eyebrow').forEach((el,i)=>{
        setTimeout(()=>{ el.style.opacity='1'; el.style.transform='translateY(0)'; },200+i*100);
      });
    }
  });

  /* Adiciona classe is-visible (ativa a animação CSS) */
  document.addEventListener('DOMContentLoaded', ()=>{
    const style = document.createElement('style');
    style.textContent = '.is-visible { opacity: 1 !important; transform: translateY(0) !important; }';
    document.head.appendChild(style);
  });
})();
