function pyramid(base, stoneHeigth) {
    let stoneAmount = 0;
    let marbleAmount = 0;
    let lapisAmount=0;
    let GOLD;
    let currentStone;
    let level = 0;
    let currentBase;

    let totalStone=0;
    let totalLapis=0;
    let totalMarble=0;


    for (let i = base; i > 0; i -= 2) {
        level++;
        currentBase=Math.pow(i,2);

        if(i!=1){
        currentStone = ((i - 2) * (i - 2));
        stoneAmount = currentStone*stoneHeigth;
        totalStone+=stoneAmount};

        if (level % 5 == 0 && !(i <=2)) {
            lapisAmount = (currentBase - currentStone)
            totalLapis += (lapisAmount * stoneHeigth)
        } else if(!(i<=2)){
            marbleAmount = (currentBase - currentStone)
            totalMarble += (marbleAmount*stoneHeigth)
        }


        if(i<=2){
            GOLD=i*i;}

    }
    // let totalStone=Math.ceil(stoneAmount * stoneHeigth);
    // let totalMarble=Math.ceil(marbleAmount * stoneHeigth);
    // let totalLapis=Math.ceil(lapisAmount * stoneHeigth);
    GOLD=Math.ceil(GOLD * stoneHeigth)


    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
    console.log(`Gold required: ${GOLD}`);
    console.log(`Final pyramid height: ${Math.floor(level*stoneHeigth)}`);

}

pyramid(47,5)