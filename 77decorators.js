"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
class UserService {
    constructor() {
        this.users = 1000;
    }
    getUsers() {
        return this.users;
    }
}
function nullUsers(obj) {
    obj.users = 0;
    return obj;
}
console.log(new UserService().getUsers());
console.log(nullUsers(new UserService()).getUsers());
function logUsers(obj) {
    console.log('Users:' + obj.getUsers());
    return obj;
}
console.log(logUsers(nullUsers(new UserService())).getUsers());
console.log(nullUsers(logUsers(new UserService())).getUsers());
let UserServiceDecor = class UserServiceDecor {
    constructor() {
        this.users = 1000;
    }
    getUsers() {
        return this.users;
    }
};
UserServiceDecor = __decorate([
    nullUsersDecor
], UserServiceDecor);
function nullUsersDecor(target) {
    target.prototype.users = 0; //Но все равно в рез будет 1000 т.к. target.prototype.users = 0; отрабатывает первым, а лишь затем  users: number = 1000
}
console.log(new UserServiceDecor().getUsers());
let UserServiceDecor2 = 
// @nullUsersDecor3//Здесь порядок таких декораторов (через переопределение свойства у нового класса (конструктор)) уже влияет на результат
class UserServiceDecor2 {
    constructor() {
        this.users = 1000;
    }
    getUsers() {
        return this.users;
    }
};
UserServiceDecor2 = __decorate([
    nullUsersDecor3,
    nullUsersDecor2
    // @nullUsersDecor3//Здесь порядок таких декораторов (через переопределение свойства у нового класса (конструктор)) уже влияет на результат
], UserServiceDecor2);
function nullUsersDecor2(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.users = 2;
        }
    };
}
function nullUsersDecor3(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.users = 3;
        }
    };
}
//Фабрика декораторов:
let UserServiceFabricDecor = 
// @setUserConstructString("rrrrr")//В декораторах setUserConstruct и setUserConstructString порядок - имеет смысл!
class UserServiceFabricDecor {
    getUsers() {
        return this.users;
    }
};
UserServiceFabricDecor = __decorate([
    setUser(4),
    setUserConstructString("rrrrrr"),
    setUserConstruct(5)
    // @setUserConstructString("rrrrr")//В декораторах setUserConstruct и setUserConstructString порядок - имеет смысл!
], UserServiceFabricDecor);
function setUser(n) {
    return (target) => {
        target.prototype.users = n;
    };
}
function setUserConstruct(n) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.users = n;
            }
        };
    };
}
function setUserConstructString(n) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.users = n;
            }
        };
    };
}
console.log(new UserServiceFabricDecor().getUsers());
//Задача: Сделать декоратор который добавляет свойство createdAt в класс, фиксируя дату создания
let UserServiceZadacha = class UserServiceZadacha {
    constructor() {
        this.users = 1000;
    }
    getUsers() {
        return this.users;
    }
};
UserServiceZadacha = __decorate([
    addData
], UserServiceZadacha);
function addData(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.createdAt = new Date();
        }
    };
}
console.log(new UserServiceZadacha());
console.log(new UserServiceZadacha().createdAt);
//Декоратор метода:
class UserServiceMethod {
    constructor() {
        this.users = 1000;
    }
    // @LogFactory(3)
    getUsers() {
        return this.users;
    }
}
__decorate([
    LogFactory(3),
    Log
    // @LogFactory(3)
], UserServiceMethod.prototype, "getUsers", null);
//Из lib.es5.d.ts:
// interface TypedPropertyDescriptor<T> {
//     enumerable?: boolean;
//     configurable?: boolean;
//     writable?: boolean;
//     value?: T;
//     get?: () => T;
//     set?: (value: T) => void;
// }
function Log(target, propertyKey, descriptor) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
    console.log(`descriptor: ${descriptor}`);
    descriptor.writable = false;
    // descriptor.value = () => {
    //     return new Error('Ошибка!')
    // }
    descriptor.value = function () {
        descriptor.enumerable = true;
        console.log(descriptor);
        return new Error('Ошибка!');
    };
}
function LogFactory(n) {
    return (target, propertyKey, descriptor) => {
        descriptor.value = function () {
            return n * n;
        };
    };
}
console.log(new UserServiceMethod().getUsers());
//Задача:  написать декоратор перехвата ошибок и их прокидывания дальше
class UserServiceZadachaCatch {
    constructor() {
        this.users = 1000;
    }
    getUsers() {
        throw new Error('Ошибка в задаче');
    }
}
__decorate([
    Catch
], UserServiceZadachaCatch.prototype, "getUsers", null);
function Catch(target, propertyKey, descriptor) {
    let oldRez = descriptor.value;
    if (typeof oldRez !== 'function') {
        return;
    }
    descriptor.value = function (...args) {
        try {
            return oldRez.apply(this, args);
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
                console.log(`Пойманная ошибка: ${error}`);
                throw error;
            }
        }
    };
}
try {
    console.log(new UserServiceZadachaCatch().getUsers());
}
catch (e) {
    console.error('Обработка внешнего блока:', e);
}
// console.log(new UserServiceZadachaCatch().getUsers());
//Декоратор свойства:
class UserServiceMax {
    constructor() {
        this.users = 1000;
    }
    getUsers() {
        return this.users;
    }
}
__decorate([
    Max(100)
], UserServiceMax.prototype, "users", void 0);
function Max(maxValue) {
    return function (target, propertyKey) {
        // Создаем приватное поле для хранения значения
        const privateProp = `__${propertyKey}`; //создаем поле "__users" - вспомогательное приватное поле с другим именем чтобы не было рекурсии
        Object.defineProperty(target, propertyKey, {
            get: function () {
                return this[privateProp];
            },
            set: function (value) {
                if (value > maxValue) {
                    console.warn(`Значение свойства ${propertyKey} не может быть больше ${maxValue}, а Вы ввели ${value}. Устанавливается ${maxValue}.`);
                    this[privateProp] = maxValue;
                }
                else {
                    this[privateProp] = value;
                }
            },
            enumerable: true,
            configurable: true,
        });
    };
}
const service = new UserServiceMax();
console.log(service.getUsers()); // 100
service.users = 50;
console.log(service.getUsers()); // 50
service.users = 150;
console.log(service.getUsers()); // 100, с предупреждением в консоли
console.log(service);
//Декоратор параметра:
// class UserServiceParam implements IUserService{
class UserServiceParam {
    constructor() {
        this.users = 1000;
    }
    getUsers(num, str) {
        console.log(str);
        return this.users + num;
    }
}
__decorate([
    __param(1, DecorParam())
], UserServiceParam.prototype, "getUsers", null);
function DecorParam() {
    return function (target, propertyKey, idParam) {
        console.log(target);
        console.log(propertyKey);
        console.log(idParam);
    };
}
const objParam = new UserServiceParam();
objParam.getUsers(5, 'ggg');
// Порядок выполнения декораторов:
let UserServicePorjadok = class UserServicePorjadok {
    constructor() {
        this.users = 1000;
    }
    getUsers(num) {
        return this.users + num;
    }
};
__decorate([
    PorjadokDecor('Свойства')
], UserServicePorjadok.prototype, "users", void 0);
__decorate([
    PorjadokDecor('Метода'),
    __param(0, PorjadokDecor('Параметра'))
], UserServicePorjadok.prototype, "getUsers", null);
UserServicePorjadok = __decorate([
    PorjadokDecor('Класса')
], UserServicePorjadok);
function PorjadokDecor(name) {
    console.log(`Инициализация декоратора: ${name}`);
    return function (target, propertyKey, descriptorOrIndex) {
        console.log(`Завершение работы декоратора ${name}`);
    };
}
