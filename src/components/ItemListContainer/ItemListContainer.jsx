import './ItemListContainer.css'



const ItemListContainer = ({ greeting }) => {
    return (
        <div className='cartsub'>
            <div className='textContainer'>
                <div className='cubodeclub'>
                    <h1 className='Bienvenido'>{greeting}</h1>
                    
                    <p className='textSub'>Choose your favorite coffee and immerse yourself in the Kaffee experience, where passion for coffee awakens in every cup, ready for you to enjoy.</p>

                    <div>
                        <button className='BotonSub'>Subscribe</button>
                        <button className='BotonMore'>More Info</button>
                    </div>
                </div>
            </div>

        </div>
        

    )
}


export default ItemListContainer
