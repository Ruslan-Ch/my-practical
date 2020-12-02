// Реализовать функцию, которая выводит в консоль сообщение через 1000ms.
// Навесить на окончание выполняения функции обрaботчик.

// let getData = timer => {
// 	return new Promise((ok, notok) => {
// 		setTimeout(
// 			() => {
// 				console.log(timer);
// 				ok(`Argument: ${timer}`);
// 			}, timer
// 		)
// 	})
// }
// getData(1000)

// let getFile = (method, file) => {
// 	return new Promise((resolve, reject) => {
// 		let xhr = new XMLHttpRequest();
// 		xhr.open(method,file,true);
// 		xhr.send();

// 		xhr.addEventListener('readystatechange', () => {
// 			if(xhr.readyState === 4){
// 				if(xhr.status <= 400){
// 					resolve(JSON.parse(xhr.responseText));
// 				}
// 				else{
// 					reject(xhr.statusText);
// 				}
// 			}
// 		});

// 		let userA = fetch('files/userA.json');

// 	});
// };


// getFile('GET','files/userA.json')
// 	.then(
// 		userA => {
// 			console.log(userA);
// 			return getFile('GET','files/userB.json');
// 		}
// 	)
// 	.then(
// 		userB => {
// 			console.log(userA, userB);
// 		}
// 	)
// 	.catch(
// 		(error) => {
// 			console.log(error);
// 		}
// 	);

// Promise
// 	.all([
// 		getData(1000),
// 		getData(2000)
// 			.then(
// 				() => {
// 					console.log('Second func – first then');
// 					return new Promise((resolve, reject) => {
// 						return resolve();
// 					})
// 				}
// 			)
// 			.then(
// 				() => {
// 					console.log('Second func – second then');
// 					return 'MY SECOND FUNCTION';
// 				}
// 			),
// 		getData(2000),
// 	])
// 	.then(
// 		data => console.log(data),
// 		error => console.log('Error')
// 	);


// function* getData(){
// 	yield 5;
// 	yield 10;
// 	yield 15;
	
// 	// return 20;
// }

// let step = getData();

// console.log(step.next());
// console.log(step.next());
// console.log(step.next());

// console.log(step.next());
// console.log(step.next());

async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(
    	() => resolve("готово!"),
    	1000)
  });

  let result = await promise; // будет ждать, пока промис не выполнится (*)

  console.log(result); // "готово!"
}

f();