const textAreaUno = document.querySelector(".textArea1");
const textAreaDos = document.querySelector(".textArea2");

function btnEncriptar() {
  const textoEncriptado = encriptar(textAreaUno.value);
  textAreaDos.value = textoEncriptado;
  textAreaUno.value = "";
  textAreaDos.style.backgroundImage = "none";
}

function encriptar(texto) {
  let key = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
  ];
  
  texto = texto.toLowerCase();
  
  for (let i = 0; i < key.length; i++) {
    if (texto.includes(key[i][0])) {
      texto = texto.replaceAll(key[i][0], key[i][1]);
    }
  }
  
  return texto;
}

function btnDeseencriptar() {
  const textoDesencriptado = desencriptar(textAreaDos.value);
  textAreaUno.value = textoDesencriptado;
  textAreaDos.value = "";
  textAreaDos.style.backgroundImage = "";
  
}


function desencriptar(textoKey) {
  let key = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
  ];
  
  textoKey = textoKey.toLowerCase();
  
  for (let i = 0; i < key.length; i++) {
    if (textoKey.includes(key[i][1])) {
      textoKey = textoKey.replaceAll(key[i][1], key[i][0]);
    }
  }
  
  return textoKey;
}


function borrarTextAreaUno() {
  textAreaUno.value = "";
}

function copiarTexto() {
  var contenido = document.getElementById("textArea-2").value;
  navigator.clipboard.writeText(contenido)
 
}

