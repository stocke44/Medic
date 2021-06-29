import { useState, useEffect} from 'react';
import {Diagnosis, Medic, Gender,Age} from './components/Diagnosis'
import Sidenav from './components/Sidenav';
import Card from './components/Card';
import getAuth from './components/Auth';

function App() {
  const [value , setValue] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [gender, setGender] = useState('none');
  const [age,setAge] = useState(0);

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
      <Age.Provider value = {{age,setAge}}>
        <Gender.Provider value={{gender,setGender}}>
          <section className="app row container">
            <Medic.Provider value={{submit,setSubmit}}>
              <Sidenav/>
              <Card token="test"/>          
            </Medic.Provider>
          </section>
        </Gender.Provider>        
      </Age.Provider>
    </Diagnosis.Provider>

  );
}

export default App;
