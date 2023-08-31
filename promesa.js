let finDeTransmicion = function (id) {
    return new Promise((resolve) => {
        console.log('transferencia', id, 'Terminada');
        resolve();
    });
};

let obtenerDatos = function (id, duracion) {
    return new Promise((resolve) => {
        console.log('Proceso', id, 'obteniendo datos');
        setTimeout(() => {
            finDeTransmicion(id)
                .then(resolve);
        }, duracion);
    });
};

async function ejecutarProcesos() {
    try {
        await obtenerDatos(1, 1000);
        await obtenerDatos(2, 500);
        await obtenerDatos(3, 1500);
        await obtenerDatos(4, 2000);
        console.log("terminado");
    } catch (error) {
        console.error(error);
    }
}

ejecutarProcesos();