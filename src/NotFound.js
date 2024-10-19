import { Link } from "react-router-dom";

const NotFound = () => {
  return ( 

    <div className="not-found">
      <h1>{'Something wrong happened :( ....'}</h1>
      <p>Page not Found... (You aren't brute forcing the page , do you ?)</p>
      <Link to='/'>Go back to Home page</Link>
    </div>

  );
}
 
export default NotFound;