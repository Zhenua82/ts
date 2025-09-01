"use strict";
function primerr(obj, key) {
    if (key === 'massiv') {
        obj.massiv.push(...obj.massiv);
        return obj;
    }
    else {
        obj.string = obj.string + 'string';
        return obj;
    }
}
function primerr2(obj, key) {
    return obj[key];
}
console.log(primerr({ massiv: [2, 3], string: 'sdfsa' }, 'massiv'));
const objj2 = { massiv: [2, 3], string: '66666666' };
console.log(primerr2(objj2, 'string'));
// typeof:
let perem = { massiv: [3, 4, 5], string: 'ttt' };
let perem2 = 'string';
//Задача:
// Необходимо написать функцию группировки, которая принимает массив объектов
// и его ключ, производит группировку по указанному ключу и возращает
// сгруппированный объект.
// Пример:
// ``` js
// [
// 	{ group: 1, name: 'a' },
// 	{ group: 1, name: 'b' },
// 	{ group: 2, name: 'c' },
// ];
// ```
// При группироке по 'group' ---->
// ``` js
// {
// 	'1': [ { group: 1, name: 'a' }, { group: 1, name: 'b' } ],
// 	'2': [ { group: 2, name: 'c' } ]
// }
// ```
const massivv = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];
function sortir(obj, key) {
    const result = {};
    obj.forEach((el) => {
        const keyValue = el[key]; // получаем значение свойства по ключу
        const keyStr = String(keyValue); // преобразуем в строку для использования в качестве ключа
        if (!result[keyStr]) {
            result[keyStr] = [];
        }
        result[keyStr].push(el);
    });
    console.log(result);
    return result;
}
sortir(massivv, "name");
;
const rol = 'roles';
let rol2 = 'roles';
// type ObjectRoles3 = Object[typeof rol2];//let - дает ошибку, т.к. в данном случае дает тип 'string' а не 'roles'!
const vid = ['name', 'age', 'surname'];
;
const exper = {
    one: true,
    two: false,
    three: false
};
;
const form = {
    name: 'Vasja',
    password: '123'
};
const formValidation = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: 'Пароль должен быть длиннее 5 символов' }
};
