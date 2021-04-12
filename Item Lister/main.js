console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms);
console.log(document.links);
console.log(document.images);
 

let headerTitle = document.getElementById('header-Title');

/* headerTitle.textContent = 'Hello';
headerTitle.textContent = 'Hi'; */

let header = document.getElementById('main-header');

header.style.borderBottom = 'solid 3px #000';

let title = document.querySelector('.title');

title.style.fontWeight = 'bold';
title.style.color = 'green';
