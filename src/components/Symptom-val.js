function Form_error(age,list,sex){
    let messageList = {
        single: "Symptoms",
        double: "Age",
        triple: "Sex"
    };

    let message = "";
    let totalErrors =  0;

    if (list.length === 0){
        message += "Symptoms, "
        totalErrors++
    }

    if (sex === "none" && totalErrors > 0){
        message += "Sex, "
        totalErrors++
    }else if(sex === "none"){
        message += "Sex "
        totalErrors++
    }

    if(age.length === 0 ){
        message += "Age "
    }

    return message.length ==0 ? message: "The Following must Be Selected: " + message ;
}

export default Form_error;