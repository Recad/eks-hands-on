# Ejemplo de API con *Express.js* y cliente con *request-promise* en *Node.js*

Se pide:
Un API en Nodejs 8 usando Express, junto con sus test unitarios usando Chai & Supertest
Un cliente funcional del API usando Nodejs 8 y request-promise.

1. Programar un API en Nodejs, a la cual se le pase un texto y responda con el mismo texto.
2. Programar un script que consuma el API creada en el punto A, el cual se ejecute de la siguiente forma y muestre resultados: $ node client.js "example text"

## Crear imagen de docker a partir de docker file

1. Estando en la carpeta raiz de la aplicacion ejecutar el siguiente comando en el terminal.
   ```
    docker build -t <your username>/node-web-app .
   ```
2. Una vez creada la imagen debera aparecer en el listado ejecutando `docker image ls`.

## Ejecutar la puesta en marcha de una imagen

1. Teniendo el *nombre* o *id* de la imagen docker, ejecute el siguiente comando
    ```
    docker run -p 3000:3000 <image_name>
    ```
2. Debera aparecer en consola el siguiente mensaje `app running on port. 3000`.

## Realizar consultas a la *API*

1. Teniendo el servicio en marcha puede realizar consultas mediante peticiones GET y POST a la dirección
*http://localhost:3000/api*.
2. Al ejecutar el comando `curl -X GET 'http://localhost:3000/api`, obtendra un texto de verificacion de health check de la api, similar a
`Health Check Api`.
3. Al ejecutar el comando `curl -X GET 'http://localhost:3000/api/hans%20aparicio'`, obtendra el parametro que esta enviando
como respuesta, en este caso `hans aparicio`.
4. Al ejecutar el comando `curl -X POST 'http://localhost:3000/api' -H 'Content-Type: application/json' -d '{"text": "hans aparicio"}'`

## Realizar consultas a la *API* mediante cliente

1. Verificar que cuenta con la aplicacion node.js instalado mediante `node -v`, de lo contrario instalar.

2. Estando en el directorio raiz ejecutar el comando
    ```
    node client.js "<string>"
    ```
## Realizar prueba unitarias

1. Verificar que cuenta con la aplicacion mocha instalada mediante `mocha --version`, de lo contario instalar mediante el comando
`npm install -g mocha`
2. Estando en el directorio raiz ejecutar el comando `mocha`.