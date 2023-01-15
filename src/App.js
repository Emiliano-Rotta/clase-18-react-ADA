import NavBar from "./components/navBar"
import Form from "./components/formulario"
import Titulo from "./components/titulo"
import FondoOscuro from "./components/fondoOscuro"
import { useState } from 'react';
import s from "./App.module.css";

const App = () => {
  const [color, setColor] = useState('pink');

  function boxClicked() {
    setColor(() => { 
      if (color === "pink") return "gray"
      if (color === "gray") return "pink";
   });
  }

  return (
    <div>
      {(color === "pink") ? <div className={s.pink}>
      <NavBar />
      <FondoOscuro boxClicked={boxClicked}/>
      <Titulo />
      <Form />
      </div>
      : <div className={s.gray}>
      <NavBar />
      <FondoOscuro boxClicked={boxClicked}/>
      <Titulo />
      <Form />
      </div>}
    </div>
  );
}

export default App;
