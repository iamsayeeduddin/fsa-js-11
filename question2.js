var amount = 130;
var discount = -10;
var tip = 0;
var totalAmount = 0;

if (amount <= 0 || discount < 0 || discount > 100) {
  console.log("Invalid input");
} else {
  tip = amount * 0.1;
  var totalWithTip = amount + tip;
  var discountAmount = totalWithTip * (discount / 100);
  totalAmount = totalWithTip - discountAmount;
  console.log("Total Bill ------> RS. " + totalAmount);
  console.log("Added 10% Tip ----> RS. " + tip);
}
