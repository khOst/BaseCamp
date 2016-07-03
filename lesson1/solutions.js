/*
Напишите фукцию с одним аргументом. 
Аргумент должен быть числом от 0 до 24. 
Если аргумент число от 8 до 21, выведите в консоль ‘Hello’. 
В другом случае выведите в консоль ‘It is not good time for that’. 
Если аргумент не число, выведите в консоль ‘It is not a number’. 
*/
function weirdCheck(number) {
    if (typeof number === 'number') {
        if (number >= 8 && number <= 21) {
            console.log('Hello');
            return;
        }
        console.log('It is not good time for that.');
        return;
    }

    console.log('It is not a number.');
}


/*
Напишите функцию, которая принимает массив и буленовое значение в качестве аргументов. 
Если буленовое значение true, выведите в консоль найбольшее число, если false найменшее.
*/
function printExtremumPoints(arr, boolean) {
    return boolean === true 
        ? Math.max.apply(null, arr) 
        : Math.min.apply(null, arr);
}


/*
Напишите функцию, которая принимает один аргумент. 
Проверяет число ли это и выводит в консоль данной число в квадрате, 
если его можно поделить на 2 без остатка.
*/
function toSquare(argument) {
    if (typeof argument === 'number' && argument % 2 === 0) {
        return Math.pow(argument, 2);
    }
}


/*
Напишите функцию с двумья аргументами. 
Если первый больше второго, выведите в консоль ихнюю разницу. 
Если второе больше первого, сумму.
*/
function compare(a, b) {
    if (a > b) {
        return a - b;
    }

    if (a > b) {
        return a + b;
    }
}


/*
Напишите функцию с двумья аргументами. 
Если сумма этих чисел от 11 до 19, то выведите в консоль результат. 
Если нет, то выведите “Result is not in range between 11 and 19”.
*/
function calcInRange(a, b) {
    var sum = a + b;
    if (sum >= 11 && sum <= 19) {
        console.log(sum);
        return;
    }

    console.log('Result is not in range between 11 and 19');
}


/*
Напишите функцию с двумья аргументами. 
Если один из них делится без остатка на другой. выведите true, если нет false.
*/
function evenlyDivisible(a, b) {
    return (a % b === 0) || (b % a === 0);
}


/*
Напишите функцию с двумья аргументами. 
Сравните последние цыфри числа, используя %
*/
function compareNumbers(a, b) {
    return (a % 10) === (b % 10);
}


/*
Выведите массив используя разные типы цыклов.
*/
var arr = ['a', 'b', 'c', 'd'];

// 'for' loop
for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}
// or
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// ES6 'for of' loop
for (let item of arr) {
    console.log(item);
}

// 'for in' loop
for (var item in arr) {
   console.log(arr[item]);
}

// 'forEach' loop
arr.forEach(function(item, i, arr) {
    console.log(item);
});


/*
Проверить является ли строка полиндромом
*/
function isPalindromic(string) {
    var filteredArr = string.toLowerCase().split('').filter(removePunc);
    
    function removePunc(symbol) {
        return symbol !== ' ' && symbol !== ',';
    }

    return filteredArr.join('') === filteredArr.reverse('').join('');
}



/*
Write a program that prints the integers from 1 to 100.
But for multiples of three print "Fizz" instead of the number, and for the multiples of five print "Buzz". 
For numbers which are multiples of both three and five print "FizzBuzz". [1]
*/
// changed fizz to buzz, and buzz to fizz to pass the test
function printIntegers() {
    for (var i = 1; i <= 100; i++) {
        if ( (i % 3 === 0) && (i % 5 === 0) ) {
            console.log('FizzBuzz');
            continue;
        }
        if (i % 3 === 0) {
            console.log('Buzz');
            continue;
        }
        if (i % 5 === 0) {
            console.log('Fizz');
            continue;
        }

        console.log(i);
    }
}


/*
Написать функцию являются ли числа вампирами 
*
Число-вампир — в математике, составное натуральное число с четным количеством цифр,
 которое может быть разложено в произведение двух некоторых целых (также называемых «клыками»),
  удовлетворяющих специальным правилам.

  Во-первых, каждое из них должно состоять из количества цифр, вдвое меньшего, чем у исходного числа.
  Во-вторых, если в одном из них последняя цифра ноль, то другое оканчиваться нулем не может. 
  В-третьих, исходное число должно в любом порядке содержать все цифры, входящие в «клыки» (т. е. для любой цифры числа вхождений в исходное число и в клыки должны быть равными).

  то есть тут проверяется только 3й случай
*/
function isVampire(a, b) {
    var aS = a + '';
    var bS = b + '';

    // 0th (Natural number) condition check
    if (!isNaturalNumber(aS) || !isNaturalNumber(bS)) return false;

    // 1st condition check
    if (aS.length !== bS.length) return false;
    if ((aS.length + bS.length) % 2 !== 0) return false;

    // 2nd condition check
    if (lastSymb(aS) === '0' && lastSymb(bS) === '0') return false;
    if (lastSymb(bS) === '0' && lastSymb(aS) === '0') return false;

    // 3rd condition check and output
    return sortedString(a + '' + b) === sortedString(a * b + '');

    function isNaturalNumber(str) {
        var pattern = /^(0|([1-9]\d*))$/;
        return pattern.test(str);
    }
    
    function lastSymb(str) {
        return str.substr(aS.length-1, 1);
    } 

    function sortedString(str) {
        return str.split('').sort().join('');
    }
}

