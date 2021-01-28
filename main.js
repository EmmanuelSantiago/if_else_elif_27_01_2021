let num_1 = 50;
let num_2 = 90;

if (num_1 == num_2){
    console.log(`El numero ${num_1} es igual a ${num_2}`);
}else if(num_1 > num_2){
    console.log(`El numero ${num_1} es mayor que ${num_2}`);
}else if(num_1 < num_2){
    console.log(`El numero ${num_1} es menor que ${num_2}`);
}else{
    console.log(`Opción no valida`);
}

var num_3 = 800;

if (num_1 < num_2 || num_3 == num_2){
    console.log(`El numero ${num_1} es menor que ${num_2} y el numero ${num_3} no es igual al numero ${num_2}`);
}else if(!(num_3 > num_1 || num_1 < num_2)){
    console.log(`El numero ${num_3} es mayor que ${num_1} y éste es menor que ${num_2}`);
}else{
    console.log("Opcion no valida");
}