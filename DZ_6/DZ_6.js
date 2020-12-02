

/*                      /!*!// Practice*!/


// 2. Написать функцию, которая получает три аргумента: два числа и функцию.
// 	Произвести вызов переданной функции с двумя аргументами числами.
// 	doFunction(2, 3, power); – в ответе должны получить 8, как в 2 в 3 степени.


// function doFunction(){

// 	result = [];

// 	for(i=0, functions=[], numbers=[]; i<arguments.length; i++){
// 		if(typeof arguments[i] === 'function'){
// 			functions.push(arguments[i]);
// 		} else if(typeof arguments[i] === 'number'){
// 			numbers.push(arguments[i]);
// 		}
// 	}

// 	for(j=0; j<functions.length; j++){
// 		result[j] = functions[j](numbers);
// 	}

// 	return result;

// }

// function summ(values){
// 	for(i=0, summValue=0;i<values.length;i++){
// 		summValue += values[i];
// 	}
// 	return summValue;
// }

// function multiply(values){
// 	for(i=0, multiplyValue=1;i<values.length;i++){
// 		multiplyValue *= values[i];
// 	}
// 	return multiplyValue;
// }

//console.log( doFunction(1,2,3,4,summ,5,6,7,multiply,8,9,true,'string123') );



// 3. Реализовать функцию 'copy(list)' по копированию массива.

// function copy(list){
// 	// arr = list.slice();
// 	arr = [...list];
// }

// list = [1,2,3,4,5];
// copy(list);

// list[0] = 100;

// console.log(arr);
// console.log(list);

// var arr = ['will', 'love'];
// var data = ['You', ...arr, 'spread', 'operator'];
//console.log(data);

// arr[0] = 'HELLO';

// function foo(...all){
// 	console.log(all);
// }

// foo(1,2,3,4,5,6,7,8);

// 4. Предусмотреть возможность передачи вторым аргументом функции.
// 	При копировании массива – функция применяется к каждому элементу копируемого массива.
// 	newList = copy(list, function(value){ return value*10; })

// function copy(list,func){
// 	arr = [...list];

// 	if(func){
// 		for(i=0;i<arr.length;i++){
// 			arr[i] = func(arr[i]);
// 		}
// 	}

// 	return arr;
// }


// list = [1,2,3,4];
// firstList = copy(list);
//console.log(firstList);

//secondList = copy(list, function(value){ return value*10; });
//console.log(secondList);*/







                 /*script*/

/*// Всплытие - hoisting
// console.log('Всплытие - hoisting');

// x = 10;
// function f(y){ // f.LexicalEnvironment   f.scope
// 	// x = undefined;
// 	debugger;
// 	// console.log(x,y); // x = undefined потому, что Х уже создан в f.LexicalEnvironment, но значение ему еще не присвоено

// 	var x;
// 	debugger;
// 	// console.log('in function: ',x,y);

// 	// function innerFunc(){
// 	// 	y;
// 	// }
// 	innerFunc();

// }

// function innerFunc(){
// 	y;
// }

// f(32);
// console.log(x);

// console.log('-----');

// Замыкание – closure
// console.log('Замыкание – closure');

// a = 100;
// outer(200);

// function outer(b){

// 	//b=200;

// 	var c = 300;
// 	inner(400);

// 	function inner(d){
// 		//d=400
// 		c = 600;
// 		b = 700;
// 		console.log(a,b,c,d); //closure - Замыкание – это функция вместе со всеми внешними переменными, которые ей доступны.
// 		debugger;
// 	}
// }

// console.log('-----');


// Anonymous function

// var result = function(){
// 	console.log(arguments);
// 	return 'hello';
// }

// console.log( result() );


// ES5 array functions
// list = [1,2,3,4,5,,'string',true,10,'10'];

//forEach(cb) – callback function
//cb(item, index, arr)

// list.forEach(
// 	function(element, index){
// 		console.log('element',element);
// 	}
// );

// console.log(list);
// console.log('------');

// for(i=0;i<list.length;i++){
// 	console.log(list[i]);
// }


//filter(item, index, arr)

// filterResults = list.filter(
// 	function(item,index,arr){
// 		return typeof item === 'number' || item>2;
// 	}
// )

// console.log('list',list);
// console.log('filterResults',filterResults);


// map

// list.forEach(
// 	function(item,index,array){
// 		array[index] = item*10;
// 	}
// )

// mapResults = list.map(
// 	function(item,index,array){
// 		return item*10;
// 	}
// )

// console.log('list',list);
// console.log('mapResults',mapResults)
// console.log('foreachResults',foreachResults);


//functions chain
// list = [1,2,3,4,5,,'string',true,10,'10'];

// 1. Пройтись по всем и преобразовать к типу number и не трогать list
// 2. Убрать все, которые оказалась isNaN и меньше 2
// 2. Выведу на страничку в тег <p>

// finalArray = list
// 				.map(
// 					function(item){     //(item, index, arr) по умолчанию для этого метода
// 						return Number(item);
// 						// return String(item);
// 					}
// 					// [1, 2, 3, 4, 5, empty, NaN, 1, 10, 10]
// 				)
// 				.filter( // возвращает массив всех элементов, подходящих под условие
// 					function(item){   //(item, index, arr) по умолчанию для этого метода
// 						return !isNaN(item) && item !== '' && item>2;
// 					}
// 					//[3, 4, 5, 10, 10]
// 				)
// 				.forEach(function(item){   //(item, index, arr) по умолчанию для этого метода
// 					document.write('<p>'+item+'</p>');
// 				})

// console.log(finalArray);*/





                  /*------------ ДЗ 6.1  --------------------*/

