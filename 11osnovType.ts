const aa: number = 56;
let bb = 65;
let cc: number = aa + bb;
let dd: boolean = true;
let fff: string = 'строка';
console.log(cc, dd, fff);

// Типизирование функций:
function fullName (name: string, surname: string): string {
    return `Имя:${name}, Фамилия:${surname}`
}
function fullName2 (name: any, surname: any) {
    return `Имя:${name}, Фамилия:${surname}`
}
const fullNameArrow = (name: string, surname: string): string => {
return `Результат стрелочной функции: Имя:${name}, Фамилия:${surname}`
}

console.log(fullName('Иван', 'Дурак'));
console.log(fullName2(5+2 === 1, 'Строка'));
console.log(fullNameArrow('', 'Петров'));

// Типизация передоваемого в функцию объекта:
function fullNameObject(userAny: {name: string, surname: string, hobby: {chess: boolean}}): string{
    return `Результат из объекта: Имя: ${userAny.name}, Фамилия: ${userAny.surname}, Умеет ли играть в шахматы: ${userAny.hobby.chess}`
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
} //Здесь объект более широкий по типам, чем то что передается в функцию (мы не передаем city, age, hobby.sky ), но в ts это допустимо
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
}
const obj = JSON.parse(JSON.stringify(jsonn));
console.log(typeof(obj), obj)

let objType: {
    officeId: number,
	isOpened: boolean,
	contacts: {
		phone: string,
		email: string,
		address: {
			city: string
		}
	}
};
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
const array1: string[] = ['Dev', 'Devops', 'Ml'];

for (let el of array1){
    console.log(el.toLowerCase())
};
array1.forEach((el)=> {
    console.log(el + 45) 
});
const array2 = array1.forEach((el)=> {
    return el + 55 
});//Вернет undefined
const changArray1 = array1.map((el) => {
    return el + el;
});

const filter = array1.filter((el, i) => {
    return el !== 'Devops' && i < 2;
})// При этом сам array1. - не изменяется и остается прежним
console.log(array1, array2, changArray1, filter);

//tuples (кортежи):
const array3: [string, number] = ['age', 4];
const array4: [string, number, ... boolean[]] = ['age', 44, true, false];
const[params, znachenie, ...rest] = array4;
console.log(params, znachenie, rest)

//readonly (только для чтения - не позволяет менять структуру массива(кортежа)):
let array5: readonly number[] = [1, 3, 4, 6];
// array5.push(10)// readonly не позволяет изменить массив
console.log(array5);

//Enums:
//числовой enum:
enum Status {
	one = 1,
	two,
	five = 5,
	ten = 10
}
const user = {
	name: 'Ivan',
	status: Status.five
}

function provercaStatus(user: {
    name: string;
    status: Status;
}){
if(user.status <= 2){
	console.log('Юзер подходит!')
} else console.log('Ошибка с юзером!')
}
provercaStatus(user);

//гетерогенный enum (но при обращении к нему он себя ведет как числовой):
enum Statuss {
	onee = 1,
	twoo,
	fivee = 'среднее',
	tenn = 10
}
function vyzovEnum(perem: Statuss){
	console.log(`Гетерогенный енам: ${perem}`)
}
vyzovEnum(Statuss.fivee)
vyzovEnum(2)
vyzovEnum(10)
// vyzovEnum('среднее')//здесь это неправильный вызов т.к. enum ведет себя как числовой

//расчетные enums:
function raschet(numb: number){
	return numb * 10

}
enum Raschet {
	a = 1,
	b = raschet(a)
}
console.log(`Расчетный енам:${Raschet.b}`);

//Константные enums:
const enum Constanta{
	a = 1,
	b = 2
}
console.log(`Константный енам: ${Constanta.a}`)//При конвертации в js убирается функция enum и просто сохраняются константы (это повышает производительность!)

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
enum Varianty{
	published = 'published',
	draft = 'draft',
	deleted = 'deleted'
}
async function getFaqs(req: {topicId: number, status: Varianty}): Promise<{
		question: string,
		answer: string,
		tags: string[],
		likes: number,
		status: Varianty
	}[]> {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}