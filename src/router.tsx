import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Tournament from './pages/tournament';
import Matches from './pages/Matches';
import Community from './pages/Community';
import Players from './pages/players';
import Games from './pages/games';
import MyTeam from './pages/my-team';
import Account from './pages/account';
import Dashboard from './pages/dashboard';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/account" element={<Account />} />
          <Route path="/myteam" element={<MyTeam />} />
          <Route path="/games" element={<Games />} />
          <Route path="/players" element={<Players />} />
          <Route path="/tournament" element={<Tournament />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
};
