
export interface Passenger {
    name: string
    children?: string[]
}

const passenger1: Passenger = {
    name: 'Fernando'
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Elizabeth']
}

const returnChildren = (passenger: Passenger): number => {
    const howManyChildren = passenger.children?.length || 0

    // Not Null Assertion Operator (!)
    // Es una manera de decirle a Typescript
    // "Confía en mí, no vas a recibir un nulo"
    // const howManyChildren = passenger.children!.length

    console.log(passenger.name, howManyChildren)

    return howManyChildren
}

returnChildren(passenger1)
returnChildren(passenger2)
