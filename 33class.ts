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

//Работа с конструктором класса:
class Us {
    name: string;
    age: number | string;

    constructor();
    constructor(nameOrAge?: string | number);
    constructor(name?: string, age?: number | string);
    constructor(arg1?: any, arg2?: any) {
        // Устанавливаем значения по умолчанию
        this.name = 'Имя';
        this.age = 'возраст';
        if (arguments.length === 2) {
            // Передано два аргумента: name и age
            this.name = arg1 ?? this.name;//оператор nullish coalescing (??) - присваивает this.name значение arg1, если оно не равно null или undefined. Если arg1 — null или undefined, 
            // то сохраняет текущее значение (по умолчанию)
            this.age = arg2 ?? this.age;
        } else if (typeof arg1 === 'number') {
            // Передан только возраст
            this.age = arg1;
        } else if (typeof arg1 === 'string') {
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
class UU{
    skills: string[] = ['1', '2'];
    adSkils(skill: string): string[];
    adSkils(skill: string[]): string[];
    adSkils(skill: string | string[]): string[]{
        if (typeof skill === 'string'){
            this.skills.push(skill) 
        } else {
            this.skills = [...this.skills, ...skill]
        } 
        return this.skills;    
    }
}
const uu1 = new UU();
uu1.adSkils('sdfsd')
const uu2 = new UU();
uu2.adSkils(['3', '4'])
console.log(uu1, uu2)

//Геттеры и Сеттеры:
class Peoples{
    private _name: string = 'Имя';
    age: number | string = 'Возраст';
    
    set name (ff: string ){
        this._name = ff
    }
};
const people = new Peoples();
console.log(people);
people.name ='sdfsd';
console.log(people);

//Имплементация (добавление свойств) классов интерфейсами:
interface Ichelll{
    name: string,
    surname: string
}
interface Ipassword{
    password: string;
    parrol?: string | number;
    log(...args: number[]): void
}

class Chelll implements Ichelll, Ipassword{
    name: string = 'Имя';
    constructor(name: string){
        this.name = name
    }
    log(): void {
        //тело функции;
    }
    password: any = 'sdfsd';
    surname: string = 'Фамилия';  
}

//Наследование (extends) классов:
class Niger extends Chelll{
    created: number;
    constructor(name: string, password: number){
        name = name.toUpperCase()
        super(name);
        this.password = password
    }
    override log(date?: number){//переопределение метода
        super.log();
        console.log('args');
        if (date){
            this.created = date;
            console.log(date)
        }
    }
};
const niger1 = new Niger('Яша', 567432);
const chelll = new Chelll('Костя');
console.log(niger1);
niger1.log(345,);
console.log(chelll);

//Композиция:
class Voen{
    doljnostj: string = 'Должность';
    zvanie: string = 'Званеие'
}
class Compose{
   niger: Niger;
   voen: Voen;
   constructor(name: string, doljnostj: string){
    this.niger = {
        created: 1111,
        name: name,
        password: 5555,
        surname: 'Фамил ккк',
        log(date?: number): void{
            console.log('args');
            if (date){
                this.created = date;
                console.log(date)
            }
        }
    }
    this.voen = {
        doljnostj: doljnostj,
        zvanie: "zzzz",
    }     
    }
}
const comp = new Compose('Женя', "капитан");
console.log(comp.niger)
console.log(comp.voen)
comp.niger.log(345)
comp.voen.doljnostj = 'командир'
console.log(comp.voen)

class Compose2{
   niger: Niger;
   voen: Voen;
   constructor(niger: Niger, voen: Voen){
    this.niger = niger
    this.voen = voen
    }
}
const comp2 = new Compose2(new Niger('Имя второй композиции', 32423), new Voen());
console.log(comp2.niger)
console.log(comp2.voen)
comp2.niger.log(99999)
comp2.voen.doljnostj = 'нач кур'
console.log(comp2.voen)

//Миксин — это паттерн, позволяющий добавлять функциональность к классам, комбинируя свойства и методы из нескольких источников. 
// В TypeScript/JavaScript миксины обычно реализуются через функции или классы, которые объединяют свойства:
class Dvigatt {
    name: string;
    mosh: number;
    constructor(name: string, mosh: number) {
        this.name = name;
        this.mosh = mosh;
    }
}
class Kolesaa {
    marka: string;
    leto: boolean;
    constructor(marka: string, leto: boolean) {
        this.marka = marka;
        this.leto = leto;
    }
}
// Миксин — функция объединения свойств
function ccreateMashina(dvigat: Dvigatt, kolesa: Kolesaa) {
    // Создаем объект с объединенными свойствами
    const mashina = {
        ...dvigat,
        ...kolesa
    };
    return mashina;
}
const dvig1 = new Dvigat('Niva', 4);
const kol1 = new Kolesa('Italy', false);
const mashinaa1 = createMashina(dvig1, kol1);
console.log(mashinaa1);

//Видимость свойств у классов:
class Mashina{
    public make: string;
    private _model: string;
    private damages: string[];
    protected probeg: number = 0;
    #price: number

    set model(m: string){
        this._model = m
    };
    get model(){
        return this._model
    };
    addDamages(damage: string){
        this.damages.push(damage)
    };  
    changeProbeg(km: number){
        this.probeg = this.probeg + km
    } 
    get price(){
        return this.#price
    };
    isPriceEqual(m: Mashina){
        return this.#price === m.#price
    }
}
const mash = new Mashina();
class F1 extends Mashina{
    // getDamages(){
    //     return this.damages, this.#price//Дают ошибку т.к. private damages и #price
    // };
    getProbeg(){
        return this.probeg//Ошибки нет т.к. protected probeg
    }
}
const f1 = new F1();