const menuButton=document.querySelector('.menu-toggle');const navLinks=document.querySelector('.nav-links');menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));navLinks.classList.toggle('open',open)});navLinks.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menuButton.setAttribute('aria-expanded','false');navLinks.classList.remove('open')}));document.querySelector('#year').textContent=new Date().getFullYear();const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));const sections=[...document.querySelectorAll('main section[id]')];const navItems=[...document.querySelectorAll('.nav-links a')];const sectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){navItems.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${entry.target.id}`))}}),{rootMargin:'-35% 0px -55% 0px'});sections.forEach(section=>sectionObserver.observe(section));

if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      document.querySelectorAll('.code-rain pre').forEach(async line=>{
        const source=line.textContent;line.textContent='';
        while(true){
          for(let i=0;i<source.length;i++){line.textContent+=source[i];await new Promise(resolve=>setTimeout(resolve,34))}
          await new Promise(resolve=>setTimeout(resolve,2200));line.textContent='';await new Promise(resolve=>setTimeout(resolve,500));
        }
      });
    }

const mouseOrb=document.querySelector('.mouse-orb');
    if(mouseOrb&&window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches){
      let targetX=-30,targetY=-30,currentX=-30,currentY=-30;
      window.addEventListener('pointermove',event=>{targetX=event.clientX;targetY=event.clientY;mouseOrb.classList.add('visible')},{passive:true});
      window.addEventListener('pointerout',event=>{if(!event.relatedTarget)mouseOrb.classList.remove('visible')});
      document.addEventListener('pointerover',event=>mouseOrb.classList.toggle('hovering',Boolean(event.target.closest('a,button,video,[role="button"]'))));
      const followPointer=()=>{currentX+=(targetX-currentX)*.16;currentY+=(targetY-currentY)*.16;mouseOrb.style.transform=`translate3d(${currentX}px,${currentY}px,0) translate(-50%,-50%)`;requestAnimationFrame(followPointer)};
      requestAnimationFrame(followPointer);
    }