import { useState } from "react";

export function useInput(dafaultValue, validationFn){

    const [enteredValue, setEnteredValue] = useState(dafaultValue)  
    const [didEdit, setDidEdit] = useState(false);
    
    const valueIsValid = validationFn(enteredValue)

    function handleInputChange(event){
        setEnteredValue(event.target.value);
        setDidEdit(false);
      }
    
      function handleInputBlur(){
        setDidEdit(true);
      }

      return {
        value:enteredValue,
        handleInputChange,
        handleInputBlur,
        hasError: didEdit && !valueIsValid
        };
} 