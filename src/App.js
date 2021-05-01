import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import login from "./components/login.component";
import main from "./components/main.component";
import main2 from "./components/main2.component";


function App() {
  return (
   <Router>
   <div>
     <Route path="/" exact component={main}/>
     <Route path="/login" component={login}/>
     <Route path="/main2" component={main2}/>
    </div> 
   </Router>
   
  );
}

export default App;
