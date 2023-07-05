import {  ReactNode } from 'react';



export type Props = {
    children:ReactNode
}

export type ProductsStateTypes =  {
    cart:[] = []
    handleAddToCart?: (id:string) => void
    handleDeleteProduct?: (id:string) => void
    handleUpdateProduct?: (id:string) => void,  
    handleDownProduct?:(id:string) => void
}

export type ProductProps = {
    id?:string | undefined;
    title?:string;
    img?:string | undefined;
    description?:string | undefined;
    quantity?:number | undefined,
    store?:string | undefined,
    price?:number | undefined,
    newProduct: string | undefined
}

export type ThemeProp = {
    children: ReactNode
}

export type UserProps = {
    name?:string | undefined,
    id?: number | undefined,
    login:() => void,
    logout: () => void
    children: ReactNode
}








