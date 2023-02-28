let {forEach, filter} = require('./lib');

let data = [5,11,3,78,10];


var products = [
    {name:"iPhone 14", price:98000.00, "category": "mobile"},
    {name:"Sony Bravia", price:198000.00, "category": "tv"},   
    {name:"Samsung Z fold", price:213000.00, "category": "mobile"},
    {name:"Oppo", price:28000.00, "category": "mobile"},
    {name:"iMacbook Pro", price:128000.00, "category": "computer"},
    {name:"HDMI", price:900.00, "category": "electronics"},
];


// var evens = filter(data, function(e) { return e % 2 === 0});

// ES 6 Arrow function
var evens = filter(data, e => e % 2 === 0);

// var mobiles = filter(products, function (e) { return e.category === 'mobile'})
var mobiles = filter(products, e => e.category === 'mobile');

forEach(evens, console.log);
forEach(mobiles, console.log);