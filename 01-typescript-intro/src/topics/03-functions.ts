
/* function addNumbers(a:number, b:number):number {
    return a + b
} */

const addNumbersArrow = (a:number, b:number): string => `${a + b}`

const multiply = (a:number, b?:number, base:number = 2): number => a * base

// const result:string = addNumbersArrow(1, 20)
// const multiplyResult:number  = multiply(5)

// console.log({ result })
// console.log({ multiplyResult })

interface Character {
    name: string,
    hp: number,
    showHp: () => void
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount
}

const strider: Character = {
    name: 'Strider Hiryu',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`)
    },
}

healCharacter(strider, 10)

strider.showHp()

export {}
