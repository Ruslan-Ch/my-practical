// console.log('before joke');

class Joke{
	constructor(url){
		this.url = url;
	}

	// fetching(){
	// 	return fetch(this.url);
	// }

	// async joke(){
	// 	let response = await fetch(this.url),
	// 		joke = await response.json();
			
	// 		return Promise.resolve(joke);
	// }
}

new Joke('https://api.chucknorris.io/jokes/random')
	// .fetching()
	// .then(
	// 	response => {
	// 		console.log(response)
	// 		return response.json();
	// 	}
	// )
	// .then(
	// 	data => console.log(data)
	// )
	// .then(
	// 	() => {
	// 		console.log(newJoke);
	// 		// newJoke.joke();
	// 	}
	// )
	// .joke()
	// .then(
	// 	data => console.log(data)
	// )
// console.log('after joke');

// form.addEventListener('submit',(e)=>{
// 	e.preventDefault();
// })

// let link = document.querySelector('#emailing');

// link.addEventListener('click',(e)=>{
// 	e.preventDefault();
// 	console.log('here');
// })

// let f = () => {

// 	let x = 0;

// 	let f1 = () => {
// 		x += 2;
// 		debugger;
// 		//f2();
// 	}

// 	let f2 = () => {
// 		x += 2;
// 		f1();
// 		//debugger;
// 	}

// 	f1();
// 	//console.log(x);

// }

// f();

// console.log('before');

// setTimeout(()=>console.log('hello'),0);

// console.log('after');

// function main() {
// 	console.log('A');

// 	let getUser = fetch(user);

// 	console.log('200');

// 	setTimeout(
// 	function exec() {
//   		console.log('B');
//   		getUser.json();
// 	}, 0);

// 	do{

// 	}while();


// 	console.log('C');
// 	console.log('D');
// }

// main();

// for(let i=0; i<=5; i++){
	
// 	setTimeout(()=>{
// 		console.log(i);
// 	},1000);
// 	//debugger;
// }

// Promise
// 	.all[
// 		getPromise()
// 			.then(
// 				data => return afterFirstPromise(data)
// 			),
// 		getPromise()
// 			.then(
// 				data => return afterSecondPromise(data)
// 			),
// 		getPromise()
// 			.then(
// 				data => return afterThirdPromise(data)
// 			)
// 	]
// 	.then(
// 		data => runAfter(data)
// 	)

// $('#myParagraph').html('<b>Hello, world</b>');
// $('#myParagraphSecond').text('<b>Hello, world</b>');

// $( "ul.level-2" )
// 	.children()
// 	.css("background-color", "red");

// $('.level-1')
// 	.find('.item-2')
// 	.css(
// 		{
// 			"background-color": "green",
// 			"color": "white"
// 		}
// 	);

// $('.parent')
// 	.append(`
// 			<button id="clickMe">Click me</button>
// 			<ul>
// 				<li>Element 1</li>
// 				<li>Element 2</li>
// 			</ul>
// 		`);

// $('#clickMe')
// 	.click(()=>{
// 		console.log('click');
// 	})

// $('.parent li')
// 	.click(()=>{
// 		console.log($(this).html());
// 	});

// $('body')
// 	.on('click', '.parent li', ()=>{
// 		console.log($(this));
// 	})

$('body')
	.toggleClass('');

$( "p" ).click(function() {
  $(this).toggleClass( "highlight" );
});

$('.parent').click(function(){
	$(this).fadeOut();
});

// console.dir(jQuery);

$.ajax({
	url: "https://api.chucknorris.io/jokes/random",
	method: 'GET',
  	success: function(result) {
	    // console.log(result);
	    renderUser(result);
  	},
  	error: function(result){
  		result.xhrStatus;
  	}
})

function renderUser(data){
	console.log(`From function renderUser`,data);
}
