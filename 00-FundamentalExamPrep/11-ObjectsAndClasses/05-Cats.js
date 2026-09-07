function catInfo(arrInfo) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            return `${this.name}, age ${this.age} says Meow`;
        }
    }

    for (let el of arrInfo) {
        let info = el.split(" ");
        let name = info[0];
        let age = info[1];

        let cat = new Cat(name, age);

        console.log(cat.meow());
    }
}

catInfo(["Mellow 2", "Tom 5"]);
