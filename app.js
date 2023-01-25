/*VARIABLES */

const textarea = document.querySelector('.textarea');
const btnEncriptar = document.querySelector('#encriptar');
const btnDesencriptar = document.querySelector('#desencriptar');

const mostrarResultado = document.querySelector('#mensaje');
const btnCopiar = document.querySelector('#copiar');

/**EVENTOS */
btnEncriptar.addEventListener('click', encriptar);
btnDesencriptar.addEventListener('click', desEncriptar);
btnCopiar.addEventListener('click', copiarTexto);

let textoEncriptado;

function encriptar() {
    let textoIngresado = textarea.value;

    if (textoIngresado.length > 0) {

        textoEncriptado = textoIngresado;

        if (textoEncriptado.includes('a')) {
            textoEncriptado = textoEncriptado.replaceAll('a', 'ai');

        }

        if (textoEncriptado.includes('e')) {
            textoEncriptado = textoEncriptado.replaceAll('e', 'enter');
        }

        if (textoEncriptado.includes('ai')) {
            textoEncriptado = textoEncriptado;
        } else {
            textoEncriptado = textoEncriptado.replaceAll('i', 'imes');
        }

        if (textoEncriptado.includes('o')) {
            textoEncriptado = textoEncriptado.replaceAll('o', 'ober');
        }

        if (textoEncriptado.includes('u')) {
            textoEncriptado = textoEncriptado.replaceAll('u', 'ufat');
        }
    }

    return mostrarMensaje(textoEncriptado);
}


function desEncriptar() {
    let textoIngresado = textarea.value;

    if (textoIngresado.length > 0) {

        textoEncriptado = textoIngresado;

        if (textoEncriptado.includes('ai')) {
            textoEncriptado = textoEncriptado.replaceAll('ai', 'a');
        }

        if (textoEncriptado.includes('enter')) {
            textoEncriptado = textoEncriptado.replaceAll('enter', 'e');
        }

        if (textoEncriptado.includes('imes')) {
            textoEncriptado = textoEncriptado.replaceAll('imes', 'i');
        }

        if (textoEncriptado.includes('ober')) {
            textoEncriptado = textoEncriptado.replaceAll('ober', 'o');
        }

        if (textoEncriptado.includes('ufat')) {
            textoEncriptado = textoEncriptado.replaceAll('ufat', 'u');
        }
    }

    return mostrarMensaje(textoEncriptado);
}


function mostrarMensaje(texto) {
    btnCopiar.classList.remove('no-visible');

    mostrarResultado.classList.add('mensaje-sin-img');
    mostrarResultado.textContent = texto;
}

function copiarTexto() {

    const copiado = document.querySelector('.copiado');

    try {
        navigator.clipboard.writeText(mostrarResultado.value);
        copiado.textContent = '¡Copiado!';
        btnCopiar.classList.add('no-visible');
        setTimeout(() => {
            copiado.remove();
        }, 3000);

    } catch (error) {
        console.log(error);
    }
}

























