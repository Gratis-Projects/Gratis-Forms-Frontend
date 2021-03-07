import './App.css';
import { PrimaryButton } from './components/buttons';
import GlobalStyle from './styles/globalStyles';
import {useDispatch,useSelector} from 'react-redux';
import {login} from './redux/actions/userActions';


function App() {
  const dispatch=useDispatch();
  const userLogin=useSelector(state => state.userLogin)
  const {loading,error,userInfo}=userLogin;
  return (
    <>
    <GlobalStyle/>
    <PrimaryButton>Hello world</PrimaryButton>
    <h1>h1 heading</h1>
    <h2>h2 heading</h2>
    <h3>h3 heading</h3>
    <h4>h4 heading</h4>
    <p>Loading:{loading+'boolean'}</p>
    <p>Error: {error}</p>
    <button onClick={()=>{
      const user={
        email:'kundanchandel08@gmail.com',
        password:'123456'
      }
      dispatch(login(user))
    }}>login</button>
    
    </>
  );
}

export default App;
