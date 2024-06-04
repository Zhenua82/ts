//Кортеж:
const tup: [number, string, number, number] = [1, 'a', 45, 45];
console.log(tup);
tup.push(2);//Как и в массив в кортеж можно добавить элемент, но обратится к нему
//будет нельзя, поэтому так не делается
console.log(tup, tup[1], tup[3]);//А tup[4] - уже не получится
//С кортежами можно делать все, что и смассивами:
const mapTup = tup.map(el => {
    if(typeof(el) === 'number'){
        return el*2
} else if(typeof el === 'string'){
    return el.toLocaleUpperCase()
}
});
console.log(mapTup);//Выполнили map
//Деструктуризация кортежа:
const [a1, a2, a3, a4] = tup;
console.log(a1, a2, a3, a4);
const [a5, ...restTup] = tup;
console.log(a5);
console.log(restTup);
//Generics (позволяют использовать функции или объекты для разных типов данных):
function logTime(num: number): number {
    console.log(new Date());
    return num
};
logTime(1);

function logTime2(num: string): string {
    console.log(new Date());
    return num
};
logTime2('sdf');
//Заменяем обе эти функции на generics:
function logTime3<T>(num: T): T {
    console.log(new Date(), num);
    return num
};
logTime3<string>('sdf');
logTime3<number>(43);
//Generics в описании интерфейсов:
interface Transform{
    trans: (a: number) => string
};
//Тот же вариант с generics:
interface Transform_generics{
    trans: <T, F>(a: T) => F
};
//Использование генериков с классами:
class GenClass<T> {
    val: T;
    constructor(val: T) {
        this.val = val;
    }
};
const cl = new GenClass<string>('33');
console.log(cl.val);
//Экстенд генериков:
interface TimeStamp{
    stamp: number;
    h: string
};
function logTimeStamp<T extends TimeStamp>(num: T){
    console.log(num.stamp, typeof num.h)
    return num.h
}
logTimeStamp({stamp: 5, h: 'sdfd'})