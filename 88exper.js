console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
let massive = [2, 34, 46 , 'sdfsH']
const a = massive.map((el) => {
    return el * 2
})
console.log(a);
const b = massive.forEach((el) => {
    let c = el * 3
    return c
})
function ddd(n){
    massive.forEach((el) => {
    let c = el * n
    console.log(c)
    })
}
ddd(3)

console.log(b, massive)