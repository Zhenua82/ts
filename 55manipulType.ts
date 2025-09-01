// keyof:
interface Iobject{
    massiv: number[],
    string: string
}
function primerr(obj: Iobject, key: keyof Iobject){
    if(key === 'massiv'){
        obj.massiv.push(... obj.massiv);
        return obj
    } else {obj.string = obj.string + 'string';
        return obj
    }
}
function primerr2 <T, K extends keyof T>(obj: T, key: K){
        return obj[key]
}
console.log(primerr({massiv: [2, 3], string: 'sdfsa'}, 'massiv'))
const objj2: Iobject = {massiv: [2, 3], string: '66666666'}
console.log(primerr2(objj2, 'string'));

// typeof:
let perem: typeof objj2 = {massiv: [3, 4, 5], string: 'ttt'}
type keyIobject = keyof typeof perem;
let perem2: keyIobject = 'string'

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

function sortir<T>(obj: T[], key: keyof T): Record<string, T[]> {
    const result: Record<string, T[]> = {};
    obj.forEach((el) => {
        const keyValue = el[key]; // получаем значение свойства по ключу
        const keyStr = String(keyValue); // преобразуем в строку для использования в качестве ключа
        if (!result[keyStr]) {
            result[keyStr] = [];
        }
        result[keyStr].push(el);
    });
    console.log(result)
    return result;
}
sortir(massivv, "name")

//Обращение по индексу:
interface Object {
    name: string,
    roles: string[]
};
type ObjectRoles = Object['roles'];
type ObjectRole = Object['roles'][number];
const rol = 'roles';
let rol2 = 'roles';
type ObjectRoles2 = Object[typeof rol];
// type ObjectRoles3 = Object[typeof rol2];//let - дает ошибку, т.к. в данном случае дает тип 'string' а не 'roles'!
const vid = ['name', 'age', 'surname'] as const;
type Vid = typeof vid;
type Vids = typeof vid[number];

//map type:
type color = 'red' | 'blue' | 'black';
interface Raduga {
    one: color,
    two: color,
    three: color
};

type colorToBooleanMod0<T> = {
    [prop in keyof T]: boolean
}
//Модификаторы мапы:
type colorToBooleanMod1<T> = {
    [prop in keyof T]+?: boolean
}
type colorToBooleanMod2<T> = {
    [prop in keyof T]-?: boolean
}
type colorToBooleanMod3<T> = {
    +readonly [prop in keyof T]+?: boolean
}
type colorToBooleanMod4<T> = {
    [prop in keyof T as `can${string & prop}`]: boolean
}
type colorToBooleanMod5<T> = {
    [prop in keyof T as Exclude<`can${string & prop}`, 'cantwo'>]: boolean
}
// Определяем интерфейс Bool как тип, основанный на colorToBoolean<Raduga>
interface Bool extends colorToBooleanMod0<Raduga> {}
const exper: Bool = {
    one: true,
    two: false,
    three: false
}
// Или можно просто использовать type:
type BoolType = colorToBooleanMod0<Raduga>;

//Задача: необходимо сделать тип для результата валидации формы, основываясь на типе формы
interface IForm{
    name: string,
    password: string
};
const form: IForm = {
    name: 'Vasja',
    password: '123'
}
const formValidation = {
    name: {isValid: true},
    password: {isValid: false, errorMessage: 'Пароль должен быть длиннее 5 символов'}
}
//1 ый вариант:
type FieldValidation = {
    isValid: boolean;
    errorMessage?: string;
};
type FormIsValid<T> = {
    [prop in keyof T]: FieldValidation;
};
type Proverca = FormIsValid<IForm>
//2-ой вариант - более точный:
type FormIsValid2<T> = {
    [prop in keyof T]: {isValid: true} | {isValid: false, errorMessage: string};
};
type Proverca2 = FormIsValid2<IForm>

//Литеральные типы:
type ReadWrite = 'read' | 'write';
type CanReadWrite = `can${ReadWrite}`
type CanReadWriteUpper = `can${Uppercase<ReadWrite>}`;
type CanReadWriteCap = `can${Capitalize<ReadWrite>}`;
type CanReadWriteLow = `can${Lowercase<CanReadWriteUpper>}`;
type NumberStr = '1234' | '5678';
type ReadWriteNumber = `${Capitalize<ReadWrite>}${NumberStr}`
//Обратный перевод:
type Obr<T> = T extends `can${infer El}`? El : never;
type ObrReadWrite = Obr<CanReadWrite>;
