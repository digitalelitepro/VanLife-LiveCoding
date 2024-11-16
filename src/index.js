import React from 'react';  
import ReactDOM  from 'react-dom/client' 
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import './index.css'
import Home from './pages/Home';

import About from './pages/About'
import Header from './pages/Header';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>); 


function App() {
  return ( 
        <BrowserRouter> 
              <Header/>
             <Routes>
                   <Route path='/' element={<Home/>} /> 
                   <Route path='/about' element={<About/>} />  
             </Routes>
        </BrowserRouter> 
  )
}
