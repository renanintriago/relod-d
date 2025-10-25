// Obtener referencias a los elementos del DOM
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let seg = document.getElementById("seg");

// Función que se ejecuta cada segundo
setInterval(() => {
    // Obtener la hora actual del sistema
    let tiempoActual = new Date();
    
    // Actualizar horas con formato de dos dígitos
    hrs.innerHTML = (tiempoActual.getHours() < 10 ? "0" : "") + tiempoActual.getHours();
    
    // Actualizar minutos con formato de dos dígitos
    min.innerHTML = (tiempoActual.getMinutes() < 10 ? "0" : "") + tiempoActual.getMinutes();
    
    // Actualizar segundos con formato de dos dígitos
    seg.innerHTML = (tiempoActual.getSeconds() < 10 ? "0" : "") + tiempoActual.getSeconds();
    
}, 1000); // Se ejecuta cada 1000 milisegundos (1 segundo)