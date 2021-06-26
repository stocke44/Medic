import { useState, useEffect} from 'react';
import {Diagnosis, Medic} from './components/Diagnosis'
import Sidenav from './components/Sidenav';
import Card from './components/Card';
import getAuth from './components/Auth';

function App() {
  const [value , setValue] = useState([]);
  const [submit, setSubmit] = useState(false);

  // useEffect(()=>{
  //   async function tokenGetter() {
  //     const repToken = await getAuth();
  //     localStorage.setItem('token' , repToken)
  //     setT(repToken);
  //     console.log(t);
  //   }

  //   tokenGetter();
    
  //   return ()=>{
  //     localStorage.removeItem('token')
  //   }
  // },[])

  return (
    <Diagnosis.Provider value={{value,setValue}}>
      <section className="app row container">
        <Medic.Provider value={{submit,setSubmit}}>
          <Sidenav/>
          <Card token="test"/>          
        </Medic.Provider>
      </section>
    </Diagnosis.Provider>

  );
}

export default App;
