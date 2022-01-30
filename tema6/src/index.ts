import * as from 'lodash';

function componente () {
    const elemento  = document.createElement('div');
    elemento.innerHTML = _.join(['Hola', 'WebPack'], ' ');
    return elemento;
}

document.body.appendChild(componente());