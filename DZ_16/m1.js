export function encrypt(string){
	return btoa(string);
}

export function decrypt(string){
	return `decode ${atob(string)}`;
}