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

export type ProductsStateTypes =  {
    cart:[] = []
    handleAddToCart: (id:string) => void
    handleDeleteProduct: (id:string) => void
    handleUpdateProduct: (id:string) => void,  
    handleDownProduct:(id:string) => void
}

export type ProductProps = {
    id:string | undefined;
    title:string | undefined;
    img:string | undefined;
    description:string | undefined;
    quantity:number | undefined,
    store:string | undefined,
    price:number | undefined,
}

export type ThemeProp = {
    children: ReactNode
}

export type UserProps = {
    name:string | undefined,
    id: number | undefined,
    login:() => void,
    logout: () => void
    children : ReactNode
}








