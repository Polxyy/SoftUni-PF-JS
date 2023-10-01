function chess(n) {
    let a = true;
    console.log(`<div class="chessboard">`)
    for (let i = 0; i < n; i++) {

        console.log("  <div>")
        for (let k = 0; k < n; k++) {
            if (a) {
                if (k % 2 == 0) {
                    console.log(`    <span class="black"></span>`)
                }
                else {
                    console.log(`    <span class="white"></span>`)
                }
            }
            else {
                if (k % 2 == 0) {
                    console.log(`    <span class="white"></span>`)
                }
                else {
                    console.log(`    <span class="black"></span>`)
                }
            }
        }
        a = !a;
        console.log("  </div>")
    }
    console.log("</div>")
}

chess(4)