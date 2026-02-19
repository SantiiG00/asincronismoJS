const usuario =  "Santi";

const verificarUsuario = new Promise((resolve, reject) => {
    if (usuario === "Santi") {
        setTimeout(() => {
            resolve("Usuario verificado");
        }, 2000);
    } else {
        reject("Usuario no verificado");
    }
});

verificarUsuario.then((result) => {
    console.log(result);
}).catch(error => {
    console.error(error);
});