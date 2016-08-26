// BUSINESS LOGIC
function Pizza() {
  this.size = "";
  this.typesOfToppings = [];
  this.numberOfToppings = 0;
  this.totalPrice = 0;
};

Pizza.prototype.calculateNumberofToppings = function () {
  this.numberOfToppings = this.typesOfToppings.length;
};

Pizza.prototype.calculateNumberofToppings = function () {
  this.numberOfToppings = this.typesOfToppings.length;
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
