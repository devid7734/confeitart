import './App.css';

import { Link, Outlet } from "react-router-dom";

function App() {
  
  return (
      <div className="App">
         
       <h1> REACT ROUTER </h1>

        <Link id='perfil' to="/Perfil">Perfil</Link>

      <Outlet/>

      </div>
     
  );
}

export default App;
