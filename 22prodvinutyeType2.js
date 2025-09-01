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
//Тип Void:
function umnozheniee(num1, num2) {
    console.log('1');
}
umnozheniee(5); //Ответ функции void - возвращает все что угодно в том числе и ничего
let massiv = ['el1', 2];
let objj = {
    name: 'Ivan',
    skill: []
};
massiv.forEach((el) => (objj.skill.push(el))); //Здесь колбэк функция в forEach на выходе имеет тип void, позволяющий возвращать (пушить - push(el)) элементы любого типа
console.log(objj);
//Тип unknown:
let unk; //Этот тип в отличии от any нельзя положить в переменную другого типа - см. ниже (можно положить только в переменные типа unknown и any)
// let unk: any;
unk = 22;
// let strin: string = unk//Тип unknown здесь дал бы ошибку (нужен тип any)
let eny = unk;
console.log(typeof unk);
console.log(typeof unk);
console.log(unk);
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch('');
        }
        catch (error) { //Тип error - unknown и без проверки error.message - выдаст ошибку (т.к. это изначально не строка). В ts до версии 4.4 error был тип any, а после его изменили на unknown
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    });
}
getData();
//Тип Never - обозначает значения, которые никогда не происходят или функции, которые никогда не возвращают значение:
let nev;
function neve(el1) {
    switch (typeof el1) {
        case 'string':
            //.....
            break;
        case 'number':
            //...
            break;
        default:
            const _ = el1; //Здесь тип el1 - never пока (el1: string | number)
            throw new Error('Нет такого');
    }
}
function never() {
    throw new Error('Функция never');
}
try {
    never();
}
catch (error) {
    if (error instanceof Error) {
        console.log('Обработка ошибки:', error.message);
    }
}
//Тип null - когда мы осознанно заявляем что объекта нет (в этом его отличие от undefined):
const n1 = null;
const n2 = null;
const n3 = null;
function peopele() {
    if (Math.random() > 0.5) {
        return null;
    }
    return {
        name: 'Vasay'
    };
}
const peopl = peopele();
if (peopl) {
    console.log(peopl.name);
}
else
    console.log(null);
//Приведение типов:
let nnn;
let stroka = 'sdfs';
nnn = parseInt(stroka);
console.log('Строка в число', nnn);
let chislo = 5;
stroka = chislo.toString();
console.log('Число в строку', stroka);
let obj1 = {
    name: 'GGGG',
    email: 'sss@yandex.ru',
    login: 'kkkk'
};
let obj2 = {
    role: 1,
    password: 'bbbb'
};
let obj3 = Object.assign(Object.assign({}, obj1), obj2);
console.log(obj3);
function obj1toObj3(obj1, obj2) {
    return { name: obj1.name,
        password: obj2.password };
}
console.log('Новый объект:', obj1toObj3(obj1, obj2));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
//Решение :
function fun(res) {
    if (res.status === 'success') {
        return res.data.databaseId;
    }
    else {
        throw new Error('Ответ от сервера - не успешен');
    }
}
//2-ой вариант через Type Guard:
function typeguardSuccess(res) {
    if (res.status === PaymentStatus.Success) {
        return true;
    }
    else
        return false;
}
function funn(res) {
    if (typeguardSuccess(res)) {
        return res.data.databaseId;
    }
    else {
        throw new Error('Ответ от сервера - не успешен');
    }
}
//Проверка:
const otvetPoll = {
    status: 'success',
    data: {
        databaseId: 567,
        sum: 10000,
        from: 2,
        to: 4
    }
};
const otvetOtrr = {
    status: 'failed',
    data: {
        errorMessage: "Недостаточно средств",
        errorCode: 4
    }
};
try {
    const result = fun(otvetPoll);
    console.log('Положительный ответ:', result);
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
}
;
try {
    const result = fun(otvetOtrr);
    console.log('Ответ:', result);
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
}
;
try {
    const result = funn(otvetPoll);
    console.log('Положительный ответ 2-ой вариант:', result);
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
}
;
try {
    const result = funn(otvetOtrr);
    console.log('Ответ от второго варианта:', result);
}
catch (error) {
    if (error instanceof Error) {
        console.error('Ошибка второго варианта:', error.message);
    }
}
;
