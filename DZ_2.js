/*
// &&
console.log('&&');

x = 10;
y = 20;

if(x>0 && y>0){
    console.log('YES: x>0 && y>0');
} else{
    console.log('NO: x<=0 or y<=0');
}

// ||
console.log('||');
x = 10;
y = 20;

if(x>0 || y>0){
    console.log('YES: x>0 or y>0');
} else{
    console.log('NO: x<=0 and y<=0');
}

// while(){...}
console.log('while(){...}');
x=0;
while(x<=10){
    console.log(x++);
}


// do{...} while()
console.log('do{...} while()');
x=0;
do{
    console.log(x++);
} while(x<=10)

//for(params; condition; increment)
console.log('FOR summ:');
summ = 0;
for(i=0; i<10; i++){
    console.log(summ += i);
}

//for(params; condition; increment)
console.log('FOR multiply:');
multiply = 1;
for(i=1; i<10; i++){
    console.log(multiply *= i);
}

//Array
console.log('Array:');
numbers = [1,2,3,4,5];

console.log(numbers);
console.log('numbers[0]:', numbers[0]);
console.log('numbers[20]:',numbers[20]);
console.log('numbers[0]+numbers[1]:', numbers[0]+numbers[1]);
console.log('numbers.length:', numbers.length);
console.log('numbers[numbers.length-1]', numbers[numbers.length-1]);

//Array creating via constructor;
console.log('Array creating via constructor:');

arr = new Array(20);
console.log('new Array(20):', arr);

arr2 = new Array(20, 30);
console.log('new Array(20, 30):', arr2);*/

                          //--------------DZ 2------------

                                /*#2_1
                                Ввести с клавиатуры 2 числа `a` и `b` (где `a <<< b`).
                                Запустить цикл перебора от `a` до `b`.
                                    Вывести в консоль квадраты чётных чисел.сел.*/

/*number1 = +prompt('number1');
number2 = +prompt('number2');
for (let i = number1; i <= number2; i++) {
    if (i % 2 == 0) {
        console.log(i**2);
    }
}*/

/*-----------или так---------*/

/*a = +prompt('enter number a');
while(isNaN(a)) {
	a = +prompt('a is not a number');
}
b = +prompt('enter number b');
while(isNaN(b)) {
	b = +prompt('b is not a number');
}
for (a; a <= b; a++) {
	if ( !( a%2 )) {
		console.log( a, Math.pow(a, 2))
	}
}*/
                              /*#2_2
                              Заставить пользователя ввести с клавиатуры число.
                                  Проверить число на простоту.*/


/*let number = prompt ('введите что-то цифровое', '');
if (isNaN(number)) {
    document.write('вы ввели не только цифры');
} else if (number>=2 && number % 2 !=0 && number % 5 !=0 || number==2 || number==5) { //это не правильная формула
    document.write (number, 'это простое число');
    console.log(number, 'это простое число');
} else {
    document.write (number, 'это сложное число');
    console.log (number, 'это сложное число');
}*/

/*-----------или так---------*/

/*a = +prompt('enter number a');
while(isNaN(a)) {
    a = +prompt('a is not a number');
}
isPrime = true;
if ( a <= 1) {
    //isPrime = false;
    isPrime = !isPrime;
} else {
    for ( i = 2, isPrime = true; i < a && isPrime; i++) {
        if ( !( a % i )) {
            isPrime = !isPrime;
        }
    }
}

//final = isPrime ? 'is' : 'isn`t'

if (isPrime === true) {
    final = a + ' is prime';
} else {
    final = a + ' isn`t prime';
}

//final = isPrime === true ? a + ' is prime' : a + ' isn`t prime';

//console.log( a, is, 'prime number')
console.log( final)*/


                              /*#2_3

                              Посчитать сумму простых чисел от 0 до 250.*/


/*let n = 250;
let sum = 0;
nextPrime: // это переменная
    for (let i = 2; i <= n; i++) { // Для всех i...

        for (let j = 2; j < i; j++) { // проверить, делится ли число..
            if (i % j == 0) continue nextPrime; // не подходит, берём следующее
        }
        sum = sum +i;
    }
console.log( sum );*/

/*-----------или так-запись можно короче-это для понимания массивов-------*/

/*primes = [];
primes.length(20);
//или то же самое
primes = new Arrey(20); // 20 -это если знаем длину массива*/

       //---------

/*primes = new Array();
for (i = 2, isPrime = true; i <= 250; i++) {

        isPrime = true;
        for (j = 2; j < i && isPrime; j++) {
            if ( !( i % j )) {
                isPrime = !isPrime;
            }
        }
        if (isPrime) {
            primes [primes.length] = i;
        }
    }
    console.log(primes);

    for (i = 0, summ = 0; i < primes.length; i++) {
        summ += primes [i];
    }
console.log('summ', summ);*/


                                 /*#2_4

                             Вывести n чисел из ряда Фибоначчи, где n - вводится с клавиатуры*/

/*fib_n = +prompt('Вывести n чисел из ряда Фибоначчи');
fib_arr = [0,1,1,];

for ( fib_n; fib_n > 3; fib_n--) {
    fib_last = fib_arr[fib_arr.length-1];
    fib_prev = fib_arr[fib_arr.length-2];
    fib_new = fib_last + fib_prev;
    fib_arr[fib_arr.length] = fib_new
}
console.log(fib_arr);*/


                                 /*#2_5

                             Ввести с клавиатуры a и b, где а меньше b. Запустить цикл перебора от a до b с шагом h
                             (ввод с клавиатуры).

                             Посчитать сумму факториалов* чисел которые попадаются во время перебора.*/




/*a = +prompt('enter number a');
while(isNaN(a)) {
    a = +prompt('a is not a number');
}

b = +prompt('enter number b (b > a) ');
while(isNaN(b)) {
    b = +prompt('b is not a number');
}

while(b <= a) {
    b = +prompt('enter b > a!');
}

h = +prompt('enter step h ');
while(isNaN(h)) {
    h = +prompt('h is not a number');
}

console.log('----0----');
arr1=[];
arr = [];
for (a; a <= b; a +=h ){
    console.log(a);
    arr[arr.length]=a;
}

console.log(arr);

for (i=0; i < arr.length; i++) {
    x = 1;
    y = 2;
    for ( j = 0; j < arr[i]; j++, y++) {
        if (y <= arr[i]){
            x = x * y
        }
    }
    console.log(x);
    arr1[arr1.length]=x;
}
console.log('--------------------------------');
console.log(arr1);

for (i=0, factorialSumm=0; i<arr1.length;i++){
    factorialSumm+=arr1[i]
}

console.log(factorialSumm);*/



                                  /*#2_6

                             Выведите столбец четных чисел в промежутке от 0 до 100. (в document в виде таблицы)*/

/*for (i =2, tbody = ''; i <= 100; i+=2){
    tbody += '<tr><td>' + i + '</td></tr>';
}
document.write('<table>' + tbody + '</table>');*/




