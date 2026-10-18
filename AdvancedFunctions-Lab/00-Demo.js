function greet(p1, p2, p3) {
    console.log(this.name, p1, p2, p3);
}

let person = { name: "Alex" };

greet.apply(person, [24,26,25]);
