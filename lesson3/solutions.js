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