/*Дана функция:

    function f (a, b, c) {
        function sum (a, b) {
            return a + b;
        }
    }

Перепишите её следующим образом:
1.Если аргументы a и b не переданы, они равны по умолчанию 2 и 3 соответсвенно.
2.Если аргумент c передан и он является функцией, то он выполняется после вызова функции sum.
3.Функция f должны возвращать результат функции аргумента c, если он есть, либо результат функции sum.*/


/*number1 = 70;
number2 = 50;

function secondFunc() {
    return 80
}

function f (a =2, b = 5, c) {
    function sum(a, b ) {
        return a + b
    }
    if(typeof c!== 'function') {
        return sum(a, b)
    }
    else return sum(a,b)+secondFunc()
}

console.log("это с третьим аргументом функцией----->    "+f(number1,number2,secondFunc));
console.log("это без----->    "+f(number1,number2));
console.log("это без аргументов вообще----->    "+f())*/


           /*---------   6.2    --------*/

/*Дано массив строк array. В каждой необходимо найти позицию совпадения match.
Читаем метод indexOf() –
https://www.w3schools.com/jsref/jsref_indexof.asp, https://learn.javascript.ru/array-methods#poisk-v-massive
Все совпадения сохранить в строку через разделитель.

match ="hello";
array = ["1234hello", "hellohd;lfmg", "45yu89egrhellowegojih", "dfhghello", ",bnsdklb"];
результат: "4, 0, 9, 4"*/

/*---------  в  6.2  нужно было использовать метод перебора forEach   --------*/
/*
match ="hello";
array = ["1234hello", "hellohd;lfmg", "45yu89egrhellowegojih", "dfhghello", ",bnsdklb"];
function helloIndex(arr) {
    var arrA=[];
    for (i =0; i < arr.length; i++ ){
        var itemCoincidences = arr[i].indexOf(match);
        arrA[arrA.length] = itemCoincidences;
    }
    return arrA;
}

var ollCoincidences = helloIndex(array)
    .filter(
        function(item){
            return  item >=0;
        }
    )
console.log('"' + (ollCoincidences.join(', ')) + '"');*/


                         /*---------   или так 6.2    --------*/


/*match ="hello";
array = ["1234hello", "hellohd;lfmg", "45yu89egrhellowegojih", "dfhghello", ",bnsdklb"];
function helloIndex(array) {
    for (var i=0, matchArr=[], result=0;  i < array.length; i++){
        temp = array[i] ;
        if (temp.indexOf(match) > -1){
            matchArr.push(temp.indexOf(match))
        }
        result = matchArr.join()     // Можно обойтись и без это строчки, и выводить сразу console.log(matchArr.join())
    }
    return result;
}
console.log(helloIndex(array));*/

