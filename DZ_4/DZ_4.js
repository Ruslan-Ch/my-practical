// arr = new Array(10);

// for(i=0, min=-20, max=20;i<arr.length;i++){
// 	arr[i] = Math.floor(Math.random() * (max - min) ) + min;
// }
// console.log(arr);

// for(i=0; i<arr.length; i++){
// 	arr[i] -= 10;
// 	arrB[arrB.length] = 10;
// 	console.log(arrB);
// }

// console.log(arr);
// console.log(arrB);

//В массиве вырезать центральный элемент.
//Если длина массива четная, вырезать два элемента, которые можно считать центральными.
// [1,2,3,4,5,6]  [1,2,3,4,5,6,7]

// isEven = arr.length%2 == 0 ? true : false;
// middleIndex = Math.ceil(arr.length/2) - 1;
// final = arr.splice(middleIndex, isEven ? 2 : 1);
// console.log(final);

//push, pop
// arr.push(20, 30);
// console.log(arr);

// console.log(arr.push(40, 50, 60));
// console.log(arr);

// console.log('pop');
// arr.pop();
// console.log(arr);

// console.log(arr.pop());
// console.log(arr);

//shift == pop, unshift == push

// arr.unshift(100,200);
// console.log(arr);

// console.log(arr.unshift(300));

// arr.shift();
// console.log(arr);

// console.log(arr.shift());

//join

// arr = arr.join(' ');
// console.log(arr);

//document.write( '<table><tr><td>'+arr.join('</td></tr><tr><td>')+'</td></tr></table>' );


//functions
//
// }x = 50;
// // y = 70;
//
// // getPerson('Dima', 20);
// // getPerson('Anna', 'Pavlova');
// // getPerson('Alena', 'Pavlovna',30);
//
// // function getPerson(name, surname='Krasina', age=100){
// // 	// surname += '_Ivaniv';
// // 	console.log('Hello, '+name+' '+surname+' is '+age);

// console.log(name, surname);

// a = [1,2,3,4,5];
// modify(a);

// b = [6,7,8,9,10];
// modify(b);

// function modify(myArray){
// 	console.log(myArray);
// 	for(i=0; i<myArray.length; i++){

// 		myArray[i] *= 10;
// 		myArray[i] = Math.pow(myArray[i], 2);

// 		myArray[i] = modifyElement(myArray[i]);

// 		console.log(myArray[i]);
// 	}
// 	console.log('----');
// }

// j = 50;
// j = modifyElement(j);
// console.log(j);

// function modifyElement(value){
// 	value *= 10;
// 	value = Math.pow(value, 2);
// 	return value;
// }

/*arrayA = renderArray(+prompt('Enter A length'), -40);
console.log('arrayA', arrayA);

arrayB = renderArray(+prompt('Enter B length'));
console.log('arrayB', arrayB);

function renderArray(arrayLength, min=-20, max=30){
    array = new Array(arrayLength);
    for(i=0; i<arrayLength; i++){
        array[i] = Math.floor(Math.random() * (max - min) ) + min;
    }
    return array;
}*/

/*getPerson('Alena', 'Pavlovna',30);

getPerson('Dima', );
getPerson('Anna', 'Pavlova');
getPerson('Alena', 'Pavlovna',30);

function getPerson(name, surname='Krasina', age=100) {
    surname += '_Ivaniv';
    console.log('Hello, ' + name + ' ' + surname + ' is ' + age);
}
getPerson('Alena', 'Pavlovna',30);*/



                                        /*Д #4_1*/

/* 1)В массиве заполненном рандомными значениями произвести такую замену:
1 элемент поменять с 2
3 элемент поменять с 4
5 элемент поменять с 6
и тд
Если массив непарный - последний элемент не трогать.
было 1 2 3 4 5 6, должно стать: 2 1 4 3 6 5*/


/*let n = prompt('Введите число для создания массива с этим количеством чисел','');
while (isNaN(n)) {
    n = +prompt('vvedi CHISLO', '');
}
let arr=[];
for (i=0, min=-20, max=70; i<n; i++) {
    arr[i] = Math.round(Math.random() * (max - min)) + min;
}
console.log(arr);

for(i=0; i<arr.length-1; i+=2){
    tmp = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = tmp;
}
console.log(arr);*/

        /*-----------или так---------*/

