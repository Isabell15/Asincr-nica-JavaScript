// Declara una función generadora llamada 'gen'
function* gen() {
    yield 1; // La primera llamada a next() devolverá 1
    yield 2; // La segunda llamada a next() devolverá 2
    yield 3; // La tercera llamada a next() devolverá 3
}

// Crea una instancia del generador 'gen'
const g = gen();
console.log(g.next().value); // Llama a next() en el generador y muestra 1
console.log(g.next().value); // Llama a next() nuevamente y muestra 2
console.log(g.next().value); // Llama a next() otra vez y muestra 3
// La propiedad .next() se utiliza para recorrer los valores que son "yielded" por el generador, 
// devolviendo un objeto con dos propiedades: value y done. En este caso, simplemente se accede a la propiedad value.

// Declara otra función generadora llamada 'iterate' que acepta un arreglo como argumento
function* iterate(array) {
    for (let value of array) { // Itera sobre cada valor en el arreglo
        yield value; // Cada valor se "yields" para ser devuelto al consumidor del generador
    }
}

// Crea una instancia del generador 'iterate' pasando un arreglo de nombres
const it = iterate(['oscar', 'dante', 'ana', 'lucia', 'juan']);
console.log(it.next().value); // Muestra 'oscar', el primer valor del arreglo
console.log(it.next().value); // Muestra 'dante', el segundo valor del arreglo
console.log(it.next().value); // Muestra 'ana', el tercer valor del arreglo
console.log(it.next().value); // Muestra 'lucia', el cuarto valor del arreglo
console.log(it.next().value); // Muestra 'juan', el quinto valor del arreglo
console.log(it.next().value); // Como no hay más valores para iterar, muestra undefined
// La llamada a next() en este caso retorna un objeto con value: undefined y done: true, indicando que ya no hay más valores que generar.
