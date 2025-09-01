"use strict";
// class Usser{
//     name: string = 'имя';
//     age: number | string = 'возраст';
//     constructor(name: string = 'имя', age: number | string = 'возраст'){
//         this.name = name;
//         this.age = age
//     }
// }
// class Usserr{
//     constructor(public name: string = 'имя',
//         public age: string | number = 'возраст'){}
// }
// class Ussera{
//     name: string = 'Имя';// в tsconfig.json: "strictPropertyInitialization": false, 
//     age: number | string = 'возраст';
// }
// const usser1 = new Usser(undefined, 23)
// console.log(usser1)
// const usserr1 = new Usserr('Kolja', 43)
// console.log(usserr1)
// const ussera1 = new Ussera()
// ussera1.name = 'Ssss'
// console.log(ussera1);
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Mashina_price;
//Работа с конструктором класса:
class Us {
    constructor(arg1, arg2) {
        // Устанавливаем значения по умолчанию
        this.name = 'Имя';
        this.age = 'возраст';
        if (arguments.length === 2) {
            // Передано два аргумента: name и age
            this.name = arg1 !== null && arg1 !== void 0 ? arg1 : this.name; //оператор nullish coalescing (??) - присваивает this.name значение arg1, если оно не равно null или undefined. Если arg1 — null или undefined, 
            // то сохраняет текущее значение (по умолчанию)
            this.age = arg2 !== null && arg2 !== void 0 ? arg2 : this.age;
        }
        else if (typeof arg1 === 'number') {
            // Передан только возраст
            this.age = arg1;
        }
        else if (typeof arg1 === 'string') {
            // Передано только имя
            this.name = arg1;
        }
        // Если ничего не передано, остаются значения по умолчанию
    }
}
const us0 = new Us();
const us1 = new Us('Ddddd');
const us2 = new Us(66);
const us3 = new Us('sdfsd', 34);
const us4 = new Us(undefined, 100);
console.log(us0); // { name: 'Имя', age: 'возраст' }
console.log(us1); // { name: 'Ddddd', age: 'возраст' }
console.log(us2); // { name: 'Имя', age: 66 }
console.log(us3); // { name: 'sdfsd', age: 34 }
console.log(us4); // { name: 'Имя', age: 100 }
//Работа с методами класса:
class UU {
    constructor() {
        this.skills = ['1', '2'];
    }
    adSkils(skill) {
        if (typeof skill === 'string') {
            this.skills.push(skill);
        }
        else {
            this.skills = [...this.skills, ...skill];
        }
        return this.skills;
    }
}
const uu1 = new UU();
uu1.adSkils('sdfsd');
const uu2 = new UU();
uu2.adSkils(['3', '4']);
console.log(uu1, uu2);
//Геттеры и Сеттеры:
class Peoples {
    constructor() {
        this._name = 'Имя';
        this.age = 'Возраст';
    }
    set name(ff) {
        this._name = ff;
    }
}
;
const people = new Peoples();
console.log(people);
people.name = 'sdfsd';
console.log(people);
class Chelll {
    constructor(name) {
        this.name = 'Имя';
        this.password = 'sdfsd';
        this.surname = 'Фамилия';
        this.name = name;
    }
    log() {
        //тело функции;
    }
}
//Наследование (extends) классов:
class Niger extends Chelll {
    constructor(name, password) {
        name = name.toUpperCase();
        super(name);
        this.password = password;
    }
    log(date) {
        super.log();
        console.log('args');
        if (date) {
            this.created = date;
            console.log(date);
        }
    }
}
;
const niger1 = new Niger('Яша', 567432);
const chelll = new Chelll('Костя');
console.log(niger1);
niger1.log(345);
console.log(chelll);
//Композиция:
class Voen {
    constructor() {
        this.doljnostj = 'Должность';
        this.zvanie = 'Званеие';
    }
}
class Compose {
    constructor(name, doljnostj) {
        this.niger = {
            created: 1111,
            name: name,
            password: 5555,
            surname: 'Фамил ккк',
            log(date) {
                console.log('args');
                if (date) {
                    this.created = date;
                    console.log(date);
                }
            }
        };
        this.voen = {
            doljnostj: doljnostj,
            zvanie: "zzzz",
        };
    }
}
const comp = new Compose('Женя', "капитан");
console.log(comp.niger);
console.log(comp.voen);
comp.niger.log(345);
comp.voen.doljnostj = 'командир';
console.log(comp.voen);
class Compose2 {
    constructor(niger, voen) {
        this.niger = niger;
        this.voen = voen;
    }
}
const comp2 = new Compose2(new Niger('Имя второй композиции', 32423), new Voen());
console.log(comp2.niger);
console.log(comp2.voen);
comp2.niger.log(99999);
comp2.voen.doljnostj = 'нач кур';
console.log(comp2.voen);
//Миксин — это паттерн, позволяющий добавлять функциональность к классам, комбинируя свойства и методы из нескольких источников. 
// В TypeScript/JavaScript миксины обычно реализуются через функции или классы, которые объединяют свойства:
class Dvigatt {
    constructor(name, mosh) {
        this.name = name;
        this.mosh = mosh;
    }
}
class Kolesaa {
    constructor(marka, leto) {
        this.marka = marka;
        this.leto = leto;
    }
}
// Миксин — функция объединения свойств
function ccreateMashina(dvigat, kolesa) {
    // Создаем объект с объединенными свойствами
    const mashina = Object.assign(Object.assign({}, dvigat), kolesa);
    return mashina;
}
const dvig1 = new Dvigat('Niva', 4);
const kol1 = new Kolesa('Italy', false);
const mashinaa1 = createMashina(dvig1, kol1);
console.log(mashinaa1);
//Видимость свойств у классов:
class Mashina {
    constructor() {
        this.probeg = 0;
        _Mashina_price.set(this, void 0);
    }
    set model(m) {
        this._model = m;
    }
    ;
    get model() {
        return this._model;
    }
    ;
    addDamages(damage) {
        this.damages.push(damage);
    }
    ;
    changeProbeg(km) {
        this.probeg = this.probeg + km;
    }
    get price() {
        return __classPrivateFieldGet(this, _Mashina_price, "f");
    }
    ;
    isPriceEqual(m) {
        return __classPrivateFieldGet(this, _Mashina_price, "f") === __classPrivateFieldGet(m, _Mashina_price, "f");
    }
}
_Mashina_price = new WeakMap();
const mash = new Mashina();
class F1 extends Mashina {
    // getDamages(){
    //     return this.damages, this.#price//Дают ошибку т.к. private damages и #price
    // };
    getProbeg() {
        return this.probeg; //Ошибки нет т.к. protected probeg
    }
}
const f1 = new F1();
