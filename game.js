class Player {
    constructor(name, hp, att, def) {
        this.name = name;
        this.hp = hp;
        this.att = att
        this.def = def
    }

    attack(defender) {
        defender.hp = defender.hp - this.att
        console.log(`${this.name} avadakadivvy! They attack ${this.att} this much!`)
        this.hp = this.hp - defender.def
    }

    speak() {
        console.log(`${this.name} this is your end! `)
    }


}

const voldy = new Player('voldy', 20, 4, 2)
const hariputah = new Player('hariputah', 25, 3, 4)

console.log(voldy, hariputah)

hariputah.attack(voldy)
voldy.attack(hariputah)

console.log(voldy, hariputah)


class DefensiveSpells extends Player {
    speak() {
        console.log(`${this.name} blocks you!`)
    }
}

// const Spells = new Spells(`${this.hp} + 5`)
// DefensiveSpells.speak(voldy)