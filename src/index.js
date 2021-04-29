import React, {useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import App from './App';
import Detail from './components/Application/Details';
import Footer from './components/Footer';
import Navigation from './components/Nav';
import Home from './components/Homepage';
import {Issue} from './components/Diagnosis'
import reportWebVitals from './reportWebVitals';
import getAuth from './components/Auth';

function Index(){
  const [idInfo , setIdInfo] = useState([]);

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
    <Router>
    <Navigation/>


    <Issue.Provider value={{idInfo,setIdInfo}}>
      <Switch>      
        <Route path="/search">
          <App /> 
        </Route>
        <Route path="/details/:id">
          <Detail /> 
        </Route>
        <Route path="/">
          <Home/>
        </Route>          
      </Switch>    
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
