import { MouseEvent, ReactNode } from 'react';

export type ButtonAction = {
	initialValue?: number;
	label: string;
	action: (event: MouseEvent<HTMLButtonElement>) => void;
	id: string;
	display: string;
	quantity:number,
};

export type Props = {
    children:ReactNode
}

export type ProductsStateTypes = {
    products: ProductProps[],
    handleAddToCart: (id:string) => void
    handleAddToWish: (id:string) => void
    handleRemoveProduct: (id:string) => void
    handleSharedProduct: (id:string) => void
    
}

export type ProductProps = {
    id:string;
    title:string;
    img:string;
    description:string;
    quantity:number,
    brand:string,
    price:number
}
export type EventType = FormEvent<HTMLFormElement>
export type ProductActionType = {
    type:string
    payload:ProductProps
}