// function Plane(){};

// Plane.prototype.takeoff = function(sidewind){
// 	let allowed = this.max__sidewind > sidewind ? 'allowed' : 'not allowed';
// 	return 'Takeoff for '+this.name+' is '+allowed;
// }

// Plane.prototype.landing = function(){return 'landing'};

// function Airline(name, max__sidewind, airline__mass, passengers){
// 	this.name = name;
// 	this.max__sidewind = max__sidewind;
// 	this.airline__mass = airline__mass;
// 	this.passengers = passengers;
// }
// Airline.prototype = Object.create(Plane.prototype);
// Airline.prototype.getMass = function(){
// 	return this.airline__mass + (this.passengers*70);
// }

// let Boeing737 = new Airline('Boeing737',17,50000,80);
// console.log(Boeing737);

// console.log( Boeing737.takeoff(15) );
// console.log( Boeing737.getMass() );

// function lightAirline(name, max__sidewind){
// 	this.name = name;
// 	this.max__sidewind = max__sidewind;
// }
// lightAirline.prototype = Object.create(Plane.prototype);

// let Extra330 = new lightAirline('Extra330',11);
// console.log(Extra330);
// console.log(Extra330.takeoff(15));

// ------

// function Car(){};

// Car.prototype.car = function(){return 'car'};
// Car.prototype.setMaxSpeed = function(maxspeed=300){
// 	this.__maxSpeed = maxspeed;
// }
// Car.prototype.getMaxSpeed = function(maxspeed){
// 	if(!this.__maxSpeed || maxspeed){
// 		this.setMaxSpeed(maxspeed);
// 	}
// 	return this.__maxSpeed;
// }

// function Audi(name){
// 	this.name = name;
// }
// Audi.prototype = Object.create(Car.prototype);

// function VW(name){
// 	this.name = name;
// }
// VW.prototype = Object.create(Car.prototype);

// let AudiRS = new Audi('AudiRS'),
// 	VWPassat = new VW('VWPassat');

// console.log(AudiRS);
// console.log(VWPassat);

// AudiRS.setMaxSpeed();

// console.log(AudiRS.getMaxSpeed(200) + VWPassat.getMaxSpeed());

// ES6

// Audi.prototype = Object.create(Car.prototype);

// class Car{
// 	constructor(typeOfCar, color){
// 		this.type = typeOfCar ? typeOfCar : 'hach';
// 		this.color = color ? color : 'black'
// 	}

// 	car = function(){return 'car'};

// 	setMaxSpeed = function(maxspeed=300){
// 		this.__maxSpeed = maxspeed;
// 	}

// 	getMaxSpeed = function(maxspeed){
// 		if(!this.__maxSpeed || maxspeed){
// 			this.setMaxSpeed(maxspeed);
// 		}
// 		return this.__maxSpeed;
// 	}
// }

// class Audi extends Car{
// 	constructor(name, typeOfCar, color){
// 		super(typeOfCar, color);
// 		this.name = name;
// 	}
// }

// let AudiRS = new Audi('AudiRS', 'sedan', 'red'),
// 	AudiTT = new Audi('AudiTT');

// console.log(AudiRS);
// console.log(AudiTT);

// -----

// class Human{
// 	run(){
// 		return this.name+' is running';
// 	}
// 	toString(){
// 		return this.name+', hello';
// 	}
// }

// class Regular extends Human{
// 	constructor(name){
// 		super();
// 		this.name = name;
// 	}
// }

// class Sport extends Human{
// 	constructor(name){
// 		super();
// 		this.name = name;
// 	}

// 	run(){
// 		return this.name+' is running fast!';
// 	}
// }

// let Ivan = new Regular('Ivan'),
// 	Anna = new Sport('Anna');

// console.log(Ivan.run());
// console.log(Anna.run());

// console.dir(Anna);

// // document.write([1,2,3,4]);
// document.write(Anna);
// document.write(Ivan);


// -----

// console.dir(document);

// let outer = document.querySelector('.outer');
// console.dir(outer);

// console.log(outer.className);


// setTimeout(function(){
// 	outer.classList.add('outer-three');
// }, 2000);

// setTimeout(function(){
// 	outer.classList.remove('outer-second');
// }, 4000);

// setTimeout(function(){
// 	console.log(outer.classList.contains('outer-second') );
// }, 6000);

// let link = document.querySelector('#link');
// console.dir(link);

// let linkId = document.getElementById('link');
// console.dir(linkId);

// let inners = document.getElementsByClassName('inner');
// console.dir(inners);


let inners2 = document.querySelectorAll('.inner');
console.dir(inners2);

function getRandomInt(max=250) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomColor(){
	return 'rgb('+getRandomInt()+','+getRandomInt()+','+getRandomInt()+')'
}

