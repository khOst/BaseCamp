/*
    Напишите функцию, которая принимает 1 аргумент и возварщает его тип
*/
function getDataType(variable) {
    return typeof variable;
}


/*
    Напишите функцию, которая принимает 2 аргумента,
    и возврвщает 1 если их значения и их типы равны,
    0 если равны только значения
    и -1 в другом случае
*/
function compareByType(a, b) {
    return a === b 
        ? 1 
        : a == b 
        ? 0 : -1;
}


/*
    Напишите функцию, которая принимает 1 аргумент,
    и в случае если аргумент имеет числовой тип увеличивает его на 1
    и возврвщвет результат,
    в любом другом случае возврвщвет -1
*/
function increase(value) {
    return (typeof value === 'number') 
    ? ++value 
    : -1;
}


/*
    Напишите функцию, которая принимает 2 аргумента,
    массив в разделитель[опционально],
    и возвращает строку ввиде элементов массива c разделителями если разделитель задан
    или строку разделенную "-" если не задан
*/
function join(array, separator) {
    return separator 
    ? array.join(separator) 
    : array.join('-');
}


/*
    Напишите функцию, которая принимает 2 массива,
    и возвращает один состоящий из элементов перового и второго (последовательно сначала первый потом второй)
*/
function glue(arrA, arrB) {
    return arrA.concat(arrB);
}


/*
    Напишите функцию, которая принимает 1 массив,
    и возвращает другой массив отсортированный от большего к меньшему
*/
function order(arr) {
    var sortedArr = arr.sort();

    return sortedArr.reverse();
}


/*
    Напишите функцию, которая принимает 1 массив,
    и возвращает другой без чисел которые меньше 0
*/
function removeNegative(arr) {
    var filteredArr = arr.filter(positive);

    return filteredArr;

    function positive(number) {
        return number >= 0;
    }
}


/*
    Напишите функцию, которая принимает 1 аргумент (строку),
    и возвращает массив из елементов строки разделенных по пробелу ' '
*/
function stringToArray(str) {
    var arr = str.split(' ');

    return arr;
}


/*
    Напишите функцию, которая принимает 1 аргумент (строку),
    и возвращает часть этой строки до первой запятой
*/
function getStringPart(str) {
    var commaIndex = str.indexOf(',')
    firstWord = str.slice(0, commaIndex);

    return firstWord;
}