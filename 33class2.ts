//Задача: 
// Необходимо сделать корзину (Cart) на сайте,
// которая имееет список продуктов (Product), добавленных в корзину
// и переметры доставки (Delivery). Для Cart реализовать методы:
// - Добавить продукт в корзину
// - Удалить продукт из корзины по ID
// - Посчитать стоимость товаров в корзине
// - Задать доставку
// - Checkout - вернуть что всё ок, если есть продукты и параметры доставки
// Product: id, название и цена
// Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)

class Product{
    id: number;
    name: string;
    cena: number;
    constructor(id: number, name: string, cena: number) {
        this.id = id;
        this.name = name;
        this.cena = cena;
    }
}
// Определяем интерфейсы для каждого варианта доставки
interface HomeDelivery {
    data: Date;
    adres: string;
}
interface PunctDelivery {
    data: Date; // Можно задать значение по умолчанию при создании объекта
    idMagazin: number;
}
// Объединяем их в тип
type DeliveryType = {
    type: 'home';
    details: HomeDelivery;
} | {
    type: 'punct';
    details: PunctDelivery;
};
class Delivery {
    type: 'home' | 'punct';
    data: Date;
    adres?: string;
    idMagazin?: number
    constructor(
        deliveryType: DeliveryType
    ) {
        this.type = deliveryType.type;
        if (deliveryType.type === 'home'){
            this.adres = deliveryType.details.adres
            this.data = deliveryType.details.data
        } else {
            this.data = new Date();
            this.idMagazin = deliveryType.details.idMagazin
        }
    }
}
class Cart{
    products: Product[] = [];
    delivery: Delivery;
    private checkStatus() {
        if (this.products.length > 0 && this.delivery) {
            console.log('OK!!!');
        }
    };
    addProduct(product: Product){
        this.products.push(product)
        this.checkStatus()
    };
    delProduct(id: number){
        this.products = this.products.filter(product => product.id !== id);
        this.checkStatus()
    };
    raschetCeny(){
        return this.products.reduce((total, product) => total + product.cena, 0);
    };
    startDelivery(deliver: Delivery){
        this.delivery = deliver
        this.checkStatus()
    }; 
};
const televizor = new Product(1, 'tv', 10);
const dostavkaTv = new Delivery({
    type: 'home',
    details: {data: new Date(2025, 7, 30), adres: 'ул Ленина 130'}
});
const cart1 = new Cart();
cart1.addProduct(televizor);
cart1.startDelivery(dostavkaTv);
console.log(cart1);

//Вариант gpt:
// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }
// type HomeDelivery = {
//   type: 'home';
//   date: Date;
//   address: string;
// };
// type ShopDelivery = {
//   type: 'shop';
//   date: Date; // всегда = сегодня
//   shopId: number;
// };
// type Delivery = HomeDelivery | ShopDelivery;

// class Cart {
//   private products: Product[] = [];
//   private delivery: Delivery | null = null;
//   // Добавить продукт
//   addProduct(product: Product): void {
//     this.products.push(product);
//   }
//   // Удалить продукт по ID
//   removeProduct(productId: number): void {
//     this.products = this.products.filter(p => p.id !== productId);
//   }
//   // Посчитать стоимость товаров
//   getTotalPrice(): number {
//     return this.products.reduce((sum, p) => sum + p.price, 0);
//   }
//   // Установить доставку
//   setDelivery(delivery: Delivery): void {
//     if (delivery.type === 'shop') {
//       delivery.date = new Date(); // дата всегда сегодня
//     }
//     this.delivery = delivery;
//   }
//   // Checkout
//   checkout(): string {
//     if (this.products.length === 0) {
//       throw new Error('Корзина пуста');
//     }
//     if (!this.delivery) {
//       throw new Error('Не указаны параметры доставки');
//     }
//     return 'Заказ оформлен успешно!';
//   }
//   // Для отладки
//   listProducts(): void {
//     console.log('Товары в корзине:', this.products);
//   }
//   getDelivery(): Delivery | null {
//     return this.delivery;
//   }
// }
// // Пример использования
// const cart = new Cart();
// const product1: Product = { id: 1, name: 'Ноутбук', price: 70000 };
// const product2: Product = { id: 2, name: 'Мышь', price: 1500 };
// cart.addProduct(product1);
// cart.addProduct(product2);
// cart.removeProduct(2); // удалить мышь
// console.log('Общая сумма:', cart.getTotalPrice()); // 70000
// cart.setDelivery({
//   type: 'home',
//   date: new Date('2025-08-01'),
//   address: 'ул. Примерная, д. 5'
// });
// console.log(cart.checkout()); // "Заказ оформлен успешно!"

//Статические свойства классов:
class UserServis{
    static id: number = 1;
    private static db: any;
    getDb(){
        console.log(UserServis.db)
    }
    setDb(znachenie: any){
       UserServis.db = znachenie
    }
    static{
        UserServis.db = 'Инициализация db'
    }
}
const userservis = new UserServis()
userservis.getDb()
console.log(UserServis.id)
UserServis.id = 2
console.log(UserServis.id)
userservis.setDb(3454235)
userservis.getDb();

//this:
class Payment{
    id: number = 1;
    private date: Date = new Date();
    getDate(this: Payment){
        return this.date;
    };
    getDateArrow = () => {
        return this.date;
    };
}
const platezh = new Payment();

const user11 = {
    id: 1,
    // paimentDate: platezh.getDate//так теряется контекст
    // paimentDate: platezh.getDate.bind(platezh)
    paimentDate: platezh.getDate(),
    paimentDateArrow: platezh.getDateArrow()
};
console.log(`platezh: ${platezh.getDate()}`);
console.log(`paimentDate from user11: ${user11.paimentDate}`);
// console.log(`paimentDate from user11: ${user11.paimentDate()}`);//для (paimentDate: platezh.getDate.bind(platezh) и для paimentDate: platezh.getDate)
console.log(`paimentDateArrow from user11: ${user11.paimentDateArrow}`);

class PaymentPersistent extends Payment{
    save(){
        return {
        dateSuper: super.getDate(),
        dateArrow: this.getDateArrow(),
        id: this.id,
        dateMethod: this.getDate()
    };
    }
}
console.log(new PaymentPersistent().save());

//типизация this:
class UserBilder{
    name: string;
    setName(name: string): this {
    // setName(name: string): UserBilder {//Такая типизация не правильная
    this.name = name;
    return this
    }
    isAdmin(): this is AdminBilder{
        return this instanceof AdminBilder;
    }
}
class AdminBilder extends UserBilder{
    roles: string[]
}
const res = new UserBilder().setName('Dick');
const res2 = new AdminBilder().setName('Hren');
console.log(res, res2);
let uuuser: UserBilder | AdminBilder = new UserBilder();
if (uuuser.isAdmin()){
    console.log(uuuser);
} else console.log(uuuser)

//Задача:
// Необходимо реализовать абстрактный класс Logger с 2-мя методами
// абстрактным - log(message): void
// printDate - выводящий в log дату
// К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
// выводящий сначала дату, а потом заданное сообщение
// abstract class Logger {
//     abstract log(message: any): void;
//     printDate(){
//         this.log(new Date().toString())
//         this.log(new Date())
//     }
// };
// class Real extends Logger {
//     log(message: any): void {
//         console.log(message)
//     };
//     logWithDate(mess: string){
//         this.printDate();
//         this.log(mess)
//     }
// }
// new Real().logWithDate('cdfasdfas')
