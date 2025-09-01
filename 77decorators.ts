//Патерн декораторов:
interface IUserService{
    users: number;
    getUsers(): number
}
class UserService implements IUserService{
    users: number = 1000
    getUsers(): number{
        return this.users
    }
}

function nullUsers(obj: UserService){//функция nullUsers и есть декоратор, который изменяет obj
    obj.users = 0;
    return obj;
}
console.log(new UserService().getUsers());
console.log(nullUsers(new UserService()).getUsers());
function logUsers(obj: UserService){//Еще один декоратор logUsers
    console.log('Users:' + obj.getUsers());
    return obj
}
console.log(logUsers(nullUsers(new UserService())).getUsers());
console.log(nullUsers(logUsers(new UserService())).getUsers());

//Декоратор класса:
interface IUserServiceDecor{
    users: number;
    getUsers(): number
}
@nullUsersDecor
class UserServiceDecor implements IUserServiceDecor{
    users: number = 1000
    getUsers(): number{
        return this.users
    }
}
function nullUsersDecor(target: Function){//1-ый вариант: декоратор через изменение прототипа
    target.prototype.users = 0;//Но все равно в рез будет 1000 т.к. target.prototype.users = 0; отрабатывает первым, а лишь затем  users: number = 1000
}
console.log(new UserServiceDecor().getUsers());

@nullUsersDecor3
@nullUsersDecor2
// @nullUsersDecor3//Здесь порядок таких декораторов (через переопределение свойства у нового класса (конструктор)) уже влияет на результат
class UserServiceDecor2 implements IUserServiceDecor{
    users: number = 1000
    getUsers(): number{
        return this.users
    }
}
function nullUsersDecor2<T extends {new(... args: any[]): {}}>(constructor: T){//2-ой вариант: декоратор через переопределение свойства у нового класса
    return class extends constructor {
        users = 2
    }
}
function nullUsersDecor3<T extends {new(... args: any[]): {}}>(constructor: T){
    return class extends constructor {
        users = 3
    }
}

//Фабрика декораторов:
@setUser(4)
@setUserConstructString("rrrrrr")
@setUserConstruct(5)
// @setUserConstructString("rrrrr")//В декораторах setUserConstruct и setUserConstructString порядок - имеет смысл!
class UserServiceFabricDecor implements IUserServiceDecor{
    users: number;
    getUsers(): number{
        return this.users
    }
}
function setUser(n: number){
    return (target: Function) => {
    target.prototype.users = n;
    }
}
function setUserConstruct(n: number){
    return <T extends {new(... args: any[]): {}}>(constructor: T) => {
    return class extends constructor {
        users = n
        }
    }
}
function setUserConstructString(n: string){
    return <T extends {new(... args: any[]): {}}>(constructor: T) => {
    return class extends constructor {
        users = n
        }
    }
}
console.log(new UserServiceFabricDecor().getUsers());

//Задача: Сделать декоратор который добавляет свойство createdAt в класс, фиксируя дату создания
@addData
class UserServiceZadacha implements IUserService{
    users: number = 1000;
    getUsers(): number{
        return this.users
    }
}

function addData<T extends {new(... args: any[]): {}}>(constructor: T){
    return class extends constructor {
        createdAt = new Date()
        }

}
type AddData = {
    createdAt: Date;
}
console.log(new UserServiceZadacha());
console.log((new UserServiceZadacha() as IUserService & AddData).createdAt);

//Декоратор метода:
class UserServiceMethod implements IUserService{
    users: number = 1000;
    @LogFactory(3)
    @Log
    // @LogFactory(3)
    getUsers(): number{
        return this.users
    }
}
//Из lib.es5.d.ts:
// interface TypedPropertyDescriptor<T> {
//     enumerable?: boolean;
//     configurable?: boolean;
//     writable?: boolean;
//     value?: T;
//     get?: () => T;
//     set?: (value: T) => void;
// }
function Log(target: object, 
    propertyKey: string | symbol, 
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
): TypedPropertyDescriptor<(...args: any[]) => any> | void{
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
    console.log(`descriptor: ${descriptor}`);
    descriptor.writable = false;
    // descriptor.value = () => {
    //     return new Error('Ошибка!')
    // }
    descriptor.value = function(){
        descriptor.enumerable = true;
        console.log(descriptor);
        return new Error('Ошибка!')
    }
}
function LogFactory(n: number){
    return (target: object, 
    propertyKey: string | symbol, 
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
    descriptor.value = function(){
       return n*n
    }
}

}
console.log(new UserServiceMethod().getUsers());

//Задача:  написать декоратор перехвата ошибок и их прокидывания дальше
class UserServiceZadachaCatch implements IUserService{
    users: number = 1000;
    @Catch
    getUsers(): number{
        throw new Error('Ошибка в задаче')
    }
}
function Catch(
    target: object, 
    propertyKey: string | symbol, 
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
): TypedPropertyDescriptor<(...args: any[]) => any> | void{
    let oldRez = descriptor.value;
    if (typeof oldRez !== 'function') {
    return;
    }
    descriptor.value = function(...args: any[]){
        try {
            return oldRez.apply(this, args);
        }   
        catch (error) {
            if (error instanceof Error){
                console.error(error.message);
                console.log(`Пойманная ошибка: ${error}`);
                throw error;
            }   
        }    
    }
}

try {
  console.log(new UserServiceZadachaCatch().getUsers());
} catch (e) {
  console.error('Обработка внешнего блока:', e);
}
// console.log(new UserServiceZadachaCatch().getUsers());
