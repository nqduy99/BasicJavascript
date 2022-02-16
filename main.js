
var languages = ['Javascript', 'PHP', 'Ruby'];
var language = 'Javascript JS Ruby';

function getLastElementOfArray(input) {

    var inputLength = input.length;
    result = input[inputLength-1]

    return result;
}

function showDialog() {
    alert('Hi xin chao Duy dep trai')
}

function writeLog() {
    var myString = '';
    for (var param of arguments){
        myString += `${param} -`
        
    }
    console.log(myString)
}

function sum(a, b){
    if (typeof(a) == 'number' && typeof(b) == 'number'){
        return a+b;
    }

    return false;
}

function stringInString(needle , haystack ){
    if(typeof needle =='string' && typeof haystack =='haystack' && haystack.indexOf(needle)>=0){
        return true;
    }
    return false;
}

var emailKey = 'email';

var myInfo = {
    name: 'Duy Nguyen',
    age: 18,
    address: 'HCM, VN',
    [emailKey]: 'nqduy@gmail.com'

}

var myKey = 'address'

console.log(myInfo)
