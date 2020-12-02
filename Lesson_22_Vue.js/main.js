// let app = new Vue({
// 	el: '#app', // ссылка на элемент
// 	data: {
// 		x: 10,
// 		y: 200,
// 		list: [1,2,3,4],
// 		message: 300,
// 		info: {
// 			adress: 'Mechnikova',
// 			code: 24426,
// 			city: 'Kiev'
// 		},
// 		aloha: {}
// 	}
// })

// console.log(app);

// setTimeout(()=>{
// 	// app.new = 'text';
// 	// document.body.append(app.new);
// 	Vue.set(app.aloha, 'new', 'hello');
// },1000);

// let app2 = new Vue({
// 	el: '#app2',
// 	data: {
// 		className: 'active',
// 		appearance: 'transition: 0.2s; color: red;',
// 		value: 10
// 	}
// })

// setInterval(()=>{
// 	app2.value = Math.floor(Math.random()*10);
// },1000)

// let app3 = new Vue({
// 	el: '#app3',
// 	data: {
// 		seen: true
// 	}
// })

// let app4 = new Vue({
// 	el: '#app4',
// 	data: {
// 		item: [1,2],
// 		list: [
// 			{
// 				text: 'Hello, 🐶'
// 			},
// 			{
// 				title: 'Hello, 🐹'
// 			},
// 			{
// 				text: ''
// 			},
// 			{
// 				text: 'Hello, 🦁'
// 			},
// 			{
// 				text: 'Hello, 🐻'
// 			}
// 		],
// 		friends: [
// 			{
// 				text: 'Hello, 🐶'
// 			},
// 			{
// 				title: 'Hello, 🐹'
// 			},
// 		]
// 		,
// 		mass: {
// 			x: 10,
// 			y: 20,
// 			z: 30
// 		}
// 	}
// })

// let app5 = new Vue({
// 	el: '#app5',
// 	data: {
// 		counter: 3,
// 		list: [8,2,9],
// 		randomClasses: ['dog','cat','lion'],
// 		newClass: ''
// 	},
// 	methods: {
// 		calculate(value){
// 			return value*10;
// 		},
// 		increment(myEvenet, x, y){
// 			console.log(myEvenet);
// 			console.log(x, y);
// 			this.counter++;
// 		},
// 		randomClass(){
// 			let random = this.randomClasses[Math.floor(Math.random()*this.randomClasses.length)];
// 			console.log(random);
// 			this.newClass = random;
// 		}
// 	}
// })

// let app6 = new Vue({
// 	el: '#app6',
// 	data: {
// 		message: 'Hello',
// 		switcher: false,
// 	},
// 	methods: {
// 		onInput(event){
// 			console.log(event.target.value);
// 			this.message = event.target.value;
// 		}
// 	}
// })

// let appData = {
// 	x: 60,
// 	y: 200,
// 	example: 'text',
// 	inner: {
// 		z: 120
// 	}
// }

// function onClick(){
// 	console.log(this.x);
// }

// let app7 = new Vue({
// 	el: '#app7',
// 	data: appData,
// 	methods: {
// 		onClick,
// 		getCustomValue(){
// 			return this.x + this.y + this.inner.z;
// 		}
// 	},
// 	beforeCreate(){
// 		console.log('before Create');
// 		console.log(this);
// 		// debugger;
// 	},
// 	created(){
// 		// нет привязки к el
// 		console.log('created');
// 		console.log(this);
// 		this.x = 100000;
// 		// debugger;
// 	},
// 	beforeMount(){
// 		console.log(this);
// 		console.log('before Mount');
// 		// debugger;
// 	},
// 	mounted(){
// 		console.log(this);
// 		console.log('mounted');
// 		// debugger;
// 	},
// 	beforeUpdate(){
// 		console.log('before Update');
// 		// debugger;
// 	},
// 	updated(){
// 		console.log('updated');
// 		// debugger;
// 	},
// 	beforeDestroy(){
// 		console.log('before Destroy');
// 	},
// 	destoyed(){
// 		console.log('destoyed');
// 	}
// })

// app7.$destroy();
