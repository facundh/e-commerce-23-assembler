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
    childre:ReactNode
}

export type ProductsStateTypes = {
    products: ProductProps[],
    handleAddProduct: (product:ProductProps) => void
    handleRemoveProduct: (id:string) => void
    handleShareProduct: (id:string) => void
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
export type EventtType = FormEvent<HTMLFormElement>
export type ProductActionType = {
    type:string
    payload:ProductProps
}