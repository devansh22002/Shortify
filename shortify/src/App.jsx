import './App.css'
import {useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  const [activeform , setactiveform] = useState('login');
  return (
    <>
        <Navbar setactiveform={setactiveform}/>
        {activeform === 'login' && <Login switchToSignup={()=> setactiveform('signup')} />}
        {activeform === 'signup' && <Signup switchToLogin={()=>setactiveform('login')}/>}

    </>
  )
}

export default App
