const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:
alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`
);

const orderName = prompt("Enter the name of the pizza you want to order today.");

const orderQuantity = prompt(`How many of ${orderName} do you want?`);

function checkOrderName(orderName) {
    return orderName === vegetarian || orderName === hawaiian || orderName === pepperoni;
}

//if (orderName === vegetarian && orderName === hawaiian && orderName === pepperoni) {
   // const orderQuantity = prompt(`How many of ${orderName} do you want?`);
function totalCost(orderQuantity) {
    return orderQuantity * pizzaPrice;
}
//const orderTotal = orderQuantity * pizzaPrice;
function cookingTime(orderQuantity){
    if (orderQuantity >= 1 && orderQuantity <= 2) {
        return 10;
    } else if (orderQuantity >= 3 && orderQuantity <= 5) {
        return 15;
    } else if (orderQuantity >= 6) {
        return 20;
    }
}

const orderTotal = totalCost(orderQuantity);
const time = cookingTime(orderQuantity);

if(checkOrderName(orderName)) {
    alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${time} minutes.`);
} else {
    alert("Sorry, we don't have that pizza on our menu. Please choose from Vegetarian Pizza, Hawaiian Pizza, or Pepperoni Pizza.");
}