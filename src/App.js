import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  { Home }   from './components/Home';
import { AddUser } from './components/AddUser';
import { EditUser } from './components/EditUser';
import { GlobalProvider } from './context/GlobalState';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{maxWidth: '30rem', margin: "4rem auto" }}>
      <h1>CONTEXT API</h1>
      <GlobalProvider>
         <Router>
          <Switch>
            <Route exact path="/" component={Home}/> 
            <Route path="/add" component={AddUser}/>
            <Route path="/edit/:id" component={EditUser}/>
            <Route component={() => <h1>Page Not Found</h1>} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
