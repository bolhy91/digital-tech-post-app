# Digital Tech - App

## Instalacion

RUN `npm i`

RUN `ng serve`

## Description

El app consta de las siguientes caracteristicas:

URL: http://localhost:4200/

* **Login**: Autenticacion del usuario por medio de su username, esto le devuelve un token que se almacena para la validaciones del usuaro y proteger ciertas rutas.

* **Register**: Registro del usuario a nuestra app, debe proporcionar name, surname, username. Quedo pendiente la implementacion de la subida de avatar, utilizando postman si se puede subir su avatar.
* **Posts**: Lista todos los posts de los usuarios. Se implementa dos tipos de Post; cuando el usuario sube la foto y cuando el post no contiene la foto. Falto implementar las subida del post a traves del front. A nivel de Api si se encuentra.

### Las rutas de nuestra aplicacion es:
* /auth/login
* /auth/register
* /posts
* /admin

### Vista de la App

## Images

* Listado de Post

![This is a alt text.](/images/login.png "This is a sample image.")

* Login

![This is a alt text.](/images/home.png "This is a sample image.")

### Herramientas utilizadas
* Typescript
* Angular