/*let n = prompt('Введите число для создания массива с этим колличеством чисел','');
while (isNaN(n)) {
    n = +prompt('vvedi CHISLO', '');
}
let arr=[];
let arr1=[];
for (i=0, min=-20, max=70; i<n; i++){
    arr[i]= Math.round(Math.random() * (max-min))+min;
}
console.log(arr);

for(i=1,j=0; i<arr.length; i=i+2){
    j=arr[i];
    arr[i]=arr[i-1];
    arr[i-1]=j;
}
console.log(arr);*/



/*
2) В массиве заполненном рандомными числами:
4.2.1 Вывести элементы массива, которые больше среднего арифметического

4.2.2 Вывести в консоль индексы элементов массива, значение которых лежит в указанном пределе.
    Предел вводится с клавиатуры как A, B

4.2.3 Удалить повторяющиеся элементы из массив, оставить массив уникальных значений
*/

/*4.2.1 Вывести элементы массива, которые больше среднего арифметического*/

/*let n = prompt('Введите число для создания рандомного массива с этим количеством чисел','');
while (isNaN(n)) {
    n = +prompt('vvedi CHISLO', '');
}
let arr=[];
for (i=0, min=-20, max=70; i<n; i++) {
    arr[i] = Math.round(Math.random() * (max - min)) + min;
}
console.log(arr);

sum=0;
for(i=0; i<arr.length; i++){
    sum = sum + arr[i];
    sumMidl =sum / arr.length;
}
console.log(sumMidl);

arr1=[];
for(i=0; i<arr.length; i++){
    if (arr[i] > sumMidl){
        arr1[arr1.length]=arr[i];
    }
}
console.log(arr1);*/


/*4.2.2 Вывести в консоль индексы элементов массива, значение которых лежит в указанном пределе.
    Предел вводится с клавиатуры как A, B*/


/*let n = prompt('Введите число для создания рандомного массива с этим количеством чисел','');
while (isNaN(n)) {
    n = +prompt('vvedi CHISLO', '');
}
a = +prompt('Укажите начальное значение A предела элемента массива');
while(isNaN(a)) {
    a = +prompt('A is not a number');
}
b = +prompt('Укажите конечное значение B предела индесов массива (B > A) ');
while(isNaN(b)) {
    b = +prompt('B is not a number');
}

while(b <= a) {
    b = +prompt('enter B > A!');
}
let arr=[];
for (i=0, min=-20, max=70; i<n; i++) {
    arr[i] = Math.round(Math.random() * (max - min)) + min;
}
console.log(arr);

console.log('начальное значение предела A =  ' + a);
console.log('конечное значение предела B =  ' + b);

for (i = 0; i < arr.length; i++) {
    if (arr[i] > a && arr[i] < b){
        //arr[i] == i;

        console.log('number    ' + arr[i], '   index   ' + i);
    }
}*/



/*4.2.3 Удалить повторяющиеся элементы из массив, оставить массив уникальных значений*/

/*
arr = [10, 5, 10, -1, 5, 34, -1, 12, -1];
console.log( arr);

for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            console.log( arr[i]);
            removed = arr.splice(i, 1);
        }
    }
}
console.log( arr);*/



                          /*4_2*/

/*Написать функцию, которая принимает как аргумент(параметр) два массива и сравнивает
суммы всех ЧИСЛОВЫХ элементов. Тот массив, сумма которого большая – должен вернутся функцией.
    Пример:
a = [1,2,3, 'hello',4,5] => summA = 15
b = [1,2,3, true, 4, undefined, 6] => summB = 16
if(summA < summB) => return b*/


/*
var a = [1,2,3, 'hello',4,5]; //15
var b = [1,2,3, true, 4, undefined, 6]; //16

var arr = someArray(a, b);

function someArray(a, b) {
    var sumA = 0;

    for ( i = 0; i < a.length; ++i)
        if (Object.prototype.toString.call(a[i]) === '[object Number]') {
            sumA = sumA + a[i];
        }
    console.log('сумма чисел в массиве а   =  ' + sumA);

    var sumB = 0;

    for( i = 0; i < b.length; ++i)
        if (Object.prototype.toString.call(b[i]) === '[object Number]'){
            sumB = sumB + b[i];
        }
    console.log('сумма чисел в массиве b   =  ' + sumB);
    {
        arrMaxSumm = (sumA > sumB) ? a : b;
    } return arrMaxSumm;

    /!*    if( a > b) return a;
        else return b;
    }*!/

}
//console.log (someArray(a, b));
console.log('массив, сумма чисел которого большая    ' + arrMaxSumm);*/
