//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n ^ 0) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    var arreven = [];
    for (var i = 2; i <= 20; i++) {
        if (i % 2 == 0) {
          arreven.push(i);
        }
      }
      return arreven;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    var s = 0;
    for (var i = 1; n; i++) {
        s += s;
        }
    return s;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n == 1) return 1;
  return n + recSumTo(n - 1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if (n == 1) return 1;
    return n * factorial(n - 1);
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
