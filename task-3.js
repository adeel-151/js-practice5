

let firstName = prompt("Enter first name:");
let secondName = prompt("Enter second name:");

let lovePercent = Math.ceil(Math.random() * 100);

alert("Love Score for " + firstName + " & " + secondName + ": " + lovePercent + "% ");

if (lovePercent >= 90) {
    alert("Perfect match! ");
} else if (lovePercent >= 50) {
    alert("Good compatibility! ");
} else {
    alert("Maybe just friends! ");
}
