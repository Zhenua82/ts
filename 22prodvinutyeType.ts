//Union тип:
let aUnion: string | number;
aUnion = 1;
aUnion = 'sdfsd';
// aUnion = true - ошибка

//Сужение типов (Narrowing):
function logId(id: string | number | boolean | []){
    if (typeof id === 'string'){//Рантайм проверки
        console.log('String')
    } else if (Array.isArray(id)){
        console.log('Array')
    } else if (typeof id === 'number'){
        console.log('Number')
    } else console.log(`Boolean - ${id}`)
}
logId(true)

//Различение обьектов по ключу:
function logObject(obj: {a: number} | {b: number}){
    if ('a' in obj){
        console.log(`Обьект с а: ${obj.a}`)
    } else console.log(`Объект с в: ${obj.b}`)
}
logObject({b: 3});
logObject({a: 5});
//Сужение по пересекающимся типам:
function sujenie(a : string | number, b : string | boolean){
    // if (typeof a === typeof b){//Неверный вариант - так ts не проведет сужение типов и: ${a.toUpperCase()} и ${b.toUpperCase()} - выдаст ошибки
    if (typeof a === 'string' && typeof b === 'string'){
    // if (a === b){
        console.log(`String: ${a.toUpperCase()} и ${b.toUpperCase()}`)
    } else console.log(`Вместе ${a} и ${b} - не String`)
}
sujenie('строка а', 'строка в');
sujenie('строка а', 'строка а');
sujenie('строка а', true);

//Литеральные типы:
function fetchAutor(url: string, method: 'get' | 'post'): 1 | 6{
        // if (method === 'get'){
        //     return 1
        // } else return 6
        return method === 'get' ? 1 : 6;
}
let meth = 'postttt';
const meth2 = 'post'
console.log(fetchAutor('url', 'get'));
console.log(fetchAutor('url', meth as 'post'));//метод кастомизации к типу
console.log(fetchAutor('url', meth2));
console.log(meth)//выведит: postttt

//Алиас типы (type Aliases) (их лучше использовать для определения примитивных типов):
type httpMetod = 'get' | "post";
function fetch(url: string, method: httpMetod){
    console.log(url, method)
}
type User = {
    name: string;
    age: number;
    city: string
}
type Role = {
    id: number;
    // nameRole: string;
    name: string;
}
// type UserAndRole = User & Role;//Объединение типов объектов
type UserAndRole = {//Объединение типов объектов которые имеют пересекающиеся ключи (name)
    user: User,
    role: Role
}
// const userRole: UserAndRole = {
//     name: 'Ivan',
//     age: 33,
//     city: "Moscow",
//     id: 5,
//     nameRole: 'devops'
// }
const userRole: UserAndRole = {
    user: {
    name: 'Ivan',
    age: 33,
    city: "Moscow"},
    role: {id: 5,
    name: 'devops'}
}
console.log(userRole)
for (let i in userRole) {
    console.log(`${i}: ${userRole[i as keyof UserAndRole]}`);
}

// Интерфейсы (interface) (их лучше использовать при работе с объектами и классами):
interface Userr {
    name: string,
    age: number,
    city: string,
    log: (id: number) => string//Описание функции в объекте
}
interface Rolee {
    id: number;
    nameRole: string;
}
interface UserWithRole extends Userr{
    roleId: number
}
interface UserWithRole2 extends Userr, Rolee{
    created: Date
}
const userRolee: UserWithRole2 = {
    name: 'Ivan',
    age: 33,
    city: "Moscow",
    id: 5,
    nameRole: 'devops',
    created: new Date(),
    log(id){
        return ''
    }
}
interface UserDict {//Описание словаря
    [index: number]: Userr
}
type ud = Record<number, User>//Тоже самое описание словаря с использованием дженерика
const dict: UserDict = {
    1: {name: 'Ivan',
        age: 33,
        city: "Moscow",
        log(id){
            return ''
        }
    },
    2: {name: 'Egor',
        age: 43,
        city: "Moscow",
        log(id){
            return '!!!'
        }
    }
}
console.log(dict);
//Дополнение интерфейсов:
interface dopUser {
    name: string
}
interface dopUser {
    age: number
}
const dopUser: dopUser = {
    name: 'Kolya',
    age: 64
}

// Опциональность (option):
interface Chel {
    login: string,
    pasword?: {
        type: 'primary' | 'secondary'
    }
}
const chel1: Chel = {
    login: 'Ura',
    pasword: { type: 'primary'}
}
console.log(chel1.pasword?.type)

function umnozhenie(numb1: number, numb2?: number){
    if (!numb2){
        return numb1 * numb1
    }
    return numb1 * numb2
}
console.log(umnozhenie(5))

// Задача по типизации:
// // Запрос в виде платежа
// {
// 	"sum": 10000,
// 	"from": 2,
// 	"to": 4
// }
// // Ответ
// {
// 	"status": "success",
// 	"data": {
// 		"databaseId": 567,
// 		"sum": 10000,
// 		"from": 2,
// 		"to": 4
// 	}
// },
// {
// 	"status": "failed",
// 	"data": {
// 		"errorMessage": "Недостаточно средств",
// 		"errorCode": 4
// 	}
// }

interface zapros {
    sum: number,
    from: number,
    to: number
};

// interface otvet {
//     status: 'success' | 'failed',
//     data: zapros & { databaseId: number } 
//     | {
//     errorMessage: string,
//     errorCode: number
//     }
// };
interface otvetSuccess {
    status: 'success',
    data: zapros & {
        databaseId: number
    }
};

interface otvetFailed {
    status: 'failed',
    data: {
    errorMessage: string,
    errorCode: number
    }
};
type otvet = otvetSuccess | otvetFailed;

// Ответ
const otvetPol: otvet = 
{
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
const otvetOtr: otvet = 
{
	"status": "failed",
	"data": {
		"errorMessage": "Недостаточно средств",
		"errorCode": 4
	}
};
console.log(`Неудачный ответ сервера: ${JSON.stringify(otvetOtr, null, 2)}`);