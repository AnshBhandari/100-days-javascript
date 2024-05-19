// Write a function to convert an amount from one currency to another using static exchange rates.

// Requirements:
// Write a function named convertCurrency that takes three parameters, Amount, fromCurrency & toCurrency.
// Use a fixed object to store exchange rates relative to a base (e.g., USD).
// The function should return the converted amount in the target currency.
// Handle the conversion through USD as a base, meaning if converting from GBP to EUR then first convert GBP to USD, then USD to EUR.

const rates = {
    USD: 1,
    EUR: 0.9,
    GBP: 0.8,
    INR: 82,
}

const convertCurrency = (amt, fC, tC) => {
    let amtUSD = 0;
    if (fC !== 'USD')
    {
        amtUSD = amt / rates[fC];
    }
    else 
    {
        amtUSD = amt;
    }

    let convertedAmt = 0;
    if (tC !== 'USD')
    {
        convertedAmt = amtUSD * rates[tC]
    }
    else 
    {
        convertedAmt = amtUSD
    }
    return convertedAmt;
}

console.log(convertCurrency(100, "GBP", 'EUR'));