/* Сравнение объектов по свойству
1. Напишите функцию compareObjects, которая принимает 2 объекта и название числового свойства, 
по которому нужно выполнить сравнение объектов, и выводит в консоль свойство name того объекта,  
у которого значение переданного свойства больше.
2. Создайте один объект с помощью литерала, второй через конструктор.
3. Вызовите написанную функцию и передайте два созданных объекта и свойство для сравнения
*/
var o1 = {
    myProperty: 9000
};
var o2 = new ObjectMachine();
var result = compareObjects(o1, o2, 'myProperty');

console.log(result);

function ObjectMachine() {
    this.myProperty = 10000;
}

function compareObjects(obj1, obj2, numProp) {
    return obj1[numProp] > obj2[numProp] ? obj1[numProp] : obj2[numProp];
}


/*
Поиск любимой песни
1. Создайте коллекцию из 5 музыкальных песен, где каждая песня содержит следующую информацию: 
played - количество раз песня была проиграна (определить случайным образом), name - имя песни
2. Напишите функцию favoriteSong, которая принимает коллекцию из песен, и возвращает следующую информацию: 
название песни, сколько раз песня была проиграна, индекс песни в коллекции.
3. Вызовите функцию favoriteSong и передайте ей созданную коллекцию
*/
var mySongNames = [
    'Skillet - Rise', 
    'System Of A Down – Sad Statue',
    'Memory of a Melody – the Core', 
    'Serj Tankian – Harakiri', 
    'Limp Bizkit - Rollin\''
];

var myCollection = createSongCollection(mySongNames);
favoriteSong(myCollection);

function Song(name) {
    this.played = Math.floor(Math.random() * 300);
    this.name = name;
}

function createSongCollection(songNames) {
    var collection = [];

    for (var i = 0; i < 5; i++) {
        collection.push(new Song(songNames[i]));
    }

    return collection;
}

function favoriteSong(collection) {
    var favSong = collection[0];
    var favSongIndex = 0;
    
    for (var i = 1; i < collection.length; i++) {
        if (collection[i].played > favSong.played) {
            favSong = collection[i];
            favSongIndex = i;
        }
    }

    var favSongInfo = {
        name: favSong.name,
        played: favSong.played,
        index: favSongIndex
    }

    return favSongInfo;
}


/**
 * Класс калькулятор
 * 1. Опишите конструктор объектов (класс) Calculator с двумя методами:
 * - add - принимает число и прибавляет его к предыдущему,
 * - getCurrentSum - принимает индекс и возвращает результирующее число на шаге указынном в индексе
 * (если индекса нет, возвращает текущую сумму)
 * 2. Создайте два экземпляра класса Calculator
 * 3. Добавьте в первый объект числа 3,8,11 и во второй 5,12,17.
 * 4. Выведите в консоль сумму:
 * - всех чисел всех объектов, убедитесь (56)
 * - сумму чисел всех объектов на втором шаге (28)
 * - для одного объекта сумму после третьего шага и общую результирующую сумму (должна совпадать)
 *
 * @constructor
 * @returns {Number}
 *
 * Пример вызова:
 * var calc1 = new Calculator(3, 8, 11);
 * expect(calc1.getCurrentSum()).toBe(22);
 * expect(calc2.add(8)).toBe(30);
 */
function Calculator() {
    var Arguments = [];

    for (var i = 0; i < arguments.length; i++) {
        Arguments.push(arguments[i]);
    }

    this.add = function(num) {
        return this.getCurrentSum() + num;
    };

    this.getCurrentSum = function(index) {
        if (index === 'undefined') {
            return Arguments.reduce(sumAccumulator);
        }

        return Arguments.slice(0, index).reduce(sumAccumulator);
    };

    function sumAccumulator(a, b) {
        return a + b;
    }
}

var calc1 = new Calculator(3, 8, 11);
var calc2 = new Calculator(5, 12, 17);

console.log(calc1.getCurrentSum() + calc2.getCurrentSum());
console.log(calc1.getCurrentSum(2) + calc2.getCurrentSum(2));
console.log(calc1.getCurrentSum(3) === calc1.getCurrentSum());
