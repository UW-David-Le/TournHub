import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactDOM } from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import TournamentPage from './pages/TournamentPage/TournamentPage';
import TournamentCard from './components/Tournament/TournamentCard';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path = "/">{<LandingPage/>}</Route>
    //     <Route path = "/tournament">{<TournamentPage/>}</Route>
    //       <h1>Hello</h1>
    //   </Routes>
    // </BrowserRouter>
    
    <div className='p-5'>
      <TournamentCard />
    </div>
    
  )
}

export default App;
