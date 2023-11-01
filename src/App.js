import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import Auth from './components/Auth';

function App() {
  return (
   <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/register' element={<Auth register/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    <Footer/>
   </div>
  );
}

export default App;
