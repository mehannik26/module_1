// Создать функцию для генерации селектора для выбора элементов по data-at="id=header". сигнатура (id: string) => string,
// Пример foo('header') вернет [data-at*="id=header"]
// Прочитать что такое селектор
let str = ""
const foo = (id) => str = `[data-at*="id=${id}"]`
console.log(foo('header'))
