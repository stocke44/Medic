import { useEffect } from 'react';
import {useState, useContext} from 'react';
import {Diagnosis, Medic, Gender, Age, SymListContext, SymptomsContext} from './Diagnosis';
import Form_error from './Symptom-val';
import SYMPTOMS from './Symptoms.json';




function Sidenav(){
    const {value,setValue}= useContext(Diagnosis);
    const {setSubmit} = useContext(Medic);
    const {symListContext, setSymlistContext} =useContext(SymListContext);
    const {symContext, setSymContext} =useContext(SymptomsContext);
    const {gender, setGender} =useContext(Gender);
    const {age,setAge} = useContext(Age);
    const [sex, updateSex] = useState('');
    const [error, setError] = useState('');
    const [symptoms, setSymptoms] = useState([]);
    const [ search, setSearch] = useState("");
    const [symList, setSymList] = useState([]);


    function results(e){
        setSymList([])
        let symSearch = []
        SYMPTOMS.filter((val) => {
            if (search === ""){
                return val
            } else if (val.Name.toLowerCase().includes(search.toLowerCase())){
                symSearch.push(val);
            }
        })
        
        setSymList(state => state.concat(symSearch))
    }

    function saveSymp(){
        setSymContext(symptoms)
        setSymlistContext(symList)
    }

    function selectedSymp(sym){
        console.log(value)
        if(!symptoms.includes(sym)){
            setValue(state => state.concat(sym.ID));
            setSymptoms(state => state.concat(sym));
            setSymList((state) => state.filter((value)=>
            sym !== value
        ));
        }   
    }
    
    function deleteSymp(sym){
        setSymptoms((state) => state.filter((value)=>
            sym !== value
        ));
        setSymList(state => state.concat(sym).sort((a, b) => a.Name.localeCompare(b.Name)));

        setValue((state) => state.filter((value)=>
        sym.ID !== value
    ));
    }
    
    useEffect(()=>{
        if(symListContext.length > 0){
            setSymList(symListContext)
        }
        if(symContext.length > 0){
            setSymptoms(symContext)
        }
        if(gender.length > 0){
            updateSex(gender)
        }

    },[])

    
    return (
        <div className="side-nav col-lg-3">
            <form>
                <div >
                    <label htmlFor="sex">
                        <h5>Sex</h5>
                        <select 
                        id="sex"
                        value={sex}
                        onChange={(e)=>{
                            updateSex(e.target.value);
                            setGender(e.target.value);
                            }}>
                            <option key='none' value="none">--Choose--</option>
                            <option key='male' value="male">Male</option>
                            <option key='female'value="female">Female</option>
                        </select>
                    </label>
                    <label className="age">
                        <h5>Age</h5>
                        <input defaultValue={age} type="number" min="0" onChange={(e)=>{setAge(e.target.value) ;}} ></input>
                    </label>
                </div>                    
                <label className="search">
                        <input list="symptoms" id="searchInput" placeholder="Search Symptoms" onKeyUp={(e)=> {setSearch(e.target.value)}}/>
                        <button className="icon" type="submit"  onClick={(e) => {e.preventDefault(); results(e)}}></button>
                </label>
            </form>
            {symptoms.length > 0 ? <h5>Symptoms</h5>: null}
            {symptoms.map((sym)=> {
                return (<div key={sym.ID} className="results" onClick={(e) => { deleteSymp( sym ) } }>
                    
                    {sym.Name} <span></span>                          
                </div>)
            })}
            {symList.length > 0 ? <h5>Search Results</h5>: null}
            {symList.map((sym)=> {
                return (<div key={sym.Name} className="results" onClick={(e) => { selectedSymp( sym ) } }>
                    
                    {sym.Name} <span></span>                           
                </div>)
            })}
            {error.length >0 ? <div>{error}</div>:null}
            <button className="button" onClick={(e)=>{
                setError(Form_error(age,symptoms,gender)) ; if(symptoms.length>0 && gender !="none"){setSubmit(true);saveSymp();}}}>Submit</button>
        </div>

    )
}

export default Sidenav;