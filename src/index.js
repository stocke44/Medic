import React, {useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';
import App from './App';
import Detail from './components/Application/Details';
import Footer from './components/Footer';
import Navigation from './components/Nav';
import Home from './components/Homepage';
import {Issue,Diagnosis,Gender,Age,SymListContext,SymptomsContext} from './components/Diagnosis'
import reportWebVitals from './reportWebVitals';
import getAuth from './components/Auth';

function Index(){
  const [idInfo , setIdInfo] = useState([]);
  const [value , setValue] = useState([]);
  const [gender, setGender] = useState('none');
  const [age,setAge] = useState('');
  const [symContext, setSymContext] = useState([]);
  const [symListContext, setSymlistContext] = useState([]);


  useEffect(()=>{
    async function tokenGetter() {
      const repToken = await getAuth();
      localStorage.setItem('token' , repToken)
    }

    tokenGetter();
    
    return ()=>{
      localStorage.removeItem('token')
    }
  },[])

  return(
    <Router basename='/Medic'>
    <Navigation/>


    <Issue.Provider value={{idInfo,setIdInfo}}>
      <Diagnosis.Provider value={{value,setValue}}>
        <Age.Provider value = {{age,setAge}}>
          <Gender.Provider value={{gender,setGender}}>
          <SymListContext.Provider value={{symListContext, setSymlistContext}}> 
            <SymptomsContext.Provider value={{symContext, setSymContext}}>
              <Switch>      
                <Route path="/search">
                  <App /> 
                </Route>
                <Route path="/details/:param/:id">
                  <Detail /> 
                </Route>
                <Route path="/">
                  <Home/>
                </Route>          
              </Switch> 
            </SymptomsContext.Provider>
          </SymListContext.Provider>
 
          </Gender.Provider>        
        </Age.Provider>
      </Diagnosis.Provider>
    
    </Issue.Provider>



    <Footer/>        
  </Router>
  )
}
ReactDOM.render(
  
  <React.StrictMode>
    <Index/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
