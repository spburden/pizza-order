// BUSINESS LOGIC
function Pizza(size) {
  this.size = size;
  this.toppings = [];
  this.pizzaPrice = 0;
};

function CustomerInfo(name, phone) {
  this.name = name;
  this.phone = phone;
}

Pizza.prototype.pizzaSizeToString = function() {
  var pizzaSize = "";
  if (Pizza.size === 10) {
    pizzaSize = "Small Pizza"
  } else if (Pizza.size === 15) {
    pizzaSize = "Medium Pizza"
  } else {
    pizzaSize = "Large Pizza"
  }
  return pizzaSize;
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

     var newPizza = new Pizza(sizeOfPizza);

     var newCustomerInfo = new CustomerInfo(customersName, phoneNumber);

     $('#toppings :checked').each(function() {
        newPizza.toppings.push($(this).val());
      });

      alert("Pizza price: $" + newPizza.calculatePizzaPrice());

      $(".customersName").text(newCustomerInfo.name);
      $("#orderList").append("<li>" + newPizza.pizzaSizeToString() + " : $"+ newPizza.pizzaPrice +  "</li>");
      $("#orderList").show();




  });
});
