# Ejercicio 1
 
 * export function hello(): string {: Esta línea define una función llamada hello que se exporta para que pueda ser utilizada fuera de este módulo. La función no acepta ningún parámetro, como se indica por los paréntesis vacíos (). El tipo de retorno de la función se especifica como string, lo que significa que esta función devolverá una cadena de texto. return 'Hello, World!': Esta línea indica que la función hello devolverá la cadena de texto "Hello, World!" cuando sea llamada.
 }

 # Ejercicio 2

* export: Esto indica que la función twoFer se exporta desde el módulo actual y está disponible para ser importada  function twoFer(name?: string): string: Esto define una función llamada twoFer. Toma un parámetro opcional llamado name, que es de tipo string y devuelve una cadena (string). El parámetro name es opcional, lo que significa que se puede proporcionar o no cuando se llama a la función. Si no se proporciona un nombre, name será undefined. El cuerpo de la función: Aquí se utiliza una plantilla de cadena (template literal) para construir la cadena de salida. Si se proporciona un nombre, se usa en la cadena devuelta. Si no se proporciona un nombre (es decir, name es undefined), se utiliza la cadena 'you' como valor predeterminado.  Por lo tanto, la función twoFer se puede utilizar para generar mensajes de "two-fer", donde se especifica el nombre de una persona en el mensaje, o se utiliza "you" como valor predeterminado si no se proporciona ningún nombre.
 
 # Ejercicio 3

La función colorCode toma un argumento color de tipo string y devuelve el índice de ese color en el array COLORS. Por ejemplo, si pasas el color "red" a la función colorCode, devolverá el índice 2, ya que "red" está en la tercera posición del array COLORS (los índices comienzan desde 0). La constante COLORS es un array que contiene una lista de nombres de colores en el orden en que están definidos en el espectro visible (aproximadamente). Estos colores están predefinidos y se utilizan como referencia para asignarles un código numérico basado en su posición en el array. 

# Video 
Link: https://youtu.be/L2-fo5YCAAg 