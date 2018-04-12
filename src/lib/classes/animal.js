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