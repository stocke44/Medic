import {useState, useEffect, useContext} from 'react';
import { Issue } from '../Diagnosis';
import getAuth from '../Auth';
import defaultImg from '../../images/heartDisease.png';
import URL from '../../data/response.json';
import React from 'react';

function Detail(props){
    const {idInfo} = useContext(Issue);
    const [diagnosis, setDiagnosis] = useState([]);
    let [path,setPath] = useState();
    let token = localStorage.getItem('token');
    let [load,setLoad] = useState(true)
    
    
    useEffect(()=>{

        getInfo();

    },[])

    async function getInfo (){
        let path = parseInt(window.location.pathname.split("/")[3])
        setPath(path)
        let request = await fetch(`https://sandbox-healthservice.priaid.ch/issues/${path}/info?token=${token}&format=json&language=en-gb` );
        let data = await request.json();     
        setDiagnosis(data);
        setLoad(false)
        console.log(data)
    }

    function findImg(key){
        let src = '';
        URL.forEach((obj)=>{
            if (key === obj.ID){
                src = obj.URL
            }
        })
        return src
    }
    
    
    return (

        <React.Fragment>
            {load ?<div className='bars-8'></div>:  
                <section className="detail">
                    <div className="top-container">
                    <img src={findImg(path)} alt="default" ></img>
                        <div className="name">
                            <h4>Medical Name: {diagnosis.Name}</h4>
                            <h5>Common Name: {diagnosis.ProfName}</h5>    
                        </div>
                    </div> 
                    <div className="text-content">

                        <p><strong>Description: </strong>{diagnosis.Description}</p>
                        <p>< strong>Symptoms May Include:</strong> {diagnosis.PossibleSymptoms}</p>
                        <p><strong>Treatment:</strong> {diagnosis.TreatmentDescription}</p>
                    </div>
                </section> 
            } 
        </React.Fragment>

    )
}

export default Detail;