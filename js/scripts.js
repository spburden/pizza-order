// BUSINESS LOGIC
function Pizza() {
  this.size = "";
  this.typesOfToppings = [];
  this.numberOfToppings = 0;
  this.totalPrice = 0;
};

Pizza.prototype.insertTypeOfTopping = function (topping) {
  this.typesOfToppings.push(topping);
};

Pizza.prototype.calculateNumberofToppings = function () {
  return this.numberOfToppings = this.typesOfToppings.length;
};

Pizza.prototype.calculatePrice = function (priceOfSize) {
  return this.totalPrice = (this.numberOfToppings * (priceOfSize/10)) + priceOfSize;
};


// // USER INTERFACE LOGIC
// $(function() {
//
// //  $("form").submit(function(event) {
//
// //  event.preventDefault();
//
//   });
// });
