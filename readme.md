# Código asíncrono: Dog API y GitHub API

Bikram del bootcamp Full Stack de The Bridge para practicar peticiones a APIs con `fetch`. Uso la [Dog API](https://dog.ceo/dog-api/) y la API pública de GitHub. Mis soluciones están en `index.js`.

## Qué he resuelto

**Dog API**

1. `getAllBreeds()`: devuelve todas las razas. La API las manda como claves de un objeto, así que saco el array con `Object.keys(data.message)`.
2. `getRandomDog()`: la URL de una foto de perro aleatoria.
3. `getAllImagesByBreed()`: todas las fotos de la raza komondor.
4. `getAllImagesByBreed2(breed)`: lo mismo, con la raza que le pases.

**GitHub API**

5. `getGitHubUserProfile(username)`: el perfil completo de un usuario.
6. `printGithubUserProfile(username)`: pinta la foto y el nombre del usuario en la página y devuelve `{ img, name }`.
7. `getAndPrintGitHubUserProfile(username)`: devuelve una tarjeta HTML con la foto, el nombre y el número de repos públicos.
8. Un input y un botón "Buscar" que creo desde JavaScript al cargar la página. Al pulsarlo, el botón llama a `getAndPrintGitHubUserProfile` con lo que hayas escrito.
9. `fetchGithubUsers(userNames)`: lanza un `fetch` por cada usuario con `map`, espera a todos con `Promise.all()` y saca por consola la URL y el nombre de cada uno.

## Cómo probarlo

Abre `index.html` en el navegador. Los tests de Jasmine hacen peticiones reales a las APIs, así que necesitas internet. GitHub solo deja hacer 60 peticiones por hora sin token, y si recargas la página muchas veces seguidas algunos tests pueden fallar por ese límite.

## Qué he aprendido

- `fetch` devuelve una promesa y `response.json()` devuelve otra. Por eso en cada función escribo dos `await`: uno para la respuesta y otro para los datos.
- Una función `async` devuelve una promesa aunque dentro ponga `return data.message`. Quien la use tiene que esperarla con `await` o con `.then()`.
- Con `Promise.all()` lanzo todas las peticiones a la vez y espero a que terminen antes de leer los resultados.

## Enunciado original

![logotipo de The Bridge](https://user-images.githubusercontent.com/27650532/77754601-e8365180-702b-11ea-8bed-5bc14a43f869.png  "logotipo de The Bridge")

### :european_castle: :crossed_swords: Bikram #

#### Introducción ##
Un bikram es una combinación de ejercicios de programación para perfeccionar la conexión entre el programador interior que llevas dentro y el alma del lenguaje de programación. Aprovecha los checkboxes en el enunciado para ir marcando que ejercicios llevas realizados.

Estas pruebas cubren un espectro de dificultad incremental, dotada de tests que cubrirán la correcta resolución para ayudarte a encontrar posibles errores en tu código.

La soluciones a los bikrams deberán hacerse en **./index.js** y tienen que subirse a GitHub, además, deberá incluirse una captura de pantalla de los tests.

En esta ocasión, el bikram se dividirá en :crossed_swords: Pair Programming :crossed_swords: y :european_castle: proyecto individual :european_castle:

#### Iteraciones :crossed_swords: Pair Programming :crossed_swords: ##

(Abre index.html para ver el resultado de los tests)

##### Dog API - Quiero un perrito, pero no se qué raza escoger, ¿me ayudas? ###

Utiliza la API (https://dog.ceo/dog-api/) para resolver estos ejercicios.

- [ ] 1.- Declara una funcion **getAllBreeds** que devuelva un array de strings con todas las razas de perro.

- [ ] 2.- Declara una función **getRandomDog** que obtenga una imagen random de una raza.

- [ ] 3.- Declara una función **getAllImagesByBreed** que obtenga todas las imágenes de la raza komondor.

- [ ] 4.- Declara una funcion **getAllImagesByBreed2(breed)** que devuelva las imágenes de la raza pasada por el argumento

##### GitHub API (I) - ¿Quieres saber mi información? Aquí la tienes ###

- [ ] 5.- Declarara una función **getGitHubUserProfile(username)** que obtenga el perfil de usuario de github a partir de su nombre de usuario. (https://api.github.com/users/{username}).

- [ ] 6.- Declara una función **printGithubUserProfile(username)** que reciba como argumento el nombre de un usuario (username), retorne {img, name} y pinte la foto y el nombre en el DOM.

- [ ] 7. Crea una función **getAndPrintGitHubUserProfile(username)** que contenga una petición a la API para obtener información de ese usuario y devuelva un string que represente una tarjeta HTML como en el ejemplo, la estructura debe ser exactamente la misma:

```html
<section>
    <img src="url de imagen" alt="imagen de usuario">
    <h1>Nombre de usuario</h1>
    <p>Public repos: (número de repos)</p>
</section>
```

- [ ] 8.- Manipulación del DOM: Crea un input de tipo texto, y un botón buscar. El usuario escribirá en el input el nombre de usuario de GitHub que quiera buscar. Después llamaremos a la función **getAndPrintGitHubUserProfile(username)** que se ejecute cuando se pulse el botón buscar.(Esto no se testea).


##### GitHub API (II)- Promesas, promesas y más promesas ###

- [ ] 9.- Dada una lista de usuarios de github guardada en una array,crea una funcion **fetchGithubUsers(userNames)** que utilice 'https://api.github.com/users/${name}' para obtener el nombre de cada usuario. \
Objetivo: Usar Promise.all()\
Recordatorio: Una llamada a fetch() devuelve un objeto promesa.\
Pregunta. ¿cuántas promesas tendremos?

Hasta que no se resuelvan todas las promesas desencadenadas por cada fetch(), no se cargarán los datos.

Pasos:

- Mapear el array y hacer un fetch() para cada usuario. Esto nos de vuelve un array lleno de promesas.
- Con Promise.all() harás que se tenga que resolver todo el proceso de peticiones a GitHub a la vez.
- Cuando Promise.all() haya terminado:
Consigue que se imprima por consola la url del repositorio de cada usuario.
Consigue que se imprima por consola el nombre de cada usuario.
