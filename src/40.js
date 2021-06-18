'use strict';
// Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке.
const sortByName = users => {
  return [...users].sort(
    (firstUser, secondUser) => firstUser.name.localeCompare(secondUser.name)
    )
  };
  console.log(user);