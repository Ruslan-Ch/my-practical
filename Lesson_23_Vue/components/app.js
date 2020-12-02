Vue.component('wrapper', {
	data(){
		return {
			arr: ['Item 1', 'Item 2']
		}
	},
	template: `
		<div class="wrapper">
		<list :spisok="arr"></list>
		<action-box :source="arr"></action-box>
		</div>
	`
})

Vue.component('list', {
	props: {
		spisok: {
			default: ()=>[]
		}
	},
	template: `
		<div class="list">
			<ul>
				<li v-for="item in spisok">{{item}}</li>
			</ul>
		</div>
	`
})

Vue.component('action-box', {
	data(){
		return {
			textData: '',
			checked: false
		}
	},
	props: ['source'],
	methods: {
		getRandomData(){
			let randData = Math.floor(Math.random()*10),
				data = this.textData !== '' ? this.textData : randData;
			
			if(this.checked){
				this.source.push(data);
			} else{
				this.source.unshift(data);
			}
			this.clearData();
		},
		clearData(){
			this.textData = '';
			this.checked = false;
		}
	},
	template: `
		<div class="action-box">
			<input v-model="textData">
			<label>
				Press if push()
				<input type="checkbox" v-model="checked">
			</label>
			<button @click="getRandomData">Generate</button>
		</div>
	`
})

let app = new Vue({
	el: '.app',
	data: {}
})