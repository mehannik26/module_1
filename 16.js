// Создать функцию для генерации последовательность 1 3 5 7, сигнатура (n: Number) => str
let str = ""
const pos = (n) => {
    for(let i = 0; i <= n; i++) {
        if (i % 2 === 1) {
            str += ` ${i}`
        }
    }
    return str
}
console.log(pos(10))
