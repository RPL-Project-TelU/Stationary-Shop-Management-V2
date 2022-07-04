import './App.css';
import './styles/Features/Calculator.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './Login/Login';
import Home from './pages/Home'
import Calculator from './Features/Calculator'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PurchaseEntry from './pages/PurchaseEntry/PurchaseEntry';
import DamageEntry from './pages/DamageEntry/DamageEntry';
import SalesEntry from './pages/SalesEntry/SalesEntry';
import SetupAndViewProduct from './pages/SetupAndViewProduct/SetupAndViewProduct';

function App() {
  return (
    <div className="App">
         <Router>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path='/home' element={<Home/>}/>
              <Route path='/Calculator' element={<Calculator/>}/>
              <Route path='/PurchaseEntry' element={<PurchaseEntry/>}/>
              <Route path='/DamageEntry' element={<DamageEntry/>}/>
              <Route path='/SalesEntry' element={<SalesEntry/>}/>
              <Route path='/SetupAndViewProduct' element={<SetupAndViewProduct/>}/>
            </Routes>
          <Footer/>
         </Router>
    </div>
  );
}

export default App;
