
export interface Product {
    description: string
    price: number
}

const phone: Product = {
    description: "Phone number",
    price: 20,
}

const tablet: Product = {
    description: "Tablet",
    price: 15,
}

interface TaxCalculationOptions {
    tax: number
    products: Product[]
}

interface TaxCalculationResult {
    total: number
    taxes: number
}

export function taxCalculation({ tax , products}: TaxCalculationOptions): TaxCalculationResult {
    let total = 0

    products.forEach(({price}) => {
        total += price
    })
    const taxes = total * tax

    return { total, taxes }
}

// const taxCalculationArrow = ({ tax , products}: TaxCalculationOptions): number[] => []

const shoppingCart: Product[] = [phone, tablet]
export const tax = 0.15

const {total, taxes} =  taxCalculation({
    products: shoppingCart,
    tax
})

console.log(`Total: ${total}, Taxes: ${taxes}`)
