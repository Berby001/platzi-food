# platzi-food

Proyecto para aprender Tailwind css en Platzi con el Curso de Tailwind CSS 1

## Instalación
La instalación será manual y desde el inicio.

```bash
# Dentro de la carpeta donde se realizará el proyecto
npm init
# Para instalar las dependencias a ser utilizadas
npm install tailwindcss autoprefixer postcss-cli

# Ya se cuenta con las dependencias, ahora se deberán de activar las configuraciones necesarias para su uso.
# Para iniciar tailwind
npx tailwindcss init
# Respuesta: Created Tailwind CSS config file: tailwind.config.js

# para crear por comandos el archivo de configuración de postcss
touch postcss.config.js

```

> Si el editor utilizado es Visual Studio Code, se recomienda contar con la extensión [tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

***

## Utilidades
Para contar con un servidor web de pruebas y no estar refrescando el archivo en cada cambio, se puede instalar live server de la siguiente manera:
```bash
# Instalación global
npm install -g live-server

# Para utilizarlo desplegando lo contenido en la carpeta public:
live-server public 
```
***Nota:*** Si se requiere tener la configuración por defecto y completa de tailwind se puede ejecutar el siguiente comando:
```bash
npx tailwindcss init tailwind.config.full.js --full
```


***
## Ejecución
Para ejecutar o compilar lo realizado en css/tailwind.css, se debe de crear un comando en package.json, de la siguiente manera:

```json
... 
"scripts": {
    "build": "postcss css/tailwind.css -o public/css/styles.css"
  },
...
```
y ejecutarlo desde lína de comandos con el siguiente comando:
```bash
npm run build
```