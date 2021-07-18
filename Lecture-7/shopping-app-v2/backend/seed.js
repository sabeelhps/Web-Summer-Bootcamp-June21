const mongoose = require('mongoose');
const Product = require('./models/product');

const products=[
    {
        name:'Drone',
        price:'3000',
        img:'https://images.unsplash.com/photo-1524143986875-3b098d78b363?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc:'Some quick example text to build on the card title and make up the bulk of the card',
    },
    {
        name:'Laptop',
        price:'6000',
        img:'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc:'Some quick example text to build on the card title and make up the bulk of the card',
    },
    {
        name:'HP Laptops',
        price:'10000',
        img:'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc:'Some quick example text to build on the card title and make up the bulk of the card',
    },
    {
        name:'Drone',
        price:'3000',
        img:'https://images.unsplash.com/photo-1524143986875-3b098d78b363?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc:'Some quick example text to build on the card title and make up the bulk of the card',
    },
    {
        name:'Jackets',
        price:'3000',
        img:'https://images.unsplash.com/photo-1604644401890-0bd678c83788?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc:'Some quick example text to build on the card title and make up the bulk of the card',
    },  
]

async function seedDB(){
    await Product.insertMany(products);
    console.log("DB Seeded");
}

module.exports=seedDB;


