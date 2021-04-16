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

//let itemList = document.querySelector('#items');

/* console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = 'grey';
console.log(itemList.parentNode.parentNode.parentNode); */

/* console.log(itemList.parentElement);

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
 */

let itemList = document.querySelector('#items');
var form = document.getElementById('addForm');
let filter = document.getElementById('filter');


form.addEventListener('submit',addItem);
itemList.addEventListener('click', deleteItem);
itemList.addEventListener('click', editItem);
filter.addEventListener('keyup',filterItems);


function addItem(e){
    e.preventDefault();
    
    let newItem = document.getElementById('item').value;
    let li = document.createElement('li');
    li.className = 'list-group-item';

     let newDesc = document.getElementById('itemDesc').value;
     let dd = document.createElement('dd');
    

     let des = dd.appendChild(document.createTextNode(newDesc));
    
    let br = document.createElement('br');

    li.appendChild(document.createTextNode(newItem)); 
    
  
    

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'))
   li.appendChild(deleteBtn);

   let editBtn = document.createElement('button');
   editBtn.className = 'btn btn-primary edit';
   editBtn.appendChild(document.createTextNode('Edit'));
   li.appendChild(editBtn);

   li.appendChild(br);
   li.appendChild(des);

    itemList.appendChild(li);
    //itemList.appendChild(des);

}


function deleteItem(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
          if(confirm('Are you sure ?')){
              let li = e.target.parentElement;
              li.remove();
          }
    }
}


function editItem(e){
    e.preventDefault();

    if(e.target.classList.contains('edit')){
     let input = document.getElementById('item')
      input.value = e.target.parentElement.firstChild.textContent;
     itemList.removeChild(e.target.parentElement)
    }
}

function filterItems(e){
    let items = document.getElementsByTagName('li');
    let itemDesc = document.getElementsByTagName('dd');

    let text = e.target.value.toLowerCase();

    Array.from(items).forEach(function (item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else
        item.style.display = 'none';
    })

    Array.from(itemDesc).forEach(function(itemDesc){
        let desc = itemDesc.firstChild.textContent;
        if(desc.toLowerCase().indexOf(text) != -1){
            itemDesc.style.display = 'block';
        }
        else
        itemDesc.style.display = 'none';
    })

}
