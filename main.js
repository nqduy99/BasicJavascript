function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this. avatar = avatar;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

User.prototype.className = 'F8'

var user = new User('Duy', 'Nguyen', 'avatar');
var user2 = new User('Son', 'Dang', 'avatar');
console.log(user)