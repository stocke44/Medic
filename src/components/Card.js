import {useState, useEffect,useContext} from 'react';
import {Diagnosis, Issue, Medic, Gender} from './Diagnosis';
import {Link} from 'react-router-dom';
import authToken from './Auth';
import getAuth from './Auth';
import defaultImg from '../images/heartDisease.png';


function Cards (props){
    const {setIdInfo} = useContext(Issue);
    const {value}= useContext(Diagnosis);
    const {gender} = useContext(Gender);
    const {submit, setSubmit} = useContext(Medic);
    let [diagnosis,setDiagnosis] = useState([]);

    useEffect(()=>{

        if(submit){
            const token = localStorage.getItem('token');
            getDiagnosisInfo(token); 
            setSubmit(false);
        }
        
    },[submit])

    async function getDiagnosisInfo (key){
        let age = 1970;
        let sex = 'male'
        let categorie = 'diagnosis';
        let request = await fetch(`https://sandbox-healthservice.priaid.ch/${categorie}?token=${key}&symptoms=[${value}]&year_of_birth=${age}&gender=${gender}&language=en-gb` );
        let data = await request.json();     
        setDiagnosis(data);
   
    }


    return(
        <div className="card-container col-lg-9">
            { diagnosis.length === 0 ? <h5>No Data Found</h5>:
                diagnosis.map((data)=>(
                    <div className="card" key={data.Issue.Name}>
                        <div className="img-container">
                            <img src={defaultImg} alt="default" ></img>
                        </div>
                        <div className="card-info"  >
                            <h2>{data.Issue.Name}</h2>
                            <h3>{data.Issue.IcdName}</h3>
                            <div className="button-box">
                                <Link to={`/details/${data.Issue.Name.replace(/ /g,"_")}`} onClick={e => setIdInfo(data.Issue.ID)} className="button">
                                    Click Here
                                </Link>   
                            </div>
                        </div>
                    </div>

                ))
                
            }
         </div>   
    )
}

export default Cards;