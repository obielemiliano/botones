function cambiarColor() {
    const elemento = document.getElementById("elemento");
    const colores = ["#4CAF50", "#FF5733", "#3498DB", "#9B59B6"];
    const colorActual = elemento.style.backgroundColor;
    let nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    
    // Asegura que el color cambie
    while (nuevoColor === colorActual) {
      nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    }
    
    elemento.style.backgroundColor = nuevoColor;
  }
  
  function cambiarTamaño() {
    const imagen = document.getElementById("imagen");
    if (imagen.style.width === "150px") {
      imagen.style.width = "250px";
    } else {
      imagen.style.width = "150px";
    }
  }
  