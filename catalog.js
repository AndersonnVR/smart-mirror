const fabeliaCatalog = {
    mujer: [
        {
            id: "m_jean_wide_leg_01",
            brand: "Uclub",
            name: "Jean Wide Leg",
            currentPrice: 119.90,
            oldPrice: 139.90,
            // Detalles para la tabla de la imagen de referencia
            details: {
                modelo: "Jeans",
                tiro: "Wide leg",
                composicion: "100% algodón",
                bolsillos: "5 bolsillos",
                cierre: "Cierre y botón"
            },
            sizes: [26, 28, 30, 32, 34, 36, 38],
            // Manejo de múltiples colores y sus respectivas imágenes persistentes
            colors: [
                {
                    colorName: "Negro",
                    thumbnail: "./img/women/jeansWide/jeansWideNegro_1.jpg", // Para el listado
                    gallery: [
                        "./img/women/jeansWide/jeansWideNegro_2.jpg",
                        "./img/women/jeansWide/jeansWideNegro_3.jpg",
                        "./img/women/jeansWide/jeansWideNegro_4.jpg",
                        "./img/women/jeansWide/jeansWideNegro_5.jpg",
                        "./img/women/jeansWide/jeansWideNegro_6.jpg"
                    ]
                },
                {
                    colorName: "Celeste",
                    thumbnail: "./img/women/jeansWide/jeansWideCeleste_1.jpg",
                    gallery: [
                        "./img/women/jeansWide/jeansWideCeleste_2.jpg",
                        "./img/women/jeansWide/jeansWideCeleste_3.jpg",
                        "./img/women/jeansWide/jeansWideCeleste_4.jpg",
                        "./img/women/jeansWide/jeansWideCeleste_5.jpg",
                        "./img/women/jeansWide/jeansWideCeleste_6.jpg"
                    ]
                },
                {
                    colorName: "Crema",
                    thumbnail: "./img/women/jeansWide/jeansWideCrema_1.jpg",
                    gallery: [
                        "./img/women/jeansWide/jeansWideCrema_2.jpg",
                        "./img/women/jeansWide/jeansWideCrema_3.jpg",
                        "./img/women/jeansWide/jeansWideCrema_4.jpg",
                        "./img/women/jeansWide/jeansWideCrema_5.jpg",
                        "./img/women/jeansWide/jeansWideCrema_6.jpg"
                    ]
                }
            ]
        }
        // Puedes agregar más prendas de mujer aquí...
    ],
    hombre: [
        // Misma estructura para prendas de hombre...
    ]
};