import {Product} from "./06-function-destructuring.ts";

export class Person {
    // Dependency injection
    // Inicializa y asigna las propiedades en el constructor
    // Únicamente realizable en TS
    constructor(
        public firsname: string,
        public lastname: string,
        private address: string = 'No Address'
    ) {}
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ) {
//         // Se ejecuta el constructor del padre
//         super(realName, 'CDMX')
//     }
// }

export class Hero {
    // public person: Person

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        // Inyección de objetos, al usarlo en lugar de la herencia
        // no se ve afectada la clase que hereda en caso de haber un cambio
        public person: Person
    ) {
        // this.person = new Person(realName)
    }
}

const tony = new Person('Tony','Stark', 'New York')
const ironman = new Hero('Ironman', 45, 'Tony', tony)

console.log(ironman)
