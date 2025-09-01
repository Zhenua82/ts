interface People{
    name: string,
    surname: string,
    age?: number
}

//Делаем необязательным свойства (Partial):
type neobPeople<T> = {
    [prop in keyof T]+?: T[prop]
};
const newPeopl: neobPeople<People> = {
    surname: 'Petrov'
};
type neobPeople2 = Partial<People>;
const newPeopl2: neobPeople2 = {
    surname: 'Ivanov'
}
//Делаем обязательным свойства (Required):
type obPeople<T> = {
    [prop in keyof T]-?: T[prop]
};
const newPeopl3: obPeople<People> = {
    surname: 'Petrov',
    name: 'Ivan',
    age: 33
};
type obPeople2 = Required<People>;
const newPeopl4: obPeople2 = {
    surname: 'Petrov',
    name: 'Ivan',
    age: 55
}
//Делаем свойства только для чтения (Readonly):
type readPeople<T> = {
    readonly [prop in keyof T]: T[prop]
};
const newPeopl5: readPeople<People> = {
    surname: 'Petrov',
    name: 'Ivan',
    age: 33
};
type readPeople2 = Readonly<People>;
const newPeopl6: readPeople2 = {
    surname: 'Petrov',
    name: 'Ivan',
    age: 55
}
//Комбинируем Readonly, Required и Partial:
type readReqPeople<T> = {
    readonly [prop in keyof T]-?: T[prop]
};
const newPeopl7: readReqPeople<People> = {
    surname: 'Petrov',
    name: 'Ivan',
    age: 33
};
type readReqPeople2 = Readonly<Required<People>>;
const newPeopl8: readReqPeople2 = {
    surname: 'Petrov',
    name: 'Ivan',
    age: 55
};
//Выбрать нужные свойства (Pick):
type pickPeople<T, K extends keyof T> = {
    [El in K]: T[El]
};
const newPeopl9: pickPeople<People, 'surname'> = {
    surname: 'Petrov'
};
type pickPeople2 = Pick<People, 'surname' | 'age'>;
const newPeopl10: pickPeople2 = {
    surname: 'Petrov',
    age: 56
};
//Исключить ненужные свойства (Omit):
type omitPeople<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
const newPeopl11: omitPeople<People, 'surname'> = {
    name: 'Ivan',
    age: 33
};
type omytPeople2 = Omit<People, 'surname' | 'age'>;
const newPeopl12: omytPeople2 = {
    name: 'Ivan',
};
// Экстракция - выбор из юнион типов нужного (Extract):
type extractPeople<T, U> = T extends U ? T: never;
const newPeopl13: extractPeople<'Olja' | 45, string> = 'Olja';
type extractPeople2 = Extract<People | 'Vasja' | 'Olja' | 45, string>;
const newPeopl14: extractPeople2 = 'Vasja';
const newPeopl15: extractPeople2 = 'Olja';
type extractPeople3 = Extract<People | 'Vasja' | 45, People>;
const newPeopl16: extractPeople3 = {
    name: 'Kolja',
    surname: 'Petrov',
    age: 43
};
// Исключение - исключение из юнион типов нужного (Exclude):
type excludePeople<T, U> = T extends U ? never: T;
const newPeopl17: excludePeople<'Olja' | 45, string> = 45;
type excludePeople2 = Exclude<People | 'Vasja' | 'Olja' | 45, string>;
const newPeopl18: excludePeople2 = 45;
const newPeopl19: excludePeople2 = {
    name: 'Kolja',
    surname: 'Petrov',
    age: 43
};
type excludePeople3 = Exclude<People | 'Vasja' | 45, People>;
const newPeopl20: excludePeople3 = 'Vasja'

//Узнать какой тип возвращает функция (ReturnType):
class Uuser{
    constructor(public id: number, public name: string){}
};
function gettData(id: number): Uuser{
    return new Uuser(id, `User${id}`);
};

type returnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
type RT = ReturnType<typeof gettData>;
type RT2 = ReturnType<<T>() => T >;
type RT3 = ReturnType<<T extends string>() => T >;
//Узнать какой параметр принимает функция (ParametrType):
type parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
type PT = Parameters<typeof gettData>;
//Получение первого параметра функции:
type FirstParameter<T> = T extends (first: infer F, ...args: any[]) => any ? F : never;//Это самоделка!!!
type FP = FirstParameter<typeof gettData>;
type FP2 = PT[0];
type FP3 = Parameters<typeof gettData>[0];
//Получение параметров класса:
type сonstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;
type CPT = ConstructorParameters<typeof Uuser>;
//Получение типа класса:
type instanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;
type IT = InstanceType<typeof Uuser>;

//Получение типов из асинхронных функций (промисов):
type awaited<T> = T extends null | undefined ? T : // special case for `null | undefined` when not in `--strictNullChecks` mode
    T extends object & { then(onfulfilled: infer F, ...args: infer _): any; } ? // `await` only unwraps object types with a callable `then`. Non-object types are not unwrapped
        F extends ((value: infer V, ...args: infer _) => any) ? // if the argument to `then` is callable, extracts the first argument
            Awaited<V> : // recursively unwrap the value
        never : // the argument to `then` was not callable
    T; // non-object or non-thenable
type awaitExp = Awaited<Promise<string>>;
type awaitExp2 = Awaited<Promise<Promise<string>>>;
//Пример использования:
interface IMenu{
    name: string,
    cena: number
}
async function getMenu(): Promise<IMenu[]> {
    return [{name: 'soup', cena: 10}]   
}
type FunctGetMenu = Awaited<ReturnType<typeof getMenu>>//Получение возвращаемого типа данных из асинхронной функции