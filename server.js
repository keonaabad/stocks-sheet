'use strict';

const PORT = 3000;

// The variable stocks has the same value as the variable stocks in the file 'stocks.js'
const stocks = require('./stocks.js').stocks;
const express = require("express");
const app = express();



function findStockBySymbol(symbolChosen, sharesChosen, ){
    for(let i = 0; i < stocks.length; i++){
        if(stocks[i].symbol == symbolChosen){
            return stocks[i].price * sharesChosen;
        }
    }
    return 'The symbol you entered is not valid';
}


function findCompanyName(symbolChosen){
    for(let i = 0; i < stocks.length; i++){
        if(stocks[i].symbol == symbolChosen){
            return stocks[i].company;
        }
    }
    return 'The symbol you entered is not valid';
}


function findStockByPrice(chosenPriceRange, priceLocator){
        if(chosenPriceRange == 'low'){
            for(let i=0; i < stocks.length; i++){
                if(stocks[i].price == Math.min(...priceLocator)){
                    return stocks[i];
                    }    
                }
        }
        else if(chosenPriceRange == 'high'){
            for(let i=0; i < stocks.length; i++){
                if(stocks[i].price == Math.max(...priceLocator)){
                    return stocks[i];
                    }    
                }
        }
    }

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));
// Note: Don't add or change anything above this line.

function helloWorld() {
    if(true) {
    return 'Hello world!';
}
// Add your code here
app.post('/boughtstock', (req, res) => {
    const symbolChosen = req.body.stocks;
    const sharesChosen = req.body.shares;
    const companyName = stocks.company

    const responseMessage = findStockBySymbol(symbolChosen, sharesChosen); 
    const responseMessage2 = findCompanyName(symbolChosen, companyName);
    
    res.send(`You placed an order to buy ${sharesChosen} shares of ${responseMessage2}. The price of one stock is $${responseMessage / sharesChosen} and the total price for this order is $${responseMessage}`);

});

app.post('/searchstockprice', (req, res) => {
    const chosenPriceRange = req.body.choice;
    const priceLocator = stocks.map(stocks => stocks.price);
    const responseMessage3 = findStockByPrice(chosenPriceRange, priceLocator);
    res.send(responseMessage3);
});

// Note: Don't add or change anything below this line.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
}
