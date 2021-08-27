/*
L'utente potrà creare il suo hamburger e conoscere il prezzo del suo ordine.
Assegnerà obbligatoriamente un nome al suo hamburger.
Deve selezionare almeno 2 ingredienti.
Se inserisce un codice coupon tra quelli presenti in una nostra lista, applichiamo uno sconto del 20% sul totale.
Tutto ciò viene generato (calcolato) al click sul pulsante.
Il testo dove inserire il nome dell'hamburger è un input.
*/


/* ----- Constants ----- */
var coupons = ['ivob2l9mhc', 'e31jiqnqh5', 'rwmylskn7s', 'kdzrcar5w6'];
var initialPrice = 50.00;
var minIngredients = 2;
var minLengthName = 3;
var discount = .2;

/* ----- DOM Elements ----- */
var burgerName = document.getElementById('burger-name');
var ingredients = document.getElementsByClassName('ingredients')[0].getElementsByTagName('input');
var coupon = document.getElementById('coupon');
var button = document.getElementById('submit-button');
var total = document.getElementById('total');

/* ----- Variables ----- */
var counterChecks, trimmedName, sum;


// Printing the initialPrice in the HTML
total.innerText = initialPrice;

// Clicking the button
button.addEventListener('click', function () {
   // Resetting all the variables
   counterChecks = 0;
   sum = initialPrice;
   trimmedName = burgerName.value.trim();

   // If the burgerName doesn't exist => alert
   if (!trimmedName) {
      alert('Dai un nome al tuo Burger!');

   // If the burgerName is too short => alert
   } else if (trimmedName.length < minLengthName) {
      alert('Inserisci un nome più lungo');

   // If the burgerName is ok
   } else {

      // Cycling all the input in ingredients
      for (var i = 0; i < ingredients.length; i++) {
         // If an input is checked => increase sum and counter++
         if (ingredients[i].checked) {
            sum += parseInt(ingredients[i].value);
            counterChecks++;
         }
      }

      // If there aren't checked at least minIngredients inputs => alert
      if (counterChecks < minIngredients) {
         alert('Seleziona almeno ' + minIngredients + ' ingredienti!');

      // If the inputs are bigger than minIngredients
      } else {
         // If it was inserted a valid coupon => discount
         if (coupons.includes(coupon.value)) sum -= sum*discount;

         // Printing the final sum in HTML
         total.innerText = sum.toFixed(2);
      }
   }
});