# Ejercicio 6
export function isLeap(year: number): boolean {
Esta línea define una función llamada isLeap que acepta un parámetro year de tipo número y devuelve un valor booleano (true o false). La palabra clave export indica que esta función estará disponible para ser utilizada fuera de este archivo.
  return (
Esta línea indica que la función va a devolver un valor.
    (year % 4 === 0 )
Aquí se verifica si el año es divisible por 4 sin dejar un residuo. El operador % calcula el residuo de la división de year por 4. Si el residuo es 0, entonces el año es divisible por 4.
    &&
Este es el operador lógico "y". Se utiliza para combinar dos condiciones y devuelve true solo si ambas condiciones son verdaderas.
    (year % 100 !== 0 || year % 400 === 0)
Esta es la segunda parte de la condición. Si el año es divisible por 100 pero no es divisible por 400, entonces no es un año bisiesto. Sin embargo, si el año es divisible por 400, entonces es un año bisiesto. Esta condición maneja la excepción en el calendario gregoriano que ajusta años que son múltiplos de 100 pero no de 400.
  );
}
Cierra la expresión de retorno y la función.

# Ejercico 7
export function toRna(sequence: string): string {
Esta línea define una función llamada toRna que acepta un parámetro sequence de tipo cadena (string) que representa la secuencia de ADN que se va a convertir. La función devuelve una cadena (string) que representa la secuencia de ARN equivalente.
return sequence
  .split('')
  .map(nucleotide => {
Aquí, la secuencia de ADN se divide en una matriz (array) de caracteres individuales utilizando el método split(''). Luego, se llama al método map() para iterar sobre cada nucleótido de la secuencia.
     switch(nucleotide) {
       case 'G':
         return 'C'
       case 'C':
         return 'G'
       case 'T':
         return 'A'
       case 'A':
         return 'U'
       default:
         throw new Error('Invalid input DNA.')
     }
Dentro de la función de mapeo, hay un switch que examina cada nucleótido y devuelve su correspondiente nucleótido de ARN según las reglas de complementariedad de bases:
'G' (guanina) en ADN se convierte en 'C' (citosina) en ARN.
'C' (citosina) en ADN se convierte en 'G' (guanina) en ARN.
'T' (timina) en ADN se convierte en 'A' (adenina) en ARN.
'A' (adenina) en ADN se convierte en 'U' (uracilo) en ARN.
Si se encuentra un nucleótido que no es ninguno de los mencionados anteriormente, se lanza un error indicando que la entrada de ADN es inválida.
  })
  .join('')
Después del map, se utiliza join('') para combinar los nucleótidos de ARN en una sola cadena.
}
Finalmente, se cierra la función.

# Link 
https://youtu.be/q9Ta3ywfsyU