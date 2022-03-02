

let boton = document.querySelector(".button");

boton.addEventListener("click", reiniciarGrid);





function crearCuadricula(tam){ //hasta 64
    let grid = document.querySelector(".cuadricula");
    for(let i=0; i<tam; i++){ //controla las filas
        let fila = document.createElement("div");
        fila.setAttribute("class","fila");
        grid.appendChild(fila);
        for(let j=0; j<tam; j++){ //cantidad de columnas
            let columna = document.createElement("div");
            columna.setAttribute("class","columna");
            fila.appendChild(columna);
        }
    }
    let columnas = document.querySelectorAll(".columna");
    let changeColor = document.querySelector("#colorpicker");
    let color = "";

    changeColor.addEventListener("input",function(e){
        color = e.target.value;
    });

    columnas.forEach(element => {
        element.addEventListener("mouseover",function(e){
            e.target.style.backgroundColor = color;
            
        });
    });

    
}

function reiniciarGrid(){
    let filas = document.querySelectorAll(".fila");
    let columnas = document.querySelectorAll(".columna");
    let grid = document.querySelector(".cuadricula");
    
    filas.forEach(function(elemento){
        grid.removeChild(elemento);
    });

    

}



//slider functionality
var slider = document.querySelector("#slider");
var output = document.querySelector("#sliderSize");
output.innerHTML = slider.value;
slider.addEventListener("input",function(e){
    reiniciarGrid();
    output.innerHTML = e.target.value;
    crearCuadricula(e.target.value);
});



