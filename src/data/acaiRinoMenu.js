// Base de dados mockada com as informações raspadas da página do Brendi.
// As imagens e preços são ilustrativos/placeholders para você editar depois no código.

export const baseCustomizations = [
    {
        id: "base",
        title: "Escolha Açai ou Sorvete",
        subtitle: "Escolha de 1 a 2",
        min: 1,
        max: 2,
        options: [
            { id: "b1", name: "Açai", price: 0 },
            { id: "b2", name: "Cupuaçu", price: 0 },
            { id: "b3", name: "Café Trufado", price: 0 },
            { id: "b4", name: "Sorvete Ninho Trufado", price: 0 },
            { id: "b5", name: "Sorvete Creme de Nutella", price: 0 },
            { id: "b6", name: "Sorvete Chocolate Trufado", price: 0 },
            { id: "b7", name: "Sorvete Creme", price: 0 },
            { id: "b8", name: "Sorvete Torta de Limão", price: 0 },
            { id: "b9", name: "Sorvete Iogurt com Amarena", price: 0 },
            { id: "b10", name: "Marshmallow", price: 0 },
        ]
    },
    {
        id: "free_addons",
        title: "Escolha 4 adicionais",
        subtitle: "Escolha de 1 a 4",
        min: 1,
        max: 4,
        options: [
            { id: "a1", name: "Leite condensado", price: 0 },
            { id: "a2", name: "Leite em pó", price: 0 },
            { id: "a3", name: "Granola", price: 0 },
            { id: "a4", name: "Banana", price: 0 },
            { id: "a5", name: "Morango", price: 0 },
            { id: "a6", name: "Kiwi", price: 0 },
            { id: "a7", name: "Uva", price: 0 },
            { id: "a8", name: "Abacaxi", price: 0 },
            { id: "a9", name: "Manga", price: 0 },
            { id: "a10", name: "Sonho de Valsa", price: 0 },
            { id: "a11", name: "Ouro Branco", price: 0 },
            { id: "a12", name: "Mel", price: 0 },
            { id: "a13", name: "Sucrilhos", price: 0 },
            { id: "a14", name: "Amendoim", price: 0 },
            { id: "a15", name: "Doce de leite", price: 0 },
            { id: "a16", name: "Paçoca", price: 0 },
            { id: "a17", name: "Negresco", price: 0 },
            { id: "a18", name: "Chocoball", price: 0 },
            { id: "a19", name: "Confetes", price: 0 },
            { id: "a20", name: "Gotas de chocolate", price: 0 },
            { id: "a21", name: "Bis preto", price: 0 },
            { id: "a22", name: "Bis branco", price: 0 },
            { id: "a23", name: "Ovomaltine", price: 0 }
        ]
    },
    {
        id: "paid_addons",
        title: "Turbine seu pedido",
        subtitle: "Escolha até 10 opções",
        min: 0,
        max: 10,
        options: [
            { id: "p1", name: "Leite condensado", price: 2.50 },
            { id: "p2", name: "Leite em pó", price: 2.50 },
            { id: "p3", name: "Granola", price: 2.50 },
            { id: "p4", name: "Banana", price: 3.00 },
            { id: "p5", name: "Morango", price: 6.00 },
            { id: "p6", name: "Kiwi", price: 4.00 },
            { id: "p7", name: "Uva", price: 3.50 },
            { id: "p8", name: "Abacaxi", price: 3.50 },
            { id: "p9", name: "Manga", price: 3.00 },
            { id: "p10", name: "Sonho de Valsa", price: 2.50 },
            { id: "p11", name: "Ouro Branco", price: 2.50 },
            { id: "p12", name: "Mel", price: 2.00 },
            { id: "p13", name: "Sucrilhos", price: 2.00 },
            { id: "p14", name: "Amendoim", price: 2.00 },
            { id: "p15", name: "Doce de leite", price: 3.50 },
            { id: "p16", name: "Paçoca", price: 2.00 },
            { id: "p17", name: "Negresco", price: 3.00 },
            { id: "p18", name: "Chocoball", price: 2.00 },
            { id: "p19", name: "Confetes", price: 2.50 },
            { id: "p20", name: "Gotas de chocolate", price: 2.50 },
            { id: "p21", name: "Bis preto", price: 3.00 },
            { id: "p22", name: "Bis branco", price: 3.00 },
            { id: "p23", name: "Ovomaltine", price: 3.00 },
            { id: "p24", name: "Diamante negro", price: 4.00 },
            { id: "p25", name: "Creme de leite Ninho", price: 6.50 },
            { id: "p26", name: "Nutella", price: 7.50 },
            { id: "p27", name: "Chantily", price: 5.00 }
        ]
    }
];
export const acaiRinoMenu = [
    {
        id: "1",
        title: "Promoções Imperdíveis",
        products: [
            {
                id: "promo1",
                name: "Combo Perfeito: 2 Copos Iguais 300ml + 4 Adicionais",
                description: "Os dois copos montados iguais, os 4 adicionais escolhidos vão nos dois copos. Montados em camadas.",
                price: 35.00,
                image: "https://images.unsplash.com/photo-1590137703814-ddfb9ffaf421?q=80&w=500&auto=format&fit=crop",
                customizations: baseCustomizations
            },
            {
                id: "promo2",
                name: "Combo Duplo: 2 Copos 300ml + 4 Adicionais (cada)",
                description: "Dois copos montados separadamente com 4 adicionais cada. Montados em camadas.",
                price: 38.00,
                image: "https://images.unsplash.com/photo-1528828574169-dc30e0084ce5?q=80&w=500&auto=format&fit=crop",
                customizations: baseCustomizations
            }
        ]
    },
    {
        id: "2",
        title: "Copo com 4 adicionais",
        products: [
            {
                id: "copo300",
                name: "Copo 300ml",
                description: "Açaí no copo de 300ml já com 4 adicionais à sua escolha. Montado em camadas.",
                price: 18.00,
                image: "https://images.unsplash.com/photo-1625938146369-adc83368bda2?q=80&w=500&auto=format&fit=crop",
                customizations: baseCustomizations
            },
            {
                id: "copo400",
                name: "Copo 400ml",
                description: "Açaí no copo de 400ml já com 4 adicionais à sua escolha. Montado em camadas.",
                price: 22.00,
                image: "https://images.unsplash.com/photo-1625938146369-adc83368bda2?q=80&w=500&auto=format&fit=crop",
                customizations: baseCustomizations
            },
            {
                id: "copo500",
                name: "Copo 500ml",
                description: "Açaí no copo de 500ml já com 4 adicionais à sua escolha. Montado em camadas.",
                price: 26.00,
                image: "https://images.unsplash.com/photo-1625938146369-adc83368bda2?q=80&w=500&auto=format&fit=crop",
                customizations: baseCustomizations
            },
            {
                id: "copo700",
                name: "Copo 700ml",
                description: "Açaí no copo de 700ml já com 4 adicionais à sua escolha. Montado em camadas.",
                price: 32.00,
                image: "https://images.unsplash.com/photo-1625938146369-adc83368bda2?q=80&w=500&auto=format&fit=crop",
                customizations: baseCustomizations
            }
        ]
    },
    {
        id: "3",
        title: "Barca de Açaí",
        products: [
            {
                id: "barca500",
                name: "Barca 500ml",
                description: "Barca de açaí de 500ml, escolha até 6 adicionais grátis para deixar sua combinação única.",
                price: 45.00,
                image: "https://images.unsplash.com/photo-1590137703814-ddfb9ffaf421?q=80&w=500&auto=format&fit=crop",
                customizations: [
                    baseCustomizations[0],
                    { ...baseCustomizations[1], title: "Escolha 6 adicionais", subtitle: "Escolha de 1 a 6", max: 6 },
                    baseCustomizations[2]
                ]
            }
        ]
    },
    {
        id: "4",
        title: "Potes de Sorvete e Açaí",
        products: [
            {
                id: "pote15",
                name: "Pote Açaí 1,5 Litros",
                description: "Pote grande para a família.",
                price: 48.00,
                image: "https://images.unsplash.com/photo-1610444391295-9768fc96435c?q=80&w=500&auto=format&fit=crop"
            },
            {
                id: "pote1l",
                name: "Pote Açaí 1 Litro",
                description: "O clássico pote de 1 Litro.",
                price: 36.00,
                image: "https://images.unsplash.com/photo-1610444391295-9768fc96435c?q=80&w=500&auto=format&fit=crop"
            },
            {
                id: "potesorv",
                name: "Pote 1 Litro de Sorvete (Vários Sabores)",
                description: "Sabores: Chocolate, Morango, Flocos, Napolitano, Creme...",
                price: 28.00,
                image: "https://images.unsplash.com/photo-1570197782352-7b0616b3f715?q=80&w=500&auto=format&fit=crop"
            }
        ]
    },
    {
        id: "5",
        title: "Sobremesas & Milkshakes",
        products: [
            {
                id: "milk500",
                name: "Milkshake 500ml",
                description: "Milkshake cremoso de diversos sabores.",
                price: 20.00,
                image: "https://images.unsplash.com/photo-1572490122747-3968b75bb811?q=80&w=500&auto=format&fit=crop"
            },
            {
                id: "petit",
                name: "Petit Gâteau Completo",
                description: "Acompanha duas bolas de sorvete, cobertura de creme de avelã no bolinho e cobertura de chocolate.",
                price: 24.00,
                image: "https://images.unsplash.com/photo-1611002214172-792c1f90b59a?q=80&w=500&auto=format&fit=crop"
            },
            {
                id: "fondue",
                name: "Fondue Personalizado 500ml",
                description: "Escolha 3 frutas da estação e mergulhe no chocolate (Leite, Amargo, Branco ou Misto).",
                price: 38.00,
                image: "https://images.unsplash.com/photo-1542385151-efd5eb77ecba?q=80&w=500&auto=format&fit=crop"
            }
        ]
    },
    {
        id: "6",
        title: "Picolés (Fruta & Cremoso)",
        products: [
            {
                id: "pico_fruta",
                name: "Picolé de Fruta",
                description: "Limão, Morango, Maracujá, Melancia, Abacaxi, Uva, Goiaba.",
                price: 4.00,
                image: "https://images.unsplash.com/photo-1493630651811-19ce1ee6dd75?q=80&w=500&auto=format&fit=crop"
            },
            {
                id: "pico_creme",
                name: "Picolé Cremoso",
                description: "Milho Verde, Chocolate, Mousse de Maracujá, Amendoim, Iogurte, Coco Branco, Leitinho.",
                price: 6.00,
                image: "https://images.unsplash.com/photo-1501432781167-c041dafb11c3?q=80&w=500&auto=format&fit=crop"
            }
        ]
    }
];
