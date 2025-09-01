"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const gen = [5, 3];
function gene(a) {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise((resolve, reject) => {
            resolve(a);
        });
    });
}
;
const check = {
    drive: true,
    kpp: false
};
const checkk = {
    drive: true,
    kpp: false
};
//Функция с generics:
function primer(a) {
    console.log(a);
    return a;
}
const prim = primer(true);
console.log(primer('45'));
console.log(primer(false));
function spliseHalfArray(arr) {
    if (Array.isArray(arr)) {
        const l = arr.length;
        return arr.splice(0, l / 2);
    }
    else
        return arr;
}
console.log(spliseHalfArray([1, 2, 3, 4, 5, 6]));
console.log(spliseHalfArray('dfgdsfgsd'));
function spliseHalfArrayy(arr) {
    if (Array.isArray(arr)) {
        const l = arr.length;
        return arr.splice(l / 2, l);
    }
    else
        return arr;
}
console.log(spliseHalfArrayy([1, 2, 3, 4, 5, 6, 7, 8]));
//Задача: необходимо написать функцию toString, которая принимает любой тип и возвращает его 
// строковое представление. Если не может, то возвращает undefined.
function toString(data) {
    if (data === null) {
        return 'null';
    }
    else if (typeof data === 'undefined') {
        return undefined;
    }
    else if (typeof data === 'number' ||
        typeof data === 'string' ||
        typeof data === 'boolean' ||
        typeof data === 'function') {
        return data.toString();
    }
    else if (typeof data === 'object') {
        return JSON.stringify(data);
    }
    else
        return undefined;
}
console.log(toString(456));
console.log(toString(null));
console.log(toString([3, 4]));
console.log(toString(false));
console.log(toString(new Date()));
console.log(toString({ a: new Date(), b: 66 }));
console.log(toString(function Respect(sssss) { }));
console.log(toString('sdfsdf'));
//Задача: Необходимо написать функцию сортировки любых
// объектов, которые имеют id по убыванию и по возрастанию
// Пример объекта:
const data = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
];
;
function sort(object, param) {
    if (param === 'down') {
        return object.sort((a, b) => b.id - a.id);
    }
    else
        return object.sort((a, b) => a.id - b.id);
}
;
console.log(sort(data, 'down'));
console.log(sort(data, 'up'));
//Миксин — это паттерн, позволяющий добавлять функциональность к классам, комбинируя свойства и методы из нескольких источников. 
// В TypeScript/JavaScript миксины обычно реализуются через функции или классы, которые объединяют свойства:
class Dvigat {
    constructor(name, mosh) {
        this.name = name;
        this.mosh = mosh;
    }
}
class Kolesa {
    constructor(marka, leto) {
        this.marka = marka;
        this.leto = leto;
    }
}
// Миксин — функция объединения свойств
function createMashina(dvigat, kolesa) {
    // Создаем объект с объединенными свойствами
    const mashina = Object.assign(Object.assign({}, dvigat), kolesa);
    return mashina;
}
const dvig = new Dvigat('Niva', 4);
const kol = new Kolesa('Italy', false);
const mashinaa = createMashina(dvig, kol);
console.log(mashinaa);
// Миксин через дженерики:
function createMashinaa(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const dvig2 = new Dvigat('Niva', 4);
const kol2 = new Kolesa('Italy', false);
const mashina2 = createMashinaa(dvig2, kol2);
console.log(mashina2);
