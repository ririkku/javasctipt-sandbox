class Animal {

    // コンストラクタは複数できない

    constructor(name, hand, foot) {
        this.name = name;
        this.hand = hand;
        this.foot = foot;
    }

    info() {
        console.log(this.name);
        console.log(this.hand);
        console.log(this.foot);
    }
}

let dog = new Animal('Dog', 2, 2);
dog.info();

let cat = new Animal('Cat', 2, 2);
cat.info();


class Human extends Animal {


    constructor(name, hand, foot, age) {
        super(name, hand, foot);
        this.age = age;
    }

    info2() {
        this.info();
        console.log(this.age);
    }
}

let human = new Human('Kikukawa', 2, 2, 23);
human.info2();