setTimeout(function(){}, 2000);

setInterval(function(){
	for(block of inners2){
		block.style.backgroundColor = getRandomColor();
	}
}, 100);


// -----

// let mathOperations = {
// 	'-': function(a,b){
// 		return a-b;
// 	}
// }

// function Math(){};

// Math.prototype.check = function(a,b,znak){
// 	mathOperations[znak](a,b);
// 	return;
// }

// let object = new Math();
// object.x = +prompt();

// object.check(x,y,znak);




                             /*-----------ДЗ 10_1-------------*/

/*
В документе мы имеем иерархию ul.root>li*3>ul>li*5 (emmet pattern https://docs.emmet.io/abbreviations/syntax/)
Написать скрипт, который добавит класс `last` всем последним li в группах
(необходимо почитать метод document.querySelectorAll())
Написать функцию setFirstItemClassName(level), где level - это номер уровня вложенности, в котором нужно
произвести изменения. Функция setFirstItemClassName должна установить первому тегу группы - класс `first-item`
* при добавлении классов - должен изменится цвет фона на красный(first) и зеленый(last), с анимацией - задержка 2
секунды*/

//работа студента

//D.Z. 10

// let lastLi = document.querySelectorAll('li:last-of-type');
//
// for (let li of lastLi) {
// 	setTimeout(function () {
// 		li.classList.add('last');
// 	},2000);
// }
// //variant 1
//
// // function setFirstItemClassName(level = 1) {
// //     if (level < 1 || level > 3) {
// //         return false;
// //     } else {
// //         let patern = 'document.querySelector(\'.root\')' + '.children[0]'.repeat(level) + '.classList.add(\'first-item\')';
// //     setTimeout(function () {
// //         eval(patern);
// //     }, 2000)
// //     }
// // }
//
// //variant 2
//
// function setFirstItemClassName(level = 1) {
// 	if (level < 1 || level > 3) {
// 		return false;
// 	} else {
// 		for (let i = 0, children = document.querySelector('.root').children.length; i < children; i++) {
// 			let patern = 'document.querySelector(\'.root\')' + `.children[${i}]` + '.children[0]'.repeat(level - 1)
// 				+ '.classList.add(\'first-item\')';
//
// 			setTimeout(function () {
// 				eval(patern);
// 			}, 2000)
// 		}
// 	}
// }
//
// setFirstItemClassName(2);


//моя работа без функции, но не соответствует условию


/*let elementsLast = document.querySelectorAll('ul > li:last-child');

    for (let elem of elementsLast){
        if (elem.children.length === 0){
            //console.dir(elem.children);
            elem.classList.add('last');
            setInterval(function () {
                elem.style.backgroundColor = 'green';
            },1000);
        }
    };


    let elementsFirst = document.querySelectorAll('ul > li:first-child');

    for (let elem of elementsFirst){
        if (elem.children.length === 0){
            //console.dir(elem.children);
            elem.classList.add('first-item');
            setInterval(function () {
                elem.style.backgroundColor = 'red';
            },2000);
        }
    };*/


//ниже то, что писала Катя

// let list = document.querySelector('.root');
// getLevel(4, list);
//
// function getLevel(level, element) {
//
//     if (level !== 1 && element.children.length > 0){
//         getLevel(level-1, element.children);
//     } else {
//         //element.querySelector('li').classList.add('first-class');
//         element.children[0].classList.add('first-class');
//     }
// }



//моя работа с функцией, но не совсем правильно наверное


let elementsLast = document.querySelectorAll('ul > li:last-child');

for (let elem of elementsLast){
    if (elem.children.length === 0){
        //console.dir(elem.children);
        elem.classList.add('last');
        setInterval(function () {
            elem.style.backgroundColor = 'green';
        },1000);
    }
};



let elementsFirst = document.querySelectorAll('ul > li:first-child');

setFirstItemClassName(0);
function setFirstItemClassName(level){
    for (let elem of elementsFirst){
        if (elem.children.length === level){
            //console.dir(elem.children);
            elem.classList.add('first-item');
            setInterval(function () {
                elem.style.backgroundColor = 'red';
            },2000);
        }
    }
};

let addClassHel1 = document.querySelector('.last');

setInterval(function () {
    addClassHel1.dataset.hel1 = 'hel2';
},3000);

setInterval(function () {
    delete addClassHel1.dataset.hel1;
},5000);


let classRemove = document.querySelector('.root');

setInterval(function () {
    classRemove.classList.toggle('class-remove')
},3000);

/*setInterval(function () {
    /!*document.querySelector('.root').remove();*!/
    classRemove.remove();
},10000);*/

