function pas(start,end){
    let sum=0;
    let print = '';
    for(start;start<=end;start++){
        sum += start;
        
        print += start
        if(start != end)print += " "
    }

    console.log(print);
    console.log(`Sum: ${sum}`);
}

pas(5, 10)