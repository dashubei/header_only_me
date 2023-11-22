'use strict';

{
  const ham = document.querySelector('.sp-menu');
  const spans = document.querySelectorAll('span');
  const mask = document.querySelector('.mask');
  const menu = document.querySelector('.menu');


  ham.addEventListener('click', () => {
    spans.forEach((span) => {
      span.classList.toggle('active');
    });
    mask.classList.toggle('active');
    menu.classList.toggle('active');
  });
}