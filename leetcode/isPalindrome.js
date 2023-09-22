var isPalindrome = function(x) {
    let xReversed=String(x).split('').reverse();
    xReversed=xReversed.join('')

    if(x==xReversed){
        return true
    }
    return false
};


console.log(isPalindrome(121))