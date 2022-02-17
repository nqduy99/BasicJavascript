// 1. Dễ hiểu
// 2. Ngăn gọn: dễ nhìn
// 3. Hiệu năng: for tốt hơn nhưng ko đáng kể

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 0
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 1
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 1
    },
    {
        id: 4,
        name: 'PHP',
        coin: 200
    },
]

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



