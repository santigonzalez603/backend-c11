const fs = require('fs')
//import fs from 'fs'
fs.readFile('./listaPersonaje.txt','utf8',(err, data)=>{
    if(err){
        console.error('ocurrio un error al intentar abrir el archivo: ',err)
        return;
    }
    console.log('Datos leidos:')
    console.log(data)
})