const time = 3000
const message = "hola!"

export function delay(time, message) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(message);
        }, time);
    });
}

delay(time, message)
    .then((resultado) => 
        {console.log(resultado)
    });  