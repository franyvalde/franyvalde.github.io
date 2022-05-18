//titulo
function Cambiar_Parrafo() {
    document.getElementById("edit-titulo").style.display ="block";
    let texto = document.getElementById("titulo").innerText;
    console.log(texto);
  };

function Definir_Texto(valor){
  document.getElementById("titulo").innerText=valor;

}
function logMessage(message) {
  console.log(message + "<br>");
}
//controla si se preciona enter
let textarea = document.getElementById("edit-titulo")
  textarea.addEventListener(`keyup`, (e) => {
    logMessage(`Key "${e.key}" released [event: keyup]`);
    if (e.key=="Enter") {
      document.getElementById("edit-titulo").style.display="none"
    }
  });


//exp
function Cambiar_Parrafo2() {
    document.getElementById("edit-exp").style.display ="block";
    let texto = document.getElementById("exp").innerText;
    console.log(texto);
  };

function Definir_Texto2(valor){
  document.getElementById("exp").innerText=valor;

}

//controla si se preciona enter
let textarea2 = document.getElementById("edit-exp")
  textarea2.addEventListener(`keyup`, (e) => {
    logMessage(`Key "${e.key}" released [event: keyup]`);
    if (e.key=="Enter") {
      document.getElementById("edit-exp").style.display="none"
    }
  });

//edu
function Cambiar_Parrafo3() {
  document.getElementById("edit-edu").style.display ="block";
  let texto = document.getElementById("edu").innerText;
  console.log(texto);
};

function Definir_Texto3(valor){
document.getElementById("edu").innerText=valor;

}
//controla si se preciona enter
let textarea3 = document.getElementById("edit-edu")
textarea3.addEventListener(`keyup`, (e) => {
  logMessage(`Key "${e.key}" released [event: keyup]`);
  if (e.key=="Enter") {
    document.getElementById("edit-edu").style.display="none"
  }
});

//hys
function Cambiar_Parrafo4() {
  document.getElementById("edit-hys").style.display ="block";
  let texto = document.getElementById("hys").innerText;
  console.log(texto);
};

function Definir_Texto4(valor){
document.getElementById("hys").innerText=valor;

}
//controla si se preciona enter
let textarea4 = document.getElementById("edit-hys")
textarea4.addEventListener(`keyup`, (e) => {
  logMessage(`Key "${e.key}" released [event: keyup]`);
  if (e.key=="Enter") {
    document.getElementById("edit-hys").style.display="none"
  }
});

//carga el contenido de un archivo de texto
//y llo muestra en el parrafo
function showFile(input){
  let file= input.files[0];
  alert(`File name: ${file.name}`);
  alert(`Last modified: ${file.lastModified}`);

  let reader = new FileReader();
  rader.readAsText(file);
  reader.onload =function(){
    console.log(reader.result);
    document.getElementById("texto_i").innertext=reader.result;
  };
  reader.onerror = function(){
    console.log(reader.error);
  };

}