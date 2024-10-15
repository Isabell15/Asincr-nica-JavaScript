

import fetch from "node-fetch"; // Importa la librería 'node-fetch' para poder realizar solicitudes HTTP.

const API = 'https://api.escuelajs.co/api/v1'; // Define la constante API que contiene la URL base de la API.

async function fetchData(urlApi) { // Declara una función asíncrona llamada fetchData que acepta un parámetro 'urlApi'.
    const response = await fetch(urlApi); // Realiza una solicitud GET a la URL proporcionada y espera la respuesta.
    const data = await response.json(); // Convierte la respuesta a formato JSON y espera a que se complete.
    return data; // Retorna los datos en formato JSON.
}

const anotherFunction = async (urlApi) => { // Declara otra función asíncrona llamada anotherFunction que acepta 'urlApi' como argumento.
    try {
        const products = await fetchData(`${urlApi}/products`); // Llama a fetchData con la URL de productos y espera los datos.
        const product = await fetchData(`${urlApi}/products/${products[0].id}`); // Toma el primer producto y llama a fetchData para obtener más información sobre él.
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`); // Llama a fetchData para obtener la categoría del producto usando su ID.
        
        console.log(products); // Imprime todos los productos en la consola.
        console.log(product.title); // Imprime el título del primer producto en la consola.
        console.log(category.name); // Imprime el nombre de la categoría del producto en la consola.
    } catch (error) { // Captura cualquier error que ocurra en el bloque try.
        console.error(error); // Imprime el error en la consola.
    }
}

anotherFunction(API); // Llama a la función anotherFunction pasando la constante API como argumento.
