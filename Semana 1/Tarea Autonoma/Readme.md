# .Net
Crea un nuevo proyecto de ASP.NET Core utilizando el comando CLI:
dotnet new web -n HolaMundoAspNetCore
Dentro del proyecto, agrega un archivo JavaScript en el directorio wwwroot/js.
En el archivo JavaScript, escribe el código para imprimir "Hola Mundo" en la consola del navegador.
Referencia el archivo JavaScript en tu página HTML o en el _Layout.cshtml si estás utilizando Razor.
Ejecuta tu aplicación ASP.NET Core con el comando dotnet run y abre tu navegador para ver el mensaje "Hola Mundo" en la consola.
# Django
Instala Django si no lo tienes:
pip install django
Crea un nuevo proyecto de Django:
django-admin startproject hola_mundo
Crea una nueva aplicación dentro del proyecto:
cd hola_mundo
python manage.py startapp saludo
Define una vista en views.py que retorne un mensaje de saludo en formato JSON.
Configura la URL para la vista.
Crea una plantilla HTML que incluya JavaScript para hacer una solicitud a la vista y mostrar el mensaje de saludo.
Ejecuta el servidor de desarrollo de Django:
python manage.py runserver
Accede a la página en tu navegador y deberías ver el mensaje.
# Nestjs
Instala Node.js si no lo tienes.
Instala Nest CLI globalmente:
npm install -g @nestjs/cli
Crea un nuevo proyecto:
nest new nombre-proyecto
Abre el archivo app.controller.ts y modifica el método getHello() para que devuelva "Hola Mundo!".
Ejecuta el servidor Nest.js:
npm run start
Accede a http://localhost:3000 en tu navegador y deberías ver "Hola Mundo!".
¡Listo! Has creado tu primer "Hola Mundo" en Nest.js.

Link:https://youtu.be/87jxRJ4QMYw 