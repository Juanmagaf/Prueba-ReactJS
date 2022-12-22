import { useState } from 'react';
import './App.css';
import  imagenRM from './img/rick-morty.png';
import Personajes from "./components/personajes";
//import  imagess from './img/isagi.jpg';
//const imagen = require("./img/rick-morty.png");

//const imagen2 = require.context('./img' , true, '/.*');
//const allpath = imagen2.keys
function App() {
  const [personajes, setPersonajes] = useState(null);
  
  
  const reqApi = async () =>{
    //Accediendo a la Api de personajes
    const api = await fetch('https://rickandmortyapi.com/api/character');
    
    //Obteniendo los pesonajes de la Api en personajeApi
    const personajesApi = await api.json();
    //Array de los personajes
    setPersonajes(personajesApi.results);

    
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
          {personajes ?(
            <Personajes personajes = {personajes} setPersonajes = {setPersonajes}/>
          ) : (
            <>
            <img src={imagenRM} alt="R&M" className="img-home"></img>
            <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
            </>
          )}
      </header>
    </div>
  );
}
//<img src="img/rick-morty.png" alt="R&M" className='i'></img>
//<img src={images} alt="R&M" className='i'></img>
export default App;
  /*if(personajes != null) {
            <Personajes personajes = {personajes}/>
          }else {
            <>
            <img src={imagenRM} alt="R&M" className="img-home"></img>
            <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
            </>
          }*/