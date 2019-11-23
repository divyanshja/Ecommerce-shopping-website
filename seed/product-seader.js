var product = require('../models/product');
var mangoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');
var product = [new Product({
imagePath: 'https://rukminim1.flixcart.com/image/332/398/j6gs6fk0/jean/n/h/z/40-jog-hps-black-urbano-fashion-original-imaewxe7fgyx7u28.jpeg?q=50',
title: 'HIGHLANDER',
description: 'Jeans',
price: 1000
}),

new Product({
    imagePath: 'https://rukminim1.flixcart.com/image/332/398/j6gs6fk0/jean/n/h/z/40-jog-hps-black-urbano-fashion-original-imaewxe7fgyx7u28.jpeg?q=50',
    title: 'HIGHLANDER',
    description: 'Jeans',
    price: 1000
    }),

    new Product({
        imagePath: 'https://rukminim1.flixcart.com/image/332/398/j6gs6fk0/jean/n/h/z/40-jog-hps-black-urbano-fashion-original-imaewxe7fgyx7u28.jpeg?q=50',
        title: 'HIGHLANDER',
        description: 'Jeans',
        price: 1000
        })
];

var done = 0;
for (var i=0;i<products.length;i++){
    product[i].save(function(err,result){
        done++;

        if(done === product.length)
        {
            exit();
        }
    }); 
}

function exit()
{
mongoose.disconnect();
}