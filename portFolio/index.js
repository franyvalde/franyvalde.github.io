function Cambiar_Parrafo() {
    document.getElementById("edit-exp").style.display ="block";
    let texto = document.getElementById("texto_i").innerText;
    console.log(texto);
  };

function Definir_Texto(valor){
  document.getElementById("texto_i").innerText=valor;

}
function logMessage(message) {
  console.log(message + "<br>");
}
//controla si se preciona enter
let textarea = document.getElementById("edit-exp")
  textarea.addEventListener(`keyup`, (e) => {
    logMessage(`Key "${e.key}" released [event: keyup]`);
    if (e.key=="Enter") {
      document.getElementById("edit-exp").style.display="none"
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