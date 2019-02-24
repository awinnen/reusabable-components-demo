export const beverages: Beverage[] = [
    { name: "Cola", ingredients: ["sugar", "coffeine", "water"], fillingQuantity: "1ltr" },
    { name: "Orange Juice", ingredients: ["Orange Juice", "sugar"], fillingQuantity: "500ml"},
    { name: "Beer", ingredients: ["water", "hop"], fillingQuantity: "33cl"}
];

export class Beverage {
    name: string;
    ingredients: string[];
    fillingQuantity: string;
}