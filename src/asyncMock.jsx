import KaffeeImagenC from '../public/Cafe.svg'

const products = [
    {
        id: '1',
        name: 'Sonnenaufgang Blend',
        price: 500,
        category: 'Moderado',
        img: KaffeeImagenC,
        stock: 20,
        description: 'Descripción: Celebra la magia del amanecer con nuestro Sonnenaufgang Blend. Inspirado en la calidez del sol naciente, este café despierta tus sentidos con su suavidad y notas delicadas. Una mezcla que captura la promesa de un nuevo día con cada sorbo.'
    },
    {        
    id: '2',
    name: 'Feuerkraft Blend',
    price: 550,
    category: 'Fuerte',
    img: KaffeeImagenC,
    stock: 20,
    description: 'Descripción: Descubre la pasión del Feuerkraft Blend. Forjado con ardiente intensidad, este café despierta tus sentidos con su sabor robusto y notas ahumadas. Una mezcla que enciende la chispa de la inspiración en cada taza.'
     },
     {
        id: '3',
        name: 'Vollmond Roast',
        price: 500,
        category: 'Fuerte',
        img: KaffeeImagenC,
        stock: 25,
        description: 'Descripción: Embárcate en un viaje bajo el resplandor del Vollmond Roast. Originario de noches mágicas, este café seduce con su carácter intenso y notas enigmáticas. Una experiencia que te transporta a la tranquila belleza de la noche.'
     }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}