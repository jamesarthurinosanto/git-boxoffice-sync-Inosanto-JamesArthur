function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, isPremium = false) {
  let price = quantity * basePrice;

  if (quantity >= 5) {
    price *= 0.9;
  }

  if (isPremium) {
    price *= 1.5;
  }

  price -= 10;

  return Math.round(price);
}

module.exports = { isValidQuantity, calculateTicketPrice };