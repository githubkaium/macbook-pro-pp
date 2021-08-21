// Get id
const memory1 = document.getElementById('memory1');
const memory2 = document.getElementById('memory2');
const storage1 = document.getElementById('storage1');
const storage2 = document.getElementById('storage2');
const storage3 = document.getElementById('storage3');
const delivery1 = document.getElementById('delivery1');
const delivery2 = document.getElementById('delivery2');

const bestPrice = document.getElementById('best-price');
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCharge = document.getElementById('delivery-charge');
const totalPrice = document.getElementById('total-price');
const inputPromo = document.getElementById('input-promo');
const applyPromo = document.getElementById('apply-promo');
const grandTotal = document.getElementById('grand-total');


// Add Event Handler when clicked
memory1.addEventListener("click", function () {
    memoryCost.innerText = 0;
    const memoryCostValue = parseInt(memoryCost.innerText);
    total();
});
memory2.addEventListener("click", function () {
    memoryCost.innerText = 180;
    const memoryCostValue = parseInt(memoryCost.innerText);
    total();
});
storage1.addEventListener("click", function () {
    storageCost.innerText = 0;
    const storageCostValue = parseInt(storageCost.innerText);
    total();
});
storage2.addEventListener("click", function () {
    storageCost.innerText = 100;
    const storageCostValue = parseInt(storageCost.innerText);
    total();
});
storage3.addEventListener("click", function () {
    storageCost.innerText = 180;
    const storageCostValue = parseInt(storageCost.innerText);
    total();
});
delivery1.addEventListener("click", function () {
    deliveryCharge.innerText = 0;
    const deliveryChargeValue = parseInt(deliveryCharge.innerText);
    total();
});
delivery2.addEventListener("click", function () {
    deliveryCharge.innerText = 20;
    const deliveryChargeValue = parseInt(deliveryCharge.innerText);
    total();
});

// Coupon Section
applyPromo.addEventListener("click", function () {
    const userInput = inputPromo.value;
    inputPromo.value = '';
    const inputPromoCode = "stevekaku";
    if (userInput == inputPromoCode) {
        couponCalc();
    }
    else {
        alert('Not a valid Promo Code');
    }
});

// Total Price Calculation
function total() {
    const bestPriceValue = parseInt(bestPrice.innerText);
    const memoryCostValue = parseInt(memoryCost.innerText);
    const storageCostValue = parseInt(storageCost.innerText);
    const deliveryChargeValue = parseInt(deliveryCharge.innerText);
    const totalValue = bestPriceValue + memoryCostValue + storageCostValue + deliveryChargeValue;
    totalPrice.innerText = totalValue;
    grandTotalValue();
}

// Grand Total Calculation
function grandTotalValue() {
    const totalValue = totalPrice.innerText;
    grandTotal.innerText = totalValue;
}

// Applied Coupon Calculation
function couponCalc() {
    const amount = totalPrice.innerText;
    const totalAmount = (amount - (amount * 20) / 100);
    grandTotal.innerText = totalAmount;
}

