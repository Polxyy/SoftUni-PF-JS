function bcm(n) {
    const gramOfGold = 67.51;
    const bitcoinPrice = 11949.16;
    let totalMined = 0;
    let goldToday;
    let dayPast = 0;
    for (let i = 0; i < n.length; i++) {
        if ((i + 1) % 3 == 0 && i != 0) {
            goldToday = n[i] * 0.7;
        }
        else {
            goldToday = n[i];
        }

        totalMined += goldToday;
        if (((totalMined * gramOfGold) >= bitcoinPrice) && dayPast == 0) { dayPast = i+1; }
    }

    let totalMoney = totalMined * gramOfGold;
    let boughtBitcoins = 0;
    if (dayPast) {
        boughtBitcoins = Math.floor(totalMoney / bitcoinPrice);
        check = true;
    }



    console.log(`Bought bitcoins: ${boughtBitcoins}`)
    if (dayPast) console.log(`Day of the first purchased bitcoin: ${dayPast}`);
    console.log(`Left money: ${(totalMoney - (bitcoinPrice * boughtBitcoins)).toFixed(2)} lv.`)

}

bcm([3124.15, 504.212, 2511.124])

