# Benilaser - Sitio web (servidor)
<img src="./public/logo-black.png" width="100%"/>

## Tabla de contenidos
- [Descripción del proyecto y objetivo](#descripción-del-proyecto-y-objetivo)
- [Tecnologías](#tecnologías)
- [Despliegue](#despliegue)
- [Instrucciones de uso](#instrucciones-de-uso)
- [Variables de entorno](#variables-de-entorno)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Contribución](#contribución)
- [Licencia](#licencia)
- [Contacto](#contacto)
- [Agradecimientos](#agradecimientos)

## Descripción del proyecto y objetivo

Este proyecto consiste en el desarrollo de un pequeño servidor intermedio para la página web de [Benilaser](https://www.benilaser.es), una clínica especializada en eliminación con láser ubicada en Benidorm, Alicante, España. El desarrollo de este proyecto se realizó con el objetivo de complementar al [proyecto cliente](https://github.com/Gaston-Valentini/benilaser-client), ya que fué necesario configurar un servidor intermedio para hacer las peticiones de las reseñas a la API de Google y que este servidor a su vez envíe la información al cliente, y así evitar poroblemas de CORS.

## Tecnologías

-  <img src="./public/node.png" style="height: 15px"/> **Node:** Se utilizó como entorno de desarrollo.
-  <img src="./public/javascript.png" style="height: 15px"/> **JavaScript:** Se utilizó como lenguaje de programación.
-  <img src="./public/express.png" style="height: 15px"/> **Express:** Se utilizó como freamwork para facilitar el desarrollo del servidor.
-  <img src="./public/npm.png" style="height: 15px"/> **Npm:** Se utilizó para la incorporación de librerías como express, helmet, morgan, etc.
-  <img src="./public/vercel.png" style="height: 15px"/> **Vercel:** Se utilizó para el despligue de la aplicación.

## Despliegue

Este proyecto ha sido desplegado en mediante el servicio gratuito de [Vercel](https://vercel.com/).

## Instrucciones de uso

Para correr este servicio de manera local deberá seguir los siguientes pasos:

1. Clone este repositorio en tu máquina local con el comando:
    ````bash
    git clone https://github.com/Gaston-Valentini/benilaser-server.git
    ````
2. En la carpeta que se generó el proyecto, instale las dependencias con el comando:
    ````bash
    npm install
    ````
3. Cree un archivo .env en la raíz del proyecto y configurar las variables de entorno como se ejemplifica en el archivo .env.example.
4. Para desplegar el proyecto de manera local, deberá ejecutar el comando:
    ````bash
    npm run dev
    ````
5. Ya puede hacer las peticiones a la dirección localhost en el puerto configurado.

## Variables de entorno

- PORT (Puerto en el que escuchará el servidor)
- GOOGLE_API_KEY (Clave API del servicio de Google Maps)
- PLACE_ID (Place ID del local en Google Maps)

## Estructura del proyecto

````
benilaser-client/
├── public/ (Contiene las imágenes del README.md)
├── .env.example (Contiene los ejemplos de las variables de entorno)
├── .gitignore (Contiene los archivos y carpetas que deben ser ignorados por git)
├── index.js (Archivo principal que ejecutará la aplicación)
├── LICENSE (Contiene toda la información pertinente a la licencia del proyecto)
├── package-lock.json (Asegura la instalación consistente y reproducible de las versione exactas de las dependencias del proyecto)
├── package.json (Define las configuraciones básicas, metadatos y dependencias necesarias del proyecto)
├── README.md (Contiene una guía detallada del proyecto)
└── vercel.json (Define las configuraciones para que el proyecto pueda ser desplegado correctamente en Vercel)
````

## Contribución

¡Tus contribuciones son bienvenidas! Si deseas informar de problemas, proponer mejoras o enviar solicitudes no dudes en hacérmelo saber a través de mi [LinkedIn](https://www.linkedin.com/in/gastonvalentini/)

## Licencia

Este proyecto está bajo la licencia de Creative Commons Attribution-NonCommercial-NoDerivatives (CC BY-NC-ND).

## Contacto

Para preguntas o colaboraciones, puedes contactarme a través de mis redes:

-   [LinkedIn](https://www.linkedin.com/in/gastonvalentini/)
-   [GitHub](https://github.com/Gaston-Valentini)
-   [gastonvalentiniruiz@gmail.com](mailto:gastonvalentiniruiz@gmail.com)
-   [+34623271806](tel:+34623271806)

## Agradecimientos

Me gustaría agradecer a todo el equipo de Benilaser por hacer posible esta colaboración.

[Volver al inicio](#benilaser---sitio-web-servidor)