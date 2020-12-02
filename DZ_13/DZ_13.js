// (argument1, argument2, ... argumentN) => {
//   // тело функции
// }

// let summ = function(a,b){
// 	return a+b;
// }
// console.log(summ(2,3));

// let summArrow = (a,b) => {
// 	let summInner = (a+b)*10;
// 	console.log(summInner);
// };

// summArrow(2,3);

// let arr = [1,2,3,4],
// 	firstElement = function(arr){
// 		console.log(arr[0]);
// 	},
// 	firstElementArrow = arr => console.log(arr[0]);

// firstElement(arr);
// firstElementArrow(arr);

// let mapResult = arr.map(
// 	function(item, index, arr){
// 		console.log(item, index, arr);
// 		return item+10;
// 	}
// )
// console.log(mapResult);

// let mapResultArrow = arr.map(item => item+10);
// console.log(mapResultArrow);


// let users = [
// 	{ type: 'admin', name: 'Ivan Ivanov', age: 10},
// 	{ type: 'user', name: 'Petr Petrov', age: 11},
// 	{ type: 'admin', name: 'Aleksey Prokashev', age: 12},
// 	{ type: 'moderator', name: 'Maxim Ponomarenko', age: 13},
// 	{ type: 'user', name: 'Anna Pavlova', age: 14},
// ];

// let oldFilter = users.filter(
// 	function(item, index, arr){
// 		return item.age > 12;
// 	}
// )
// console.log(oldFilter);

// let filteredUsers = users
// 					.filter( item => item.type === 'admin')
// 					.map( item => item.name = item.name+', Hello')
// 					.forEach( item => {
// 							document.write('<p>'+item+'<p>');
// 						}
// 					);
// console.log(filteredUsers);

// let arr = [1,2,3,4,5],
// 	oldSumm = 0;

// for(let i=0, oldSumm=0; i<arr.length; i++){
// 	oldSumm += arr[i];
// }
// console.log(oldSumm);

// let summ = arr.reduce(
// 	function(summResult,item,index,arr){
// 		return summResult += item;
// 	});

// console.log(summ);

// let users = [
// 	{ type: 'admin', name: 'Ivan Ivanov', age: 10},
// 	{ type: 'user', name: 'Petr Petrov', age: 11},
// 	{ type: 'admin', name: 'Aleksey Prokashev', age: 12},
// 	{ type: 'moderator', name: 'Maxim Ponomarenko', age: 13},
// 	{ type: 'user', name: 'Anna Pavlova', age: 14},
// ];

// {
// 	admin: 2,
// 	moderator: 1,
// 	user: 2
// }

// let reducedUsers = users.reduce( (userTypes, user) => {
// 	// debugger;
// 	// userTypes[user.type] = userTypes[user.type] ? userTypes[user.type]+1 : 1;
// 	userTypes[user.type] = (userTypes[user.type] || 0) + 1;
// 	return userTypes;
// },{});

// console.log(reducedUsers);

// let arr = [12,7,8,12,24,0];

// let max = arr.reduce((maxElem, element) => {
// 	maxElem = element > maxElem ? element : maxElem;
// 	return maxElem;
// });

// console.log(max);

// let user = {
// 	name: 'Anna',
// 	getNameAnonymous: function(){
// 		console.log(arguments);
// 		console.log(this);
// 		return this.name;
// 	},
// 	getNameArrowNonCHild: () => {
// 		console.log(arguments);
// 	},
// 	getNameArrow: function (){
// 		console.log(this);

// 		return () => {
// 			console.log(arguments);
// 			return this.name;
// 		}
// 	}
// }

// console.log( user.getNameAnonymous('hello') );
// // user.getNameArrowNonCHild('hello');

// let getNameArrow = user.getNameArrow('hello');

// console.log(getNameArrow());

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.pets = [
            {name: 'dog'},
            {name: 'cat'},
            {name: 'fox'}
        ]
    }

    getPets = function(){
        // this.pets.forEach(
        // 	function(pet, index, arr){
        // 		console.log(pet.name, this.name);
        // 	}
        // );

        this.pets.forEach(pet => console.log(pet.name, this.name, arguments));
    }

}

let Anna = new Person('Anna', 23);
console.log(Anna);

Anna.getPets('hello');











