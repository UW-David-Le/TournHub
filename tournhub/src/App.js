import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import TournamentPage from './pages/TournamentPage/TournamentPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/">{<LandingPage/>}</Route>
        <Route path = "/tournament">{<TournamentPage/>}</Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
