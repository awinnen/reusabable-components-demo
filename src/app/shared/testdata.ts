export const beverages: Beverage[] = [
    { name: "Cola", ingredients: ["sugar", "coffeine", "water"], fillingQuantity: "1ltr", price: 1, description: "a nice brown drink", color: "brown" },
    { name: "Orange Juice", ingredients: ["Orange Juice", "sugar"], fillingQuantity: "500ml", price: 1.25, description: "made from spanish oranges", color: "orange" },
    { name: "Beer", ingredients: ["water", "hop"], fillingQuantity: "33cl", price: 1.7, description: "Great beer imported from Germany", color: "orange" }, 
    { name: "Milk", ingredients: ["water"], fillingQuantity: "1ltr", price: 0.58, description: "muuuuh", color: "white" },
    { name: "Soda", ingredients: ["water", "sugar", "lemonjuice"], fillingQuantity: "0.5 ltr", price: 0.99, description: "a fresh drink which fits any time", color: "yellow" },
    { name: "MilkCoffee", ingredients: ["milk", "coffee", "sugar", "coffeine"], fillingQuantity: "0.2 ltr", price: 1.99, description: "a nice brown drink for breakfast", color: "brown" },
    { name: "tee", ingredients: ["water", "tea"], fillingQuantity: "1 cup", price: 0.7, description: "a nice drink for all who dont want to sleep!", color: "green" }
];

export class Beverage {
    name: string;
    ingredients: string[];
    fillingQuantity: string;
    price: number;
    description: string;
    color: string;
}