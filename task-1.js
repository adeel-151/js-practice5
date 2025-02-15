
let user = prompt("Enter your name:");

let availableSeats = [];

for (let i = 1; i <= 30; i++) {
    availableSeats.push(i);
}

alert("Available seats: " + availableSeats.length);

let seat = availableSeats[Math.floor(Math.random() * availableSeats.length)];

availableSeats.splice(availableSeats.indexOf(seat), 1);

alert("Hello " + user + ", your seat number is " + seat + ".");