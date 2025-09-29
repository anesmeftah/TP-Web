{
    var a = 5;
    let b = 10;
    const c = 15;


    console.log("dans le bloc")
    console.log("a : " , a)
    console.log("b : " , b)
    console.log("c : " , c)
    
    //c = 20; ici on ne peut pas changer la valeur de la variable c
}
console.log("hors du bloc : ")
console.log('a : ' , a)
//console.log('b : ' , b) : b is not defined outside of the bloc
//console.log('c : ' , c) : c is not defined outside of the bloc