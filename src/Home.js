import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {

  const [password , setPassword] = useState(''); 
  const [isSubmit , setIsSubmit] = useState(false);
  const [isTrue , setIsTrue] = useState(true);
  const navigate =  useNavigate() ;

  const handleSubmit = (event) => {

    setIsSubmit(true);
    event.preventDefault();

    if (password === "Youcef") navigate('/58845b1a849e7eae18a1b6163872aecb70ce7202ae78fc3722d92f2c38efef5a');
    else{

      setIsTrue(false);

      setTimeout(() => {
      
        setIsSubmit(false);
        setIsTrue(true);
  
      }, 3000);
      
    }

  }

  return ( 

    <div className="home">

      <h1>Welcome to the secret vault</h1>
      <h2>You might need a password to pass : </h2>

      <div className="textField">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            required
            value={password}

            onChange={ (e) => setPassword(e.target.value) }
          />

          { !isSubmit && <button className="submit-button"> Unlock the vault </button>}
          { isSubmit && <button className="submit-button" disabled > Checking... </button>}

        </form>
      </div>
    
      { !isTrue && <p> Wrong key ... </p> }

      <div className="forgotten">

        <Link to = "/6257975613479b4d2a39e20ffbdcdfa5287448ca970d895118091b2922f70104">Forgot password ?</Link>

      </div>
    
    </div>
  );
}
 
export default Home;