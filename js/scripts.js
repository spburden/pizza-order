// BUSINESS LOGIC
function PizzaOrder(name, phone, size) {
  this.name = name;
  this.phone = phone;
  this.size = size;
  this.toppings = [];
  this.pizzaPrice = 0;
  this.totalPrice = 0;
};

function Pizza(size) {
  this.size = size;
  this.toppings = [];
  this.pizzaPrice = 0;
};

Pizza.prototype.calculatePizzaPrice = function() {
  var numberOfToppings = this.toppings.length;
  return this.pizzaPrice = (numberOfToppings * (this.size/10)) + this.size;
};



// PizzaOrder.prototype.calculatePrice = function() {
//   var numberOfToppings = this.toppings.length;
//   return this.totalPrice = (numberOfToppings * (this.size/10)) + this.size;
// };



// USER INTERFACE LOGIC
$(function() {
   $("form").submit(function(event) {
   event.preventDefault();

   var customersName = $("#customersName").val();
   var phoneNumber = $("#phoneNumber").val();
   var sizeOfPizza = parseInt($("#sizeOfPizza input[type='radio'][name='pizzaSize']:checked").val());


   var newPizzaOrder = new PizzaOrder(customersName, phoneNumber, sizeOfPizza);

   $('#toppings :checked').each(function() {
      newPizzaOrder.toppings.push($(this).val());
    });

    alert(newPizzaOrder.calculatePrice());

  });
});
