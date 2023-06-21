import { idGenerator } from "../../utils/idGenerator";
import { ProductProps } from "../../types/types";

import adidas1 from '../img/adidas/adidas1.jpg';
import adidas2 from '../img/adidas/adidas2.jpg';
import adidas3 from '../img/adidas/adidas3.jpg';
import adidas4 from '../img/adidas/adidas4.jpg';

import nike1 from '../img/nike/nike1.jpg';
import nike2 from '../img/nike/nike2.jpg';
import nike3 from '../img/nike/nike3.jpg';
import nike4 from '../img/nike/nike4.jpg';

import home1 from '../img/home/kris-gerhard-0BKZfcamvGg-unsplash.jpg';
import home2 from '../img/home/maria-fernanda-pissioli-DTZV8WDM1Ho-unsplash.jpg';
import home3 from '../img/home/taylor-smith-aDZ5YIuedQg-unsplash.jpg';



export const products:ProductProps[] = [
    {
        id:idGenerator(),
        title:'Adidas Shoes 1920',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
        brand:'Adidas',
        price: 100,
        img:adidas1,
        quantity: 0
    },
    {
        id:idGenerator(),
        title:'Adidas Shoes 1930',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
        brand:'Adidas',
        price: 100,
        img:adidas2,
        quantity: 0
    },
    {
        id:idGenerator(),
        title:'Adidas Shoes 1940',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
        brand:'Adidas',
        price: 100,
        img:adidas3,
        quantity: 0
    },
    {
        id:idGenerator(),
        title:'Adidas Shoes 1950',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
        brand:'Adidas',
        price: 100,
        img:adidas4,
        quantity: 0
    },
    {
        id:idGenerator(),
        title:'Nike Air 1950',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
        brand:'Nike',
        price: 100,
        img:nike1,
        quantity: 0
    },
    {
        id:idGenerator(),
        title:'Classic Nike',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
        brand:'Nike',
        price: 100,
        img:nike2,
        quantity: 0
    },
    {
        id:idGenerator(),
        title:'Nike Max Air',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
        brand:'Nike',
        price: 100,
        img:nike3,
        quantity: 0
    },
    {
        id:idGenerator(),
        title:'Nike 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
        brand:'Nike',
        price: 100,
        img:nike4,
        quantity: 0
    },
    {
        id:idGenerator(),
        title:'Converse',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
        brand:'Nike',
        price: 100,
        img:home1,
        quantity: 0
    },
    {
        id:idGenerator(),
        title:'White Nike',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
        brand:'Converse',
        price: 100,
        img:home2,
        quantity: 0
    },
    {
        id:idGenerator(),
        title:'Red Nike',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
        brand:'Nike',
        price: 100,
        img:home3,
        quantity: 0
    },

]

export default products;