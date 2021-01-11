//Configurar los comandos

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente de la tarea'
}



const argv = require('yargs')
    // Crear comandos
    .command('crear', 'Crea una tarea por hacer', {
        descripcion,
        completado
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

// Exportar el modulo
module.exports = {
    argv
}