const fs = require('fs');

// Inicializar un arreglo 
let listadoPorHacer = [];

// Funcion para guardar la tarea en la data.json
const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    //Guardar en un archivo 
    fs.writeFile('db/data.json', data, (err) => {
        if(err){
            throw new Error('No se pudo guardar', err)
        } 
        else{
            console.log(`El archivo data.json se ha guardado exitosamente!`)    
        }
    });
}

const cargarDB = () => {
    try{
        // Agrega nuevas tareas sin perder ninguna
        listadoPorHacer = require('../db/data.json');
    } catch(err){
        // Si no existe ninguna tarea, lo guardara como una array vacio
        listadoPorHacer = [];
    }
    
    
}

//Función crear
const crear = (descripcion) => {
   
    cargarDB();

    // creo un variable por-Hacer para guardarlo en listadoPorHacer
    let porHacer = {
        descripcion,
        completado: false
    };

    //Hacemos un push (lo agregamos a listadoPorHacer)
    listadoPorHacer.push(porHacer);
    guardarDB()
    return porHacer;
}

//Funcion listar 
const getListado = () => {
    //Requiero las tareas guardadas
    cargarDB();
    //Retorno las tareas
    return listadoPorHacer;
}

//Funcion para actualizar una tarea 
const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion )
    if(index>= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;

    } else {
        return false;
    }
}

//Funcion borrar una tarea 
const borrar = descripcion => {
    cargarDB();
    let nuevoListado = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion );
    if( nuevoListado >= 0 ){
        listadoPorHacer.splice( nuevoListado, 1);
        guardarDB()
        return true;
    } else {
        return false
    }
    

}

module.exports = {
    crear,
    getListado,
    borrar,
    actualizar
    
}