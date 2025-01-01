
// const skills: string[] = ['Bash', 'Counter', 'Healing']


// Las interfaces no se traspilan en el código JS
interface Character {
    name: string,
    hp: number,
    skills: string[],
    hometown?: string
    // hometown: string | undefined
}

const myCharacter: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter', 'Healing']
}

myCharacter.hometown = 'Tola'

console.table(myCharacter)

export {}
