// Pizza.prototype.calculateNumberofToppings = function () {
//   return this.numberOfToppings = this.toppings.length;
// };
//
// Pizza.prototype.calculatePrice = function () {
//   return this.totalPrice = (this.numberOfToppings * (this.size/10)) + this.size;
// };

// BUSINESS LOGIC
function PizzaOrder(name, phone, size) {
  this.name = name;
  this.phone = phone;
  this.size = size;
  this.toppings = [];
  //this.numberOfToppings = 0;
  this.totalPrice = 0;
};

// PizzaOrder.prototype.insertTypeOfTopping = function(topping) {
//   this.toppings.push(topping);
// };

PizzaOrder.prototype.calculatePrice = function() {
  //var total = 0;
  var numberOfToppings = this.toppings.length;
  return this.totalPrice = (numberOfToppings * (this.size/10)) + this.size;
};

  // USER INTERFACE LOGIC
  $(function() {
   $("form").submit(function(event) {
   event.preventDefault();

   var customersName = $("#customersName").val();
   var phoneNumber = $("#phoneNumber").val();
   var sizeOfPizza = parseInt($("#sizeOfPizza input[type='radio'][name='pizzaSize']:checked").val());


   var newPizzaOrder = new PizzaOrder(customersName, phoneNumber, sizeOfPizza);
   //debugger;
   $('#toppings :checked').each(function() {
     //alert($(this).val());
      //this.toppings.push($(this).val());
      //newPizzaOrder.insertTypeOfTopping($(this).val())
      newPizzaOrder.toppings.push($(this).val());
    });

    //newPizzaOrder.calculatePrice();
    alert(newPizzaOrder.calculatePrice());
    //console.log(this.newPizzaOrder);

    });
  });
