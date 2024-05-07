# Ejercicio 8
Se define un tipo Planets que representa los nombres de los planetas del sistema solar como cadenas de texto. Este tipo está formado por unión de literales de cadena utilizando el operador |.
Se crea un objeto factors que utiliza un mapeo por índice ([key in Planets]) para especificar los factores de conversión de años terrestres a años en cada planeta. Cada clave del objeto corresponde a un planeta y su valor es el factor de conversión respectivo.
Se exporta una función llamada age que toma dos argumentos:
planet: El planeta en el que se desea calcular la edad, que debe ser uno de los valores del tipo Planets.
seconds: La cantidad de segundos vividos en la Tierra.
Dentro de la función age, se utiliza la fórmula para calcular la edad en el planeta seleccionado:
Se divide la cantidad de segundos vividos en la Tierra (seconds) por el producto de la duración de un año terrestre (31557600 segundos) y el factor de conversión del planeta seleccionado (factors[planet]).
El resultado se redondea a dos decimales utilizando el método toFixed(2).
Finalmente, se convierte el resultado de nuevo a un número utilizando el operador + antes de devolverlo.
# Ejercicio 9
Definición de la clase DnDCharacter: La clase tiene las siguientes propiedades:
strength, dexterity, constitution, intelligence, wisdom y charisma: Representan las habilidades del personaje y son de solo lectura (readonly). Estas habilidades son asignadas aleatoriamente mediante el método generateAbilityScore() en el constructor de la clase.
hitpoints: Representa los puntos de golpe del personaje. Se inicializa como 10 más el modificador de constitución (constitution), calculado mediante el método getModifierFor() en el constructor de la clase.
Método generateAbilityScore(): Este método estático genera un valor de habilidad aleatorio. Utiliza la mecánica de D&D, donde un personaje lanza cuatro dados de seis caras (d6) y descarta el valor más bajo. Luego suma los tres valores más altos para obtener el resultado. Este método se utiliza para inicializar las habilidades del personaje en el constructor.
Método getModifierFor(): Este método estático calcula el modificador para una habilidad dada. El modificador se calcula restando 10 del valor de la habilidad y luego dividiendo el resultado entre 2, tomando solo la parte entera (sin decimales). Este modificador se utiliza para calcular los puntos de golpe (hitpoints) del personaje.
Método generateRandomDiceRollScore(): Este método estático genera un valor aleatorio entre 1 y 6, simulando el lanzamiento de un dado de seis caras (d6). Este método se utiliza en generateAbilityScore() para obtener los valores de los dados.
# Link
https://youtu.be/jAq5EmgafYY