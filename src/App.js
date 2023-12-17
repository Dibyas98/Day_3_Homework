import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Footer from './components/footer';
import { useState } from 'react';

function App() {
   const [mode, setMode] = useState('light');
   const togglemode = ()=>{
    if(mode==='light'){
      setMode('dark')
      
    }else{
      setMode('light');
    
    }
   }
  return (
   <div className={`sta ${mode}`} >
    <Header mode= {mode} toggle={togglemode}></Header>
    <Hero mode={mode}></Hero>
    <Footer></Footer>
   </div>
  );
}

export default App;
