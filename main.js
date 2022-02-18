// 1. Dễ hiểu
// 2. Ngăn gọn: dễ nhìn
// 3. Hiệu năng: for tốt hơn nhưng ko đáng kể

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


// for (var index in courses){
//     console.log(courses[index])
// }

// Array.prototype.some2 = function(callback){
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//             var result = callback(this[index], index, this);
//             if(result){
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// var result = courses.some2(function(course){
//     return course.isFinish == true;
// })

// Array.prototype.every2 = function(callback){
//     var output = true;

//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//             var result = callback(this[index], index, this);
//             if(!result){
//                 output = false;
//                 break;
//             }
//         }
//     }
//     return output;
// }

// var result = courses.every2(function(course){
//     return course.coin > 0;
// })

// console.log(result);

// Array.prototype.filter2 = function(callback){
//     var output = [];
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//             var result = callback(this[index], index, this);
//             if(result){
//                 output.push(this[index]);
//             }
//         }
//     }
//     return output;
// }

// var filterCourses = courses.filter2(function(course, index){
//     return course.coin > 0 ;
// })

//console.log(filterCourses);

function courseHandler(course, index) {
    return {
        index: index,
        id: course,
        name: `Khoa hoc ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}` 
    }
}

// var newCourses = courses.map(courseHandler)
// console.log(newCourses)

function getHTMLfromArray(htmlCodes) {
    var html = htmlCodes.map(function(htmlCode){
        return `<h1>${htmlCode}</h1>`
    });
    return html.join('')
} 

//Ham reduce() trong Array

var i = 0;
function coinHandler(accumulator, currentValue, currentIndex, originArray){
    total = accumulator + currentValue.coin;
    i++;
    // console.table({
    //     'Luot chay: ': i,
    //     'Bien luu tru: ': accumulator,
    //     'Gia tri hien tai: ': currentValue.coin,
    //     'Tong: ': total
    // })
    return total;
}

var totalCoin = courses.reduce(coinHandler, 0)
// console.log(totalCoin)

//Ham reduce2()
const numbers = [1, 2, 3, 4, 5]

//console.log(typeof numbers)

// Array.prototype.reduce2 = function(callback, result){
//     let i = 0;
//     if(arguments.length < 2){
//         i = 1;
//         result = this[0];
//     }
//     for(; i < this.length; i++){
//         result = callback(result, this[i], i, this)
//     }
//     return result;
// }

// var result = numbers.reduce2(function(acc, number){
//     return acc + number;
// })

//console.log(result)

// Array.prototype.forEach2 = function(callback){
//     for (var index in this){
//         if(this.hasOwnProperty(index)){
//             callback(this[index], index, this);
//         }
//     }
// }

// numbers.forEach2(function(number, index, array){
//     console.log(number)
// });

