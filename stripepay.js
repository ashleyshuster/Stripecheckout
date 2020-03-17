window.onload = function() {
    // Your code, and code from Stripe's walkthrough goes here.
    console.log('page loaded');
    var stripe = Stripe('pk_test_xRHCDnchJJofa9vUz6SqivYV007qvw3pXL');

    let cupcake = document.querySelector("#cupcake")
    cupcake.addEventListener("click",function(){
        stripe.redirectToCheckout({
            items: [
              // Replace with the ID of your SKU
              {sku: 'sku_GvKFVPSORajrO2', quantity: 1}
            ],
            successUrl: 'https://localhost:8000/success.html',
            cancelUrl: 'https://localhost:8000/cancel.html',
          }).then(function (result) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
    
            console.log(result.error.message)
    
          });
    })



   
    }