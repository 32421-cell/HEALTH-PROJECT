// js/main.js
// Simple mobile menu toggle + set active link
document.addEventListener('DOMContentLoaded', ()=> {
  const btn = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if(btn && navLinks){
    btn.addEventListener('click', ()=> {
      navLinks.classList.toggle('open');
      btn.classList.toggle('open');
    });
  }

  // mobile-friendly: click nav always closes on small screens
  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.addEventListener('click', ()=>{
      if(navLinks.classList.contains('open')){
        navLinks.classList.remove('open');
        btn.classList.remove('open');
      }
    });
  });

  // highlight active link by filename
  const path = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === path || (href === 'index.html' && path === '')) {
      a.classList.add('active');
    }
  });
});
