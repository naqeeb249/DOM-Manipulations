/* console.log(document.domain);
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

/*let header = document.getElementById('main-header');

header.style.borderBottom = 'solid 3px #000';

let title = document.querySelector('.title');

title.style.fontWeight = 'bold';
title.style.color = 'green';


 const items = document.getElementsByClassName('list-group-item');

items[2].style.backgroundColor = 'green'; 

/*for(let i=0; i<items.length; i++){
    items[i].style.fontWeight = 'bold';
 } */
/* 
 let li = document.getElementsByTagName('li');

 li[2].style.fontWeight= 'bold';

 for(let i=0; i<li.length; i++){
     li[i].style.backgroundColor = 'yellow';
 } */
/* 
let secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green'; 

let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.color = 'white';


let items = document.querySelectorAll('.list-group-item');

items[1].style.color = 'green'; */



/* let odd = document.querySelectorAll('.list-group-item:nth-child(odd)');

for(let i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'green';
}  */

let itemList = document.querySelector('#items');

/* console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = 'grey';
console.log(itemList.parentNode.parentNode.parentNode); */

console.log(itemList.parentElement);

itemList.parentElement.style.backgroundColor = 'grey';
console.log(itemList.parentElement.parentElement.parentElement);

console.log(itemList.childNodes);
console.log(itemList.children);

console.log(itemList.firstChild);
console.log(itemList.firstElementChild);

console.log(itemList.lastChild);
console.log(itemList.lastElementChild);

console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);


let newDiv = document.createElement('div');

newDiv.className = 'hello';
newDiv.id = 'hello1';

newDiv.setAttribute('title','Hello Div');

//create text node

var newDivText = document.createTextNode('Hello World');

//Ad text to div
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

container.insertBefore(newDivText,h1);

//add before item1
let l1 = itemList.firstElementChild;
console.log(l1);
itemList.insertBefore(newDivText,l1);

//add before item1 as a list
let li = document.createElement('li');
li.className = 'list-group-item';

let liText = document.createTextNode('Hello world');

li.appendChild(liText);

itemList.insertBefore(li,l1);
