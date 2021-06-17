'use strict';
// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.

const getFriends = (users) => {
  const friends = users.flatMap(user => user.friends);
  const unique = friends.filter((friend,index,array) => array.indexOf(friend) === index); 

return unique
};