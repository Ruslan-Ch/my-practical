// toggle class

// let button = document.querySelector('.btn');
// console.dir(button);

// setInterval(function(){
// 	button.classList.toggle('active');
// },1000);

// setTimeout(function(){
// 	button.style.backgroundColor = 'green';
// 	button.style.color = 'yellow';
// 	button.style.fontSize = '20px';
// },2000);

// button.setAttribute('myAttr','hello');
// button.removeAttribute('dodo');

// button.dataset.myAttr2 = 'myAttr2Value';
// delete button.dataset.dodo;

// let second = document.querySelector('#second');

// // let second
// setTimeout(function(){
// 	second.remove();
// },2000);

// console.log(window);
// console.log(document);

// window.onload = function(){

// 	let myButton = document.querySelector('.btn');
// 	console.dir(myButton);

// 	myButton.onclick = function(){
// 		console.log('hello');
// 	}

// }

let myButton = document.querySelector('.btn');
console.dir(myButton);

// myButton.onclick = function(event){
// 	eventName(event);
// 	if(event.altKey === true){
// 		console.log('altKey');
// 	}
// }

// myButton.onmousedown = function(event){
// 	eventName(event);
// }

// myButton.onmouseup = function(event){
// 	eventName(event);
// }

// myButton.ondblclick = function(event){
// 	eventName(event);
// }

// myButton.oncontextmenu = function(event){
// 	eventName(event);
// 	// alert('right btn');
// }

let block = document.querySelector('.block');
// console.dir(block);

// block.onmouseover = function(event){
// 	eventName(event);
// }
// block.onmouseout = function(event){
// 	eventName(event);
// }
// block.onmousemove = function(event){
// 	eventName(event);
// }

// block.onmouseenter = function(event){
// 	eventName(event);
// }
// block.onmouseleave = function(event){
// 	eventName(event);
// }

function eventName(ev){
    console.log(ev.type, ev.target, ev);
}

myButton.onclick = function(event){
    eventName(event);
}

myButton.onclick = function(event){
    console.log('hello');
}

myButton.addEventListener('click',firstClick);
myButton.addEventListener('click',function(){console.log('second click')});

function firstClick(){
    console.log('firstClick');
}

setTimeout(function(){
    myButton.addEventListener('click',function(){});
    myButton.addEventListener('mouseleave',function(){})
},3000);

setTimeout(function(){
    myButton.addEventListener('click',function(){});
    //myButton.removeEventListener('mouseleave');
},3000);

let list = document.querySelectorAll('li');

for(let i=0; i<list.length; i++){
    list[i].dataset.id = i;
    list[i].addEventListener('click',getDataId);
}

function getDataId(ev){
    console.log(ev.target.dataset.id);
}

document.addEventListener('keypress',eventName);

document.addEventListener('keydown',movingBlock);

console.dir(block);

function movingBlock(event){
    console.dir(block);
    if(event.keyCode === 39){
        block.style.left = block.offsetLeft+10+'px';
    }
}
