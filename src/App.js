import { Navigate, Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import Auth from './components/Auth';
import { useContext } from 'react';
import { tokenAuthorisationContext } from './Contexts/TockenAuth';

function App() {
  const {isAuthorized,setIsAuthorized} = useContext(tokenAuthorisationContext)

  return (
   <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/register' element={<Auth register/>}/>
      <Route path='/dashboard' element={isAuthorized? <Dashboard/>:<Home/>}/>
      <Route path='/*' element={<Navigate to={'/'}/>}/>
    
    </Routes>
    <Footer/>
   </div>
  );
}

export default App;
