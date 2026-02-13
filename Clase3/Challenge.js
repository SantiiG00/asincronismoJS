const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(urlAPI, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlAPI, true);

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error ' + urlAPI);
                callback(error, null);
            }
        }
    };

    xhttp.send();
}
