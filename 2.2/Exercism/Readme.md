# Ejercicio 12
```typescript
// Función `hey`
export function hey(message: string): string {
    // Pregunta 1: ¿Qué hace esta función?
    // Respuesta 1: Esta función analiza un mensaje dado y responde en consecuencia según ciertas condiciones.

    if (hearsBoring(message)) {
        // Pregunta 2: ¿Qué sucede si el mensaje se considera aburrido?
        // Respuesta 2: Si el mensaje se considera aburrido (vacío o contiene solo espacios en blanco), devuelve '¡Bien. Sé así!'
        return '¡Bien. Sé así!';
    }
    if (hearsFreaky(message) && hearsInquisitive(message)) {
        // Pregunta 3: ¿Qué sucede si el mensaje es tanto extraño como inquisitivo?
        // Respuesta 3: Si el mensaje es tanto extraño (contiene solo letras mayúsculas) como inquisitivo (termina con '?'), devuelve '¡Cálmate, sé lo que estoy haciendo!'
        return '¡Cálmate, sé lo que estoy haciendo!';
    }
    if (hearsFreaky(message)) {
        // Pregunta 4: ¿Qué sucede si el mensaje se considera extraño?
        // Respuesta 4: Si el mensaje se considera extraño (contiene solo letras mayúsculas), devuelve '¡Whoa, cálmate!'
        return '¡Whoa, cálmate!';
    }
    if (hearsInquisitive(message.trimRight())) {
        // Pregunta 5: ¿Qué sucede si el mensaje es inquisitivo?
        // Respuesta 5: Si el mensaje es inquisitivo (termina con '?'), devuelve '¡Claro!'
        return '¡Claro!';
    }
    // Pregunta 6: ¿Qué sucede si no se cumple ninguna de las condiciones anteriores?
    // Respuesta 6: Si no se cumple ninguna de las condiciones anteriores, devuelve 'Lo que sea.'
    return 'Lo que sea.';
}

// Función `hearsBoring`
const hearsBoring = (speech: string): boolean => {
    // Pregunta 7: ¿Qué verifica la función hearsBoring?
    // Respuesta 7: La función hearsBoring verifica si el discurso se considera aburrido, lo que significa que está vacío o contiene solo espacios en blanco.
    return speech.length === 0 || /^\s*$/.test(speech);
};

// Función `hearsFreaky`
const hearsFreaky = (speech: string): boolean => {
    // Pregunta 8: ¿Qué verifica la función hearsFreaky?
    // Respuesta 8: La función hearsFreaky verifica si el discurso contiene solo letras mayúsculas.
    return /[A-Z]/.test(speech) && speech === speech.toUpperCase();
};

// Función `hearsInquisitive`
const hearsInquisitive = (speech: string): boolean => {
    // Pregunta 9: ¿Qué verifica la función hearsInquisitive?
    // Respuesta 9: La función hearsInquisitive verifica si el discurso termina con un signo de interrogación ('?').
    return speech.endsWith('?');
};

```
# Ejercicio 13
```typescript
export class Matrix {
  readonly rows: number[][];
  readonly columns: number[][];

  constructor(text: string) {
    // Pregunta: ¿Qué hace el constructor de esta clase?
    // Respuesta: El constructor recibe un texto y lo utiliza para inicializar la matriz.

    this.rows = text.split('\n').map((row) => {
      // Pregunta: ¿Qué hace el método map en esta línea de código?
      // Respuesta: El método map recorre cada fila del texto dividido por saltos de línea y devuelve un array de números correspondientes a cada fila.
      
      return row.split(/\s+/).map(Number);
      // Pregunta: ¿Qué hace split(/\s+/) en esta línea de código?
      // Respuesta: La expresión regular /\s+/ divide cada fila del texto en substrings utilizando cualquier cantidad de espacios como separador.
      // Luego, map(Number) convierte cada substring en un número y devuelve un array de números.
    });

    this.columns = this.rows[0].map((_, i) => {
      // Pregunta: ¿Qué hace la función map en esta línea de código?
      // Respuesta: La función map recorre los elementos de la primera fila de la matriz (this.rows[0]) y, para cada elemento, crea una columna que contiene el elemento de la misma posición de cada fila.
      
      return this.rows.map((row) => row[i]);
      // Pregunta: ¿Qué hace row[i] en esta línea de código?
      // Respuesta: row[i] selecciona el elemento en la posición i de la fila actual, creando así una columna compuesta por los elementos de la misma posición en cada fila.
    });
  }
}
