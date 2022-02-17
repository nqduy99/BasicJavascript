
// var a = ['a', 'b', 'c', 'd', 'a', 'a', 'c'];

// var lengthA= a.length; // 7

// for(var i = 0; i< lengthA-1; i++) {
//     var count = 0;
//     console.log(`a[i]: `, a[i]);
//     for( var j = i + 1; j < lengthA ; j++){
//         if(a[j] === a[i]){
//             count++;
//         }
//         console.log(`a[j]: `,a[j]);
//     }
//     console.log(`Phan tu ${a[i]} bi trung ${count} lan`)
// }

//Ham Dem nguoc
function countDown(number){
    if(number > 0) {
        console.log(number);
        return countDown(number - 1);
    }

    return number;
    
}
// var a= countDown(10)
// console.log(a)

//Tinh giai thua
function giaiThua(number){
    if(number > 0){
        return number * giaiThua(number-1)
    }
    return 1;
}

// console.log(giaiThua(6))

var a = [1,2,3,4,5,6,7];

function checkPositiveNumbers(numbers) {
    var isLonHon0 = numbers.every(function(number, index){
        return number > 0;
    })
    return isLonHon0;
}

// var isLonHon0 = checkPositiveNumbers(a)
// console.log(isLonHon0)

function hasFreeCourses(courses) {
    var isFree = courses.every(function(course){
        return course.vnd === 0;
    })
    return isFree;
}

var b = [
    { name: 'Javascript', vnd: 1000000 },
    { name: 'PHP', vnd: 990000 },
    { name: 'HTML, CSS', vnd: 0 }
    // ...
]

// var isFree = hasFreeCourses(b)
// console.log(isFree)

//
var monster = [
    {
        name: 'Cá heo',
        attack: 50,
        speed: 100,
        hitpoint: 100
    },
    {
        name: 'Khủng long',
        attack: 150,
        speed: 80,
        hitpoint: 180
    }
]

function findAMonsterByAttack(monsters) {
    var isExist = ''
    isExist = monsters.find(function(monster){
        return monster.attack === 150;
    })
    return isExist;
}

// var monster = findAMonsterByAttack(monster)
// console.log(monster)

function findStringsInArrayByKeyword(keyword, strings) {
    var isOK = strings.filter(function(string){
        return string.indexOf(`${keyword}`) >= 0;
    })
    return isOK === undefined ? [] : isOK;
}

var languages = ['Javascript', 'PHP', 'Hoc PHP']
var isOK = findStringsInArrayByKeyword('PHP', languages)
console.log(isOK)