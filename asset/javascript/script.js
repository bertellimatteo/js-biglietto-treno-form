function calcoloPrezzo() {

  const km = parseFloat(document.getElementById('km').value);
  const age = parseInt(document.getElementById('age').value);

  const basePrice = km * 0.21;

  if (age < 18) {
    basePrice *= 0.8; 
  } 

  else if (age >= 65) {
    basePrice *= 0.6; 
  }

  const finalPrice = basePrice.toFixed(2);

  document.getElementById('ticketPrice').textContent = finalPrice + "€";

}