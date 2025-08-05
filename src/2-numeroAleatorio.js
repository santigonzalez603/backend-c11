const argumentos = process.argv;
const args = argumentos.slice(2);
console.log(args);
//valores por defecto
let min = 1;
let max = 100;
//verificar si los datos de los argumentos son correctos

if(args.length === 2){
    //cambiar el tipo de dato o number
    const minParseado = parseInt(args[0])
    const maxParseado = parseInt(args[1])
    //quiero preguntar si minParseado es un numero
    if(!isNaN(minParseado) && !isNaN(maxParseado) && minParseado < maxParseado){
        min = minParseado;
        max = maxParseado;
    }else{
        console.log('Valores fuera del rango, se usaran los valores por defecto (1-100)')
    }
}
  //agregar la logica del numero aleatorio
     const aleatorio = Math.floor(Math.random() * (max - min) + min);
     console.log(`El numero aleatorio generado es ${aleatorio}, el rango tomado es entre ${min} y ${max}`)