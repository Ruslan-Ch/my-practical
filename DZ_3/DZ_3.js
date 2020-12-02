/*


// Генерация массива arr с рандомными значенями
arr = new Array(10);
for(i=0, max = 45, min = -20; i<arr.length; i++){
    arr[i] =   * (max - min)) + min;
}
console.log(arr);

// Поиск элемента с минимальным значением
for(i=0, min=arr[0]; i<arr.length; i++){
    if(arr[i]<min){
        min = arr[i];
    }
}
console.log(min);

// Генерация массива arr2 с рандомными значенями
arr2 = new Array(10);
for(i=0, max = 45, min = -20; i<arr2.length; i++){
    arr2[i] = Math.floor(Math.random() * (max - min)) + min;
}
console.log(arr2);

// Генерация нового массива res, который состоит из элементов массива arr и arr2. Недеструктивный метод.
res = arr.concat(arr2);
console.log(res);

// Генерация нового массива res2, который состоит из элементов массива arr,
// со второго порядкового элемента по четвертый. Недеструктивный метод.
res2 = arr.slice(2,4);
console.log(res2, arr);

// Генерация нового массива res3, который состоит из всех элементов массива arr. Недеструктивный метод.
res3 = arr.slice();
console.log(res3, arr);

// Вырезаем пять элементов с массива arr, начиная со второго элемента. Деструктивный метод.
arr.splice(2,5);
console.log(arr);

// Меняем порядок элементов массива arr. Деструктивный метод.
arr.reverse();
console.log(arr);
*/


            /*----ДЗ 3----*/

/*                  #3_1
Создать массив А размерностью n. Заполнить случайными числами любом диапазоне.
    Например A = [23,1,2,52,5,34,23,6,246,436];
1. проверить все числа на простоту, и найденные простые числа сохранить в массив B.
2. найти максимальное число и минимальное число. */


/*let n = prompt('Введите число для создания рандомного массива с этим количеством чисел','');
while (isNaN(n)) {
    n = +prompt('vvedi CHISLO', '');
}
let arr=[];
let arr1=[];
for (i=0, min=-20, max=70; i<n; i++){
    arr[i]= Math.round(Math.random() * (max-min))+min;
}
console.log(arr);

anchor:
    for (i=0; i<arr.length ; i++){
        if (arr[i]<2) continue anchor;
        for (j=2; j<arr[i] ; j++){
            if (arr[i] % j == 0) continue anchor;
        }


        console.log('prime numbers is ' + arr[i]);
        arr1[arr1.length]= arr[i];
    }
console.log(arr1);
console.log('------');
for (i=0, maxValue = arr1[0] ; i<arr1.length; i++){
    if (arr1[i] > maxValue) {
        maxValue = arr1[i]
    }
}
console.log('max value is  ' + maxValue);

for (i=0, minValue = arr1[0] ; i<arr1.length; i++){
    if (arr1[i] < minValue) {
        minValue = arr1[i]
    }
}
console.log('min value is  ' + minValue);*/


   /*                                         3_2
            Элементы массива между min -- max записать в массив B. Массив взять с Задания #3_1.*/


