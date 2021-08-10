import {useState, useEffect,useContext} from 'react';
import {Diagnosis, Issue, Medic, Gender, Age} from './Diagnosis';
import {Link} from 'react-router-dom';
import URL from '../data/response.json';


function Cards (props){
    const {setIdInfo} = useContext(Issue);
    const {value}= useContext(Diagnosis);
    const {gender} = useContext(Gender);
    const {age} =useContext(Age);
    const {submit, setSubmit} = useContext(Medic);
    let [diagnosis,setDiagnosis] = useState([]);

    useEffect(()=>{

        if(submit){
            const token = localStorage.getItem('token');
            getDiagnosisInfo(token); 
            setSubmit(false);
        }
        
    },[submit])

    function findImg(key){
        let src = '';
        URL.forEach((obj)=>{
            if (key === obj.ID){
                src = obj.URL
            }
        })
        return src
    }

    async function getDiagnosisInfo (key){
        let current_year = new Date();
        let birth_year = current_year.getFullYear() - age ;
        let categorie = 'diagnosis';
        let request = await fetch(`https://sandbox-healthservice.priaid.ch/${categorie}?token=${key}&symptoms=[${value}]&year_of_birth=${birth_year}&gender=${gender}&language=en-gb` );
        let data = await request.json();     
        setDiagnosis(data);
   
    }


    return(
        <div className="card-container col-lg-9">
            { diagnosis.length === 0 ? <h5>No Data Found</h5>:
                diagnosis.map((data)=>(
                    <div className="card" key={data.Issue.Name}>
                        <div className="img-container">
                            <img src={findImg(data.Issue.ID)} alt="default" ></img>
                        </div>
                        <div className="card-info"  >
                            <h2>{data.Issue.Name}</h2>
                            <p>{data.Issue.IcdName}</p>
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