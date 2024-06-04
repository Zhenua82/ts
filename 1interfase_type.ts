const a: number = 5.7;// присвоили переменной a тип числа
let b: string = 'dfdfs';// строка
let c = 'ccccc';//строка
let d = '5';// строка
let g = c + a;//при операциях со строкой получаем всегда строку
let h = true;
let x = c + h;//строка
console.log(x);
console.log(g);
let f: string[] = ['sdfsd', 'sdfsd', b, g];// массив из строк
let e: any = 3;
e = 'eeeee';//any позволяет переприсваивать переменной тип
let r: string | boolean = false;
let p: undefined = undefined;
let i: null = null;

//Типизация функции:
function test (a: string | number): string | number{
    return 5
};
let w = (a: number): boolean => {
    return true
};
f = f.map(el => el.toUpperCase());
console.log(f);
let ff = ['sdfsd', 45, 'uuuu'];
ff = ff.map((el: string | number) => el + 'df');
console.log(ff);
//Типизация объекта:
function coordin(coord: {lat: number, long?: number}){//Здесь функция ожидает, что к ней придет объект
//coord с одной числовой координатой и второй числовой или undefined координатой
};
//Проверка на типы для функции:
function proverca(id: string | number){
    //console.log(id.toUpperCase) - будет давать ошибку, ее можно избежать:
    if(typeof id === 'number'){
        let up = id.toString().toUpperCase();
        console.log(up, 45)
    }

    if(typeof id === 'string'){
        id.toUpperCase()
    }
};
proverca(456);
//Проверка на массив:
function getSum(a: number | number[]){
    if(Array.isArray(a)){
        let summ = a.reduce((sum, el) => {return sum += el});
        console.log(summ)
    }
};
getSum([45, 6, 34.6]);
//Если функция ничего не возвращает, то указывают void:
function sss(a: number): void{
    return
};

//Интерфейсы и типы:
function print(coord: {lat: number, long: number}){};
//А можно сделать так, с помощью типов:
type Point = {
    lat: number, 
    long: number
};
function print(coord: Point){};
type stringOrNumber = string | number;
function print(coord: stringOrNumber){};
//Или можно сделать с помощью интерфейсов:
interface IPoint {
    lat: number, 
    long: number
};
function print(coord: IPoint){};
interface I3DPoint extends IPoint {//Интерфейсы можно экстендить в отличии от типов, там нужен итерсекшен
    z: string
};
function printt(coord: I3DPoint){
    console.log('hello')
};
printt({lat:5, long:6, z:''});
//Интерсекшен (пересечение) типов:
type D3Point = Point & {
    widh: boolean
};
function printtt(coord: D3Point){
    console.log('hello type')
};
printtt({lat:5, long:6, widh: false})
//Дополнение свойств интерфейсов (с типами так нельзя):
interface Itest {
    a: number
};
interface Itest {
    b: string
};
function teste(coord: Itest){
    console.log('DDDD')
};
teste({a:6, b: ''});
//Конвертация интерфейсов (каст типов):
let u = (point: IPoint) =>{
    let t: I3DPoint = point as I3DPoint;
    console.log(t)
};
u({lat: 4, long: 3});
const myCanvas = document.getElementById('canvas') as HTMLElement;
console.log(typeof myCanvas)

//Задача описать интерфейсом json файл:
// {
// 	"userId": 1,
// 	"id": 1,
// 	"title": "delectus aut autem",
// 	"info": {
// 		"desc": "delectus aut autem",
// 		"isActive": true
// 	},
// 	"tags": [
// 		{
// 			"name": "my name",
// 			"value": 1000
// 		}
// 	]
// } 
// 1ый вариант:
interface Json {
    userId: number,
	id: number,
	title: string,
	info: {
		desc: string,
		isActive: boolean
	},
	tags: [
		{
			name: string,
			value: number
		}
	]
};
// 2ой вариант:
interface Info {
    desc: string,
	isActive: boolean
};
interface Tag {
    name: string,
	value: number
};
interface Common{
    userId: number,
	id: number,
	title: string,
	info: Info,
	tags: Tag[]
};