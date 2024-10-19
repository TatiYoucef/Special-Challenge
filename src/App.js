import { BrowserRouter as Router , Routes , Route } from 'react-router-dom' ;
import Home from './Home';
import NotFound from './NotFound';
import CheckOwner from './CheckOwner';
import OratriceOfDawn from './OratriceofDawn';
import TheVault from './TheVault';


function App() {

  return (

    <Router>

      <div className="App">

        <div className="content">
          
          <Routes>

            <Route path='/' element={<Home/>} />
            <Route path='/6257975613479b4d2a39e20ffbdcdfa5287448ca970d895118091b2922f70104' element={<CheckOwner/>} /> 
            <Route path='/ebe054f08821294feee7bc442014fdd38b4836d83781d8ba99d38eb50d0c9d85' element={<OratriceOfDawn/>} />
            <Route path='/58845b1a849e7eae18a1b6163872aecb70ce7202ae78fc3722d92f2c38efef5a' element={<TheVault/>} />
            <Route path="*" element={<NotFound/>} />
            
          </Routes>

        </div>

      </div>

    </Router>
  );
}

export default App;
