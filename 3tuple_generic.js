"use strict";
//Кортеж:
const tup = [1, 'a', 45, 45];
console.log(tup);
tup.push(2); //Как и в массив в кортеж можно добавить элемент, но обратится к нему
//будет нельзя, поэтому так не делается
console.log(tup, tup[1], tup[3]); //А tup[4] - уже не получится
//С кортежами можно делать все, что и смассивами:
const mapTup = tup.map(el => {
    if (typeof (el) === 'number') {
        return el * 2;
    }
    else if (typeof el === 'string') {
        return el.toLocaleUpperCase();
    }
});
console.log(mapTup); //Выполнили map
//Деструктуризация кортежа:
const [a1, a2, a3, a4] = tup;
console.log(a1, a2, a3, a4);
const [a5, ...restTup] = tup;
console.log(a5);
console.log(restTup);
//Generics (позволяют использовать функции или объекты для разных типов данных):
function logTime(num) {
    console.log(new Date());
    return num;
}
;
logTime(1);
function logTime2(num) {
    console.log(new Date());
    return num;
}
;
logTime2('sdf');
//Заменяем обе эти функции на generics:
function logTime3(num) {
    console.log(new Date(), num);
    return num;
}
;
logTime3('sdf');
logTime3(43);
;
;
//Использование генериков с классами:
class GenClass {
    constructor(val) {
        this.val = val;
    }
}
;
const cl = new GenClass('33');
console.log(cl.val);
;
function logTimeStamp(num) {
    console.log(num.stamp, typeof num.h);
    return num.h;
}
logTimeStamp({ stamp: 5, h: 'sdfd' });
