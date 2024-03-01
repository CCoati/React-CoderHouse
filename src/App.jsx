import './App.css'
import  NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount.jsx';
import ItemListContainer2 from './components/ItemListContainer2/ItemListContainer2.jsx';

function App() {
  return (
    <div className='App'>
    <NavBar />
    <ItemListContainer greeting={'El Club del Kaffee'} />
    <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
    <ItemListContainer2 />
    </div>

    
    
  );
}

export default App
