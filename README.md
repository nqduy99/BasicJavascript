# Learn and practice BasicJavascript

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 100, 
        isFinish: true
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 1, 
        isFinish: true
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 1, 
        isFinish: true
    },
    {
        id: 4,
        name: 'PHP',
        coin: 200, 
        isFinish: false
    },
]

Array.prototype.some2 = function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = callback(this[index], index, this);
            if(result){
                return true;
            }
        }
    }
    return false;
}

Array.prototype.every2 = function(callback){
    var output = true;

    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = callback(this[index], index, this);
            if(!result){
                output = false;
                break;
            }
        }
    }
    return output;
}

Array.prototype.filter2 = function(callback){
    var output = [];
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = callback(this[index], index, this);
            if(result){
                output.push(this[index]);
            }
        }
    }
    return output;
}

Array.prototype.reduce2 = function(callback, result){
    let i = 0;
    if(arguments.length < 2){
        i = 1;
        result = this[0];
    }
    for(; i < this.length; i++){
        result = callback(result, this[i], i, this)
    }
    return result;
}

Array.prototype.forEach2 = function(callback){
    for (var index in this){
        if(this.hasOwnProperty(index)){
            callback(this[index], index, this);
        }
    }
}

numbers.forEach2(function(number, index, array){
    console.log(number)
});
