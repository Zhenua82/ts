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
const newPeopl = {
    surname: 'Petrov'
};
const newPeopl2 = {
    surname: 'Ivanov'
};
const newPeopl3 = {
    surname: 'Petrov',
    name: 'Ivan',
    age: 33
};
const newPeopl4 = {
    surname: 'Petrov',
    name: 'Ivan',
    age: 55
};
const newPeopl5 = {
    surname: 'Petrov',
    name: 'Ivan',
    age: 33
};
const newPeopl6 = {
    surname: 'Petrov',
    name: 'Ivan',
    age: 55
};
const newPeopl7 = {
    surname: 'Petrov',
    name: 'Ivan',
    age: 33
};
const newPeopl8 = {
    surname: 'Petrov',
    name: 'Ivan',
    age: 55
};
const newPeopl9 = {
    surname: 'Petrov'
};
const newPeopl10 = {
    surname: 'Petrov',
    age: 56
};
const newPeopl11 = {
    name: 'Ivan',
    age: 33
};
const newPeopl12 = {
    name: 'Ivan',
};
const newPeopl13 = 'Olja';
const newPeopl14 = 'Vasja';
const newPeopl15 = 'Olja';
const newPeopl16 = {
    name: 'Kolja',
    surname: 'Petrov',
    age: 43
};
const newPeopl17 = 45;
const newPeopl18 = 45;
const newPeopl19 = {
    name: 'Kolja',
    surname: 'Petrov',
    age: 43
};
const newPeopl20 = 'Vasja';
//Узнать какой тип возвращает функция (ReturnType):
class Uuser {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
;
function gettData(id) {
    return new Uuser(id, `User${id}`);
}
;
function getMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        return [{ name: 'soup', cena: 10 }];
    });
}
