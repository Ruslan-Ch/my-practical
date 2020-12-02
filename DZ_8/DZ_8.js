
/*
// 'use strict';

// The this, references is not related to scope, it depends on the calling context.

// obj = {
//       x: 10,
//       y: 20,
//       inner: {
//             x: 20,
//             z: 30
//       },
//       foo2: {
//             k: 23,
//             p: 13
//       }
// };
// console.log(obj);

// function createNewObj(obj){
//       let newObject = {};
//       return fillObject({},obj);
// }
// console.log( createNewObj(obj) );

// function fillObject(newObject, obj){
//       // debugger;
//       for(let key in obj){
//             if(typeof obj[key] === 'object'){
//                   let innerObj = obj[key];
//                   fillObject(newObject, innerObj);

//             } else{
//                   newObject[key] = obj[key];
//             }
//       }
//       return newObject;
// }

// this;


// let
// user1 = {
//       name: 'User 1',
//       age: 18,
//       getName: getUserName
// },
// user2 = {
//       name: 'User 2',
//       age: 19
// };

// user2.getName = user1.getName;

// console.log(user1);
// console.log(user2);


// function getUserName(){
//       console.log('Контекст вызова функции;',this);
//       console.log(this.name+', hello');
//       console.log(this.age+', age');
// }

// user1.getName();
// user2.getName();


// getUserName();


// alert('hello');


// let example = {
//       name: 'example',
//       func: f1,
//       funcSecond: f2
// }

// function f1(){
//       console.log('f1', this);
// }

// function f2(){
//     console.log('f2', this);
// }

// f1();

// console.log('------');

// example.func();
// example.funcSecond();


// let
//       obj = {
//             x: 10,
//             y: 20,
//             z: {
//                   first: 'hello',
//                   second: true
//             },
//             o: 'string',
//             i: 40,
//             summ: getSumm,
//             myFunc(){
//                   console.log(this.x);
//             },
//             // myFunc: function(){
//             //       console.log(this.x);
//             // }
//       },
//       second = {
//             a: 10,
//             b: 20,
//             func: getSumm
//       };

// function getSumm(){
//       console.log(this);
//       let summ = 0;

//       for(let key in this){
//             if(typeof this[key] === 'number'){
//                   summ += this[key];
//             }
//       }
//       return summ;
// }

// console.log( obj.summ() );
// console.log( second.func() );

// console.log( 'global function', myFunc() );


// obj.myFunc();

// obj.myFunc();

// console.log(this);

// alert(this);


// var x = 10;

// function foo(){
//       console.log(this);
//       console.log(this.x);
// }

// foo();

// let
//       user1 = {
//             weight: 50,
//             smoking: true
//       },
//       user2 = {
//             weight: 100,
//             smoking: false
//       };

// user1.func = runningSpeed;
// user2.func = user1.func;


// function runningSpeed(){
//       console.log(this);
//       let speed = this.weight*2;

//       speed = this.smoking ? speed+20 : speed;
//       return speed;
// }

// console.log( user1.func() );
// console.log( user2.func() );


// let list = [1,2,3,4];

// list.push(20);

// let
//       user1 = {
//             name: 'User 1'
//       },
//       user2 = {
//             name: 'User 2'
//       },
//       user3 = {};

// console.log(user1);
// console.log(user2);
// console.log(user3);

// user1.__proto__.ZZZ = 300;


// user1.surname = 'surname';

// Math.pow();


let Parent = {
    name: 'Papa',
    surname: "Ivanov",
    getName: function(){
        return this.name;
    },
    getSurname: function(){
        return this.surname;
    }
};

// console.log(Parent);


// console.log( Parent.getName() );


let child = Object.create(Parent);

child.name = 'Petr';
child.age = 25;

// child = {
//       x: 10,
//       y: 20
// };

// console.log(child);

// console.log( child.getName() );
// console.log( child.getSurname() );

let list = [1,2,3];
list.push(20, 100, 200);


Array.prototype.myPush = function(){
    for(let i=0;i<arguments.length;i++){
        this[this.length] = arguments[i]+' HELLO';
    }
    return this.length;
}
list.myPush(30, 100, 200);
list.myPush(100);

console.log(list);
------------------*/



               /*------------ ДЗ 8.1  --------------------*/

/*Имеем функцию getPerson(name, from, to) которая возвращает объект {name: name, age: Math.random()}
Создать массив из 5 таких объектов. Найти средний возраст и самого старшего человека.
Вынести людей с одинаковым именем в отдельный массив.*/

/*let arrPerson = [
    {name: 'Ivan'},
    {name: 'John'},
    {name: 'Olga'},
    {name: 'Petr'},
    {name: 'John'},
    {name: 'Ivan'},
];

function getPerson(users, from = 1, to = 99) {
    for (let i = 0; i < users.length; i++){
        users[i].age = Math.round(Math.random() * (to - from)) + from;
    };
    return users;
};
console.log('возврат объекта с рандомными возрастами   ' , getPerson(arrPerson));
console.log("---------");


//--средний возраст--
function finaleList(list) {
    let middleAge;
    for (let i = 0, summ = 0; i < list.length; i++){
        summ += list[i].age;
        middleAge = Math.round(summ/list.length);
    };
    return middleAge;
};

console.log('средний возраст  ' + finaleList(arrPerson));

//---самый старший---
function oldPerson(list){
    let maxOldPerson;
    let nameMaxOldPerson;
    let maxAgePerson = list[0].age;
    for (let i = 0; i < list.length; i++){//console.log(list[i].name)
        if((list[i].age) >= maxAgePerson){
            maxAgePerson = list[i].age;
            nameMaxOldPerson = list[i].name;
        }
    };
    return `name: "${nameMaxOldPerson}", age: "${maxAgePerson}"`;
};

console.log('самый старший   ', oldPerson(arrPerson));

function f(list) {
    let result = [];
    let res = [];
    for (let i = 0; i < list.length; i++){
        if (!result.includes(list[i].name)) {
            result.push(list[i].name);
        } else {
            res.push(list[i].name);
        };
    };
    return res;
};

console.log('люди с одинаковыми именеми  ', f(arrPerson));*/


/*------------ ДЗ 8.1  -или так Мах-------------------*/

/*
function GetPerson(name, from, to){
    let min=from,
        max=to;
    this.name=name;
    this.age=Math.round(Math.random()*(max - min) + min);
    return this
}

objectsArray=[
    new GetPerson('Dog',40,80),
    new GetPerson('Rabbit',20,80),
    new GetPerson('Dog',1,15),
    new GetPerson('Cat',1,20),
    new GetPerson('Fox',1,10),
    new GetPerson('Dog',20,80)
];



for(i=0,elder=0,sameNameObjects=[],ageSumm=0,averageAge=0; i<objectsArray.length ; i++){
    anchor:for ( key in objectsArray[i]){
        if(typeof objectsArray[i][key]==="number"){
            ageSumm=ageSumm+objectsArray[i][key];
            if (objectsArray[i][key]>elder){
                elder=objectsArray[i][key]
            }
        }
        else if ( key ==='name'){
            for (k=0; k<objectsArray.length; k++){
                if (objectsArray[k][key] === objectsArray[i][key] && i !== k ){
                    sameNameObjects.push(objectsArray[i]);
                    continue anchor
                }
            }
        }

    }
    averageAge=Math.round(ageSumm/objectsArray.length);
}
console.log(ageSumm+'       сумма всех возростов');
console.log(objectsArray);
console.log(averageAge+"      средний возраст");
console.log(sameNameObjects);
console.log(elder+'        самый взрослый чувак')*/
