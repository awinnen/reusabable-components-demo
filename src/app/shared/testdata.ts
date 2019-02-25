export const beverages: Beverage[] = [
    { name: "Cola", ingredients: ["sugar", "coffeine", "water"], fillingQuantity: "1ltr", price: 1 },
    { name: "Orange Juice", ingredients: ["Orange Juice", "sugar"], fillingQuantity: "500ml", price: 1.25 },
    { name: "Beer", ingredients: ["water", "hop"], fillingQuantity: "33cl", price: 1.7 }
];

export class Beverage {
    name: string;
    ingredients: string[];
    fillingQuantity: string;
    price: number
}