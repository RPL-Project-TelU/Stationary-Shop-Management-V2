import './App.css';
import SalesEntry from './pages/SalesEntry/SalesEntry';
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
        <SalesEntry/>
    </div>
  );
}

export default App;
