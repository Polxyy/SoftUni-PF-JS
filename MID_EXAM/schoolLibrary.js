function library(input) {
    //first line- shelf with books, each book seperated by &;
    //other lines: commands separated with ' | '
    //commands: Add, Take, Swap, Insert, Check;
    //Add - adds book in first place on bookshelf if book is not already on the shelf else ingore
    //Take - remove book with the given name if the book is present on the shelf else ingore
    //Swap - if both books are present on the shelf, swap their places, else ingore
    //Insert Add book at end of shelf, if book is already present ignore the command;
    // Check book, Print name of the book at a given index, if index isnt valid- ignore command
    let bookshelf = input.shift().split('&')

    index = 0;
    while (input[index] != "Done") {
        let line = input.shift().split(' | ');
        let action = line[0];
        if(action=="Add Book"){
            let book = line[1];
            if(!bookshelf.includes(book)){
                bookshelf.unshift(book);
            }
        }
        else if(action=="Take Book"){
            let book = line[1];
            if(bookshelf.includes(book)){
                bookshelf.splice(bookshelf.indexOf(book),1);
            }
        }else if(action=="Swap Books"){
            let firstBook = line[1];
            let secondBook = line[2];

            if(bookshelf.includes(firstBook)&&bookshelf.includes(secondBook)){
                let firstindex=bookshelf.indexOf(firstBook);
                let secondindex=bookshelf.indexOf(secondBook);
                [bookshelf[firstindex],bookshelf[secondindex]]=[bookshelf[secondindex],bookshelf[firstindex]]
            }
        }else if(action=="Insert Book"){
            let book=line[1];
            if(!bookshelf.includes(book)){
                bookshelf.push(book);
            }
        }else if(action=="Check Book"){
            let index=Number(line[1]);
            if(index>=0 && index<bookshelf.length){
                console.log(bookshelf[index]);
            }
        }
    }

    console.log(bookshelf.join(', '));


}


library(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",

"Add Book | Catch-22",

"Swap Books | Anna Karenina | Catch-22",

"Take Book | David Copperfield",

"Done"])

    // "Swap Books | Ulysses | Moby Dick",