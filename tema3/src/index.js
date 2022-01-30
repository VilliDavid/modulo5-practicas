import _ from 'lodash';
import './estilos.css';
import Imagen from './19.jpg';
import Datos from './datos.csv';
import yaml from './datos.yaml';
import json5 from './datos.json5';

function componente() {
    const elemento = document.createElement('div');
    // loadash
    elemento.innerHTML = _.join(['Hola', Datos[0][1]],' ');
    // Agrega estilos
    elemento.classList.add('hola');
    //Agregar Imagen
    const miImagen = new Image();
    miImagen.src = Imagen;
    elemento.appendChild(miImagen);
    // Manejo de Datos CSV
    console.log(Datos);
    return elemento;
}

// Manejo de Datos Yaml
console.log(yaml.title);
// Manejo de Datos Json5
console.log(json5.owner.name)
// Manda llamar la creación de componente
document.body.appendChild(componente());