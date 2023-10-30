import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Projects from './pages/Projects';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
   <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/' element={<Projects/>}/>
      <Route path='/' element={<Register/>}/>
      <Route path='/' element={<Dashboard/>}/>
    </Routes>
    <Footer/>
   </div>
  );
}

export default App;
