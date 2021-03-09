import './App.css';
import GlobalStyle from './styles/globalStyles';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import TestComp from './TestComp';
import Login from './pages/Auth/Login';


function App() {
  return (
    
    <Router>
    <GlobalStyle/>
    
      <Route exact path='/' component={TestComp}/>
      <Route exact path='/test' component={TestComp}/>
      <Route exact path='/login' component={Login}/>

    </Router>
    
    
    
  );
}

export default App;
