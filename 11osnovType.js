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
const aa = 56;
let bb = 65;
let cc = aa + bb;
let dd = true;
let fff = 'строка';
console.log(cc, dd, fff);
// Типизирование функций:
function fullName(name, surname) {
    return `Имя:${name}, Фамилия:${surname}`;
}
function fullName2(name, surname) {
    return `Имя:${name}, Фамилия:${surname}`;
}
const fullNameArrow = (name, surname) => {
    return `Результат стрелочной функции: Имя:${name}, Фамилия:${surname}`;
};
console.log(fullName('Иван', 'Дурак'));
console.log(fullName2(5 + 2 === 1, 'Строка'));
console.log(fullNameArrow('', 'Петров'));
// Типизация передоваемого в функцию объекта:
function fullNameObject(userAny) {
    return `Результат из объекта: Имя: ${userAny.name}, Фамилия: ${userAny.surname}, Умеет ли играть в шахматы: ${userAny.hobby.chess}`;
}
const user1 = {
    name: 'Коля',
    surname: 'Жуков',
    city: 'Москва',
    age: 12,
    hobby: {
        chess: true,
        sky: false
    }
}; //Здесь объект более широкий по типам, чем то что передается в функцию (мы не передаем city, age, hobby.sky ), но в ts это допустимо
console.log(fullNameObject(user1));
// Упражнение - описание объекта из json по типам (типизируем объект):
// {
// 	"officeId": 45,
// 	"isOpened": false,
// 	"contacts": {
// 		"phone": "+79100000000",
// 		"email": "my@email.ru",
// 		"address": {
// 			"city": "Москва"
// 		}
// 	}
// }
const jsonn = {
    "officeId": 45,
    "isOpened": false,
    "contacts": {
        "phone": "+79100000000",
        "email": "my@email.ru",
        "address": {
            "city": "Москва"
        }
    }
};
const obj = JSON.parse(JSON.stringify(jsonn));
console.log(typeof (obj), obj);
let objType;
objType = obj;
objType = jsonn;
objType = {
    "officeId": 45,
    "isOpened": false,
    "contacts": {
        "phone": "+79100000000",
        "email": "my@email.ru",
        "address": {
            "city": "Москва"
        }
    }
};
// Типизация массива:
const array1 = ['Dev', 'Devops', 'Ml'];
for (let el of array1) {
    console.log(el.toLowerCase());
}
;
array1.forEach((el) => {
    console.log(el + 45);
});
const array2 = array1.forEach((el) => {
    return el + 55;
}); //Вернет undefined
const changArray1 = array1.map((el) => {
    return el + el;
});
const filter = array1.filter((el, i) => {
    return el !== 'Devops' && i < 2;
}); // При этом сам array1. - не изменяется и остается прежним
console.log(array1, array2, changArray1, filter);
//tuples (кортежи):
const array3 = ['age', 4];
const array4 = ['age', 44, true, false];
const [params, znachenie, ...rest] = array4;
console.log(params, znachenie, rest);
//readonly (только для чтения - не позволяет менять структуру массива(кортежа)):
let array5 = [1, 3, 4, 6];
// array5.push(10)// readonly не позволяет изменить массив
console.log(array5);
//Enums:
//числовой enum:
var Status;
(function (Status) {
    Status[Status["one"] = 1] = "one";
    Status[Status["two"] = 2] = "two";
    Status[Status["five"] = 5] = "five";
    Status[Status["ten"] = 10] = "ten";
})(Status || (Status = {}));
const user = {
    name: 'Ivan',
    status: Status.five
};
function provercaStatus(user) {
    if (user.status <= 2) {
        console.log('Юзер подходит!');
    }
    else
        console.log('Ошибка с юзером!');
}
provercaStatus(user);
//гетерогенный enum (но при обращении к нему он себя ведет как числовой):
var Statuss;
(function (Statuss) {
    Statuss[Statuss["onee"] = 1] = "onee";
    Statuss[Statuss["twoo"] = 2] = "twoo";
    Statuss["fivee"] = "\u0441\u0440\u0435\u0434\u043D\u0435\u0435";
    Statuss[Statuss["tenn"] = 10] = "tenn";
})(Statuss || (Statuss = {}));
function vyzovEnum(perem) {
    console.log(`Гетерогенный енам: ${perem}`);
}
vyzovEnum(Statuss.fivee);
vyzovEnum(2);
vyzovEnum(10);
// vyzovEnum('среднее')//здесь это неправильный вызов т.к. enum ведет себя как числовой
//расчетные enums:
function raschet(numb) {
    return numb * 10;
}
var Raschet;
(function (Raschet) {
    Raschet[Raschet["a"] = 1] = "a";
    Raschet[Raschet["b"] = raschet(Raschet.a)] = "b";
})(Raschet || (Raschet = {}));
console.log(`Расчетный енам:${Raschet.b}`);
console.log(`Константный енам: ${1 /* Constanta.a */}`); //При конвертации в js убирается функция enum и просто сохраняются константы (это повышает производительность!)
// // Упражнение типизация функции:
// Сама функция:
// async function getFaqs(req) {
// 	const res = await fetch('/faqs', {
// 		method: 'POST',
// 		body: JSON.stringify(req)
// 	});
// 	const data = await res.json();
// 	return data;
// }
// /* Запрос */
// {
// 	"topicId": 5,
// 	"status": "published" // "draft", "deleted"
// }
// /* Ответ */
// [
// 	{
// 		"question": "Как осуществляется доставка?",
// 		"answer": "быстро!",
// 		"tags": [
// 			"popular",
// 			"new"
// 		],
// 		"likes": 3,
// 		"status": "published"
// 	}
// ]
//Решение:
var Varianty;
(function (Varianty) {
    Varianty["published"] = "published";
    Varianty["draft"] = "draft";
    Varianty["deleted"] = "deleted";
})(Varianty || (Varianty = {}));
function getFaqs(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('/faqs', {
            method: 'POST',
            body: JSON.stringify(req)
        });
        const data = yield res.json();
        return data;
    });
}
