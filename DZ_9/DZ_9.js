
// //Lesson 9 | (for .. in) and (for .. of)

// // var arr = [3, 5, 7];
// // arr.foo = "hello";
// // console.log(arr);

// // console.log('-----');

// // for (var i in arr) {
// //   console.log(i); // logs "0", "1", "2", "foo"
// // }

// // console.log('-----');

// // for (var i of arr) {
// //   console.log(i); // logs "3", "5", "7"
// //   // logs value of only numerical key "3", "5", "7"
// // }


// // object, this, Object.create()
// let Parent = {
// 	name: 'Father',
// 	age: 50,
// 	weight: 70,
// 	smoking: true,
// 	runningSpeed(){
// 		let isSmoking = this.smoking ? 3 : 2,
// 			speed = (this.age + this.weight) / isSmoking;

// 		return 'Iconming params for '+this.name+': age = '+this.age+'; weight = '+this.weight+'; smoking coeff = '+isSmoking+'. FINAL SPEED = '+speed;
// 	}
// }

// // let Child = Object.create(Parent);

// // console.log(Parent);
// // console.log(Parent.runningSpeed());


// // let Child = Object.create(Parent);
// // Child.name = 'Anna';
// // Child.smoking = false;

// // Child = {
// // 	weight: 100,
// // 	age: 95
// // }

// // console.log(Child);
// // console.log(Child.runningSpeed());

// function Cat(name, age=2, color){
// 	this.myName = name;
// 	this.myAge = age;
// 	this.myColor = color;
// 	this.ded = 'Petro';
// }

// Cat.prototype.XYZ = 'hello'
// Cat.prototype.getName = function(){
// 	return 'My name '+ this.myName;
// }

// let Barsik = new Cat('Barsik', 10, 'white');
// console.log(Barsik);

// let Anton = new Cat('Anton', undefined,'black');
// console.log(Anton);

// Anton.surname = 'Ivanov';

// console.log(Anton.getName());
// console.log(Barsik.getName());

// // console.log(getName());

// // var list = [];
// // 	list.length = 10;

// // var list2 = new Array(10);

// Anton.__proto__.HELLO = 'HELLO HELLO';


// function GrandPa(){};

// GrandPa.prototype.getBornPlace = function(){
// 	console.log('my Born Place');
// }

// function Parent(name, age){
// 	this.name = name;
// 	this.age = age;
// }

// Parent.prototype = Object.create(GrandPa.prototype);

// Parent.prototype.getName = function(){
// 	return this.name;
// }
// Parent.prototype.getAge = function(){
// 	return this.age;
// }
// Parent.prototype.XYZ = 'Hello';

// let Child = new Parent('Anna',25);

// console.log(Child);
// console.log(Child.getName());
// console.log(Child.getAge());

// Child.getBornPlace();

// function GrandPa(){};
// GrandPa.prototype.getGrandPa = function(){};
//
//
// function ParentFunc(name, age){
//     this.name = name;
//     this.age = age;
// }
// ParentFunc.prototype = Object.create(GrandPa.prototype);
//
// let Child_Func = new ParentFunc('Anna',25);
// console.log(Child_Func);
//
// ParentFunc.prototype.getName = function(){};
// ParentFunc.prototype.getAge = function(){};
//
//
// class ParentClass extends GrandPa{
//     constructor(name, age){
//         super();
//         this.name = name;
//         this.age = age;
//     }
//
//     getName(){
//         return this.name;
//     };
//
//     getAge(){
//         return this.age;
//     };
// }
//
// let Child_Class = new ParentClass('Anna',25);
// console.log(Child_Class);



                         /*-----------ДЗ 9_1-------------*/

// Создать функцию-конструктор SuperMath. Добавить к экземпляру метод - check(obj),
// параметр obj которого имеет свойства X, Y, znak.
// Пример обекта: obj = { X:12, Y:3, znak: “/”}, возможные варианты znak=> + - / * %.
// При вводе znak нужно сделать проверку корректности ввода на возможные математические действия.
// Метод check должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У.
// Если - да, сделать математическое действие znak(которое описано в прототипе), иначе - запросить ввод
// новых данных через метод input() с прототипа функции-конструктор SuperMath.
//
// p = new SuperMath();
// p.check(obj); // --> no p.input() -> 3 prompt -> считает


/*function SuperMath(X, Y, znak) {
    this.X = X;
    this.Y = Y;
    this.znak = znak;
}

SuperMath.prototype.input = function (){

    this.X = +prompt('enter number X');
    while(isNaN(this.X)) {
        this.X = +prompt('X is not a number');
    }
    this.Y = +prompt('enter number Y');
    while(isNaN(this.Y)) {
        this.Y = +prompt('Y is not a number');
    }
    this.znak = prompt('enter znak');
    while (this.znak!=='+'&& this.znak!=='-' && this.znak!=='/'&& this.znak!=='*'&& this.znak!=='%' ){
        this.znak=prompt('znak должен быть одним из математических знаков, например  +, -, *, /, %')
    }
    if (this.znak === '+'){
        return res = this.X + this.Y;
    } else if (this.znak === '-'){
        return res = this.X - this.Y;
    } else if (this.znak === '/'){
        return res = this.X / this.Y;
    } else if (this.znak === '*'){
        return res = this.X * this.Y;
    } else if (this.znak === '%'){
        return res = this.X % this.Y;
    }
}

SuperMath.prototype.check = function (){ // лучше так добавлять функции к экземплярам
    let res;
    let isConfirmation = confirm("Хотите произвести действие  " + this.znak + "  c Х и У?");
    if (!isConfirmation){
        return p.input();
    } else if (this.znak === '+'){
        return res = this.X + this.Y;
    } else if (this.znak === '-'){
        return res = this.X - this.Y;
    } else if (this.znak === '/'){
        return res = this.X / this.Y;
    } else if (this.znak === '*'){
        return res = this.X * this.Y;
    } else if (this.znak === '%'){
        return res = this.X % this.Y;
    }
}

let p = new SuperMath(12,3,'+');
console.log(p);
console.log('check=    ' +p.check());*/














