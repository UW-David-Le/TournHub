import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactDOM } from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import TournamentPage from './pages/TournamentPage/TournamentPage';
import TournamentCard from './components/Tournament/TournamentCard';
import Header from './components/Header/Header';
import SocialMedia from './components/Footer/SocialMedia';
import NavigationBar from './components/Navigation/Navbar';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path = "/">{<LandingPage/>}</Route>
    //     <Route path = "/tournament">{<TournamentPage/>}</Route>
    //       <h1>Hello</h1>
    //   </Routes>
    // </BrowserRouter>
    
    <div className=''>
      <NavigationBar />
    </div>
    
  )
}

export default App;
