// // let myInput = document.querySelector('#myInput'),
// // 	inputData = document.querySelector('#inputData');

// // console.dir(myInput);

// // myInput.addEventListener('input',handlerFunc);
// // myInput.addEventListener('change',handlerFunc);

// // function handlerFunc(event){
// // 	console.log(event);

// // 	if(event.data === '!'){
// // 		alert('oh no!');
// // 		event.target.value = event.target.value.replace('!','');
// // 	} else{
// // 		inputData.innerHTML = '<b>'+event.target.value+'</b>';
// // 	}
// // }

// // setTimeout(function(){
// // 	myInput.focus();
// // },1500)


// // setTimeout(function(){
// // 	myInput.blur();
// // },2500)

// let block = document.querySelector('.block'),
// 	blocks = document.querySelectorAll('.block');

// function mouseDown(event){
// 	x = event.screenX;
// 	y = event.screenY;

// 	console.log(event.type, x, y);
// 	//document.addEventListener('mousemove',mouseMove);
// 	document.addEventListener('mouseup',mouseUp);
// }

// function mouseMove(event){
// 	_x = event.screenX;
// 	_y = event.screenY;

// 	diff_x = _x - x;
// 	diff_y = _y - y;

// 	left_pos = block.style.left;
// 	top_pos = block.style.top;

// 	block.style.left = left_pos === '' ? diff_x+'px' : parseInt(left_pos)+diff_x+'px';
// 	block.style.top = top_pos === '' ? diff_y+'px' : parseInt(top_pos)+diff_y+'px';

// 	console.log(event.type, _x, _y, diff_x, diff_y);
// }

// function mouseUp(event){
// 	let activeBlock = document.querySelector('.block.active');

// 	_x = event.screenX;
// 	_y = event.screenY;

// 	diff_x = _x - x;
// 	diff_y = _y - y;

// 	left_pos = activeBlock.style.left;
// 	top_pos = activeBlock.style.top;

// 	activeBlock.style.left = left_pos === '' ? diff_x+'px' : parseInt(left_pos)+diff_x+'px';
// 	activeBlock.style.top = top_pos === '' ? diff_y+'px' : parseInt(top_pos)+diff_y+'px';

// 	console.log(event.type, _x, _y, diff_x, diff_y);

// 	//document.removeEventListener('mousemove',mouseMove);
// 	document.removeEventListener('mouseup',mouseUp);
// }

// for(singleBlock of blocks){
// 	console.dir(singleBlock);
// 	let blockId = singleBlock.dataset.id;

// 	createInput(blockId);
// }

// function createInput(dataId){
// 	let myInput = document.createElement('input'),
// 		myLabel = document.createElement('label'),
// 		radioContainer = document.querySelector('.radioContainer');

// 		myLabel.innerText = 'Label for data-'+dataId;

// 		myInput.type = 'radio';
// 		myInput.id = dataId;
// 		myInput.value = dataId;
// 		myInput.name = 'block';

// 		myLabel.htmlFor = myInput.id;

// 	radioContainer.appendChild(myLabel);
// 	myLabel.appendChild(myInput);

// 	myInput.addEventListener('change',activateBlock);
// }

// function activateBlock(event){
// 	let dataId = event.target.value,
// 		activeBlock = document.querySelector('.block[data-id="'+dataId+'"]');

// 	removeActiveBlock();
// 	activeBlock.classList.add('active');

// 	activeBlock.addEventListener('mousedown',mouseDown);
// }

// function removeActiveBlock(){
// 	for(singleBlock of blocks){
// 		singleBlock.classList.remove('active');
// 	}
// }

var body = document.querySelector('body'),
    block = document.querySelector('.block'),
    block_second = document.querySelector('.block_second');

function bodyClicked(){
    console.log('bodyClicked');
}
function blockClicked(e){
    e.stopPropagation();
    console.log('blockClicked');
}
function blockSecondClicked(e){
    console.log('blockSecondClicked');
}

block_second.addEventListener('click',blockSecondClicked, false);
block.addEventListener('click',blockClicked, false);
body.addEventListener('click',bodyClicked, false);


// homework 10

// let list = document.querySelector('.root');
// getLevel(4, list);

// function getLevel(level, element){
// 	if(level !==1 && element.children.length > 0) {
// 		for(child of element.children){
// 			getLevel(level-1,child);
// 		}
// 	} else{
// 		//element.querySelector('li').classList.add('first-class');
// 		element.children[0].classList.add('first-class');
// 	}
// }































