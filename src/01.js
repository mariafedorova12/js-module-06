'use strict';
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

 orderedItems.forEach(function(orderedItem){
  totalPrice += orderedItem;
})

  // Пиши код выше этой строки
  return totalPrice;
}