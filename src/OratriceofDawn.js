import { Link } from "react-router-dom";

const OratriceOfDawn = () => {
  return ( 

    <div className="Oratrice">
      <h1>You have passed the Trial</h1>
      <h2>You can see now the hint for unlocking your vault</h2>
      <p>The hint is : "Today's wordle (27th October 2024)"+"daily chess solution code in serie(27th October 2024)"+"Full Name of owner in lower case"</p>

      <Link to="/" >
      
        <button className="submit-button">
          Go back 
        </button>
      
      </Link>

    </div>

  );
}
 
export default OratriceOfDawn;