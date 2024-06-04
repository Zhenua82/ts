//Литеральные типы:
let k: 'test' = 'test';
type actionType = 'up' | 'down';
function performAction(action: actionType): -1 | 1 {
    switch (action) {
        case 'down':
            return -1;
        case 'up':
            return 1;
    }
};
interface ComplexAction {
    s: string;
};
function performComplexAction(action: actionType | ComplexAction){
    switch (action) {
        case 'down':
            console.log(-1)
            return -1;
        case 'up':
            console.log(1)
            return 1;
        default:
            console.log('Вы робот!');
    }   
};
performComplexAction({s: 'sdfs'});
performComplexAction('down');
performComplexAction('up');

//Enums:
//Числовые Enums:
enum Direction {
    Up = 5,//Указываем с какого числа начинается отчет
    Down,
    Left,
    Right
};
console.log(Direction.Left);
console.log(Direction[6]);
//Строковые Enums:
enum Direction_string {
    Up = 'up',
    Down ='down',
    Left = 'left',
    Right = 'right'
};
console.log(Direction_string.Left);
console.log(Direction_string['Right']);
//Гетерогенные Enums:
enum Direction_getero {
    Yes = 1,
    No = 'no'
};
console.log(Direction_getero['No']);
//Расчетные Enums (могут быть только числовыми):
enum Direction_calc {
    Yes = 111,
    No = calcEnum()
};
function calcEnum(){
    return 222;
};
console.log(Direction_calc['No']);
//Enums можно использовать как объекты:
function runEnum(obj: {No: string}){
    console.log('Объект введён')
};
runEnum(Direction_getero);
//Обратный мапинг:
let aaa = Direction_calc.Yes;
console.log(aaa)
let nameYes = Direction_calc[aaa];
console.log(nameYes);
//Использование Enums как констант:
const enum ConstEnum {
    A,
    B
};
let ccc = ConstEnum.A;
console.log(ccc);
//тип never (для обнаружения ошибок):
enum Kubic{
    One = 1,
    Two,
    Three
}
function ruKubic(kubic: Kubic){
    switch(kubic){
        case Kubic.One:
            return 'один';
        case Kubic.Two:
            return 'два';
        case Kubic.Three:
            return 'три';
        default:
            const erro: never = kubic;//Показывает ошибку при добавлении новых свойств в кубик
    }
}