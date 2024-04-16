# Ejercicio 4
Definimos un arreglo de colores que representan los dígitos de la resistencia
Definimos la función `decodedValue` que toma una matriz de dos colores como argumento
Usamos el método `reduce` para iterar sobre la matriz de colores
En cada iteración, sumamos el índice del color en el arreglo `resistances` al valor acumulado previo
Convertimos el valor acumulado a un número
 
# Ejercicio 5
Definimos un arreglo de colores como constantes
Se utiliza "as const" para que el tipo de `Color` sea una tupla de los elementos del arreglo
Definimos el tipo `Color` como la unión de todos los elementos del arreglo `ColorAry`
Definimos una lista de unidades de resistencia y sus respectivos multiplicadores
Definimos la función `decodedResistorValue` que toma como argumento una tupla de tres colores
Buscamos en la lista `ohms` el divisor adecuado para el valor de la resistencia
Retornamos el valor de la resistencia formateado con el prefijo y la unidad adecuados
el código define un conjunto de colores para las bandas de una resistencia (ColorAry), donde cada color tiene un índice asociado. Luego, define un conjunto de prefijos y divisores para las unidades de resistencia (ohms).
La función decodedResistorValue toma una tupla de tres colores como entrada, calcula el valor de la resistencia basado en los colores proporcionados y busca el divisor adecuado en la lista ohms para determinar la unidad de resistencia correcta. Finalmente, devuelve el valor de la resistencia formateado con la unidad adecuada.

# Link 
https://youtu.be/R7hXWoUpzQs 