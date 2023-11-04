
export type Props = {
    children: JSX.Element

}

export type ProductsStateTypes =  {
    cart:[] = []
    handleAddToCart?: (id:string) => void
    handleDeleteProduct?: (id:string) => void
    handleUpdateProduct?: (id:string) => void  
    handleDownProduct?:(id:string) => void
    children: Props
}

export type ProductProps = {
    id:string 
    title:string
    img:string 
    description:string
    store:string
    quantity:number
    price:number
    children: JSX.Element
}

export type ProductsItemProps = {
    products: ProductProps;
    setProducts: React.Dispatch<React.SetStateAction<products>>
    children: JSX.Element
}

export type ThemeProp = {
    children: JSX.Element
}


export type UserProps = {
        name:string
        id: number 
        login:(name:string) => void
        logout: () => void
        children: JSX.Element
}

