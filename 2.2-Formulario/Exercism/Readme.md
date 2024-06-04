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
```
# Ejercicio 14
```typescript
export class Robot {
    private _name: string
    public static _reservedNames: Set<string>
    // Pregunta 1: ¿Qué propiedades tiene la clase `Robot`?
    // Respuesta 1: La clase `Robot` tiene una propiedad privada `_name` que almacena el nombre del robot y una propiedad estática `_reservedNames` que almacena un conjunto de nombres reservados.

    constructor() {
        Robot._reservedNames = new Set()
        this._name = this.generateName()
        // Pregunta 2: ¿Qué hace el constructor de la clase `Robot`?
        // Respuesta 2: El constructor inicializa `_reservedNames` como un nuevo conjunto y asigna a `_name` un nombre generado usando el método `generateName`.
    }

    public get name(): string {
        return this._name
        // Pregunta 3: ¿Cómo se obtiene el nombre de un robot?
        // Respuesta 3: Se obtiene el nombre del robot mediante el getter público `name`, que devuelve el valor de `_name`.
    }

    generateName(): string {
        let randomName: string
        do {
            randomName = this.randomName()
            // Pregunta 4: ¿Qué hace el método `generateName`?
            // Respuesta 4: El método `generateName` genera un nombre aleatorio utilizando el método `randomName` y se asegura de que no se repita en `_reservedNames`. Si el nombre ya existe, genera uno nuevo hasta que encuentra un nombre único y lo agrega a `_reservedNames`.
        } while (Robot._reservedNames.has(randomName))
        Robot._reservedNames.add(randomName)
        return randomName
    }

    randomName(): string {
        let name = '';
        for (let i = 0; i < 2; i++) {
            name += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)];
        }
        for (let i = 0; i < 3; i++) {
            name += '0123456789'[Math.floor(Math.random() * 10)];
        }
        return name
        // Pregunta 5: ¿Cómo se genera un nombre aleatorio en la clase `Robot`?
        // Respuesta 5: El método `randomName` genera un nombre compuesto por dos letras mayúsculas seguidas de tres dígitos. Usa caracteres aleatorios de las cadenas 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' y '0123456789'.
    }

    public resetName(): void {
        this._name = this.generateName()
        // Pregunta 6: ¿Cómo se reinicia el nombre de un robot?
        // Respuesta 6: El método `resetName` asigna un nuevo nombre generado por `generateName` a `_name`.
    }

    public static releaseNames() {
        this._reservedNames.clear()
        // Pregunta 7: ¿Cómo se liberan todos los nombres reservados?
        // Respuesta 7: El método estático `releaseNames` limpia el conjunto `_reservedNames`, eliminando todos los nombres reservados.
    }
}

// Pregunta 8: ¿Qué hace el conjunto `_reservedNames` en la clase `Robot`?
// Respuesta 8: `_reservedNames` asegura que cada robot tenga un nombre único al almacenar todos los nombres generados y verificar que no se repitan.

```
# Ejercicio 15
```typescript
interface DB {
    [key: number]: string[];
}
// Pregunta 1: ¿Qué es la interfaz `DB`?
// Respuesta 1: La interfaz `DB` define un objeto donde las claves son números (representando grados) y los valores son arreglos de cadenas (nombres de estudiantes).

export class GradeSchool {
    _roster: DB = {}
    // Pregunta 2: ¿Qué es `_roster` en la clase `GradeSchool`?
    // Respuesta 2: `_roster` es una propiedad que almacena la base de datos de estudiantes, donde las claves son grados y los valores son arreglos de nombres de estudiantes.

    roster() {
        return JSON.parse(JSON.stringify(this._roster))
        // Pregunta 3: ¿Qué hace el método `roster`?
        // Respuesta 3: El método `roster` devuelve una copia profunda del objeto `_roster` para evitar modificaciones directas.
    }

    add(name: string, grade: number) {
        this.deDupe(name)
        // Pregunta 4: ¿Qué hace `this.deDupe(name)` en el método `add`?
        // Respuesta 4: El método `deDupe` elimina el nombre del estudiante de cualquier otro grado antes de agregarlo al nuevo grado.
        this._roster[grade] ?
            this._roster[grade].push(name) : this._roster[grade] = [name]
        // Pregunta 5: ¿Qué hace la línea `this._roster[grade].push(name)`?
        // Respuesta 5: Si el grado ya existe en `_roster`, añade el nombre del estudiante al arreglo correspondiente.
        // Pregunta 6: ¿Qué hace la línea `this._roster[grade] = [name]`?
        // Respuesta 6: Si el grado no existe en `_roster`, crea un nuevo arreglo con el nombre del estudiante.
        this._roster[grade].sort()
        // Pregunta 7: ¿Por qué se ordenan los nombres después de agregar un nuevo estudiante?
        // Respuesta 7: Para mantener los nombres de los estudiantes en orden alfabético dentro de cada grado.
    }

    grade(grade: number) {
        return this.roster()[grade] ?? []
        // Pregunta 8: ¿Qué hace el método `grade`?
        // Respuesta 8: El método `grade` devuelve una copia del arreglo de nombres de estudiantes para el grado especificado, o un arreglo vacío si el grado no existe.
    }

    deDupe(name: string) {
        for (let grade in this._roster) {
            let names = this._roster[grade]
            if (names.indexOf(name) != -1) {
                names.splice(names.indexOf(name), 1)
                break
            }
        }
        // Pregunta 9: ¿Qué hace el método `deDupe`?
        // Respuesta 9: El método `deDupe` elimina el nombre del estudiante de cualquier otro grado en el que ya esté registrado antes de agregarlo al nuevo grado.
    }
}

```
## Link: 12-13 https://youtu.be/zSwPHlykNWU
## Link> 14-15 https://youtu.be/DliLQnizQbQ
