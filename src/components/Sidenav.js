import {useState, useContext, useEffect} from 'react';
import {Diagnosis,Medic} from './Diagnosis';
import SYMPTOMS from './Symptoms.json';
import '../styles/sidenav.scss';



function Sidenav(){
    const {value , setValue}= useContext(Diagnosis);
    const { submit, setSubmit} = useContext(Medic);
    const [sex, updateSex] = useState('');
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

    function selectedSymp(sym){
        if(!symptoms.includes(sym)){
            setValue(state => state.concat(sym.ID));
            setSymptoms(state => state.concat(sym));
        }   
    }
    
    function deleteSymp(sym){
        setSymptoms((state) => state.filter((value)=>
            sym !== value
        ));
        setValue((state) => state.filter((value)=>
        sym.ID !== value
    ));
    }

    
    // useEffect(()=>{
    //     getSymptomsInfo();
    // },[])

    // async function getSymptomsInfo (){
       
    //     let categorie = 'symptoms';
    //     let request = await fetch('/data/Symptoms.json');
        
    //     // let request = await fetch(`https://sandbox-healthservice.priaid.ch/${categorie}?token=${key}&language=en-gb` );
    //     let data = await request.json();    
    //     setSymptoms(data); 
    // }

    return (
        <div className="side-nav col-lg-3">
            <form>
                <label htmlFor="sex">
                    <h5>Sex</h5>
                    <select 
                     id="sex"
                     value={sex}
                     onChange={(e)=>{updateSex(e.target.value)}}>
                        <option key='none' value="none">--Choose--</option>
                        <option key='male' value="male">Male</option>
                        <option key='female'value="female">Female</option>
                    </select>
                </label>
                <label className="search">
                        <input list="symptoms" id="searchInput" placeholder="Search Symptoms" onKeyUp={(e)=> {setSearch(e.target.value)}}/>
                        <button type="submit"  onClick={(e) => {e.preventDefault(); results(e)}}>Search</button>
                </label>
            </form>
            {symptoms.length > 0 ? <h5>Symptoms</h5>: null}
            {symptoms.map((sym)=> {
                return (<p key={sym.ID} onClick={(e) => { deleteSymp( sym ) } }>
                    
                    {sym.Name}                           
                </p>)
            })}
            {symList.length > 0 ? <h5>Search Results</h5>: null}
            {symList.map((sym)=> {
                return (<p key={sym.Name} onClick={(e) => { selectedSymp( sym ) } }>
                    
                    {sym.Name}                           
                </p>)
            })}
            <button onClick={(e)=>{setSubmit(true)}}>Submit</button>
        </div>

    )
}

export default Sidenav;