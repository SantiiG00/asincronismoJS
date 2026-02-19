
 // ESTRUCTURA DE UNA PROMESA
//const promis = new Promise(function (resolve, reject) {
//    resolve('hey!');
//});

// EJEMPLO DE UNA PROMESA

const vacas = 15;
const contadorDeVacas = new Promise(function(resolve, reject) {
    if (vacas > 10) {
        resolve(`tenemos ${vacas} vacas`);
    } else {
        reject('no tenemos suficientes vacas');
    }
});

contadorDeVacas.then((result) => {console.log(result)});

