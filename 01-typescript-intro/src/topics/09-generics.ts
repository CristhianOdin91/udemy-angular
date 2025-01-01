
// Tipo de dato genérico
// En los <> colocamos el tipo de dato que fluye a través de ese objeto
// Por convención se usa la letra T, pero puede usarse cualquier letra
export function whatsMyType<T>(argument: T): T {
    return argument
}

// Al invocarse sustituye la T por un tipo de dato string
let amIString = whatsMyType<string>('Hola Mundo')

// Si ya se define qué tipo de dato se va a mandar sería un error mandar un
// tipo de dato incorrecto
let amINumber = whatsMyType<number>(100)

let amIArray = whatsMyType<number[]>([1,2,3,4,5])

console.log(amIString.split(' '))
console.log(amINumber.toFixed())
console.log(amIArray.join('-'))
