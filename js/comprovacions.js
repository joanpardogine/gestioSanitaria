'use strict'

function comprovacioInicial() {
   const eleID_btnCheck = document.getElementById("btnCheck");
   if (!((`${eleID_divEspaiModal}` === "[object HTMLDivElement]") &&
      (`${eleID_barra_missatges}` === "[object HTMLDivElement]") &&
      (`${eleID_text_missatge}` === "[object HTMLDivElement]") &&
      (`${eleID_divHospital}` === "[object HTMLDivElement]") &&
      (`${eleID_divPacient}` === "[object HTMLDivElement]") &&
      (`${eleID_btnGestHospitals}` === "[object HTMLDivElement]") &&
      (`${eleID_btnGestPacients}` === "[object HTMLDivElement]") &&
      (`${eleID_btnGestMalalties}` === "[object HTMLDivElement]") &&
      (`${eleID_btnGestMetges}` === "[object HTMLDivElement]") &&
      (`${eleID_btnGestAplicacio}` === "[object HTMLDivElement]") &&
      (`${eleID_h2ResutltatFormControls}` === "[object HTMLDivElement]")
   )) {
      $(eleID_btnCheck).removeClass('btn-primary');
      $(eleID_btnCheck).addClass('btn-success');
      eleID_h2ResutltatFormControls.innerText = "Tot ok!"
   }
}


function mostraNotFound() {
   // console.log(document.getElementsByID("comprovacionsJs"));

   let ruta = document.getElementById("titolAplicacio").firstChild.baseURI;
   let nomIndexHTML = "index.html";
   let midaNom = nomIndexHTML.length;
   //http://127.0.0.1:5500/index.html
   //                     ^
   //                     \----\/---/
   //                  nomIndexHTML.length
   //http://127.0.0.1:5500/index.html
   //\---------------\/-------------/
   //         ruta.length = end
   //http://127.0.0.1:5500/index.html
   //                     ^
   //\--------\/----------/
   //       start
   // start = ruta.length - nomIndexHTML.length
   // end   = ruta.length
   //string.substring(start, end)
   let nomFitxer = ruta.substring(0, ruta.length - nomIndexHTML.length) + "404.html";




   //let finestraError404 = window.open(`"${nomFitxer}", "", "width=800,height=400"`);
   let finestraError404 = window.open("gestioSanitaria/404.html", "", "width=800,height=400");
   console.log(nomFitxer);
}
