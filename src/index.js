// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if(currency <= 0 ){
        return {};
    }else if ( currency > 10000 ){
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    else{
        let results = {
            "H":0, 
            "Q":0, 
            "D":0, 
            "N":0, 
            "P":0}
        let maxH = results["H"] = parseInt(currency/50);
        let maxQ = results["Q"] = parseInt((currency-maxH*50)/25);
        let maxD = results["D"] = parseInt((currency-maxH*50-maxQ*25)/10);
        let maxN = results["N"] = parseInt((currency-maxH*50-maxQ*25 -maxD*10)/5);
        let maxP = results["P"] = parseInt(currency-maxH*50-maxQ*25 -maxD*10 -maxN*5);
        for(var prop in results){
            if(results[prop]===0){
                delete results[prop];
            }
        }
        return results;
    }
}
