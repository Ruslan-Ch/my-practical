// console.log('before Promise');

// let getNumber = new Promise(
// 	(response, reject) => {
// 		let number = 10;

// 		setTimeout(()=>{
// 			console.log('in promise');
// 			number >=10 ? response(number) : reject(number+100);
// 		},1000);
// 	}
// )

// getNumber
// 	.then(
// 		(data) => {
// 			console.log('first response', data);
			
// 			let random = -20;
// 			return new Promise((sResponse,sReject)=>{
// 				random>0 ? sResponse(random) : sReject(random);
// 			})
// 		},
// 		// (data) => {
// 		// 	console.log('first reject', data);
			
// 		// 	return new Promise((secondResponse, secondReject)=>{
// 		// 		secondReject(data)
// 		// 	})
// 		// },
// 	)
// 	.finally(
// 		() => {
// 			console.log('finally after first then');
// 		}
// 	)
// 	.then(
// 		(data) => {
// 			console.log('second response', data);
// 		},
// 		(data) => {
// 			console.log('second reject', data);
// 		},
// 	)
// 	.finally(
// 		() => {
// 			console.log('finally after second then');
// 		}
// 	)
// 	.then(
// 		() => {
// 			console.log('third response');
// 		},
// 		// () => {
// 		// 	console.log('third reject');
// 		// },
// 	)
// 	.catch(
// 		(data) => {
// 			console.log('error', data);

// 			return new Promise( (cathResponse, catchReject) => {
// 				catchReject(data);
// 			} )
// 		}
// 	)
// 	.finally(
// 		() => {
// 			console.log('finally after catch');
// 		}
// 	)
// 	.then(
// 		(data) => {
// 			console.log('respnse after catch', 90)
// 		},
// 		(data) => {
// 			console.log('reject after catch', 90)
// 		}
// 	)

// console.log('after Promise');


let getFile = (method, file) => {
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.open(method,file,true);
		xhr.send();

		xhr.addEventListener('readystatechange', () => {
			if(xhr.readyState === 4 && xhr.status <= 400){
				resolve(JSON.parse(xhr.responseText));
			}
		});

	});
};


let getUsers = document.querySelector('#getUsers');
	
	getUsers.addEventListener('click',() => {
		getFile('GET', 'users.json')
			.then(
				(data) => {
					console.log(data);
					return new Promise( (response, reject) => {
						data.users.length !== 0 ? response(data.users) : reject();
					} )
				}
			)
			.then(
				(data) => {
					return getUsersFunc(data);
				}
			)
			.then(
				(users) => {
					users.forEach(user => {
						user.info = `My position is: ${user.position}`;
						console.log(user.info);
						console.log('-----');
					});

					return users;
				}
			)
			.then(
				(users) => {
					let students = users.filter(user => user.position === 'student' && user.courses && user.courses.length>0);

					if(students.length>0){
						getFile('GET', 'ratings.json')
							.then(
								(ratings) => {
									console.log(ratings.rating, students);
								}
							);
					}
				}
			)
			.catch(
				() => {
					console.log('empty data');
				}
			)
	});

function getUsersFunc(users){
	return users.map(user => {

		switch (user.position){
			case 'student':
				return user = new Student(user);
			case 'moderator':
				return user = new Moderator(user);
			case 'admin':
				return user = new Admin(user);
			default:
				return user = new User(user);
		}

	})
}

function getStudentRating(ratings, students){
	console.log(ratings, students);

	let rate = [];
	for(rating in ratings){
		rate.push(ratings[rating]);
	}
	rate.sort((a, b) => a - b);

	students.map(student => {
		student.courses.map(course => {
			return getRatingName(rate, course.rating);
		})
	})
}

class User{
	constructor(user){
		this.name = user.name;
		this.age = user.age;
		this.position = user.position;
		this.icon = user.icon;
	}

	get info(){
		let info = `Name: ${this.name}, Age: ${this.age}`;
		return this.__fullInfo ? `${info}. ${this.__fullInfo}` : info;
	}

	set info(data){
		this.__fullInfo = data;
	}
}

class Student extends User{
	constructor(user){
		super(user);
		if(user.courses && user.courses.length>0){
			this.courses = user.courses;
		}
	}

	get info(){
		return this.courses ? `${super.info}.\nCourses: ${getCourses(this.courses)}` : `${super.info}.\nCourses: not exist`;
	}
}

class Moderator extends User{
	constructor(user){
		super(user);
	}
}

class Admin extends User{
	constructor(user){
		super(user);
	}
}

function getCourses(courses){
	return courses
				.map(course => {
					return `${course.name}, rating: ${course.rating}`;
				})
				.join(';\n');
}









