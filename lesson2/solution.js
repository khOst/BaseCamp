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
function entityDetails(obj) {
    
}


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
