const { Module } = require('module');

const opts = {

    base:{
        demand: true,
        alias: 'b'
    },
    limite: {
        alias:'l',
        default: 10
    }

}

//Copiar de tablaMultiply toda la configuración de yargs
const argv = require('yargs') //configuración del yargs 
                .command('listar','Imprime en consola la tabla de multiplicar', opts)
                .command('crear','Imprime el archivo de la tabla', opts)
                .help()
                .argv;

module.exports = {
    argv
}
