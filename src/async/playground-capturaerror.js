

const url = 'https://domain-api-com'; // Define la constante 'url' que contiene la URL base de la API.

const anotherFunction2 = async (urlApi) => { // Declara una función asíncrona llamada anotherFunction2 que acepta 'urlApi' como argumento.
    try {
        const example = await fetchData(`${urlApi}`); // Llama a la función fetchData pasando la 'urlApi' y espera a que se resuelva.
        console.log(example); // Imprime el resultado de la llamada a fetchData en la consola.
    } catch (error) { // Captura cualquier error que ocurra en el bloque try.
        throw new Error('API Not Found'); // Lanza un nuevo error con el mensaje 'API Not Found' si ocurre un error.
    }
}

anotherFunction2(url); // Llama a la función anotherFunction2 pasando la constante 'url' como argumento.
