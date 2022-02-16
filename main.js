
var myString = 'Hoc Javascript tai F8!';
var languages = 'Javascript, PHP, Ruby';
var number = 345;

function run(title) {
    var language = title.slice(4,14)
    var rest = title.slice(14)
    return `Language is ${language} and rest is ${rest}`;
}

function run1(content) {
    return content.replace(/JS/g, 'Javascript')
}

console.log (parseInt(number));