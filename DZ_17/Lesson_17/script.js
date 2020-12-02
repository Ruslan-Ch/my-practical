let xhr = new XMLHttpRequest();
xhr.open('GET', 'user.json', true);
xhr.send();

xhr.addEventListener('readystatechange', () => {
	if(xhr.readyState === 4){
		if(xhr.status <= 400){
			render( JSON.parse(xhr.responseText) );
		} else{
			console.log(xhr.status, xhr.statusText);
		}
	}
});

function render(data){
	let user = data.user,
		friends = user.friends,
		filteredUseres = friends
								.filter(friend => friend.age)
								.map(friend => `<li>${friend.name}</li>`)
								.join('');

	document.body.innerHTML = `<ul>${filteredUseres}</ul>`;
}


