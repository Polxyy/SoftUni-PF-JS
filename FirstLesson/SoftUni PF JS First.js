function func(namea , agea,gradea){
    let grade = (Number(gradea)).toFixed(2);
    let name = namea;
    let age =agea;

    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade}`)
}

func("asd","15","5.20")