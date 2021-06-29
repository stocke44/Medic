function Form_error(values){
    let errors = {}
    if (symList.length === 0){
        errors.symptoms == "Symptoms must be selected"
    }

    if (gender === "none"){
        errors.gender = "Sex is required"
    }
}

export default Form_error;