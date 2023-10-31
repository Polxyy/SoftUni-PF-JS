function movies(arr) {
    let moviesArr = [];

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i];
        if (tokens.includes('addMovie')) {
            //tokens.shift;
            let newTokens = tokens.split(' ')
            newTokens.shift();
            newTokens = newTokens.join(' ');
            let movie = {
                name: newTokens
            }
            moviesArr.push(movie)
        }
        else if (tokens.includes('directedBy')) {
            let newTokens = tokens.split(' ')
            let index = newTokens.indexOf('directedBy');
            let movie = '';
            let director = '';
            for (let i = 0; i < index; i++) {
                if (i + 1 != index) {
                    movie += newTokens[i] + ' ';
                }
                else {
                    movie += newTokens[i];
                }
            }

            for (let i = index + 1; i < newTokens.length; i++) {
                if (i + 1 != newTokens.length) {
                    director += newTokens[i] + ' ';
                }
                else {
                    director += newTokens[i];
                }
            }

            for (let el of moviesArr) {
                if (el.name == movie) {
                    el['director'] = director;
                }
            }
        }
        else if (tokens.includes('onDate')) {
            let newTokens = tokens.split(' ')
            let index = newTokens.indexOf('onDate');
            let movie = '';
            let date = '';
            for (let i = 0; i < index; i++) {
                if (i + 1 != index) {
                    movie += newTokens[i] + ' ';
                }
                else {
                    movie += newTokens[i];
                }
            }

            for (let i = index + 1; i < newTokens.length; i++) {
                date = newTokens[i];
            }

            for(let el of moviesArr){
                if(el.name==movie){
                    el['date']=date;    
                }
            }
        }
    }




    for (let el of moviesArr) {
        //console.log(JSON.stringify(el));
        if(Object.keys(el).length==3){
            console.log(JSON.stringify(el));
        }
    }
}


movies([

    'addMovie The Avengers',
    
    'addMovie Superman',
    
    'The Avengers directedBy Anthony Russo',
    
    'The Avengers onDate 30.07.2010',
    
    'Captain America onDate 30.07.2010',
    
    'Captain America directedBy Joe Russo'])



//{"name":"Fast and Furious","date":"30.07.2018","director":"Rob Cohen"}
// {"name":"Godfather","director":"Francis Ford Coppola","date":"29.07.2018"}