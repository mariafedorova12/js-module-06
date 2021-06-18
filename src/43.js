'use strict';

// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .

const getSortedFriends = users => {
  return [...users]
  .flatMap((users) => users.friends)
  .filter((user, index, array) => array.indexOf(user) === index)
  .sort()
};
// Пиши код выше этой строки