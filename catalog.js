const fabeliaCatalog = {
    mujer: [
        {
            id: "m_jean_wide_leg",
            brand: "Uclub",
            name: "Jean Wide Leg",
            currentPrice: 119.90,
            oldPrice: 139.90,
            description: "El equilibrio perfecto entre comodidad y sofisticación clásica. Este jean de corte Wide Leg y tiro extra alto ha sido confeccionado en denim rígido de estructura prémium con un lavado azul índigo profundo. Diseñado para estilizar la silueta y alargar visualmente las piernas, destaca por sus costuras en contraste color tabaco y botón metálico grabado en acabado dorado envejecido. Combínalo con tops ajustados o camisas por dentro para un look moderno de inspiración sartorial.",
            // Detalles para la tabla de la imagen de referencia
            details: {
                modelo: "Jeans",
                tiro: "Wide leg",
                composicion: "100% algodón",
                bolsillos: "5 bolsillos",
                cierre: "Cierre y botón"
            },
            sizes: ["26", "28", "30", "32", "34", "36", "38"],
            // Manejo de múltiples colores y sus respectivas imágenes persistentes
            colors: [
                {
                    colorName: "Negro",
                    thumbnail: "./img/women/jeansWide/jeansWideNegro_tmb.jpg", // Para el listado
                    gallery: [
                        "./img/women/jeansWide/jeansWideNegro_1.jpg",
                        "./img/women/jeansWide/jeansWideNegro_2.jpg",
                        "./img/women/jeansWide/jeansWideNegro_3.jpg",
                        "./img/women/jeansWide/jeansWideNegro_4.jpg",
                        "./img/women/jeansWide/jeansWideNegro_5.jpg",
                        "./img/women/jeansWide/jeansWideNegro_6.jpg"
                    ]
                },
                {
                    colorName: "Celeste",
                    thumbnail: "./img/women/jeansWide/jeansWideCeleste_tmb.jpg",
                    gallery: [
                        "./img/women/jeansWide/jeansWideCeleste_1.jpg",
                        "./img/women/jeansWide/jeansWideCeleste_2.jpg",
                        "./img/women/jeansWide/jeansWideCeleste_3.jpg",
                        "./img/women/jeansWide/jeansWideCeleste_4.jpg",
                        "./img/women/jeansWide/jeansWideCeleste_5.jpg",
                        "./img/women/jeansWide/jeansWideCeleste_6.jpg"
                    ]
                },
                {
                    colorName: "Crema",
                    thumbnail: "./img/women/jeansWide/jeansWideCrema_tmb.jpg",
                    gallery: [
                        "./img/women/jeansWide/jeansWideCrema_1.jpg",
                        "./img/women/jeansWide/jeansWideCrema_2.jpg",
                        "./img/women/jeansWide/jeansWideCrema_3.jpg",
                        "./img/women/jeansWide/jeansWideCrema_4.jpg",
                        "./img/women/jeansWide/jeansWideCrema_5.jpg",
                        "./img/women/jeansWide/jeansWideCrema_6.jpg"
                    ]
                }
            ]
        } , 
        {
            id: "m_pantalon_palazzo",
            brand: "Aureum Studio",
            name: "Pantalón Palazzo",
            currentPrice: 119.90,
            oldPrice: 139.90,
            description: "El Pantalón Palazzo de Aureum Studio aporta elegancia sofisticada y fluidez a cualquier fondo de armario femenino. Diseñado con una silueta de pernera ancha, talle alto con delicadas pinzas frontales y un cinturón fino a juego con hebilla metálica dorada, estilizando la figura con máximo confort. Ideal para looks formales, de oficina o eventos nocturnos casuales.",
            // Detalles para la tabla de la imagen de referencia
            details: {
                modelo: "Pantalón palazzo",
                tiro: "Wide leg",
                composicion: "95% poliéster, 5% elastano",
                bolsillos: "2 bolsillos",
                cierre: "Cierre y botón"
            },
            sizes: ["26", "28", "30", "32", "34", "36", "38"],
            // Manejo de múltiples colores y sus respectivas imágenes persistentes
            colors: [
                {
                    colorName: "Negro",
                    thumbnail: "./img/women/pantPalazzo/pantPalazzo_tmb.png", // Para el listado
                    gallery: [
                        "./img/women/pantPalazzo/pantPalazzo_1.png",
                        "./img/women/pantPalazzo/pantPalazzo_2.png",
                        "./img/women/pantPalazzo/pantPalazzo_3.png",
                        "./img/women/pantPalazzo/pantPalazzo_4.png",
                        "./img/women/pantPalazzo/pantPalazzo_5.png"
                    ]
                }
            ]
        } , 
        {
            id: "m_chaleco_tejido",
            brand: "Nova Élégance",
            name: "Chaleco Tejido Mujer",
            currentPrice: 89.90,
            oldPrice: 109.90,
            description: "Este chaleco tejido sin mangas combina un estilo sastre con la suavidad del punto acanalado de tacto prémium. Cuenta con escote en pico, ajuste entallado a la cintura que define la silueta y bajo con vuelo tipo peplum, complementado con botones frontales dorados de acabado escultórico ideales para estilismos formales o casuales.",
            // Detalles para la tabla de la imagen de referencia
            details: {
                modelo: "Chaleco",
                tipo: "Peplum entallado",
                composicion: "1Viscosa y Poliamida",
                cuello: "Escote en V",
                cierre: "Botonadura frontal"
            },
            sizes: ["XS", "S", "M", "L", "XL"],
            // Manejo de múltiples colores y sus respectivas imágenes persistentes
            colors: [
                {
                    colorName: "Marfil",
                    thumbnail: "./img/women/chalecoTejido/chalecoTejidoCrema_tmb.jpg", // Para el listado
                    gallery: [
                        "./img/women/chalecoTejido/chalecoTejidoCrema_1.jpg",
                        "./img/women/chalecoTejido/chalecoTejidoCrema_2.jpg",
                        "./img/women/chalecoTejido/chalecoTejidoCrema_3.jpg",
                        "./img/women/chalecoTejido/chalecoTejidoCrema_4.jpg",
                        "./img/women/chalecoTejido/chalecoTejidoCrema_5.jpg"
                    ]
                },
                {
                    colorName: "Melon",
                    thumbnail: "./img/women/chalecoTejido/chalecoTejidoMelon_tmb.jpg", // Para el listado
                    gallery: [
                        "./img/women/chalecoTejido/chalecoTejidoMelon_1.jpg",
                        "./img/women/chalecoTejido/chalecoTejidoMelon_2.jpg",
                        "./img/women/chalecoTejido/chalecoTejidoMelon_3.jpg",
                        "./img/women/chalecoTejido/chalecoTejidoMelon_4.jpg",
                        "./img/women/chalecoTejido/chalecoTejidoMelon_5.jpg"
                    ]
                }
            ]
        } , 
        {
            id: "m_camisa_corset",
            brand: "Studio Noir",
            name: "Camisa Corset Mujer",
            currentPrice: 59.90,
            oldPrice: 89.90,
            description: "Este chaleco tejido sin mangas combina un estilo sastre con la suavidad del punto acanalado de tacto prémium. Cuenta con escote en pico, ajuste entallado a la cintura que define la silueta y bajo con vuelo tipo peplum, complementado con botones frontales dorados de acabado escultórico ideales para estilismos formales o casuales.",
            // Detalles para la tabla de la imagen de referencia
            details: {
                modelo: "Camisa/Blusas",
                tipo: "Camisa corset entallada",
                composicion: "Popelina y tejido acanalado de alta elasticidad",
                cuello: "Cuello camisero en V",
                detalles: "Contraste de blanco y negro con torso acanalado"
            },
            sizes: ["XS", "S", "M", "L", "XL"],
            // Manejo de múltiples colores y sus respectivas imágenes persistentes
            colors: [
                {
                    colorName: "Negro",
                    thumbnail: "./img/women/camisaCorset/camisaCorset_tmb.png", // Para el listado
                    gallery: [
                        "./img/women/camisaCorset/camisaCorset_1.png",
                        "./img/women/camisaCorset/camisaCorset_2.jpg",
                        "./img/women/camisaCorset/camisaCorset_3.jpg",
                        "./img/women/camisaCorset/camisaCorset_4.jpg",
                        "./img/women/camisaCorset/camisaCorset_5.jpg"
                    ]
                }
            ]
        } , 
        {
            id: "m_blusa_cuello_drap",
            brand: "Verve Atelier",
            name: "Blusa Cuello Drap",
            currentPrice: 69.90,
            oldPrice: 99.90,
            description: "Esta blusa sin mangas presenta un diseño asimétrico con cuello alto y pliegues estructurados sobre el hombro. Destaca por su fajín drapeado a la cintura con hebilla metálica dorada, brindando un calce entallado y elegante para ocasiones formales o casuales.",
            details: {
                modelo: "Entallado con fajín",
                tipo: "Blusas",
                composicion: "80% Poliéster 20% Spandex",
                cuello: "Cuello alto mock neck",
                detalles: "Hebilla metálica dorada"
            },
            sizes: ["XS", "S", "M", "L", "XL"],
            colors: [
                {
                    colorName: "Marrón",
                    thumbnail: "./img/women/blusaCuello/blusaCuelloMarron_tmb.png",
                    gallery: [
                        "./img/women/blusaCuello/blusaCuelloMarron_1.jpg",
                        "./img/women/blusaCuello/blusaCuelloMarron_2.jpg",
                        "./img/women/blusaCuello/blusaCuelloMarron_3.jpg",
                        "./img/women/blusaCuello/blusaCuelloMarron_4.jpg",
                        "./img/women/blusaCuello/blusaCuelloMarron_5.jpg"
                    ]
                },
                {
                    colorName: "Azul",
                    thumbnail: "./img/women/blusaCuello/blusaCuelloAzul_tmb.png",
                    gallery: [
                        "./img/women/blusaCuello/blusaCuelloAzul_1.jpg",
                        "./img/women/blusaCuello/blusaCuelloAzul_2.jpg",
                        "./img/women/blusaCuello/blusaCuelloAzul_3.jpg",
                        "./img/women/blusaCuello/blusaCuelloAzul_4.jpg",
                        "./img/women/blusaCuello/blusaCuelloAzul_5.jpg"
                    ]
                },
                {
                    colorName: "Beige",
                    thumbnail: "./img/women/blusaCuello/blusaCuelloBeige_tmb.png",
                    gallery: [
                        "./img/women/blusaCuello/blusaCuelloBeige_1.jpg",
                        "./img/women/blusaCuello/blusaCuelloBeige_2.jpg",
                        "./img/women/blusaCuello/blusaCuelloBeige_3.jpg",
                        "./img/women/blusaCuello/blusaCuelloBeige_4.jpg",
                        "./img/women/blusaCuello/blusaCuelloBeige_5.jpg"
                    ]
                }
            ]
        } , 
        {
            id: "m_short_sastre_lino",
            brand: "Élan Studio",
            name: "Short Sastre Lino",
            currentPrice: 59.90,
            oldPrice: 79.90,
            description: "Este short de estilo sastre ha sido confeccionado en mezcla de lino ligero de textura transpirable, diseñado con tiro alto y pinzas frontales que aportan volumen y estructura a la silueta. Cuenta con bajo vuelto de corte amplio para mayor libertad de movimiento e incluye un cinturón delgado en contraste con hebilla metálica dorada, logrando un equilibrio fresco y pulido para los días cálidos.",
            details: {
                modelo: "Shorts",
                tiro: "Alto",
                composicion: "85% Lino 15% Algodón",
                bolsillos: "Ninguno",
                cierre: "Cremallera oculta"
            },
            sizes: ["26", "28", "30", "32", "34", "36", "38"],
            colors: [
                {
                    colorName: "Beige",
                    thumbnail: "./img/women/shortSastre/shortSastre_tmb.png",
                    gallery: [
                        "./img/women/shortSastre/shortSastre_1.jpg",
                        "./img/women/shortSastre/shortSastre_2.jpg",
                        "./img/women/shortSastre/shortSastre_3.jpg",
                        "./img/women/shortSastre/shortSastre_4.jpg",
                        "./img/women/shortSastre/shortSastre_5.jpg"
                    ]
                }
            ]
        } , 
        {
            id: "m_minifalda_cuero",
            brand: "Aura Noir",
            name: "Minifalda Cuero",
            currentPrice: 69.90,
            oldPrice: 99.90,
            description: "Esta minifalda de tiro alto destaca por su confección en piel sintética suave de acabado semi mate con diseño cruzado estilo tulipán. Incorpora un sutil drapeado fruncido en el lateral que estiliza la cadera y aporta movimiento a la silueta, complementado con un cierre posterior invisible que asegura un ajuste ceñido y estilizado para conjuntos de noche o eventos formales.",
            details: {
                modelo: "Faldas",
                tiro: "Alto",
                composicion: "100% Poliuretano",
                bolsillos: "Ninguno",
                cierre: "Cierre invisible posterior"
            },
            sizes: ["26", "28", "30", "32", "34", "36", "38"],
            colors: [
                {
                    colorName: "Negro",
                    thumbnail: "./img/women/minifaldaCuero/minifaldaCuero_tmb.png",
                    gallery: [
                        "./img/women/minifaldaCuero/minifaldaCuero_1.jpg",
                        "./img/women/minifaldaCuero/minifaldaCuero_2.jpg",
                        "./img/women/minifaldaCuero/minifaldaCuero_3.jpg",
                        "./img/women/minifaldaCuero/minifaldaCuero_4.jpg",
                        "./img/women/minifaldaCuero/minifaldaCuero_5.jpg"
                    ]
                }
            ]
        } , 
        {
            id: "m_top_strapless",
            brand: "Lumen Studio",
            name: "Top Strapless",
            currentPrice: 49.90,
            oldPrice: 69.90,
            description: "Este top strapless estilo tubo destaca por su confección en tejido elástico ultra suave que moldea la silueta con delicadeza. Cuenta con un diseño fruncido de pliegues horizontales que aportan textura visual y un favorecedor bajo asimétrico con acabado en ribete ondeado tipo lechuga, ideal para crear estilismos de noche o combinaciones minimalistas con prendas de tiro alto.",
            details: {
                modelo: "Top entallada asimétrica",
                tipo: "Tops",
                composicion: "92% Poliamida, 8% Elastano",
                cuello: "Strapless (sin cuello)",
                detalles: "Acabado ondulado"
            },
            sizes: ["XS", "S", "M", "L", "XL"],
            colors: [
                {
                    colorName: "Crema",
                    thumbnail: "./img/women/topStrapless/topStraplessCrema_tmb.png",
                    gallery: [
                        "./img/women/topStrapless/topStraplessCrema_1.jpg",
                        "./img/women/topStrapless/topStraplessCrema_2.jpg",
                        "./img/women/topStrapless/topStraplessCrema_3.jpg",
                        "./img/women/topStrapless/topStraplessCrema_4.jpg",
                        "./img/women/topStrapless/topStraplessCrema_5.jpg"
                    ]
                },
                {
                    colorName: "Vino",
                    thumbnail: "./img/women/topStrapless/topStraplessVino_tmb.png",
                    gallery: [
                        "./img/women/topStrapless/topStraplessVino_1.jpg",
                        "./img/women/topStrapless/topStraplessVino_2.jpg",
                        "./img/women/topStrapless/topStraplessVino_3.jpg",
                        "./img/women/topStrapless/topStraplessVino_4.jpg",
                        "./img/women/topStrapless/topStraplessVino_5.jpg"
                    ]
                }
            ]
        } , 
        {
            id: "m_blusa_gasa_volante",
            brand: "Aura Atelier",
            name: "Blusa Gasa Volante",
            currentPrice: 89.90,
            oldPrice: 109.90,
            description: "Eleva tu look de noche con esta exquisita blusa de fiesta. Confeccionada en un delicado tejido de gasa semitransparente en un suave tono azul cielo, presenta un diseño de tirantes finos con escote en V. El punto focal es el espectacular volante vertical que cae en cascada por el centro, añadiendo volumen y movimiento. Su corte favorecedor se ajusta ligeramente al busto y cae con fluidez. Perfecta para combinar con pantalones de vestir o una falda elegante.",
            details: {
                modelo: "Blusa semiajustada",
                tipo: "Blusas",
                composicion: "100% Gasa",
                cuello: "Corte V",
                detalles: "Volante frontal vertical"
            },
            sizes: ["XS", "S", "M", "L", "XL"],
            colors: [
                {
                    colorName: "Celeste",
                    thumbnail: "./img/women/blusaGasa/blusaGasa_tmb.png",
                    gallery: [
                        "./img/women/blusaGasa/blusaGasa_1.png",
                        "./img/women/blusaGasa/blusaGasa_2.jpg",
                        "./img/women/blusaGasa/blusaGasa_3.jpg",
                        "./img/women/blusaGasa/blusaGasa_4.jpg",
                        "./img/women/blusaGasa/blusaGasa_5.jpg"
                    ]
                }
            ]
        } , 
        {
            id: "m_blusa_off_shoulders",
            brand: "Nova Élégance",
            name: "Blusa Off-shoulders",
            currentPrice: 79.90,
            oldPrice: 114.90,
            description: "Elegante blusa de corte sofisticado en un llamativo tono rojo carmesí. Diseñada con un amplio escote de hombros descubiertos (off-the-shoulder) y un sutil pliegue drapeado en el torso que esculpe y enmarca la figura con gracia. Su tejido de tacto suave y caída fluida aporta un acabado chic y refinado, perfecto tanto para cenas formales como para destacar en ocasiones especiales combinada con pantalones sastre oscuros.",
            details: {
                modelo: "Blusa con drapeado lateral",
                tipo: "Blusas",
                composicion: "92% Poliéster, 8% Elastano",
                cuello: "Off-the-shoulder",
                detalles: "Drapeado asimétrico lateral"
            },
            sizes: ["XS", "S", "M", "L", "XL"],
            colors: [
                {
                    colorName: "Rojo vino",
                    thumbnail: "./img/women/blusaOff/blusaOff_tmb.png",
                    gallery: [
                        "./img/women/blusaOff/blusaOff_1.jpg",
                        "./img/women/blusaOff/blusaOff_2.jpg",
                        "./img/women/blusaOff/blusaOff_3.jpg",
                        "./img/women/blusaOff/blusaOff_4.jpg",
                        "./img/women/blusaOff/blusaOff_5.jpg"
                    ]
                }
            ]
        } , 
        {
            id: "m_vestido_corto",
            brand: "Élan Studio",
            name: "Vestido Corto",
            currentPrice: 119.90,
            oldPrice: 139.90,
            description: "Vestido corto con diseño estructurado y silueta acampanada en línea A. Presenta cuerpo ceñido tipo corpiño con escote recto fruncido y tirantes anchos con lazo decorativo. Su falda escalonada de doble volante aporta volumen dinámico y frescura a la prenda, completada por un estampado floral cálido que destaca tanto en ocasiones veraniegas de día como en reuniones semiformales.",
            details: {
                modelo: "Línea A con falda en capas",
                tipo: "Vestidos",
                composicion: "100% Viscosa",
                cuello: "Escote cuadrado con fruncido",
                detalles: "Volantes escalonados falda"
            },
            sizes: ["XS", "S", "M", "L", "XL"],
            colors: [
                {
                    colorName: "Mostaza",
                    thumbnail: "./img/women/vestidoCorto/vestidoCorto_tmb.png",
                    gallery: [
                        "./img/women/vestidoCorto/vestidoCorto_1.jpg",
                        "./img/women/vestidoCorto/vestidoCorto_2.jpg",
                        "./img/women/vestidoCorto/vestidoCorto_3.jpg",
                        "./img/women/vestidoCorto/vestidoCorto_4.jpg",
                        "./img/women/vestidoCorto/vestidoCorto_5.jpg"
                    ]
                }
            ]
        }
    ],
    hombre: [
        {
            id: "h_jean_wide_leg",
            brand: "Korvus Apparel",
            name: "Jean Wide Leg",
            currentPrice: 99.90,
            oldPrice: 139.90,
            description: "Redefine tu estilo diario con el Jean Wide Leg de Korvus Apparel. Confeccionado en denim 100% algodón de peso medio y lavado vintage claro, ofrece una caída holgada estructurada de inspiración retro noventera. Su silueta de pierna ancha garantiza máxima comodidad y libertad de movimiento, ideal para combinar con camisetas básicas, zapatillas urbanas o sobrecamisas ligeras.",
            details: {
                modelo: "Loose Baggy",
                tipo: "Jean",
                composicion: "100% Algodón",
                tiro: "Medio",
                bolsillos: "5"
            },
            sizes: ["26", "28", "30", "32", "34", "36", "38"],
            colors: [
                {
                    colorName: "Celeste claro",
                    thumbnail: "./img/men/wideLeg/wideLeg_tmb.png",
                    gallery: [
                        "./img/men/wideLeg/wideLeg_1.jpg",
                        "./img/men/wideLeg/wideLeg_2.png",
                        "./img/men/wideLeg/wideLeg_3.png",
                        "./img/men/wideLeg/wideLeg_4.png",
                        "./img/men/wideLeg/wideLeg_5.png"
                    ]
                }
            ]
        } , 
        {
            id: "h_pantalon_sastre",
            brand: "Norden Tailoring",
            name: "Pantalón Sastre",
            currentPrice: 119.90,
            oldPrice: 139.90,
            description: "El Pantalón Sastre Plisado de Norden Tailoring fusiona la sastrería clásica europea con la silueta contemporánea de pierna amplia (wide leg). Elaborado en una mezcla de sarga y viscosa con caída pesada y tacto suave, incorpora doble pinza frontal que aporta volumen refinado y elegancia estructural. Perfecto para looks sartoriales modernos o combinaciones casuales con zapatillas y prendas de punto.",
            details: {
                modelo: "Sastre Holgado",
                tipo: "Pantalón sastre",
                composicion: "70% Poliéster 30% Viscosa",
                tiro: "Alto",
                bolsillos: "2 laterales y 2 traseros"
            },
            sizes: ["26", "28", "30", "32", "34", "36", "38"],
            colors: [
                {
                    colorName: "Gris",
                    thumbnail: "./img/men/pantalonSastre/pantalonSastre_tmb.png",
                    gallery: [
                        "./img/men/pantalonSastre/pantalonSastre_1.jpg",
                        "./img/men/pantalonSastre/pantalonSastre_2.jpg",
                        "./img/men/pantalonSastre/pantalonSastre_3.jpg",
                        "./img/men/pantalonSastre/pantalonSastre_4.jpg",
                        "./img/men/pantalonSastre/pantalonSastre_5.jpg"
                    ]
                }
            ]
        } , 
        {
            id: "h_camisa_rayas_resort",
            brand: "Velorium Studio",
            name: "Camisa Rayas Resort",
            currentPrice: 79.90,
            oldPrice: 99.90,
            description: "La Camisa Rayas Resort de Velorium Studio destaca por su estética moderna y silueta fluida. Diseñada con un cuello abierto tipo pijama/resort y un patrón a rayas finas en azul marino y negro, esta prenda ofrece máxima frescura y versatilidad. Confeccionada en mezcla suave y ligera, puede llevarse abotonada para un look pulido o abierta sobre una camiseta básica para un estilo relajado de fin de semana.",
            details: {
                modelo: "Relaxed Fit",
                tipo: "Camisa manga larga",
                composicion: "70% Viscosa, 30% Lino",
                cuello: "en V con botones",
                detalles: "Tela a rayas"
            },
            sizes: ["XS", "S", "M", "L", "XL"],
            colors: [
                {
                    colorName: "Azul Marino",
                    thumbnail: "./img/men/camisaRayasResort/camisaRayasResortBlue_tmb.png",
                    gallery: [
                        "./img/men/camisaRayasResort/camisaRayasResortBlue_1.jpg",
                        "./img/men/camisaRayasResort/camisaRayasResortBlue_2.jpg",
                        "./img/men/camisaRayasResort/camisaRayasResortBlue_3.jpg",
                        "./img/men/camisaRayasResort/camisaRayasResortBlue_4.jpg",
                        "./img/men/camisaRayasResort/camisaRayasResortBlue_5.jpg"
                    ]
                },
                {
                    colorName: "Verde",
                    thumbnail: "./img/men/camisaRayasResort/camisaRayasResortGreen_tmb.png",
                    gallery: [
                        "./img/men/camisaRayasResort/camisaRayasResortGreen_1.png",
                        "./img/men/camisaRayasResort/camisaRayasResortGreen_2.png",
                        "./img/men/camisaRayasResort/camisaRayasResortGreen_3.jpg",
                        "./img/men/camisaRayasResort/camisaRayasResortGreen_4.jpg"
                    ]
                }
            ]
        } , 
        {
            id: "h_polo_adidas",
            brand: "Adidas",
            name: "Polo negro adidas",
            currentPrice: 59.90,
            oldPrice: 99.90,
            description: "El Polo negro Adidas rinde homenaje a la estética deportiva clásica de los años 70 y 80. Confeccionado en tejido de punto 100% algodón de alto gramaje, presenta ribetes acanalados en cuello y puños en contraste, franjas distintivas en las mangas y un emblema deportivo bordado en el pecho. Su corte regular brinda un balance óptimo entre ajuste y comodidad para el uso cotidiano.",
            details: {
                modelo: "Regular Fit",
                tipo: "Polo manga corta",
                composicion: "100% Algodón jersey",
                cuello: "Redondo",
                detalles: "Rayas en las mangas"
            },
            sizes: ["XS", "S", "M", "L", "XL"],
            colors: [
                {
                    colorName: "Negro",
                    thumbnail: "./img/men/poloAdidas/poloAdidasNegro_tmb.png",
                    gallery: [
                        "./img/men/poloAdidas/poloAdidasNegro_1.jpg",
                        "./img/men/poloAdidas/poloAdidasNegro_2.jpg",
                        "./img/men/poloAdidas/poloAdidasNegro_3.jpg",
                        "./img/men/poloAdidas/poloAdidasNegro_4.jpg"
                    ]
                },
                {
                    colorName: "Celeste",
                    thumbnail: "./img/men/poloAdidas/poloAdidasCeleste_tmb.png",
                    gallery: [
                        "./img/men/poloAdidas/poloAdidasCeleste_1.jpg",
                        "./img/men/poloAdidas/poloAdidasCeleste_2.jpg",
                        "./img/men/poloAdidas/poloAdidasCeleste_3.jpg",
                        "./img/men/poloAdidas/poloAdidasCeleste_4.jpg",
                        "./img/men/poloAdidas/poloAdidasCeleste_5.jpg"
                    ]
                }
            ]
        } , 
        {
            id: "h_chompa_lana",
            brand: "Alvera Knitwear",
            name: "Chompa lana",
            currentPrice: 99.90,
            oldPrice: 119.90,
            description: "La Chompa de lana de Alvera Knitwear aporta calidez, textura y sofisticación relajada a tu estilo de entretiempo e invierno. Confeccionada en un tejido acanalado de tacto ultra suave y caída fluida, cuenta con un cuello polo con medio cierre metálico plateado que permite modular el escote según la ocasión. Su silueta de hombros caídos asegura el equilibrio idóneo entre confort y estética nórdica minimalista.",
            details: {
                modelo: "Relaxed Fit",
                tipo: "Suéter de punto",
                composicion: "70% Acrílico, 30% Poliéster",
                cuello: "En V",
                detalles: "Cierre dorado en el cuello"
            },
            sizes: ["XS", "S", "M", "L", "XL"],
            colors: [
                {
                    colorName: "Blanco",
                    thumbnail: "./img/men/chompaLana/chompaLana_tmb.png",
                    gallery: [
                        "./img/men/chompaLana/chompaLana_1.jpg",
                        "./img/men/chompaLana/chompaLana_2.jpg",
                        "./img/men/chompaLana/chompaLana_3.jpg",
                        "./img/men/chompaLana/chompaLana_4.jpg"
                    ]
                }
            ]
        } , 
        {
            id: "h_casaca_panio",
            brand: "Brunel Atelier",
            name: "Casaca Paño",
            currentPrice: 169.90,
            oldPrice: 199.90,
            description: "La Casaca Paño de Brunel Atelier combina la calidez y estructura del tejido tipo paño con una silueta moderna y funcional. Presenta cierre frontal de cremallera metálica completa, cuello camisero clásico y dos bolsillos utilitarios con solapa en el pecho. Su diseño versátil y tonalidad neutra facilitan la superposición sobre prendas de punto o camisetas básicas, convirtiéndola en un imprescindible para días frescos.",
            details: {
                modelo: "Regular Fit",
                tipo: "Casaca de paño",
                composicion: "70% Poliéster, 30% Lana si.",
                cuello: "En V",
                detalles: "Cierre a lo largo"
            },
            sizes: ["XS", "S", "M", "L", "XL"],
            colors: [
                {
                    colorName: "Blanco",
                    thumbnail: "./img/men/chompaPanio/chompaPanio_tmb.png",
                    gallery: [
                        "./img/men/chompaPanio/chompaPanio_1.jpg",
                        "./img/men/chompaPanio/chompaPanio_2.png",
                        "./img/men/chompaPanio/chompaPanio_3.jpg",
                        "./img/men/chompaPanio/chompaPanio_4.jpg",
                        "./img/men/chompaPanio/chompaPanio_5.jpg"
                    ]
                }
            ]
        } , 
        {
            id: "h_camisa_lino",
            brand: "Valtier & Co.",
            name: "Camisa Lino",
            currentPrice: 89.90,
            oldPrice: 109.90,
            description: "La Camisa Lino Rayas de Valtier & Co. redefine la elegancia veraniega y de entretiempo. Confeccionada en mezcla ligera y transpirable de lino y algodón con textura jacquard de rayas verticales tono sobre tono, aporta frescura y caída natural impecable. Presenta cuello camisero clásico, bolsillo funcional en el pecho y bajo ligeramente curvado que permite llevarla tanto por dentro como por fuera del pantalón con las mangas recogidas para un estilo smart casual.",
            details: {
                modelo: "Regular Fit",
                tipo: "Camisa manga larga",
                composicion: "55% Lino, 45% Algodón",
                cuello: "En V",
                detalles: "1 bolsillo de parche"
            },
            sizes: ["XS", "S", "M", "L", "XL"],
            colors: [
                {
                    colorName: "Blanco",
                    thumbnail: "./img/men/camisaLino/camisaLino_tmb.png",
                    gallery: [
                        "./img/men/camisaLino/camisaLino_1.jpg",
                        "./img/men/camisaLino/camisaLino_2.png",
                        "./img/men/camisaLino/camisaLino_3.png",
                        "./img/men/camisaLino/camisaLino_4.png",
                        "./img/men/camisaLino/camisaLino_5.png"
                    ]
                }
            ]
        } , 
        {
            id: "h_polo_california",
            brand: "Pacific Tide",
            name: "Polo Oversize California",
            currentPrice: 59.90,
            oldPrice: 79.90,
            description: "El Polo Oversize California de Pacific Tide rescata el espíritu playero y universitario retro de la costa oeste. Confeccionado en algodón de tacto suave y corte boxy relajado con hombros caídos, incorpora cuello polo camisero en contraste verde oscuro, tapeta delantera con botones, doble franja atlética en las mangas y tipografía \"California\" estampada en el pecho. Una pieza versátil y cómoda para outfits urbanos y casuales de fin de semana.",
            details: {
                modelo: "Boxy Fit",
                tipo: "Polo cuello camisero",
                composicion: "100% Algodón jersey",
                cuello: "En V con cuello verde",
                detalles: "Estampado frontal"
            },
            sizes: ["XS", "S", "M", "L", "XL"],
            colors: [
                {
                    colorName: "Blanco Hueso",
                    thumbnail: "./img/men/poloCalifornia/poloCalifornia_tmb.png",
                    gallery: [
                        "./img/men/poloCalifornia/poloCalifornia_1.png",
                        "./img/men/poloCalifornia/poloCalifornia_2.png",
                        "./img/men/poloCalifornia/poloCalifornia_3.png",
                        "./img/men/poloCalifornia/poloCalifornia_4.png",
                        "./img/men/poloCalifornia/poloCalifornia_5.png"
                    ]
                }
            ]
        } , 
        {
            id: "h_bermuda_chino",
            brand: "Korvus Urban",
            name: "Bermuda chino",
            currentPrice: 49.90,
            oldPrice: 89.90,
            description: "La Bermuda Chino de Korvus Urban es la prenda esencial para climas cálidos y estilos veraniegos pulidos. Confeccionada en sarga de algodón con un toque de elasticidad, ofrece frescura, confort y una estructura impecable sobre la rodilla. Su diseño plano frontal con bolsillos diagonales y botón a tono permite combinarla fácilmente con camisetas básicas, polos o camisas de lino.",
            details: {
                modelo: "Regular fit clásico",
                tipo: "Bermuda chino",
                composicion: "98% algodón 2% elastano",
                tiro: "Medio",
                bolsillos: "5"
            },
            sizes: ["26", "28", "30", "32", "34", "36", "38"],
            colors: [
                {
                    colorName: "Azul marino",
                    thumbnail: "./img/men/bermudaChino/bermudaChino_tmb.png",
                    gallery: [
                        "./img/men/bermudaChino/bermudaChino_1.png",
                        "./img/men/bermudaChino/bermudaChino_2.png",
                        "./img/men/bermudaChino/bermudaChino_3.png",
                        "./img/men/bermudaChino/bermudaChino_4.png",
                        "./img/men/bermudaChino/bermudaChino_5.png"
                    ]
                }
            ]
        } , 
        {
            id: "h_polo_basico",
            brand: "Aureum Basics",
            name: "Polo Básico",
            currentPrice: 39.90,
            oldPrice: 69.90,
            description: "El Polo Básico de Aureum Basics es un esencial minimalista para uso diario. Diseñado en algodón pima de textura suave y fresca, cuenta con corte regular cómodo, cuello redondo acanalado y mangas cortas de ajuste clásico. Su tonalidad profunda y diseño liso ofrecen máxima versatilidad para combinar con bermudas, pantalones de vestir o jeans.",
            details: {
                modelo: "Regular fit básico",
                tipo: "Polo manga corta",
                composicion: "100% Algodón pima",
                cuello: "Redondo clásico",
                detalles: "Diseño liso monocolor"
            },
            sizes: ["XS", "S", "M", "L", "XL"],
            colors: [
                {
                    colorName: "Guinda",
                    thumbnail: "./img/men/poloBasico/poloBasicoVino_tmb.png",
                    gallery: [
                        "./img/men/poloBasico/poloBasicoVino_1.png",
                        "./img/men/poloBasico/poloBasicoVino_2.png",
                        "./img/men/poloBasico/poloBasicoVino_3.png",
                        "./img/men/poloBasico/poloBasicoVino_4.png",
                        "./img/men/poloBasico/poloBasicoVino_5.png"
                    ]
                },
                {
                    colorName: "Celeste",
                    thumbnail: "./img/men/poloBasico/poloBasicoCeleste_tmb.png",
                    gallery: [
                        "./img/men/poloBasico/poloBasicoCeleste_1.png",
                        "./img/men/poloBasico/poloBasicoCeleste_2.png",
                        "./img/men/poloBasico/poloBasicoCeleste_3.png",
                        "./img/men/poloBasico/poloBasicoCeleste_4.png",
                        "./img/men/poloBasico/poloBasicoCeleste_5.png"
                    ]
                }
            ]
        }
    ]
};