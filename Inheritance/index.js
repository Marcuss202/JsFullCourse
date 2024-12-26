// inheritance basic

class Animal1 {
    alive = true;

    eat() {
        this.alive ? console.log(`This ${this.name} is eating`) : console.log(`${this.name} is dead`);
    }
    sleep() {
        this.alive ? console.log(`This ${this.name} is sleeping`) : console.log(`This ${this.name} is DEAD`)
    }
}

class CappyBaraSpec extends Animal1 {
    name = "CappyBara";

    chill () {
        this.alive ? console.log(`This ${this.name} is CHILLING`) : console.log("Dead")
    }
}

const Cappy = new CappyBaraSpec();
const CappySpecial = new CappyBaraSpec();
CappySpecial.alive = false;

console.log(Cappy.alive);
console.log(CappySpecial.alive);

Cappy.eat();
CappySpecial.eat();

Cappy.chill();
CappySpecial.chill();

console.log("------------------------------------------------------------")

