import { Product } from "../models/product-interface";
import { Person } from "../models/person-interface";
export interface AppState{
person:Person[];
product:Product[];

}

export const initialState:AppState={
    person:[],
    product:[{
        id:1,
        name:'Rutuja',
        price:1000
    }]
}