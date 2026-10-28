document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById('loadingScreen');
    const genderSelection = document.getElementById('genderSelection');
    const garmentSelection = document.getElementById('garmentSelection');
    const selectedGarmentsScreen = document.getElementById('selectedGarmentsScreen');
    const mirrorAnimationScreen = document.getElementById('mirrorAnimationScreen');
    const mainApp = document.getElementById('mainApp');

    const loadingBar = document.getElementById('loadingBar');
    const loadingPercentage = document.getElementById('loadingPercentage');
    const loadingText = document.getElementById('loadingText');
    const garmentGrid = document.getElementById('garmentGrid');
    const garmentCategoryTitle = document.getElementById('garmentCategoryTitle');
    const selectedGarmentsGrid = document.getElementById('selectedGarmentsGrid');
    const confirmModalEl = document.getElementById('confirmModal');
    const confirmModal = new bootstrap.Modal(confirmModalEl);
    const successModalEl = document.getElementById('successModal');
    const successModal = new bootstrap.Modal(successModalEl);

    let currentSelectedProduct = null;
    let currentGender = null;
    let fittingRoomGarments = [];
    let progress = 0;

    function switchScreen(oldScreen, newScreen) {
        oldScreen.classList.add('hidden-fade');
        setTimeout(() => {
            oldScreen.classList.add('d-none');
            newScreen.classList.remove('d-none');
            void newScreen.offsetWidth;
            newScreen.classList.remove('hidden-fade');
        }, 400);
    }

    const loadingMessages = [
        "Inicializando sistema...", "Cargando texturas 3D...",
        "Sincronizando catálogo de tienda...", "Calibrando espejos virtuales...", "Iniciando interfaz..."
    ];

    function finishLoading() {
        switchScreen(loadingScreen, genderSelection);
    }

    const loadInterval = setInterval(() => {
        progress += 1;
        loadingBar.style.width = `${progress}%`;
        loadingPercentage.textContent = `${progress}%`;

        if (progress === 20) loadingText.textContent = loadingMessages[1];
        if (progress === 40) loadingText.textContent = loadingMessages[2];
        if (progress === 60) loadingText.textContent = loadingMessages[3];
        if (progress === 85) loadingText.textContent = loadingMessages[4];

        if (progress >= 100) {
            clearInterval(loadInterval);
            finishLoading();
        }
    }, 20);

    window.loadGarments = function (gender) {
        currentGender = gender;
        garmentCategoryTitle.textContent = `Prendas para ${gender}`;
        garmentGrid.innerHTML = '';

        const products = fabeliaCatalog[gender];
        products.forEach(product => {
            const defaultColor = product.colors[0];
            const cardHTML = `
            <div class="col">
                <div class="card bg-transparent border-0 cursor-pointer h-100 active-scale" onclick="openSmartMirrorView('${product.id}')">
                    <img src="${defaultColor.thumbnail}" class="card-img-top rounded shadow-sm" alt="${product.name}" style="height: 350px; object-fit: cover; border: 1px solid #444;">
                    <div class="card-body px-0 text-center">
                        <p class="small text-muted mb-1 text-uppercase tracking-wider">${product.brand}</p>
                        <h5 class="card-title text-white fw-regular">${product.name}</h5>
                        <p class="card-text fw-semibold fs-5 text-white">S/ ${product.currentPrice.toFixed(2)}</p>
                    </div>
                </div>
            </div>
            `;
            garmentGrid.insertAdjacentHTML('beforeend', cardHTML);
        });

        switchScreen(genderSelection, garmentSelection);
    }

    window.goBackToGender = function () {
        switchScreen(garmentSelection, genderSelection);
    }

    function getProductById(id) {
        let prod = fabeliaCatalog.mujer.find(p => p.id === id);
        if (prod) return prod;
        return fabeliaCatalog.hombre.find(p => p.id === id);
    }

    window.openSmartMirrorView = function (productId) {
        const product = getProductById(productId);
        currentSelectedProduct = product;
        document.getElementById('modalGarmentImg').src = product.colors[0].thumbnail;
        document.getElementById('modalGarmentName').textContent = product.name;
        confirmModal.show();
    }

    window.confirmGarment = function () {
        confirmModal.hide();
        if (currentSelectedProduct && !fittingRoomGarments.find(p => p.id === currentSelectedProduct.id)) {
            fittingRoomGarments.push(currentSelectedProduct);
        }
        showSelectedGarments();
    }

    function showSelectedGarments() {
        selectedGarmentsGrid.innerHTML = '';
        fittingRoomGarments.forEach(product => {
            const html = `
                <div class="card bg-transparent border-0 cursor-pointer active-scale" style="width: 280px;" onclick="startMirrorAnimation('${product.id}')">
                    <div class="position-relative">
                        <img src="${product.colors[0].thumbnail}" class="card-img-top rounded shadow" style="height: 400px; object-fit: cover; border: 2px solid var(--fabelia-secondary);">
                        <div class="position-absolute bottom-0 w-100 p-3 bg-dark bg-opacity-75 text-center" style="backdrop-filter: blur(5px);">
                            <span class="text-white small fw-semibold text-uppercase tracking-wider">Tocar para probar</span>
                        </div>
                    </div>
                    <div class="card-body px-0 text-center mt-2">
                        <p class="small text-muted mb-0 text-uppercase">${product.brand}</p>
                        <h5 class="text-white fw-regular">${product.name}</h5>
                    </div>
                </div>
            `;
            selectedGarmentsGrid.insertAdjacentHTML('beforeend', html);
        });
        switchScreen(garmentSelection, selectedGarmentsScreen);
    }

    window.startMirrorAnimation = function (productId) {
        switchScreen(selectedGarmentsScreen, mirrorAnimationScreen);

        setTimeout(() => {
            const glow = document.getElementById('mirrorGlow');
            glow.classList.add('animate-mirror');

            setTimeout(() => {
                mirrorAnimationScreen.style.backgroundColor = '#000000';
                glow.style.display = 'none';

                loadMainSmartMirrorUI(productId);

                setTimeout(() => {
                    switchScreen(mirrorAnimationScreen, mainApp);
                }, 800);
            }, 2200);
        }, 500);
    }

    window.exitSmartMirror = function () {
        switchScreen(mainApp, garmentSelection);
    }

    window.requestGarment = function () {
        successModal.show();
    }

    // --- LÓGICA DE ILUMINACIÓN DEL ESPEJO ---
    window.toggleLightMenu = function () {
        const menu = document.getElementById('lightOptionsMenu');
        if (menu.classList.contains('d-none')) {
            menu.classList.remove('d-none');
            menu.classList.add('d-flex', 'fade-in-menu');
        } else {
            menu.classList.add('d-none');
            menu.classList.remove('d-flex', 'fade-in-menu');
        }
    }

    window.setLightMode = function (modeClass, btnEl) {
        // Reiniciar botones
        document.querySelectorAll('.light-mode-btn').forEach(btn => {
            btn.classList.remove('bg-white', 'text-dark', 'fw-semibold');
            btn.classList.add('text-white', 'border-white', 'border');
        });
        // Activar botón seleccionado
        btnEl.classList.remove('text-white', 'border-white', 'border');
        btnEl.classList.add('bg-white', 'text-dark', 'fw-semibold');

        // Cambiar modo en el cristal aplicando la clase CSS respectiva
        const glass = document.getElementById('mirrorGlass');
        glass.className = `mirror-glass w-100 h-100 position-relative text-white overflow-hidden d-flex flex-column ${modeClass}`;

        // Auto-cerrar el menú tras una pequeña pausa para confirmar selección visualmente
        setTimeout(() => {
            const menu = document.getElementById('lightOptionsMenu');
            if (menu && !menu.classList.contains('d-none')) {
                menu.classList.add('d-none');
                menu.classList.remove('d-flex', 'fade-in-menu');
            }
        }, 350);
    }

    function loadMainSmartMirrorUI(productId) {
        const product = getProductById(productId);
        if (!product) return;

        currentSelectedProduct = product;

        document.getElementById('mainBrand').textContent = product.brand;
        document.getElementById('mainTitle').textContent = product.name;
        document.getElementById('mainPrice').textContent = `S/ ${product.currentPrice.toFixed(2)}`;
        document.getElementById('mainOldPrice').textContent = `S/ ${product.oldPrice.toFixed(2)}`;
        document.getElementById('mainDesc').textContent = product.description;

        const specsBody = document.getElementById('mainSpecs');
        specsBody.innerHTML = '';
        for (const [key, value] of Object.entries(product.details)) {
            specsBody.insertAdjacentHTML('beforeend', `
                <tr>
                    <td class="text-white fw-semibold text-capitalize w-25 pb-1">${key}</td>
                    <td class="pb-1">${value}</td>
                </tr>
            `);
        }

        const sizesContainer = document.getElementById('mainSizes');
        sizesContainer.innerHTML = '';
        product.sizes.forEach((size, idx) => {
            const activeClass = idx === 2 ? 'active' : '';
            sizesContainer.insertAdjacentHTML('beforeend', `<div class="size-btn ${activeClass} cursor-pointer active-scale" onclick="activateSize(this)">${size}</div>`);
        });

        const colorsContainer = document.getElementById('mainColors');
        colorsContainer.innerHTML = '';
        product.colors.forEach((color, idx) => {
            const activeClass = idx === 0 ? 'active' : '';

            let hex = color.hexCode;
            if (!hex) {
                const cName = color.colorName.toLowerCase();
                if (cName.includes('negro')) hex = '#181818';
                else if (cName.includes('blanco') || cName.includes('hueso')) hex = '#FDFDFD';
                else if (cName.includes('crema') || cName.includes('marfil')) hex = '#F5F5DC';
                else if (cName.includes('azul')) hex = '#174DA3';
                else if (cName.includes('celeste')) hex = '#A4C8E1';
                else if (cName.includes('rojo')) hex = '#B0192A';
                else if (cName.includes('vino') || cName.includes('guinda')) hex = '#58111A';
                else if (cName.includes('melon') || cName.includes('melón')) hex = '#FFCBA4';
                else if (cName.includes('mostaza')) hex = '#E5A93D';
                else if (cName.includes('marron') || cName.includes('marrón')) hex = '#5C4033';
                else if (cName.includes('verde')) hex = '#2E4734';
                else if (cName.includes('gris')) hex = '#7D7D7D';
                else hex = '#AAAAAA';
            }

            colorsContainer.insertAdjacentHTML('beforeend', `
                <div class="color-swatch ${activeClass} cursor-pointer active-scale shadow-sm" style="background-color: ${hex};" onclick="changeMainColor(${idx}, '${color.colorName}', this)"></div>
            `);
        });

        loadProductImages(product, 0);
        document.getElementById('mainColorName').textContent = product.colors[0].colorName;

        loadCrossSelling(currentGender || 'mujer', productId);

        currentSlide = 0;
        updateSwipe();
    }

    window.loadProductImages = function (product, colorIndex) {
        const gallery = product.colors[colorIndex].gallery;
        document.getElementById('mainProductImg').src = gallery[0];

        const thumbsContainer = document.getElementById('mainThumbnails');
        thumbsContainer.innerHTML = '';
        gallery.forEach((imgSrc, idx) => {
            const activeClass = idx === 0 ? 'active' : '';
            thumbsContainer.insertAdjacentHTML('beforeend', `
                <img src="${imgSrc}" class="thumbnail-img rounded ${activeClass} cursor-pointer active-scale" onclick="setMainImage('${imgSrc}', this)">
            `);
        });
    }

    window.setMainImage = function (src, el) {
        document.getElementById('mainProductImg').src = src;
        document.querySelectorAll('.thumbnail-img').forEach(img => img.classList.remove('active'));
        el.classList.add('active');
    }

    window.changeMainColor = function (colorIndex, colorName, el) {
        document.getElementById('mainColorName').textContent = colorName;
        document.querySelectorAll('.color-swatch').forEach(sw => sw.classList.remove('active'));
        el.classList.add('active');
        loadProductImages(currentSelectedProduct, colorIndex);
    }

    window.activateSize = function (el) {
        document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
        el.classList.add('active');
    }

    window.scrollThumbs = function (direction) {
        const container = document.getElementById('mainThumbnails');
        container.scrollBy({ top: direction * 80, behavior: 'smooth' });
    }

    function loadCrossSelling(gender, excludeId) {
        const grid = document.getElementById('crossSellingGrid');
        grid.innerHTML = '';

        let items = fabeliaCatalog[gender].filter(p => p.id !== excludeId);
        items = items.sort(() => 0.5 - Math.random()).slice(0, 3);

        items.forEach(item => {
            grid.insertAdjacentHTML('beforeend', `
                <div class="text-center cursor-pointer active-scale" style="width: 120px;" onclick="switchFromCrossSelling('${item.id}')">
                    <img src="${item.colors[0].thumbnail}" class="rounded shadow-sm mb-2" style="width: 100%; height: 120px; object-fit: cover; object-position: top; border: 1px solid rgba(255,255,255,0.2);">
                    <p class="small text-white m-0 fw-semibold tracking-wider text-truncate" style="font-size: 0.8rem;">${item.name}</p>
                    <p class="small text-white m-0" style="font-size: 0.8rem;">S/ ${item.currentPrice.toFixed(2)}</p>
                </div>
            `);
        });
    }

    window.switchFromCrossSelling = function (newId) {
        loadMainSmartMirrorUI(newId);
    }

    // --- LÓGICA DE SWIPE TÁCTIL ---
    const swipeContainer = document.getElementById('swipeContainer');
    const swipeWrapper = document.getElementById('swipeWrapper');
    const swipeDots = document.querySelectorAll('.swipe-dot');

    let startX = 0;
    let currentSlide = 0;
    let isDragging = false;

    swipeContainer.style.userSelect = 'none';
    swipeContainer.style.webkitUserSelect = 'none';
    swipeContainer.style.touchAction = 'pan-y';
    swipeContainer.addEventListener('dragstart', (e) => e.preventDefault());

    const dragStart = (e) => {
        isDragging = true;
        startX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    };

    const dragEnd = (e) => {
        if (!isDragging) return;
        isDragging = false;

        // Corrección del orden de las coordenadas (mouse vs táctil)
        let endX = e.type.includes('mouse') ? e.pageX : e.changedTouches[0].clientX;
        let diffX = startX - endX;

        if (diffX > 40) {
            currentSlide = 1;
        } else if (diffX < -40) {
            currentSlide = 0;
        }
        updateSwipe();
    };

    swipeContainer.addEventListener('touchstart', dragStart, { passive: true });
    swipeContainer.addEventListener('touchend', dragEnd, { passive: true });
    swipeContainer.addEventListener('touchcancel', dragEnd, { passive: true });

    swipeContainer.addEventListener('mousedown', dragStart);
    swipeContainer.addEventListener('mouseup', dragEnd);
    swipeContainer.addEventListener('mouseleave', dragEnd);

    function updateSwipe() {
        swipeWrapper.style.transform = `translateX(-${currentSlide * 50}%)`;
        swipeDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // --- LÓGICA DE AUDIO GLOBAL (WEB AUDIO API) ---
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    function playClickSound() {
        // Reanudar contexto si el navegador lo suspende por políticas de autoplay
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        // Configuración de un tono corto, suave y futurista (Bloop)
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.1);

        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime); // Volumen bajo para no saturar
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1); // Fade-out de 100ms

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.1);
    }

    // Delegación global: intercepta todos los toques en la tablet
    document.addEventListener('click', (e) => {
        // Verifica si el elemento tocado tiene clases interactivas
        const isInteractive = e.target.closest('button, .cursor-pointer, .active-scale, .gender-card');
        if (isInteractive) {
            playClickSound();
        }
    });

});
