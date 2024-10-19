import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CheckOwner = () => {

  const [answer , setAnswer] = useState('') ;
  const [isSubmit , setIsSubmit] = useState(false);
  const [isTrue , setIsTrue] = useState(true);
  const navigate =  useNavigate() ;
  
  const handleSubmit = (e) => {

    e.preventDefault();
    setIsSubmit(true);

    if (answer === "Youcef") navigate('/ebe054f08821294feee7bc442014fdd38b4836d83781d8ba99d38eb50d0c9d85');
    else{

      setIsTrue(false);

      setTimeout(() => {
      
        setIsSubmit(false);
        setIsTrue(true);
  
      }, 3000);
      
    }

  }

  return ( 
    <div className="check-owner">

      <h1>Password forgotten ?</h1>
      <h2>To give you a hint , you must first pass the trial of the owner</h2>

      <h1>The HINT : Find the last value</h1>
      <p>a + z = 97122</p>
      <p>z + a = 71229</p>
      <p>b + c = 6362</p>
      <p>ta + ti = 10511697116</p>
      <p>you + cef = ?</p>

      <div className="textField-hint">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            required
            value={answer}

            onChange={ (e) => setAnswer(e.target.value) }
          />

          { !isSubmit && <button className="submit-button">Submit the answer</button>}
          { isSubmit && <button className="submit-button" disabled > Checking... </button>}

        </form>
      </div>

      { !isTrue && <p> Wrong Answer... </p> }

      <Link to="/" >
      
        <button className="submit-button">
          Go back 
        </button>
      
      </Link>

      

    </div>
  );
}
 
export default CheckOwner;