function read(currentBook, pph, daysToRead){
    let timeForBook = currentBook / pph;
    let reqTime = timeForBook / daysToRead;
    console.log(reqTime)
}

read(212,20,2)