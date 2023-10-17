function palindrome(arr){
    function isPalindrome(num){
        if(num==String(num).split('').reverse().join('')){
            return true;
        }
        return false;
    }
    for(let i=0;i<arr.length;i++){
        console.log(isPalindrome(arr[i]))
    }
}

palindrome([121,212,112,221,111]);