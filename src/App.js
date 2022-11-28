import { useState} from 'react';
import {Medic} from './components/Diagnosis'
import Sidenav from './components/Sidenav';
import Card from './components/Card';
import getAuth from './components/Auth';

function App() {
  const [submit, setSubmit] = useState(false);


  return (

    <section className="app row container">
      <Medic.Provider value={{submit,setSubmit}}>
        <Sidenav/>
        <Card token="test"/>          
      </Medic.Provider>
    </section>

  );
}

export default App;
