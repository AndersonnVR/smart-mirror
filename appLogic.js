document.addEventListener("DOMContentLoaded", () => {
    // Referencias a los elementos del DOM
    const loadingBar = document.getElementById('loadingBar');
    const loadingPercentage = document.getElementById('loadingPercentage');
    const loadingText = document.getElementById('loadingText');
    const loadingScreen = document.getElementById('loadingScreen');
    const mainApp = document.getElementById('mainApp');

    let progress = 0;

    // Textos dinámicos para simular carga compleja
    const loadingMessages = [
        "Inicializando sistema...",
        "Cargando texturas 3D...",
        "Sincronizando catálogo de tienda...",
        "Calibrando espejos virtuales...",
        "Iniciando interfaz..."
    ];

    function finishLoading() {
    // Añadimos la clase CSS que hace el fundido a transparente
    loadingScreen.classList.add('fade-out-screen');

    // Esperamos 1 segundo (lo que dura la animación CSS) para quitarlo del DOM
    setTimeout(() => {
        loadingScreen.classList.add('d-none');
        loadingScreen.classList.remove('d-flex');
        
        // Mostramos la pantalla principal de la aplicación
        mainApp.classList.remove('d-none');
        
        // Aquí activaremos el modo Pantalla Completa automático (FullScreen API)
        // Nota: Los navegadores piden que el FullScreen sea iniciado por un click del usuario,
        // por lo que usualmente agregamos un botón de "Comenzar" en la siguiente pantalla.
    }, 1000); 
}

    // Función que se ejecuta cada 40 milisegundos
    const loadInterval = setInterval(() => {
        progress += 1; // Aumentamos 1%
        
        // Actualizamos la barra y el texto del porcentaje
        loadingBar.style.width = `${progress}%`;
        loadingPercentage.textContent = `${progress}%`;

        // Cambiamos el texto de carga dependiendo del progreso
        if (progress === 20) loadingText.textContent = loadingMessages[1];
        if (progress === 40) loadingText.textContent = loadingMessages[2];
        if (progress === 60) loadingText.textContent = loadingMessages[3];
        if (progress === 85) loadingText.textContent = loadingMessages[4];

        // Cuando llega a 100%, detenemos el intervalo e iniciamos la transición
        if (progress >= 100) {
            clearInterval(loadInterval);
            finishLoading();
        }
    }, 40); // 40ms * 100 = 4 segundos de carga total aproximada
});

