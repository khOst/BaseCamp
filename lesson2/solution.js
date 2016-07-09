/*
Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
Example string : 'Hello, GlobalLogic!'
Expected Output : 'GlobalLogic'
*/
function longestWord(str) {
    var filteredStr = str.split('').filter(removePunc).join('');
    var wordArr = filteredStr.split(' ');
    var maxWord = wordArr[0];

    for (var i = 1; i < wordArr.length; i++) {
        if (wordArr[i].length > maxWord.length) maxWord = wordArr[i];
    }

    function removePunc(el) {
        return (el !== ',' && el !== ':' && el !== '.' && el !== '!' && el !== '?');
    }
    
    return maxWord;
}


/*
Write a function that can print entity details based on next model:
{
  name: String,
  type: String,
  age: Number
}
Expected output: "%NAME%(%TYPE%) - %AGE%."
*/
var o1 = {
    name: 'Hardcore Henry',
    type: 'Cyborg',
    age: 25
};

function showEntityDetails(obj) {
    return "%" + obj.name + "%(%" + obj.type + "%) - %" + obj.age + "%." ;
}

// Output
console.log(showEntityDetails(o1));


/*
Rewrite that function to use this instead of argument 
(use apply, call and bind to print the
details of different entities).
*/
function showEntityDetails(obj) {
    return "%" + this.name + "%(%" + this.type + "%) - %" + this.age + "%." ;
}

// Output: Apply, bind and call
var applied = showEntityDetails.apply(o1, ['name', 'type', 'age']);
var called = showEntityDetails.call(o1, 'name', 'type', 'age');
var binded = showEntityDetails.bind(o1);

console.log(applied);
console.log(called);
console.log(binded());


/* 
Напишите функцию, которая будет возвращать набор уникальных символов, 
которые были переданы в эту функцию, как аргумент. Сортировка - не нужна, 
строчные и заглавные буквы - 1 символ.
*/
function extractCharacters(str) {
    var arr = str.split('');
      var obj = {};

    for (var i = 0; i < arr.length; i++) {
        var char = arr[i];
        obj[char] = true; 
    }

    return Object.keys(obj);
}

extractCharacters('abcd');
    //['a', 'b', 'c', 'd']

extractCharacters('aaaabc');
    //['a', 'b', 'c']
extractCharacters('Hello, world');
    //[ 'h', 'e', 'l', 'o', ',', ' ', 'w', 'r', 'd' ];


/*
Напишите функцию, которая будет возвращать новую функцию, 
с помощью которой можно будет выводить в консоль текстовую информацию.
*/
function createLogger(prefix){
    var date = new Date().toISOString();
    var output = date + ' ' + prefix + ': ';
    return function(data) {
        console.log(output + data);
    };
}

var myLogger = createLogger('My Logger');

myLogger('some data');
    // 2016-06-06T09:55:44.162Z My Logger: some data
    // hint: use toISOString method to format Date object
