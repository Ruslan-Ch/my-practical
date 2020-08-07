
/*
5
// "use strict";

var list = [1,2,3,undefined,4,true,'hello123',5],
    numbers = [500,2,3,4,5];

// every/some

var evertResult = list.every(function(item){
    return typeof item === 'number';
})
//console.log(evertResult);

var evertResult = numbers.every(function(item){
    return typeof item === 'number';
})
//console.log(evertResult);

var evertResult = list.some(function(item){
    return typeof item === 'number';
})
//console.log(evertResult);


// reduce
// reduce(function(prev, item, index, arr){}, prevValue)

var reduceResult = list.reduce(function(summ,item,index,arr){
    //console.log('in reduce', item);
    if(typeof item !== 'number') return;
})
//console.log(reduceResult);

// console.log('----');

// for(i=0; i<list.length; i++){
// 	console.log('in for', list[i]);
// 	if(typeof list[i] !== 'number') break;
// }

// var arrays = [ [1,2,3], [4,5,6], [7,8,9] ];
// var finalArray = arrays.reduce(function(final, array){
// 	debugger;
// 	return final.concat(array);
// },[]);

// console.log(finalArray);


// es6 variables: let, const

//const DOMAINNAME = 'hello.org';

// let x = 10;

// function f(){
// 	//const helloWorld = 'anna';
// 	//debugger;
// 	//console.log(y); // undefined потому, что она уже была заявлена в lexical env
// 	let y;
// 	console.log(y,x);
// }
// f();
// debugger;
//console.log(helloWorld);
//console.log(y); // error

// Блочную область видимости создают только функции
// if(true){
// 	//console.log(z);
// 	let z;
// }
//console.log('z:', z); // отдаст 200;

// Objects 🥳

// let person = {
// 	name: 'Oleg',
// 	age: 23,
// 	friends: ['Anna', 'Ivan'],
// 	child: {
// 		name: 'Anna',
// 		age: 3
// 	},
// 	getName(age){
// 		console.log('Person name: ' + person.name);
// 		console.log('Person age: '+age);
// 	}
// };
// console.log(person);

// person.name = 'Anna';
// delete person.age;

// person.getName(23);


// console.log(person);


// let arr = [100,2,3];
// console.log(arr);

// arr[10] = 100;

// arr.gogogo = 'hello';

let age = new Number(10);
//console.dir(age);

let surname = new String('Ivanov');
//console.dir(surname);

let isMarried = new Boolean(false);
//console.dir(isMarried);

let myUndefined = undefined;
//console.dir(myUndefined);



var guests = [
    {name: 'John Doe', age: 30},
    {name: 'Lily Bush', age: 20},
    {name: 'William Gate', age: 25}
];

//console.log(guests.indexOf());

var arr2 = [1,2,3,4];
//console.log(arr2.indexOf(3));


// let student = {
// 	name: 'Alena',
// 	age: 18,
// 	surname: 'Ivanova'
// };
// console.log(student);


// function renderObject(object, stopKey){

// 	let stopImport = true;

// 	do{
// 		key = prompt('Enter key');

// 		if(key.indexOf(stopKey) != -1){
// 			stopImport = !stopImport;
// 			return;
// 		}

// 		value = prompt('Enter value for key:'+key);
// 		object[key] = value;

// 		/!*student[surname] = 'Ivanova';*!/

// 	} while(stopImport);

// }

// renderObject(student, '!');

// function summ(a,b){
// 	return a+b;
// }

// let math = {
// 	'+': summ,
// 	'-': function(a,b){
// 		return a-b;
// 	},
// 	calc(x,y,znak){
// 		return math[znak](x,y);
// 	},
// 	ex: function(){
// 		console.log('ex');
// 	}
// }

//console.log ( math.calc(10,5,'+') );
//console.log ( math.calc(10,5,'-') );


// for(myKey in math){
// 	// console.log(myKey);
// 	//console.log( math[myKey]() )
// 	// math['+']
// 	// math['ex']
// }

// arr = [1,2,3,4];

// arr[0] => 1;

// var result = function(){
// 	return 'in function';
// };

// console.log( result() );
5
*/



              /*------------ ДЗ 7.1  --------------------*/

