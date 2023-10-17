function password(pass) {
    function checkLength(p) {
        if (p.length > 5 && p.length < 11) {
            return true;
        }
        console.log('Password must be between 6 and 10 characters');
        return false;
    }

    function onlyLettersAndDigits(p) {
        for (let curChar of p) {
            let code = curChar.charCodeAt(0);

            if (
                !(code >= 48 && code <= 57) &&
                !(code >= 65 && code <= 90) &&
                !(code >= 97 && code <= 122)
            ) {
                console.log('Password must consist only of letters and digits');
                return false;
            }
        }
        return true;
    }

    function atleast2Digits(p) {
        let digits = 0;
        for (let curChar of p) {
            let code = curChar.charCodeAt(0);
            if (code >= 48 && code <= 57) {
                digits++;
            }
        }

        if (digits < 2) {
            console.log('Password must have at least 2 digits');
            return false;
        }
        return true;
    }


    let length = checkLength(pass)
    let dl = onlyLettersAndDigits(pass)
    let asd = atleast2Digits(pass)
    if(length && dl && asd){
        console.log('Password is valid');
    }
}

password('Myasasd12')