import {useState} from 'react'
const useInput = (validateValue) => {
  const [enteredValue,setEnteredValue] = useState('')
  
  const [isTouched,setIsTouched] = useState(false)

  const valueIsValid = validateValue(enteredValue);
  
  const hasError = isTouched && !valueIsValid

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value)
  }

  const inputBlurHandler = () => {
    setIsTouched(true)
  }

  const reset = () => {
    setEnteredValue('')
    setIsTouched(false)
  }

  return {
    enteredValue,
    valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  }

}
export default useInput;