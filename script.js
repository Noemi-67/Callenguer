const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const inicio = document.querySelector(".inicio");
const final = document.querySelector(".final");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar() {
    const textoEncriptado = encriptar(textarea.value)
    mensaje.value = textoEncriptado
    textarea.value = "";
    inicio.style.display = "none"
    final.style.display = "flex"
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++)
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    return stringEncriptada
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textarea.value)
    mensaje.value = textoEncriptado
    textarea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0],)
        }
    }
    return stringDesencriptada
}



function copiar() {
    navigator.clipboard.writeText(mensaje.value)
}



