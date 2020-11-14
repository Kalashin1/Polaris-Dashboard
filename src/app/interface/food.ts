export interface Food{
    name : string,
    id : string | number,
    price : number,
    image : string,
    ingredients : string[],
    type : string,
    description : string,
    amount? : number
}
