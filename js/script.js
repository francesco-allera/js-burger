var burgerName = document.getElementById('burger-name');
var total = document.getElementById('total');
var coupon = document.getElementById('coupon');
var button = document.getElementById('calculate');
var ingredients = document.querySelectorAll('.ingredients input');
var discounts = ['feLfqM4KeL', 'rhe7U6W8ar', 'Cm4pmek5Mp', '68PCDO7vZr'];
var initialPrice = 50;
var numIngredients = 2;
var discount = .2;
var totalCost, counterIngredients, burgerNameTrimmed, checkingDiscount;

// print in page the initial price
total.innerText = initialPrice;

// clicking on button '#calculate'
button.addEventListener('click', function() {
    totalCost = initialPrice;
    counterIngredients = 0;
    burgerNameTrimmed = burgerName.value.trim();

    // stop the flow if the burger hasn't a name
    if (!burgerNameTrimmed) {
        alert('Dai un nome al tuo Burger!');

    // stop the flow if the burger name is too short
    } else if (burgerNameTrimmed.length < 2) {
        alert('Inserisci un nome più lungo');

    } else {
        // counting the ingredients checked and summing
        for (var i = 0; i < ingredients.length; i++) {
            if (ingredients[i].checked) {
                totalCost += parseInt(ingredients[i].value);
                counterIngredients++;
            }
        }

        // stop the flow if 'counterIngredients' < 2
        if (counterIngredients < numIngredients) {
            alert('Seleziona almeno '+ numIngredients +' ingredienti!');

        } else {
            // get the eventual coupon and apply the discount
            checkingDiscount = coupon.value.trim();

            if (checkingDiscount.length === 10 && discounts.includes(checkingDiscount)) {
                totalCost *= 1 - discount;
            }

            // Print the final price
            total.innerText = totalCost.toFixed(2);
        }
    }
});