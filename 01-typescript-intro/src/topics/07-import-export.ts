import { Product, taxCalculation, tax } from './06-function-destructuring.ts'

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 1000
    },
    {
        description: 'Xiaomi',
        price: 1000
    }
]

const { total, taxes } = taxCalculation({ tax, products: shoppingCart })

console.log(`Total: ${total}, Taxes: ${taxes}`)
