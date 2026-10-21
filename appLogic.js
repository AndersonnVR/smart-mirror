document.addEventListener("DOMContentLoaded", () => {
    // Referencias a los elementos del DOM
    const loadingBar = document.getElementById('loadingBar');
    const loadingPercentage = document.getElementById('loadingPercentage');
    const loadingText = document.getElementById('loadingText');
    const loadingScreen = document.getElementById('loadingScreen');
    const mainApp = document.getElementById('mainApp');
    const genderSelection = document.getElementById('genderSelection');
    const garmentSelection = document.getElementById('garmentSelection');
    const garmentGrid = document.getElementById('garmentGrid');
    const garmentCategoryTitle = document.getElementById('garmentCategoryTitle');

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
        
        // Mostramos la pantalla de seleccion de genero de la aplicación
        genderSelection.classList.remove('d-none');
        
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

    function loadGarments(gender) {
        // 1. Ocultar selección de género y mostrar el listado
        genderSelection.classList.add('d-none');
        garmentSelection.classList.remove('d-none');

        // 2. Actualizar título
        garmentCategoryTitle.textContent = `Prendas para ${gender}`;

        // 3. Limpiar grilla anterior
        garmentGrid.innerHTML = '';

        // 4. Obtener las prendas del catálogo (referenciando fabeliaCatalog del paso 1)
        const products = fabeliaCatalog[gender];

        // 5. Renderizar cada prenda
        products.forEach(product => {
            // Usamos el primer color por defecto para el thumbnail del catálogo
            const defaultColor = product.colors[0];

            const cardHTML = `
            <div class="col">
                <div class="card bg-transparent border-0 cursor-pointer h-100" onclick="openSmartMirrorView('${product.id}')">
                    <img src="${defaultColor.thumbnail}" class="card-img-top rounded shadow-sm" alt="${product.name}" style="height: 350px; object-fit: cover;">
                    <div class="card-body px-0 text-center">
                        <p class="small text-muted mb-1 text-uppercase">${product.brand}</p>
                        <h5 class="card-title text-white fw-regular">${product.name}</h5>
                        <p class="card-text fw-semibold" style="color: var(--fabelia-primary);">S/ ${product.currentPrice.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        `;
            garmentGrid.insertAdjacentHTML('beforeend', cardHTML);
        });
    }

    function goBackToGender() {
        garmentSelection.classList.add('d-none');
        genderSelection.classList.remove('d-none');
    }

    function openSmartMirrorView(productId) {
        // Aquí recibiremos el ID del producto clickeado.
        // El siguiente paso será buscar este ID en el catálogo y poblar 
        // la interfaz final de la imagen_8af6a8.png con sus datos, colores e imágenes.
        console.log("Prenda seleccionada para el Smart Mirror:", productId);
    }

});

