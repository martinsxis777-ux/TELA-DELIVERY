// Base de dados mockada com as informações raspadas da página do Brendi.
// As imagens e preços são ilustrativos/placeholders para você editar depois no código.
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
                image: "https://images.unsplash.com/photo-1590137703814-ddfb9ffaf421?q=80&w=500&auto=format&fit=crop"
            },
            {
                id: "promo2",
                name: "Combo Duplo: 2 Copos 300ml + 4 Adicionais (cada)",
                description: "Dois copos montados separadamente com 4 adicionais cada. Montados em camadas.",
                price: 38.00,
                image: "https://images.unsplash.com/photo-1528828574169-dc30e0084ce5?q=80&w=500&auto=format&fit=crop"
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
                image: "https://images.unsplash.com/photo-1625938146369-adc83368bda2?q=80&w=500&auto=format&fit=crop"
            },
            {
                id: "copo400",
                name: "Copo 400ml",
                description: "Açaí no copo de 400ml já com 4 adicionais à sua escolha. Montado em camadas.",
                price: 22.00,
                image: "https://images.unsplash.com/photo-1625938146369-adc83368bda2?q=80&w=500&auto=format&fit=crop"
            },
            {
                id: "copo500",
                name: "Copo 500ml",
                description: "Açaí no copo de 500ml já com 4 adicionais à sua escolha. Montado em camadas.",
                price: 26.00,
                image: "https://images.unsplash.com/photo-1625938146369-adc83368bda2?q=80&w=500&auto=format&fit=crop"
            },
            {
                id: "copo700",
                name: "Copo 700ml",
                description: "Açaí no copo de 700ml já com 4 adicionais à sua escolha. Montado em camadas.",
                price: 32.00,
                image: "https://images.unsplash.com/photo-1625938146369-adc83368bda2?q=80&w=500&auto=format&fit=crop"
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
                image: "https://images.unsplash.com/photo-1590137703814-ddfb9ffaf421?q=80&w=500&auto=format&fit=crop"
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
