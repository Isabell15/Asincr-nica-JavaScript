
// Creamos una función que retorna una Promesa
const fnAsync = () => {
    // Se devuelve una nueva promesa
    return new Promise((resolve, reject) => {
        // Si la condición es true (en este caso siempre lo es), la promesa se resuelve
        (true)
            // Se utiliza setTimeout para simular una operación asincrónica, resolviendo la promesa
            // después de 2 segundos con el valor 'Async!!'
            ? setTimeout(() => resolve('Async!!'), 2000)
            // Si la condición fuera falsa, se rechazaría la promesa con un error
            : reject(new Error('Error!'));
    })
}

// Creamos nuestra función asíncrona utilizando async/await
const anotherFn = async () => {
    // Usamos await para esperar a que fnAsync se resuelva. La ejecución se pausa aquí
    // hasta que la promesa se complete (en este caso después de 2 segundos).
    const somethig = await fnAsync();
    // Una vez que la promesa se resuelve, imprime el valor retornado por fnAsync ('Async!!')
    console.log(somethig);
    // Después de imprimir 'Async!!', se imprime 'Hello!'
    console.log('Hello!')
}

// Ejecución del programa
console.log('Before'); // 1. Se imprime 'Before' inmediatamente, antes de que la promesa se resuelva
anotherFn();            // 3. Se llama a la función asíncrona. Aquí no espera, continúa ejecutando el código.
console.log('After');   // 2. Se imprime 'After' inmediatamente después de 'Before', porque anotherFn() es asíncrona.
// La resolución de la promesa ocurre después de estos mensajes.

