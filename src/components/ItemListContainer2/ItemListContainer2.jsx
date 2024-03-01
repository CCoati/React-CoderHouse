import {useState, useEffect} from 'react'
import {getProducts} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer2.css'


const ItemListContainer2 = ({greeting}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(response =>{
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])
    
    return(
        <div className='Card1'>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer2