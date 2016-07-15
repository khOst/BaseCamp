'use strict';

/**
 * 0. Создать функицю, которая принимает строку селектор и возвращает:
 - undefined - если ничего не найдено
 - найденую ноду - если она одна
 - массив нод - если их несколько
 - если в функцию передать ноду, функция возвращает ее тип (Node, Text, Comment etc)
 */
function select(selector) {
    if (selector instanceof Node) {
        switch (selector.nodeType) {
            case 1:
                return 'Element';
            case 2:
                return 'Attribute';
            case 3:
                return 'Text';
            case 8:
                return 'Comment';
            default:
                return 'Node';
        }
    }

    var elements = document.querySelectorAll(selector);

    if (elements.length === 0) {
        return undefined;
    }
    if (elements.length === 1) {
        return elements[0];
    }

    return elements;
}

// Output
console.group('Task 0');
console.log(select('.not-existing')); // undefined
console.log(select('#my-div')); // div#my-div
console.log(select('.my-div')); // [div.my-div, div.my-div]
console.log(select(document.createComment('my created comment'))); // Comment
console.groupEnd();


/**
 * 1. Создать функцию, которая принимает строку селектор и возвращает:
 - undefined - если ничего не найдено
 - найденую ноду - если она одна
 - первую найденную ноду - если их несколько
 */
function selectFirst(selector) {
    var elements = document.querySelectorAll(selector);

    return elements.length >= 1 ? elements[0] : undefined;
}
console.group('Task 1');
console.log(selectFirst('.not-existing')); // undefined
console.log(selectFirst('#my-div')); // div#my-div
console.log(selectFirst('.my-div')); // div.my-div
console.groupEnd();


/**
 * 2. Создать функцию аналог функции DOM insertBefore, но вставляет не до, а после указанного элемента.
 */

// If nextSibling === null, newElem will be inserted in the end, as expected
function insertAfter(newElem, referenceElem) {
    return referenceElem.parentNode.insertBefore(newElem, referenceElem.nextSibling);
}

console.group('Task 2');
console.log(insertAfter(document.createElement('div'), document.getElementsByClassName('my-div')[1])); // div
console.groupEnd();


/**
 * 3. Создать функцию, которая выдает значение аттрибута или ставит его значение.

 Чтение.
 Что имеется в виду - Допустим есть элемент:

 <titanic style='float:none'></titanic>

 Если передать в функцию 'style' - она должна выдать 'float:none'

 <ninja color='black' visibility='hidden'></ninja>

 Если передать в функцию 'color' - она должна выдать 'black'

 Установка.
 Что имеется в виду - Допустим есть элемент:

 <lego></lego>

 Если передать в функцию два параметра - аттрибут и значение, то нода должна выглядеть

 <lego style='display:block'></lego>


 Если значение этого аттрибута уже задано, устанавливается новое значение.

 Было:
 <chucknorris speed='5'></chucknorris>

 После вызова функции с передачей аттрибута и значения (speed Infinity):
 <chucknorris speed='Infinity'></chucknorris>
 */
function attributize(element, attribute, value) {
    return value ? element.setAttribute(attribute, value) : element.getAttribute(attribute);
}

console.group('Task 3');
console.log(attributize(document.getElementById('my-div'), 'id')); // my-div
console.log(attributize(document.getElementById('my-div'), 'background-color', 'red')); // Creates attribute 'background-color' with value 'red'
console.groupEnd();


/**
 * 4. С помощью JS создайте шахматное поле:
 - контейнер поля
 - 64 ребёнка (ячейки) элементы (проще позиционировать с помощью float)
 - ячейки раскрашены белым и черным
 - нужные аттрибуты и стили задавайте с помощью JS
 */

//I added inline styles instead of classes, as it was required in the task
function createChessField() {
    var board = document.createElement('div');
    
    board.style.cssText = 'border: 1px solid #674c1e;' + 
        'width: 50%;' + 
        'height: 50%;' + 
        'box-sizing: border-box;';

    for (var i = 0; i < 64; i++) {
        var cell = document.createElement('div');
        
        cell.style.cssText = 'width: 12.5%;' +
            'height: 12.5%;' +
            'border: 1px solid grey;' +
            'float: left;' +
            'box-sizing: border-box;';
        board.appendChild(cell);

        // Paints the board
        if ((i <= 7) ||
            (i >= 16 && i <= 23) ||
            (i >= 32 && i <= 39) ||
            (i >= 48 && i <= 55)) {
            if (i % 2) {
                cell.style.background = 'black';
            }
        } else {
            if (i % 2 === 0) {
                cell.style.background = 'black';
            }
        }
    }

    document.body.appendChild(board);
}

createChessField();
