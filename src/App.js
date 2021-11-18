
import {useState} from 'react';
import DropdownBrazillianState from "./components/Forms/DropdownBrazillianState/index";
import DropdownBrazillianCity from "./components/Forms/DropdownBrazillianCity/index";
import './App.css';

function App() {
  const [ fromValues, setFromValues] = useState([])

  const handleInputChange = (e) =>{
    e.preventDefault();
    const {value, name } = e.target;
    setFromValues({...fromValues, [name]:value })
  }


  return (
    <>
      <div classname="container">
        <from>
          <label htmlFor="state"> Estado:  </label><br />
            <DropdownBrazillianState onChange={handleInputChange}/> <br />
          <label htmlFor="city"> Cidade:  </label><br />
            <DropdownBrazillianCity state={fromValues.state} />
        </from>
      </div>
    </>
  );
}

export default App;
