import './App.css';
import SetupAndViewProduct from './pages/SetupAndViewProduct/SetupAndViewProduct';
import Login from './pages/Login/Login'
import './styles/Features/Calculator.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'
import Menu from './pages/Menu';
import Calculator from './Features/Calculator'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
          <Routes> 
            <Route path="/" element={<Login />} />
            <Route path='/home' element={<Home/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/Calculator' element={<Calculator/>}/>
          </Routes>
          <Footer/>
        </Router>   
    </div>
  );
}

export default App;
