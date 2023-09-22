function login(input) {
    if(input.length<2)return;
    let uname = input[0];
    let passwd = '';
    for (let i = uname.length - 1; i >= 0; i--) {
        passwd += uname[i];
    }
    let index = 1;
    let guess;
    while (true) {
        guess = input[index];
        if (guess == passwd) {
            console.log(`User ${uname} logged in.`);
            return;
        }

        index++;
        if (index == 5) {
            console.log(`User ${uname} blocked!`)
            return;
        }
        console.log("Incorrect password. Try again.")
    }

}

login(['Acer','login','go','let me in','recA'])




