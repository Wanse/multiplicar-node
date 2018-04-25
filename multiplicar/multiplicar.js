//REQUIREDS
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('===================='.green);
    console.log(`Tabla del ${  base }`.green);
    console.log('===================='.green);


    for (let i = 1; i <= limite; i++) {
        console.log((`${base} * ${i} = ${base * i}`));
    }

    console.log('\nListado correctamente.')

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base} no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor ${limite} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`Tabla-${base}.txt`)
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}