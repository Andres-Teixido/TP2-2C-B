const doWorkPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        //resolve([2,3,4,6]);
        reject('Algo paso mal');

    }, 2 * 1000);
});

doWorkPromise
    .then(result => {
        console.log('Exito!', result);
    })
    .catch(error => {
            console.log('Error:', error);
    });