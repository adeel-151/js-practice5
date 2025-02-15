
let user2 = prompt("Enter your name:");
let luckyNum = Math.ceil(Math.random() * 100);
alert(user2 + ", your lucky number is " + luckyNum + ".");
if (luckyNum === 50) {
    alert("You won a special prize!");
}