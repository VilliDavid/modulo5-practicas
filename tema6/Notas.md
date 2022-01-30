Comandos en terminal

npm init -y
npm install webpack webpack-cli -D
// Tag -D indica que es solo de uso para el desarrollo
code .

// Se agregan index.html y src/index.js

Se crea una carpeta dist donde se guardarán los componentes empaquetados

// Para empaquetar se usa el comando npx webpack

Lo cual crea el paquete en el dist

Configuraciones WEBPACK
Generar un archivo webpack.config.js
 
 
const path = require('path');
module.export = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};

 Cargadores activos
 CSS: npm install -D style-loader css-loader
 CSV: npm install -D csv-loader
 JSON, YAML: npm install -D yamljs json5

 SASS: npm install -D sass-loader sass
 TYPESCRIPT: npm install -D typescript ts-loader

  Casos de uso Avanzado

 Aplicaciones Progresivas WEB
Una de los usos es que puedan funcionar sin conexiones a internet. Se usa el Service Pack.
Worbox es un conjunto de biblioteca para escribir y administrar Service Workers y su almacenamiento en caché con la API CacheStorage.

Workbox: npm install workbox-webpack-plugin -D

Pasos para usarlo:
1. Instalar el módulo necesario de trabajo.
2. Probar la aplicación usando un servidor web básico y visualizar que pasa si no esta funcionando..
3. Configurar Workbox dentro del archivo webpack.config.js.
4. Registrar el Service Worker.
5. Probar nuevamente la aplicación desconectando el servidor básico.

Instalar un servidor
    npm install http-server -D
Nuevo Script en package.json
    "start": "http-server dist"
