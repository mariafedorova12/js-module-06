'use strict';
function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Пиши код ниже этой строки

 numbers.forEach(function(number){
 
  if(number > value){
  return filteredNumbers.push(number)}
})
  ;

  // Пиши код выше этой строки
  return filteredNumbers;
}


// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.