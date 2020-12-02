/*

                                    //script


// x = '10';
// y = '20';

// function modifyNumber(value){
// 	if(value === 10){
// 		return "it is ten";
// 	} else if(value === 20){
// 		return 'it is twenty';
// 	} else{
// 		return 'nothing';
// 	}
// }

// x = modifyNumber(x);
// console.log(x);

// y = modifyNumber(y);
// console.log(y);

// a = [1,2,3,4,5];
// b = [6,7,8,9];

// function modifyArray(arr){
// 	myArray = arr.slice();

// 	for(i=0;i<myArray.length;i++){
// 		myArray[i] = Math.pow(myArray[i],2);
// 	}
// 	return myArray;
// }

// newA = modifyArray(a);
// console.log(newA, a);

// newB = modifyArray(b);
// console.log(newB, b);


// a = [10,20,30,40];

// for(i=a.length-1; i>=0; i--){
// 	console.log(a[i]);
// }


                                  //scopes

// Global; local

// var – variable;

// x = 10;

// function f(){
// 	y = 100;
// }

// f();

// console.log(x, y);

// x = 30;
// p = 200;

// function f1(){
// 	x += 10;
// 	console.log('function f1',x,p); // 40, 200
// }

// function f2(){
// 	x += 100;
// 	var y = 200;
// 	console.log('function f2',x,y,p); // 140, 200, 200
// }

// function diff(){
// 	var max = 10;
// 	var min = 1;
// 	result = max-min;
// }

// f1();
// f2();
// diff();

// console.log(x); // 140
// console.log(result);

// ----------

// Процесс разрешения переменной

// x = 10;

// function f1(){
// 	y = 0;

// 	f2();
// 	f3();

// 	function f2(){
// 		x = 3;
// 		p = 2;
// 	}

// 	function f3(){
// 		console.log(x,y,p); // 10, 0, 2
// 	}
// }

// f1();

// ----------

// function f1(){
// 	var p = 0;
// 	f2();

// 	function f2(){
// 		p = 0; // 500
// 		f3();
// 		f4();

// 		function f3(){
// 			p = 200;
// 			console.log('f3: '+p); //f3: 200
// 		}

// 		function f4(){
// 			p = 500;
// 			console.log('f4: '+p); //f4: 500
// 		}

// 		console.log('f2: '+p); //f2:  500
// 	}

// 	console.log('f1: '+p); //f1: 500
// }

// f1();


// -------
// Локальными переменными так же являются аргументы функции, если они передаются в качестве простых типов данных

// x = 10;

// function f1(x){
// 	x *= 100;
// 	console.log('x in function',x);
// }

// f1(100);

// console.log('x after function',x);


// -------
// Lexical environment & Scope

// x = 100;

// function foo(){
// 	var k = 'hello';
// 	f(250);

// 	function f(a){
// 		debugger;
// 		var z = 5;
// 		debugger;
// 		z = 10;
// 		debugger;
// 		console.log(a, z, k, x);
// 		debugger;
// 	}

// 	console.log(x);
// 	debugger;
// }

// foo();

// ------
// В какой момент создается scope функции?

// x = 0;

// f1(5);

// function f1(x){
// 	x = 200;
// 	f2(x);
// }

// function f2(b){
// 	console.log(x,b); // 0, 200
// }


// function foo(){
// 	console.log(arguments);
// }

// foo(true, 'string',1,2,3,[1,2,3]);

// function getSumm(){
// 	for(i=0, summ=0; i<arguments.length;i++){
// 		summ += arguments[i];
// 	}
// 	return summ;
// }

// res = getSumm(1,2,3);
// console.log(res);

// res2 = getSumm(4,5,6,7,8);
// console.log(res2);

// a = [1,2,3,4,5];
// b = [1,2,3,4,5,6];
// c = [1,2,3,4,5,6,7];
// d = [1,2,3,4,5,6,7,8,9];
// e = [1,2,3,4,5,6,7,9,10,11];

// function getMiddleElements(){
// 	console.log(arguments);

// 	var resultElement = [];

// 	for(i=0; i<arguments.length;i++){
// 		array = arguments[i];

// 		isEven = array.length%2 == 0 ? true : false;

// 		middleIndex = Math.ceil(array.length/2)-1;
// 		array = array.splice(middleIndex, isEven ? 2 : 1);

// 		resultElement = resultElement.concat(array);
// 	}

// 	return resultElement;

// }

// console.log( getMiddleElements(a,b,c,d,e) );

// list = [1,2,3,4];

// list.push(5);
// console.log(list);

// list.shift();
// console.log(list);

--------------------------------------------------------------*/



                                    /*ДЗ #5_1*/
/*
Написать функцию getMaxs(args), где args – любое количество массивов.
Функция должна вернуть максимумы всех переданных массивов в виде строки,
через разделитель '; '.*/

/*someArr=[1,2,15,17,27,32,-50,'sdfsdf'];
someArr1=[10,20,150,170,270,320,77];
someArr2=[3,942,19,17,85,18,220];
someArr4=[121,22,43, true, 4, undefined, 7776];
// Написать функцию getMaxs(args), где args – любое количество массивов.
// Функция должна вернуть максимумы всех переданных массивов в виде строки, через разделитель '; '.
function getMaxValue(args) {
    maxArrayValue=0;
    numberValues =[];
    for (i=0, k=0; i<arguments.length; k++, i++,numberValues.push(maxArrayValue)){

        if (typeof arguments[i]==='object') {

            for ( j = 0  ; j < arguments[k].length; j++) {

                if (maxArrayValue < arguments[k][j] && typeof arguments[k][j] === 'number') {
                    maxArrayValue = arguments[k][j] ;
                }
            }
        }
    }
    return (numberValues.join('; '))
}

console.log("Максимум каждого из массивов равен   "+getMaxValue(someArr,someArr1,someArr2,someArr4));*/



/*--------или так , но он не правельный и не работает---------*/

/*
var arr1 = [3, 5, 1];
var arr2 = [8, 9, 15];
var arr3 = [10, 365, 24];
var arr4 = [121,22,43, true, 4, undefined, 7776];
//var args = [...arr1, ...arr2, ...arr3];

function getMaxs(...args) {
    arrA=[];
    for (var i = 0; i < args.length; i++) {
        numMax = Math.max(...args[i]);
        //console.log(numMax)
        //return (numMax.join('; '))
        arrA[arrA.length]=numMax;

    }//console.log(arrA)
    return (arrA.join('; '))
}


//console.log( arrA.join('; ') );
console.log("Максимум каждого из массивов равен   "+ getMaxs( arr1,arr2,arr3,arr4));
*/
