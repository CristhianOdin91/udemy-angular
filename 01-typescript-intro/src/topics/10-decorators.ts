
// Un decorador es una simple función
// Los decoradores son útiles al querer hacer nuestro
// propio framework
function classDecorator<T extends { new (...args:any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'New Property'
        hello = 'override'
    }
}

// A la clase se le agrega un nuevo decorador que le da
// más funcionalidad a la clase (Parecido a un extends)
// Modifican el comportamiento de clases propiedades y métodos
@classDecorator
export class SuperClass {
    public myProperty: string = 'Abc123'

    print() {
        console.log('Hola Mundo')
    }
}

console.log(SuperClass)

const myClass = new SuperClass()

console.log(myClass)
