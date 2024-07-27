const texto = document.getElementById('ingreso_texto');
const imagen = document.getElementById('muneco');
const resultado = document.getElementById('rectangulo_textos');
const copiar = document.getElementById('Copiar');
const error = document.getElementById('error');
const acentos = /[ÁÉÍÓÚÜáéíóúü]/;

const encriptacion = texto => {
    return texto
        .replace(/a/g, "alpha")
        .replace(/e/g, "echo")
        .replace(/i/g, "india")
        .replace(/o/g, "oscar")
        .replace(/u/g, "uniform");
}

const desencriptacion = texto => {
    return texto
        .replace(/alpha/g, "a")
        .replace(/echo/g, "e")
        .replace(/india/g, "i")
        .replace(/oscar/g, "o")
        .replace(/uniform/g, "u");
}

let textoFinal = '';

function verAcentos(texto) {
    let resultado = acentos.test(texto);
    if (resultado) {
        error.removeAttribute('hidden');
        sinTextos.setAttribute('hidden', true);
        muneco.setAttribute('hidden', true);
    } else {
        error.setAttribute('hidden', true);
    }
    return resultado;
}

function encriptar_funcion() {
    textoFinal = '';
    let textoInicial = texto.value.toLowerCase();
    let acento = verAcentos(textoInicial);
    if (textoInicial.trim() === '') {
        window.location.reload();
    } else if (!acento) {
        textoFinal = encriptacion(textoInicial);
        imagen.classList.add("ocultarImagen");
        copiar.removeAttribute('hidden');
        resultado.innerHTML = `<p>${textoFinal}</p>`;
    }
}

function desencriptar_funcion() {
    textoFinal = '';
    let textoInicial = texto.value.toLowerCase();
    let acento = verAcentos(textoInicial);
    if (textoInicial.trim() === '') {
        resultado.innerHTML = '<p class="ningun_mensaje">Ningún mensaje fue encontrado</p><p class="ingresa_mensaje">Ingresa el texto que desees encriptar o desencriptar</p>';
    } else if (!acento) {
        textoFinal = desencriptacion(textoInicial);
        imagen.classList.add("ocultarImagen");
        resultado.innerHTML = `<p>${textoFinal}</p>`;
        copiar.removeAttribute('hidden');
    }
}

copiar.addEventListener('click', () => {
    navigator.clipboard.writeText(textoFinal).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
});