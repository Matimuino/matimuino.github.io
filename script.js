console.log("enlazado correctamente");
let boton = document.querySelector("#tema")
let body = document.querySelector("body")
let modoClaro = false;
boton.addEventListener("click", () =>{
if(modoClaro == false){
    modoClaro = true;
    body.style.backgroundColor = "white";
}else{
    modoOscuro = false;
    body.style.backgroundColor = "black";
}
})