/*Создать объект с такой структурой:
    obj = { x: 10, y: 20, inner: { x: 20, z: 30 }, foo2: { k: 23, p: 13 } }
Написать функцию convert(obj), которая получает аргументом obj. Функция должна вернуть новый объект:

    newObj = {
        x: 20,
        y: 20,
        z: 30,
        k: 23,
        p: 13
    }
 ------- */

                         /* --7.1--  */

/*
obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20, z: 30
    },
    foo2: {
        k: 23, p: 13
    }
}
function createNewObj(obj){
      let newObject = {};
      return fillObject({},obj);
}
console.log( createNewObj(obj) );

function fillObject(newObject, obj){
      // debugger;
      for(let key in obj){
            if(typeof obj[key] === 'object'){
                  let innerObj = obj[key];
                  fillObject(newObject, innerObj);

            } else{
                  newObject[key] = obj[key];
            }
      }
      return newObject;
}*/


                               /* --7.2--  */
/*
Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 объекта и возвращает новый,
который состоит из свойств обоих объектов (склеить). Если свойство повторяется,
то взять значение второго объекта

assignObjects({ x: 10, y: 20 }, { z: 30 }) -> { x:10, y:20, z: 30 }
assignObjects({ x: 10 }, { x: 20, y: 30 }) - > { x:20, y: 30 }*/


/*
obj1 = {
    x: 10,
    y: 20
};

obj2 = {
    z: 30
};

obj3 = {
    x: 10
};

obj4 = {
    x: 20,
    y: 30
};

function assignObjects(objects1, objects2){
    let newObject = {};
    for ( let key in objects1){
        newObject[key] = objects1[key];
    };
    for ( let key in objects2){
        newObject[key] = objects2[key];
    };
    return newObject;
};

console.log(assignObjects(obj1, obj2));
console.log(assignObjects(obj3, obj4));*/

                             /* --7.2--или так короче  */

/*obj1 = {
    x: 10,
    y: 20
};

obj2 = {
    z: 30
};

obj3 = {
    x: 10
};

obj4 = {
    x: 20,
    y: 30
};

function assignObjects(objects1, objects2){
    let clone = Object.assign({}, objects1, objects2);
    return clone;
};

console.log(assignObjects(obj1, obj2));
console.log(assignObjects(obj3, obj4));*/

                                  /* --7.3--  */
/*Адаптировать функцию assignObjects() - из 2го задания - под неопределенное количество объектов.
assignObjects(obj1, obj2, ....., objn);*/

/*obj1 = {
    x: 10,
    y: 20
};

obj2 = {
    z: 30
};

obj3 = {
    x: 10
};

obj4 = {
    x: 20,
    y: 30
};

obj5 = {
    x: 25,
    y: 36
};

obj6 = {
    t: "hello"
};

obj7 = {
    t: 'world'
};

obj8 = {
    name: 'John',
    age: 30
};

function assignObjects(...args){
    let clone = Object.assign({}, ...args);
    return clone;
}

let arr = {...obj1, ...obj2,...obj3,...obj4,...obj5,...obj6,...obj7,...obj8};
console.log('Проверка  ' , arr);

console.log(assignObjects(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8));*/

                                  /* --7.3--или так длинее  */


/*
obj1 = {
    x: 10,
    y: 20
};

obj2 = {
    z: 30
};

obj3 = {
    x: 10
};

obj4 = {
    x: 20,
    y: 30
};

obj5 = {
    x: 25,
    y: 36
};

obj6 = {
    t: "hello"
};

obj7 = {
    t: 'world'
};

obj8 = {
    name: 'John',
    age: 30
};

function assignObjects(...args){
    let newObject = {};
    for (var i = 0; i < args.length; i++){
        for ( let key in args[i]){
            newObject[key] = args[i][key];
        };
    };return newObject;
}

let arr = {...obj1, ...obj2,...obj3,...obj4,...obj5,...obj6,...obj7,...obj8};
console.log('Проверка  ' , arr);

console.log(assignObjects(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8));*/
