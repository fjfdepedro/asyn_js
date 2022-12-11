const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Whoops!');
        }
    });
}

somethingWillHappen()
  .then(response => console.log(response))
  .catch(err => console.error(err));

  const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('Whoops!'); 
            // para crear un error y usarlo en el catch,
            // te muestra la línea donde se creó
            reject(error);
        }
    });
  }

somethingWillHappen2()
  .then(response => console.log(response))
  .then(() => console.log('Hola'))
  .catch(err => console.error(err));

// Ejecutar varias promesas al mismo tiempo
Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
    console.log('Array of results', response);
})
.catch(err => {
    console.error(err);
})