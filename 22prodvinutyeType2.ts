//Тип Void:
function umnozheniee(num1: number, num2?: number){
    console.log('1')
}
umnozheniee(5)//Ответ функции void - возвращает все что угодно в том числе и ничего

let massiv = ['el1', 2];
let objj: { name: string; skill: (string | number) []} = {
    name: 'Ivan',
    skill: []
}
massiv.forEach((el) => (objj.skill.push(el)));//Здесь колбэк функция в forEach на выходе имеет тип void, позволяющий возвращать (пушить - push(el)) элементы любого типа
console.log(objj)

//Тип unknown:
let unk: unknown;//Этот тип в отличии от any нельзя положить в переменную другого типа - см. ниже (можно положить только в переменные типа unknown и any)
// let unk: any;
unk = 22;
// let strin: string = unk//Тип unknown здесь дал бы ошибку (нужен тип any)
let eny: any = unk;
console.log(typeof unk as unknown);
console.log(typeof unk);

console.log(unk)
async function getData() {
    try {
        await fetch('')
       
    } catch (error) {//Тип error - unknown и без проверки error.message - выдаст ошибку (т.к. это изначально не строка). В ts до версии 4.4 error был тип any, а после его изменили на unknown
        if (error instanceof Error){
            console.log(error.message);
        }    
    }    
}
getData()
type Union = unknown | string//Если в юнион есть unknown - то тип всегда будет unknown
type Intersection = unknown & string//Если в интерсекшен (пересечение) есть unknown - то тип всегда будет не unknown, а тот с чем он пересекается

//Тип Never - обозначает значения, которые никогда не происходят или функции, которые никогда не возвращают значение:
let nev : string & number;
function neve (el1: string | number){
    switch(typeof el1){
        case 'string':
            //.....
            break;
        case 'number':
            //...
            break;
        default:
            const _:never = el1;//Здесь тип el1 - never пока (el1: string | number)
            throw new Error('Нет такого')
    }  
}
function never(): never{
    throw new Error('Функция never')
}
try {
    never();
} catch (error) {
    if (error instanceof Error){
            console.log('Обработка ошибки:', error.message);
        }    
}

//Тип null - когда мы осознанно заявляем что объекта нет (в этом его отличие от undefined):
const n1: null = null;
const n2: any = null;
const n3: unknown = null;
// const n4: undefined = null;//Здесь уже ошибки!
// const n5: number = null;
// const n6: boolean = null;

interface Userrrr {
    name: string
}
function peopele(): Userrrr | null{
    if(Math.random() > 0.5){
        return null
    } return {
        name: 'Vasay'
    }
}
const peopl = peopele();
if(peopl){
    console.log(peopl.name)
} else console.log(null)

//Приведение типов:
let nnn: number;
let stroka: string = 'sdfs';
nnn = parseInt(stroka);
console.log('Строка в число', nnn);
let chislo = 5
stroka = chislo.toString()
console.log('Число в строку', stroka)
let obj1 = {
    name: 'GGGG',
    email: 'sss@yandex.ru',
    login: 'kkkk'
}

let obj2 = {
    role: 1,
    password: 'bbbb'
}

let obj3 = {
    ...obj1,
    ...obj2
}
console.log(obj3)

function obj1toObj3(obj1: any, obj2: any){
    return {name: obj1.name,
    password: obj2.password}
}
console.log('Новый объект:', obj1toObj3(obj1, obj2))

//Задача сделать typeguard ответа от сервера о платеже (в случае успеха возвращает databaseId, а в случае не успеха кидает ошибку) (type f = (res: IResponseSuccess | IResponseFailed) => number;):
interface IPayment {
	sum: number;
	from: number;
	to: number;
}
enum PaymentStatus {
	Success = 'success',
	Failed = 'failed',
}
interface IPaymentRequest extends IPayment { }
interface IDataSuccess extends IPayment {
	databaseId: number;
}
interface IDataFailed {
	errorMessage: string;
	errorCode: number;
}
interface IResponseSuccess {
	status: PaymentStatus.Success;
	data: IDataSuccess;
}
interface IResponseFailed {
	status: PaymentStatus.Failed;
	data: IDataFailed;
}

//Решение :
function fun(res: IResponseSuccess | IResponseFailed): number {
if (res.status === 'success') {
    return res.data.databaseId;
} else {
    throw new Error('Ответ от сервера - не успешен');
}
}
//2-ой вариант через Type Guard:
function typeguardSuccess (res: IResponseSuccess | IResponseFailed): res is IResponseSuccess{
    if (res.status === PaymentStatus.Success){
        return true;
    } else return false;
}
function funn(res: IResponseSuccess | IResponseFailed): number {
if (typeguardSuccess(res)) {
    return res.data.databaseId;
} else {
    throw new Error('Ответ от сервера - не успешен');
}
}

//Проверка:
const otvetPoll: IResponseSuccess = 
{
	status: 'success',
	data: {
		databaseId: 567,
		sum: 10000,
		from: 2,
		to: 4
	}
} as IResponseSuccess;

const otvetOtrr: IResponseFailed = 
{
	status: 'failed',
	data: {
		errorMessage: "Недостаточно средств",
		errorCode: 4
	}
} as IResponseFailed;

try {
    const result = fun(otvetPoll);
    console.log('Положительный ответ:', result);
} catch (error) {
    if (error instanceof Error){
            console.error(error.message);
        }       
};
try {
    const result = fun(otvetOtrr);
    console.log('Ответ:', result);
} catch (error) {
     if (error instanceof Error){
            console.error(error.message);
        }   
};
try {
    const result = funn(otvetPoll);
    console.log('Положительный ответ 2-ой вариант:', result);
} catch (error) {
    if (error instanceof Error){
            console.error(error.message);
        }       
};
try {
    const result = funn(otvetOtrr);
    console.log('Ответ от второго варианта:', result);
} catch (error) {
     if (error instanceof Error){
            console.error('Ошибка второго варианта:', error.message);
        }   
};
    