/*let n = prompt('Введите число для создания рандомного массива с этим колличеством чисел','');
while (isNaN(n)) {
    n = +prompt('vvedi CHISLO', '');
}
let arr=[];
let arr1=[];
for (i=0, min=-20, max=70; i<n; i++){
    arr[i]= Math.round(Math.random() * (max-min))+min;
}
console.log(arr);


for (i=0, maxValue = arr[0] ; i<arr.length; i++){
    if (arr[i] > maxValue) {
        maxValue = arr[i]
    }
}
console.log('max value is    ' + maxValue);

for (i=0, minValue = arr[0] ; i<arr.length; i++){
    if (arr[i] < minValue) {
        minValue = arr[i]
    }
}
console.log('min value is     ' + minValue);

maxElemIndex = arr.indexOf(maxValue, 0);     //почитай про метод indexOf
minElemIndex = arr.indexOf(minValue, 0);

console.log('индекс самого большого числа в массиве составляет    ' + maxElemIndex);
console.log('индекс самого маленького числа в массиве составляет   ' + minElemIndex);

console.log ('это я поверяю, можно ли присвоенную переменную указывать в качестве индекса массива, если показывает индекс макса числа, значит всё правильно            ' + maxElemIndex);

// if (arr[maxElemIndex] > arr[minElemIndex]) -------------------- обрати внимание что если ссылаться так как указано сдесь то фактически выражение принимает вид ----->
// ----> if (arr[arr[i - индекса максимального знач] > arr[arr[i -  индекс минимального значения]), тоесть переменная maxElemIndex, minElemIndex  ----->
// принимает не только число как индекс а и саму форму записи maxElemIndex != только какомуто числу, а maxElemIndex = arr[i - какоето число которое мы определили методом indexOf]

if (maxElemIndex > minElemIndex) {
    arr1= arr.splice(minElemIndex+1, ((maxElemIndex - minElemIndex)-1));
}
else (arr1= arr.splice(maxElemIndex+1, ((minElemIndex - maxElemIndex)-1)));

console.log(arr1);*/

                                                /* #3_3
                  В массиве A поменять местами min и max. Массив взять c Задания #3_2.*/


/*let n = prompt('Введите число для создания рандомного массива с этим количеством чисел','');
while (isNaN(n)) {
    n = +prompt('vvedi CHISLO', '');
}
let arr=[];
for (i=0, min=-20, max=70; i<n; i++){
    arr[i]= Math.round(Math.random() * (max-min))+min;
}
console.log(arr);

console.log('----');

arrLen = arr.length;

resultMin = arr[0];
resultMax = arr[0];
indexMin = 0;
indexMax = 0;

for (i = 0; i < arrLen; i++) {
    if (resultMax < arr[i]) {
        resultMax = arr[i];
        indexMax = i;  //Также можно использовать подход с определением индекса indexMin = arr.indexOf(resultMin); но он медленнее
    } else if (resultMin > arr[i]) {
        resultMin = arr[i];
        indexMin = i;
    }
}

arr[indexMin] = resultMax;
arr[indexMax] = resultMin;
console.log('min value is     ' + resultMin);
console.log('indexMin  is     ' + indexMin);
console.log('max value is     ' + resultMax);
console.log('indexMax  is     ' + indexMax);

console.log(arr);

arrReversMinMax = arr[i];

if (indexMax > indexMin) {
    arrReversMinMax = arr.splice(indexMin+1, ((indexMax - indexMin)-1));
} else if (indexMax < indexMin) {
    arrReversMinMax = arr.splice(indexMax+1, ((indexMin - indexMax)-1));
}

console.log(arrReversMinMax);*/


                                                /*
                                                ДЗ #3_4
               Перевернуть массив, т.е. если был массив 1, 5, 6, 2, 4 -- то мы должны получить 4, 2, 6, 5, 1.
               Нельзя использовать стандартный метод reverse().
               Постарайтесь не использовать дополнительный массив.
               Оригинальный массив А сохранять не нужно (т.е. он должен перевернуться).*/


/*
let n = prompt('Введите число для создания рандомного массива с этим количеством чисел','');
while (isNaN(n)) {
    n = +prompt('vvedi CHISLO', '');
}
let arr=[];
for (i=0, min=-20, max=70; i<n; i++){
    arr[i]= Math.round(Math.random() * (max-min))+min;
}
console.log(arr);

console.log('----');


for ( i = 0; i < arr.length / 2 ; i++)
{
    arrReverse = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = arrReverse;
}
console.log(arr);*/


                                        /*----или так -----*/

/*
let n = prompt('Введите число для создания рандомного массива с этим колличеством чисел','');
while (isNaN(n)) {
    n = +prompt('vvedi CHISLO', '');
}
let arr=[];
for (i=0, min=-20, max=70; i<n; i++){
    arr[i]= Math.round(Math.random() * (max-min))+min;
}
console.log(arr);

for (i=0, k=0, j=arr.length-1 ; i<=arr.length/2; i++, j--){
    k=arr[i];
    arr[i]=arr[j];
    arr[j]=k;

}
console.log(arr);*/
