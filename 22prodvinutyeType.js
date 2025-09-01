"use strict";
var _a;
//Union тип:
let aUnion;
aUnion = 1;
aUnion = 'sdfsd';
// aUnion = true - ошибка
//Сужение типов (Narrowing):
function logId(id) {
    if (typeof id === 'string') { //Рантайм проверки
        console.log('String');
    }
    else if (Array.isArray(id)) {
        console.log('Array');
    }
    else if (typeof id === 'number') {
        console.log('Number');
    }
    else
        console.log(`Boolean - ${id}`);
}
logId(true);
//Различение обьектов по ключу:
function logObject(obj) {
    if ('a' in obj) {
        console.log(`Обьект с а: ${obj.a}`);
    }
    else
        console.log(`Объект с в: ${obj.b}`);
}
logObject({ b: 3 });
logObject({ a: 5 });
//Сужение по пересекающимся типам:
function sujenie(a, b) {
    // if (typeof a === typeof b){//Неверный вариант - так ts не проведет сужение типов и: ${a.toUpperCase()} и ${b.toUpperCase()} - выдаст ошибки
    if (typeof a === 'string' && typeof b === 'string') {
        // if (a === b){
        console.log(`String: ${a.toUpperCase()} и ${b.toUpperCase()}`);
    }
    else
        console.log(`Вместе ${a} и ${b} - не String`);
}
sujenie('строка а', 'строка в');
sujenie('строка а', 'строка а');
sujenie('строка а', true);
//Литеральные типы:
function fetchAutor(url, method) {
    // if (method === 'get'){
    //     return 1
    // } else return 6
    return method === 'get' ? 1 : 6;
}
let meth = 'postttt';
const meth2 = 'post';
console.log(fetchAutor('url', 'get'));
console.log(fetchAutor('url', meth)); //метод кастомизации к типу
console.log(fetchAutor('url', meth2));
console.log(meth); //выведит: postttt
function fetch(url, method) {
    console.log(url, method);
}
// const userRole: UserAndRole = {
//     name: 'Ivan',
//     age: 33,
//     city: "Moscow",
//     id: 5,
//     nameRole: 'devops'
// }
const userRole = {
    user: {
        name: 'Ivan',
        age: 33,
        city: "Moscow"
    },
    role: { id: 5,
        name: 'devops' }
};
console.log(userRole);
for (let i in userRole) {
    console.log(`${i}: ${userRole[i]}`);
}
const userRolee = {
    name: 'Ivan',
    age: 33,
    city: "Moscow",
    id: 5,
    nameRole: 'devops',
    created: new Date(),
    log(id) {
        return '';
    }
};
const dict = {
    1: { name: 'Ivan',
        age: 33,
        city: "Moscow",
        log(id) {
            return '';
        }
    },
    2: { name: 'Egor',
        age: 43,
        city: "Moscow",
        log(id) {
            return '!!!';
        }
    }
};
console.log(dict);
const dopUser = {
    name: 'Kolya',
    age: 64
};
const chel1 = {
    login: 'Ura',
    pasword: { type: 'primary' }
};
console.log((_a = chel1.pasword) === null || _a === void 0 ? void 0 : _a.type);
function umnozhenie(numb1, numb2) {
    if (!numb2) {
        return numb1 * numb1;
    }
    return numb1 * numb2;
}
console.log(umnozhenie(5));
;
;
;
// Ответ
const otvetPol = {
    "status": "success",
    "data": {
        "databaseId": 567,
        "sum": 10000,
        "from": 2,
        "to": 4
    }
};
console.log(`Удачный ответ сервера: ${otvetPol}`);
console.log(`Удачный ответ сервера: ${JSON.stringify(otvetPol, null, 2)}`);
const otvetOtr = {
    "status": "failed",
    "data": {
        "errorMessage": "Недостаточно средств",
        "errorCode": 4
    }
};
console.log(`Неудачный ответ сервера: ${JSON.stringify(otvetOtr, null, 2)}`);
