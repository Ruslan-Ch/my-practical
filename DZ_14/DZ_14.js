
// // pure and impure functions

// let float = x => parseFloat(x); //  float & double https://habr.com/ru/post/331814/
// console.log( float(4) );
// console.log( float(4) );
// console.log( float(4) );

// let getRandomNumber = (x) => Math.random()*x;
// console.log(getRandomNumber(4));
// console.log(getRandomNumber(4));
// console.log(getRandomNumber(4));

// // Пример нечистой функции из жизни:
// let userExist = (login, pass) => {
// 	// идем в базу, смотрим есть ли такой login, pass
// 	// есть ли такой юзер в Cookie
// 	...
// 	return status;
// }

// // Еще один пример нечистой функции:
// let addToCart = (cart, product) => {
// 	cart.items.push(product);
// 	return cart;
// 	// модифицируем объект cart. Здесь есть побочный эффект для cart.
// 	// Использование console.log() внутри функции тоже делает ее нечистой так, как она не создает side эффекты,
// 	// изменение консоли, например.
// }

// let person = {
//     age: 23,
//     sex: 'female',
//     getName: function(){
//         return this.name;
//     }
// };

// Object.defineProperty(person, 'name', {
// 	value: 'Anna'
// });

// Object.defineProperty(person, 'surname', {
// 	value: 'Ivanova',
// 	enumerable: false
// });


// person.name = 'Olga';
// delete person.name;

// console.log(person);

// for(key in person){
// 	console.log(key);
// }

// console.log('=====');

// let woman = Object.create(person);
// woman.hairColor = 'red';
// woman.name = 'Inna';

// console.log(woman);

// let table = document.createElement('table'),
// 	thead = document.createElement('thead'),
// 	tr = document.createElement('tr'),

// 	tbody = document.createElement('tbody'),
// 	trBody = document.createElement('tr');

// document.body.appendChild(table);
// table.appendChild(thead);
// thead.appendChild(tr);

// table.appendChild(tbody);
// tbody.appendChild(trBody);

// for(key in woman){
// 	if(woman.hasOwnProperty(key)){
// 		let th = document.createElement('th'),
// 			td = document.createElement('td');
// 		th.innerText = key;
// 		td.innerText = woman[key];

// 		tr.appendChild(th);
// 		trBody.appendChild(td);
// 	}
// }

// class Person{
// 	constructor(name,age){
// 		this.name = name;
// 		this.age = age;
// 	}

// 	getName(){
// 		return this.name;
// 	}
// }

// let Anna = new Person('Anna', 23);
// console.log(Anna);

// console.log( Anna.getName() );

// for(key in Anna){
// 	console.log(key);
// }


////перед этим раскоментировать строку 31-37
// class User{
//     constructor(name='Alina',age=23){
//         this.name = name;
//         this.age = age;
//     }
//
//     getSurname(){
//         !this.surname ? this.setSurname() : this.surname;
//         return this.surname;
//     }
//
//     setSurname(surname='Ivanova'){
//         this.surname = surname;
//     }
//
//     getUserInfo(){
//         renderUserTable(this);
//     }
// }
//
// let Anton = new User('Anton');
//
// console.log(Anton.getSurname());
// Anton.getUserInfo();
// console.log(Anton);
//
// function renderUserTable(user){
//     let table = document.createElement('table'),
//         thead = document.createElement('thead'),
//         tr = document.createElement('tr'),
//
//         tbody = document.createElement('tbody'),
//         trBody = document.createElement('tr');
//
//     document.body.appendChild(table);
//     table.appendChild(thead);
//     thead.appendChild(tr);
//
//     table.appendChild(tbody);
//     tbody.appendChild(trBody);
//
//     for(key in user){
//         let th = document.createElement('th'),
//             td = document.createElement('td');
//         th.innerText = key;
//         td.innerText = user[key];
//
//         tr.appendChild(th);
//         trBody.appendChild(td);
//     }
// }

                     /*-----------ДЗ 14_1-------------*/

// Для пустого объекта employee﻿ необходимо создать два свойства:
//     Первое свойство getUser будет возвращать строку this.getFirstName() + " " + this.getLastName().
//     Если у целевого объекта нет полей firstName и lastName, то их необходимо запросить у пользователя через prompt().
//     Свойство getUser нельзя удалить, но можно переопределить.
//     Второе свойство renderUser отрисует на странице в теге <ul> все поля целевого объекта. Свойство renderUser нельзя
// удалить и переопределить.
//
//     Далее, создаем объект User, который будет унаследовать все свойства объекта employee.
//     Для объекта User вызываем методы getUser и renderUser. Метод renderUser должен вывести на страницу поля объекта,
//     которые не являются функциями.



let employee﻿ = {};

//     Первое свойство getUser

Object.defineProperty(employee﻿, 'getUser', {
    value: function() {
        if (!this.firstName && !this.lastName){
            let firstName = prompt('Введите Ваше имя', "");
            let lastName = prompt('Введите Вашу фамилию', "");
            employee﻿.firstName = firstName;
            employee﻿.lastName = lastName;
        }
        console.log(this.firstName + " " + this.lastName);
        return this.firstName + " " + this.lastName;

    },
    writable: true,
    enumerable: true,
    configurable: true
});

//     Второе свойство renderUser

Object.defineProperty(employee﻿, 'renderUser', {
    value: function() {
        for(key in employee﻿){
            let ul = document.createElement('ul');
            if (typeof (employee﻿[key]) !== "function"){
                ul.innerText = `${key}: ${employee﻿[key]}`;
                document.body.appendChild(ul);
            }
        }
    },
    writable: false,  // в конце sdelat false
    enumerable: true,
    configurable: false
});


//employee﻿.getUser = 'Проверка на writable: true';
//delete employee﻿.getUser;  //'Проверка на configurable: false'

//employee﻿.renderUser = 'Проверка на writable: false';
//delete employee﻿.renderUser;

console.log(employee﻿);

//объект User, который будет унаследовать все свойства объекта employee.

let User = Object.create(employee﻿);


//     Для объекта User вызываем методы getUser и renderUser.

User.getUser();
User.renderUser();








