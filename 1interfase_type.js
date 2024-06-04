"use strict";
const a = 5.7; // присвоили переменной a тип числа
let b = 'dfdfs'; // строка
let c = 'ccccc'; //строка
let d = '5'; // строка
let g = c + a; //при операциях со строкой получаем всегда строку
let h = true;
let x = c + h; //строка
console.log(x);
console.log(g);
let f = ['sdfsd', 'sdfsd', b, g]; // массив из строк
let e = 3;
e = 'eeeee'; //any позволяет переприсваивать переменной тип
let r = false;
let p = undefined;
let i = null;
//Типизация функции:
function test(a) {
    return 5;
}
;
let w = (a) => {
    return true;
};
f = f.map(el => el.toUpperCase());
console.log(f);
let ff = ['sdfsd', 45, 'uuuu'];
ff = ff.map((el) => el + 'df');
console.log(ff);
//Типизация объекта:
function coordin(coord) {
    //coord с одной числовой координатой и второй числовой или undefined координатой
}
;
//Проверка на типы для функции:
function proverca(id) {
    //console.log(id.toUpperCase) - будет давать ошибку, ее можно избежать:
    if (typeof id === 'number') {
        let up = id.toString().toUpperCase();
        console.log(up, 45);
    }
    if (typeof id === 'string') {
        id.toUpperCase();
    }
}
;
proverca(456);
//Проверка на массив:
function getSum(a) {
    if (Array.isArray(a)) {
        let summ = a.reduce((sum, el) => { return sum += el; });
        console.log(summ);
    }
}
;
getSum([45, 6, 34.6]);
//Если функция ничего не возвращает, то указывают void:
function sss(a) {
    return;
}
;
//Интерфейсы и типы:
function print(coord) { }
;
function print(coord) { }
;
function print(coord) { }
;
;
function print(coord) { }
;
;
function printt(coord) {
    console.log('hello');
}
;
printt({ lat: 5, long: 6, z: '' });
function printtt(coord) {
    console.log('hello type');
}
;
printtt({ lat: 5, long: 6, widh: false });
;
;
function teste(coord) {
    console.log('DDDD');
}
;
teste({ a: 6, b: '' });
//Конвертация интерфейсов (каст типов):
let u = (point) => {
    let t = point;
    console.log(t);
};
u({ lat: 4, long: 3 });
const myCanvas = document.getElementById('canvas');
console.log(typeof myCanvas);
;
;
;
;
