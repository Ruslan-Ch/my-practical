// class Person {
// 	constructor(name, surname){
// 		this.name = name;
// 		this.surname = surname;
// 	}

// 	get age(){
// 		return this.__age ? this.__age : this.age=0;
// 	}

// 	set age(age){
// 		if(age<=0){
// 			this.age = prompt('Set valid age');
// 		} else{
// 			this.__age = Number(age);
// 		}
// 	}

// 	get newFullName(){
// 		return this.__newFullName ? this.__newFullName : this.newFullName='Alpa Romeo';
// 	}

// 	set newFullName(newFullName){
// 		let splitted = newFullName.split(' ');
		
// 		this.name = splitted[0];
// 		this.surname = splitted[1];

		// this.__newFullName = 'New name: '+this.name+'. New surname: '+this.surname;
// 	}
// }

// let Quebec = new Person('Quebec', 'Antonov');

// Quebec.age; //getter
// Quebec.newFullName; //getter

// console.log(Quebec);


// Деструктуризация в ES6
// [object_key]:[variable_name] = [default_value]

// const student = {
// 	firstName: 'John Doe',
// 	// ageOfMy: 16,
// 	scores: {
// 		maths: 74,
// 		english: 63,
// 		science: 85
// 	},
// 	friends: ['Inna', 'Ivan']
// };

// function displaySummary(student) {
// 	console.log('Hello, '+ student.firstName);
// 	console.log('Your Maths score is '+ (student.scores.maths || 0));
// 	console.log('Your English score is ' + (student.scores.english || 0));
// 	console.log('Your Science score is '+ (student.scores.science || 0));
// }
// displaySummary(student);

// let {firstName: name, ageOfMy:age=25, scores:{maths, english, science}, friends:[inna, ivan]} = student;

// console.log('-----');
// console.log(name, age, maths, english, science, inna, ivan);

// let rgb = [245, 112, 261];

// let [,,blue] = rgb;

// console.log('-----');
// console.log(blue);

// renderUser();

// function renderUser( {firstName: name = 'Name', ageOfMy:age=25} = {} ){
// 	console.log(name, age);
// }

// let name = 'Quebec',
// 	country = 'Ukraine',
// 	friends = ['Ivan', 'Inna', 'Olena'],
	
// 	helloWorldOld = '<table border="1"><tr>'+
// 	'<td>'+name+'</td><td>'+country+'</td></tr></table>',
	
// 	helloWorld = `Hello, world.
// 		I'm ${name},
// 			from ${country}`,

// 	newTable = `<br>
// 				<table border="1">
// 					<tr>
// 						<td>${name === 'Quebec' ? 'okey' : 'not okey'}</td>
// 						<td>${getCountry(country)}</td>

// 						<td>
// 							<ul>
// 								${ friends.map(element => `<li>My friend is ${element}</li>`).join('') }
// 							<ul>
// 						</td>
// 					</tr>
// 				</table>`;

// document.body.innerHTML = helloWorld;
// document.body.innerHTML += helloWorldOld;
// document.body.innerHTML += newTable;

// console.log(helloWorld);

// function getCountry(country){
// 	return country === 'Ukraine' ? `${country} is my home` : 'not foreign';
// }

import {encrypt, decrypt} from './m1.js';

let string = prompt();

console.log( encrypt(string) );
console.log( decrypt(encrypt(string)) );




