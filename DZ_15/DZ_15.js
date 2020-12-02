let user = {
    name: 'Ivan',
    surname: 'Petrov',

    getFullName(){
        return this.name + ' ' + this.surname + ' ' + this.age;
    },

    set getAge(age){
        console.log(arguments);
        switch(age){
            case 20:
                this.age = 20+', hello 20!';
                break;
            case 30:
                this.age = 20+', hello 30!';
                break;
            default:
                this.age = age+', hello default!';
                break;
        }
    },

    get getAge(){
        if(this.age){
            return this.age;
        } else{
            this.getAge = '50, 100';
            return this.age;
        }
    }
}

// user.getFullName;

console.log(user.getAge);
console.log(user);


// console.log( user.fullNameGetter );

// user.name
// user.fullNameGetter