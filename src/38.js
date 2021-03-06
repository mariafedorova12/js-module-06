'use strict';
// Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса (свойство balance).
// Пиши код ниже этой строки
const sortByAscendingBalance = users => {
  return users.sort((firstUser, secondUser) => firstUser.balance - secondUser.balance) 
};
// Пиши код выше этой строки
