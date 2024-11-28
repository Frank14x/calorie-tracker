export type Menu = {
    id:number;
    name:string;
    price:number;
}

export type OrdenItem = Menu & {
    quantity: number
}