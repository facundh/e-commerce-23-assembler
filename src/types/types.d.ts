
export type ProductsStateTypes =  {
    cart:[] = []
    handleAddToCart?: (id:string) => void
    handleDeleteProduct?: (id:string) => void
    handleUpdateProduct?: (id:string) => void  
    handleDownProduct?:(id:string) => void
    children: JSX.Element
}

export type ProductProps = {
    products: Array<ProductProps> = []
        id:string 
        title:string
        img:string 
        description:string
        quantity:number
        store:string
        price:number
        children: JSX.Element
    
}

export type ThemeProp = {
    children: JSX.Element
}


export type UserProps = {
    user: {

        name?:string
        id?: number 
    }
    login:() => void,
    logout: () => void
    children: JSX.Element
}

