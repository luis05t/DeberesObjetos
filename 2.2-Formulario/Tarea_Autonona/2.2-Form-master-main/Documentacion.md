# CCS
```SQL
[nz-form] {
  max-width: 600px;
}
/* Pregunta 1: ¿Qué elemento representa el selector [nz-form]? */
/* Respuesta 1: El selector [nz-form] representa un formulario específico en el HTML que utiliza una clase o atributo llamado "nz-form". */
/* Explicación 1: La regla establece un ancho máximo de 600px para este formulario en particular, lo que puede ser útil para controlar su presentación en diferentes tamaños de pantalla. */

form {
  max-width: 600px;
}
/* Pregunta 2: ¿Qué elementos representa el selector form? */
/* Respuesta 2: El selector form representa todos los formularios HTML en la página. */
/* Explicación 2: Establecer un ancho máximo de 600px para todos los formularios ayuda a mantener una presentación uniforme y consistente en toda la página, independientemente de su ubicación o contenido. */
```
# HTML
```sql
<h1>Empresa</h1>
<!-- Pregunta 1: ¿Qué título tiene esta sección del formulario? -->
<!-- Respuesta 1: El título de esta sección del formulario es "Empresa". -->

<form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
  <!-- Pregunta 2: ¿Qué hace el atributo `[formGroup]` en la etiqueta <form>? -->
  <!-- Respuesta 2: El atributo `[formGroup]` enlaza el formulario con una instancia de `FormGroup` llamada `validateForm`, lo que permite la validación y el control del formulario en Angular. -->
  <!-- Pregunta 3: ¿Qué hace el evento `(ngSubmit)` en la etiqueta <form>? -->
  <!-- Respuesta 3: El evento `(ngSubmit)` ejecuta la función `submitForm()` cuando se envía el formulario. -->

  <nz-form-item>
    <nz-form-label [nzSpan]="7" nzRequired>Nombre</nz-form-label>
    <!-- Pregunta 4: ¿Qué hace el atributo `[nzSpan]` en la etiqueta <nz-form-label>? -->
    <!-- Respuesta 4: El atributo `[nzSpan]` define cuántas columnas de ancho ocupará el elemento dentro de su contenedor. -->
    <!-- Pregunta 5: ¿Qué indica el atributo `nzRequired` en la etiqueta <nz-form-label>? -->
    <!-- Respuesta 5: El atributo `nzRequired` indica que el campo es obligatorio. -->
    <nz-form-control [nzSpan]="12">
      <input nz-input formControlName="firstName" placeholder="Coca-Cola" />
      <!-- Pregunta 6: ¿Qué hace el atributo `formControlName` en la etiqueta <input>? -->
      <!-- Respuesta 6: El atributo `formControlName` enlaza el control del formulario con la propiedad `firstName` del `FormGroup` para gestionar su estado y validación. -->
    </nz-form-control>
  </nz-form-item>

  <nz-form-item>
    <nz-form-label [nzSpan]="7" nzRequired>Descripción</nz-form-label>
    <nz-form-control [nzSpan]="12">
      <input nz-input formControlName="role" placeholder="Fábrica principal" />
    </nz-form-control>
  </nz-form-item>
  <!-- Pregunta 7: ¿Qué función tiene el campo de entrada con `formControlName="role"`? -->
  <!-- Respuesta 7: El campo de entrada con `formControlName="role"` permite al usuario ingresar la descripción de la empresa y está enlazado a la propiedad `role` del `FormGroup`. -->

  <nz-form-item>
    <nz-form-label [nzSpan]="7" nzRequired>Año de fundación</nz-form-label>
    <nz-form-control [nzSpan]="12">
      <input nz-input formControlName="department" placeholder="2005" />
    </nz-form-control>
  </nz-form-item>
  <!-- Pregunta 8: ¿Qué información se captura en el campo de entrada con `formControlName="department"`? -->
  <!-- Respuesta 8: El campo de entrada con `formControlName="department"` captura el año de fundación de la empresa. -->

  <nz-form-item>
    <nz-form-control [nzXs]="{ span: 24, offset: 0 }" [nzSm]="{ span: 16, offset: 8 }">
      <button nz-button nzType="primary">Submit</button>
      <!-- Pregunta 9: ¿Qué hace el botón con `nz-button` y `nzType="primary"`? -->
      <!-- Respuesta 9: El botón con `nz-button` y `nzType="primary"` es un botón de envío que envía el formulario cuando se hace clic. -->
    </nz-form-control>
  </nz-form-item>

</form>
<!-- Pregunta 10: ¿Qué estructura tiene el formulario en general? -->
<!-- Respuesta 10: El formulario tiene una estructura de múltiples elementos de formulario (items) con etiquetas y controles, cada uno especificando un campo diferente para la información de la empresa, y un botón de envío al final. -->
```
# Link: https://youtu.be/gTpWRnetJF0