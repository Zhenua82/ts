"use strict";
//Литеральные типы:
let k = 'test';
function performAction(action) {
    switch (action) {
        case 'down':
            return -1;
        case 'up':
            return 1;
    }
}
;
;
function performComplexAction(action) {
    switch (action) {
        case 'down':
            console.log(-1);
            return -1;
        case 'up':
            console.log(1);
            return 1;
        default:
            console.log('Вы робот!');
    }
}
;
performComplexAction({ s: 'sdfs' });
performComplexAction('down');
performComplexAction('up');
//Enums:
//Числовые Enums:
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 5] = "Up";
    Direction[Direction["Down"] = 6] = "Down";
    Direction[Direction["Left"] = 7] = "Left";
    Direction[Direction["Right"] = 8] = "Right";
})(Direction || (Direction = {}));
;
console.log(Direction.Left);
console.log(Direction[6]);
//Строковые Enums:
var Direction_string;
(function (Direction_string) {
    Direction_string["Up"] = "up";
    Direction_string["Down"] = "down";
    Direction_string["Left"] = "left";
    Direction_string["Right"] = "right";
})(Direction_string || (Direction_string = {}));
;
console.log(Direction_string.Left);
console.log(Direction_string['Right']);
//Гетерогенные Enums:
var Direction_getero;
(function (Direction_getero) {
    Direction_getero[Direction_getero["Yes"] = 1] = "Yes";
    Direction_getero["No"] = "no";
})(Direction_getero || (Direction_getero = {}));
;
console.log(Direction_getero['No']);
//Расчетные Enums (могут быть только числовыми):
var Direction_calc;
(function (Direction_calc) {
    Direction_calc[Direction_calc["Yes"] = 111] = "Yes";
    Direction_calc[Direction_calc["No"] = calcEnum()] = "No";
})(Direction_calc || (Direction_calc = {}));
;
function calcEnum() {
    return 222;
}
;
console.log(Direction_calc['No']);
//Enums можно использовать как объекты:
function runEnum(obj) {
    console.log('Объект введён');
}
;
runEnum(Direction_getero);
//Обратный мапинг:
let aaa = Direction_calc.Yes;
console.log(aaa);
let nameYes = Direction_calc[aaa];
console.log(nameYes);
;
let ccc = 0 /* ConstEnum.A */;
console.log(ccc);
//тип never (для обнаружения ошибок):
var Kubic;
(function (Kubic) {
    Kubic[Kubic["One"] = 1] = "One";
    Kubic[Kubic["Two"] = 2] = "Two";
    Kubic[Kubic["Three"] = 3] = "Three";
})(Kubic || (Kubic = {}));
function ruKubic(kubic) {
    switch (kubic) {
        case Kubic.One:
            return 'один';
        case Kubic.Two:
            return 'два';
        case Kubic.Three:
            return 'три';
        default:
            const erro = kubic; //Показывает ошибку при добавлении новых свойств в кубик
    }
}
