# Ejercicio 10
Este código es una función en TypeScript llamada score que toma dos parámetros numéricos, x y y, y devuelve un número que representa una puntuación basada en la distancia desde el punto de coordenadas (x, y) al origen (0, 0) en un plano cartesiano.
export function score(x: number, y: number): number 
export function score(x: number, y: number): number: Esto define una función llamada score que toma dos parámetros numéricos x y y, ambos de tipo number. La función devuelve un número.
  const distance = Math.sqrt(x*x + y*y);
const distance = Math.sqrt(x*x + y*y);: Calcula la distancia desde el punto (x, y) al origen (0, 0) utilizando el teorema de Pitágoras. x*x + y*y es la suma de los cuadrados de las coordenadas x e y, y Math.sqrt() calcula la raíz cuadrada de esa suma, lo que da como resultado la distancia.
Estos bloques if-else determinan la puntuación basada en la distancia calculada anteriormente:
Si la distancia es mayor que 10, devuelve 0.
Si la distancia es mayor que 5 pero menor o igual que 10, devuelve 1.
Si la distancia es mayor que 1 pero menor o igual que 5, devuelve 5.
Si la distancia es igual o menor que 1, devuelve 10.
# Ejercicio 9
export function isPangram(paragraph: string): boolean {
export function isPangram(paragraph: string): boolean: Define una función llamada isPangram que toma un parámetro de tipo string llamado paragraph y devuelve un valor booleano (true o false).
    return new Set(paragraph.toLowerCase().replace(/[^a-z]/g, '')).size === 26;
Este es el cuerpo de la función. Analicémoslo paso a paso:
paragraph.toLowerCase(): Convierte todo el texto del párrafo a minúsculas. Esto asegura que no haya diferencias entre letras mayúsculas y minúsculas al realizar la comparación.
.replace(/[^a-z]/g, ''): Utiliza una expresión regular para eliminar todos los caracteres que no sean letras del alfabeto. /[^a-z]/g es una expresión regular que coincide con cualquier carácter que no sea una letra del alfabeto en minúsculas (desde 'a' hasta 'z'). El modificador g indica que la búsqueda debe ser global, es decir, que se busque en toda la cadena. Al reemplazarlos con una cadena vacía, eliminamos todos los caracteres no alfabéticos.
new Set(...): Crea un conjunto (Set) a partir de la cadena resultante después de convertirla a minúsculas y eliminar los caracteres no alfabéticos. Un conjunto es una estructura de datos que solo almacena valores únicos, por lo que cualquier letra duplicada se eliminará automáticamente.
.size === 26: Compara el tamaño del conjunto (la cantidad de letras únicas presentes) con 26, que es la cantidad de letras en el alfabeto inglés. Si el tamaño es igual a 26, significa que todas las letras del alfabeto están presentes al menos una vez en el párrafo, por lo que devuelve true, lo que indica que es un pangrama. De lo contrario, devuelve false.
# Link
https://youtu.be/OTQK5P2dF4I