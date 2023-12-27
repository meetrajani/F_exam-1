import './App.css';
import Home from './comnponet/Home'
import Prodact from './comnponet/Prodact'
import { Route, Routes } from 'react-router-dom';
import About from './comnponet/About';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Prodact' element={<Prodact/>}/>
        <Route path='/:id' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
