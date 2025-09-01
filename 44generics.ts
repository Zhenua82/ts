const gen: Array<number> = [5, 3];
async function gene (a:string) {
    await new Promise<string>((resolve, reject) => {
        resolve(a)
    }) 
};

const check: Record<string, boolean> = {
    drive: true,
    kpp: false
};

const checkk: {[key: string]: boolean} = {
    drive: true,
    kpp: false
};

//Функция с generics:
function primer <T>(a:T): T{
    console.log(a);
    return a
}
const prim = primer(true)
console.log(primer('45'));
console.log(primer(false));

function spliseHalfArray<T>(arr: T): any{
    if (Array.isArray(arr)) {
        const l = arr.length;
        return arr.splice(0, l/2)
    } else return arr
}
console.log(spliseHalfArray([1, 2, 3, 4, 5, 6]));
console.log(spliseHalfArray('dfgdsfgsd'));

function spliseHalfArrayy<T>(arr: T[]): T[]{
    if (Array.isArray(arr)) {
        const l = arr.length;
        return arr.splice(l/2, l)
    } else return arr
}
console.log(spliseHalfArrayy([1, 2, 3, 4, 5, 6, 7, 8]));

//Задача: необходимо написать функцию toString, которая принимает любой тип и возвращает его 
// строковое представление. Если не может, то возвращает undefined.
function toString <T>(data: T): string | undefined{
    if (data === null) {
        return 'null'}
    else if (typeof data === 'undefined') {
        return undefined}
    else if (typeof data === 'number' ||
  typeof data === 'string' ||
  typeof data === 'boolean' ||
  typeof data === 'function'){
        return data.toString()
    } 
    else if (typeof data === 'object'){
        return JSON.stringify(data)
    } 
    else return undefined
}
console.log(toString(456));
console.log(toString(null));
console.log(toString([3, 4]));
console.log(toString(false));
console.log(toString(new Date()));
console.log(toString({a: new Date(), b: 66}));
console.log(toString(function Respect(sssss: any){}));
console.log(toString('sdfsdf'))

//Задача: Необходимо написать функцию сортировки любых
// объектов, которые имеют id по убыванию и по возрастанию
// Пример объекта:
const data = [
	{ id: 2, name: 'Петя' },
	{ id: 1, name: 'Вася' },
	{ id: 3, name: 'Надя' },
];
interface Obj{
    id: number
};
function sort <T extends Obj[], P extends 'up' | 'down'>(object: T, param: P): T{//Здесь применяется ограничение джинерика путем extends
    if (param === 'down'){
       return object.sort((a, b) => b.id - a.id);
    } else return object.sort((a, b) => a.id - b.id)
};
console.log(sort(data, 'down'));
console.log(sort(data, 'up'));

//Миксин — это паттерн, позволяющий добавлять функциональность к классам, комбинируя свойства и методы из нескольких источников. 
// В TypeScript/JavaScript миксины обычно реализуются через функции или классы, которые объединяют свойства:
class Dvigat {
    name: string;
    mosh: number;
    constructor(name: string, mosh: number) {
        this.name = name;
        this.mosh = mosh;
    }
}
class Kolesa {
    marka: string;
    leto: boolean;
    constructor(marka: string, leto: boolean) {
        this.marka = marka;
        this.leto = leto;
    }
}
// Миксин — функция объединения свойств
function createMashina(dvigat: Dvigat, kolesa: Kolesa) {
    // Создаем объект с объединенными свойствами
    const mashina = {
        ...dvigat,
        ...kolesa
    };
    return mashina;
}
const dvig = new Dvigat('Niva', 4);
const kol = new Kolesa('Italy', false);
const mashinaa = createMashina(dvig, kol);
console.log(mashinaa);

// Миксин через дженерики:
function createMashinaa<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 } as T & U;
}
const dvig2 = new Dvigat('Niva', 4);
const kol2 = new Kolesa('Italy', false);
const mashina2 = createMashinaa(dvig2, kol2);
console.log(mashina2);