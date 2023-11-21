import Input from "./Input";
import { isEmail, isNotEmpty,hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";
export default function Login() {

  // const [enteredValues, setEnteredValues] = useState({
  //   email: '',
  //   password: '',
  // })

  // const [didEdit, setDidEdit] = useState({
  //   email: false,
  //   password: false,
  // });

  // function handleInputChange(identifier,event){
  //   setEnteredValues(prevValues => ({
  //     ...prevValues,
  //     [identifier]:event.target.value
  //   }));

  //   setDidEdit(prevEdit=>({
  //     ...prevEdit,
  //     [identifier]: false
  //   }));
  
  // }

  // function handleInputBlur(identifier,value){
  //   setDidEdit(prevEdit=>({
  //     ...prevEdit,
  //     [identifier]: true
  //   })
  //   );
  // }

  const {
    value: emailValue,
    handleInputChange: handleEmailChange, 
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError
  } = useInput('', (value)=> isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange, 
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError
  } = useInput('',(value)=> hasMinLength(value,6));
  
  function handleSubmit(event){
    event.preventDefault();

    if(emailHasError || passwordHasError){
      return;
    }

    console.log(emailValue,passwordValue);
    // setEnteredValues({
    //   email: '',
    //   password: '',
    // })
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input 
        label="Email"
        id='email' 
        type="email" 
        name="email"
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        value={emailValue}
        error={emailHasError && 'please enter a valid email !'}
        />

        <Input 
        label="Password"
        id="password" 
        type="password" 
        name="password"
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
        value={passwordValue}
        error={passwordHasError && 'please enter a valid password !'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
