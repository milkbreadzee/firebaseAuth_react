import {useState} from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import {auth} from "./firebaseConfig.js"

function App() {

  const [regEmail, setregEmail] = useState("")
  const [regPass, setregPass] = useState("")
  const [logEmail, setlogEmail] = useState("")
  const [logPass, setlogPass] = useState("")

  const register = async () => {
    try{
      const user = await createUserWithEmailAndPassword(
        auth,
        regEmail,
        regPass
      );
      console.log(user)
    }catch(error){
      console.log(error.message)
    }
    
  }
  const login = async () => {
    
  }
  const logout = async () => {
    
  }
  return (
    <>
      <div className="register">
        <h3>Sign Up</h3>
        <input type="text" placeholder="Email" onChange={(event) => {setregEmail(event.target.value);}}/>
        <input type="text" placeholder="Password" onChange={(event) => {setregPass(event.target.value);}} />
        <button onClick={register}>Create User</button>
      </div>

      <div className="login">
        <h3>Login</h3>
        <input type="text" placeholder="Email" onChange={(event) => {setlogEmail(event.target.value);}}/>
        <input type="text" placeholder="Password" onChange={(event) => {setlogPass(event.target.value);}} />
      </div>

      <button>Sign Out</button>
    </>
  );
}

export default App;
