// construcotrs tutorial

function Car(a, b, c, d) {
    this.make = a,
    this.coloor = b,
    console.log(c, d)
}

const FordMust = new Car("Ford", "black", "Mustang", 2024);

console.log(FordMust);
console.log(FordMust.color);