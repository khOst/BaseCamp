/**
 * 1. Создайте класс Garage, который хранит список машин со следующим интерфейсом:
 * addCar - принимает объект класса Car,
 * getCar - который принимает индекс машины и возвращает запрашиваемую машину,
 * count - возвращает количество машин в гараже
 * 2. Создайте класс Car, который инициализуруется значениями model, manufacturer и price.
 * 3. Создайте класс Buyer, который иницализируется объектом garage и числовым значением budget,
 * с методами: getBudget - возвращает текущее значение бюджета,
 * buyCar - принимает объект класса Car, смотрит, хватит ли бюджета на машину,
 * если не хватает, бросает ошибку, если хватает, списывает деньги с бюджета и добавляет машину в гараж.
 * 4. Создайте функцию showRoom, которая принимает объект buyer,
 * и дальше в цикле 10 раз создает объект car со случайным значением в price.
 * Объект buyer пытается купить каждую созданную машину.
 * 5. Создайте экземпляр класса Garage и Buyer. Вызовите функцию showRoom и передайте в нее buyer.
 * 6. После выполнения функции выведите список всех машин, которые купил покупатель
 */
function Garage() {
    let cars = [];

    this.getCar = (index) => cars[index];

    this.addCar = (car) => cars.push(car);

    this.count = () => cars.length;

    this.getCars = () => cars;
}

function Car(model, manufacturer, price) {
    return {
        model,
        manufacturer,
        price
    };
}

function Buyer(garage, budget) {
    this.garage = garage;

    this.getBudget = () => budget;

    this.buyCar = (car) => {
        try {
            if (car.price > budget) {
                throw new Error('Current budget is not enough to buy a car.');
            } else {
                budget -= car.price;
                garage.addCar(car);
            }
        } catch (e) {
            console.log(e.message);
        }
    };
}

function showRoom(buyer) {
    for (let i = 0; i < 10; i++) {
        let randomCarPrice = Math.floor(Math.random() * 300000) + 10000;
        let car = new Car('hidden', 'hidden', randomCarPrice);

        buyer.buyCar(car);
    }
}

let car1 = new Car('Corvette', 'Chevrolet', 56000);
let car2 = new Car('S', 'Tesla', 120000);
let car3 = new Car('488 Spider', 'Ferrari', 300000);

let garage = new Garage();

garage.addCar(car1);
garage.addCar(car2);
garage.addCar(car3);

let buyer = new Buyer(garage, 330000);

showRoom(buyer);
console.log(buyer.garage.getCars());
