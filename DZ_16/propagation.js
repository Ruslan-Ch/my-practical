// let body = document.querySelector('body'),
// 	popup = document.querySelector('.popup'),
// 	closeBtn = document.querySelector('#closeBtn');

// function bodyClick(){
// 	console.log('body Click');
// 	console.log('close from body modal window');
// }
// function popupClick(e){
// 	console.log('popup Click');
// 	e.stopPropagation();
// }
// function closeBtnClick(e){
// 	console.log(e);
// 	e.stopPropagation();
// 	console.log('closeBtn Click');
// }

// body.addEventListener('click',bodyClick);
// popup.addEventListener('click',popupClick);
// closeBtn.addEventListener('click',closeBtnClick);

// document.addEventListener('keypress',(e)=>console.log(e));


let goGoogle = document.querySelector('#goGoogle');
goGoogle.addEventListener('click',analyzeClick);

function analyzeClick(e){
	e.preventDefault();
	console.log(e);

	document.location.href = `${e.target.origin}/search?q=cat&oq=cat`;
}
