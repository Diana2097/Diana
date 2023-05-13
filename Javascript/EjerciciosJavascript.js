function mayorArray(mayorArray) ^{
    if (array.length === 0) //si el array esta basico retorna a null
        return null;

}

if (array.length === 1) { // el array retorna a un solo elemento
     return array [0];

}

let mayor= array [0];
for(let i= 1; i <array.length; i++) { // se comparan los elemntos para encontar el numero mayor
    if (array[i]>mayor) 
        mayor=array[i];
    
}

let i= 0;
while (i < array.length) {
 console.log(array[i]);   //imprimir  
 i++;
}

let contadorimpar =0; // verificacion de los numeros impares
  let j= 0;
  do {
    if (array [i] 2 !==0){
        contadorimpares++; //verificacion del proceso
      }
    j++; // elemto impar

  } 
  while(j< array.lenth);

  return mayor; //llegar a un numero par

