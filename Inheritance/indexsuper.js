//super() inheritance
//less code for making construcor

class Animal {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }

    runspeed(speed){
        console.log(`This ${this.name} moves at a speed of ${speed}km/h`)
    }
}

class Cat extends Animal {
    constructor(name, age, speed) {
        super(name, age)
        this.runSpeed = speed
    }
    run(){
        console.log(`This ${this.name} can run`)
        super.runspeed(this.runSpeed)
    }
}

const Blera = new Cat("Blera", 12, 25);

console.log(Blera.name, Blera.age, Blera.runSpeed)
Blera.run();