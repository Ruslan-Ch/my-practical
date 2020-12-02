Vue.component('front-end',{
	data(){
		return {
			title: 'Hello, form title'
		}
	},
	methods: {
		onClick(){
			this.title += '!';
		},
		removeItem(key){
			this.number.splice(key,1);
		}
	},
	props: {
		text: {
			type: [String, Number],
			default: 'Default Example'
		},
		number: {},
		another: {
			type: Boolean
		}
	},
	template: `
	<div class="example">
		<h1>{{title}}</h1>
		<h2>{{text}}</h2>
		<button @click="onClick">Click me</button>
		<input v-model="text">
		<ul>
			<li v-for="(item, key) in number" @click="removeItem(key)">{{item}}</li>
		</ul>
	</div>`,
	mounted(){
		console.log(this);
	}
})

Vue.component('btn-temp',{
	props: {
		title: {},
		type: {},
		onClick: {
			type: Function,
			default: ()=>{console.log("hasn't function")}
		}
	},
	methods: {
		onEventClick(){
			this.onClick && this.onClick();
			console.log('additional logic');
		}
	},
	template: `<button @click='onEventClick' :class="type">{{title}}</button>`
})

let app = new Vue({
	el: '.app',
	data: {
		ex: 'Hello, form app',
		list: [1,2,3]
	},
	methods:{
		onClick(){
			console.log('click');
		}
	}

})








