import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import  NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemListContainer2 from './components/ItemListContainer2/ItemListContainer2.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'




function App() {
  return (
      <BrowserRouter>

        <NavBar/>

        <Routes>        
        
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/' element={<ItemListContainer2/>}/>
          <Route path='/productos/:categoryId' element={<ItemListContainer2/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>

          <Route path="*" element={<h1> 404 NOT FOUND</h1>} />
        </Routes>

      </BrowserRouter>




    // <div className='App'>
    // <NavBar />
    // <ItemListContainer greeting={'El Club del Kaffee'} />
    // <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
    // <ItemListContainer2 />
    // </div>

    
    
  );
}

export default App
