import { BiTrophy } from 'react-icons/bi';
import { StyledUpcomingTournaments } from './style';
import TournamentList from './TournamentList';
import { iTournamentList } from './types/TournamentListType';
import Divider from '../../../../components/Divider';

const list: iTournamentList[] = [
  {
    id: '1',
    name: 'Esport Tournament',
    gameLogo: 'lol-logo.png',
    prize: 100000,
    teamLimit: 8,
    registeredTeams: 7,
    date: '2024-05-09T00:00:00.000Z',
    tournamentLogo: 'tournament-1.png',
  },
  {
    id: '2',
    name: 'Versus Tournament',
    gameLogo: 'cs-logo.png',
    prize: 300000,
    teamLimit: 8,
    registeredTeams: 5,
    date: '2024-05-15T00:00:00.000Z',
    tournamentLogo: 'tournament-2.png',
  },
  {
    id: '3',
    name: 'Gasmashs',
    gameLogo: 'lol-logo.png',
    prize: 200000,
    teamLimit: 4,
    registeredTeams: 3,
    date: '2024-05-20T00:00:00.000Z',
    tournamentLogo: 'tournament-3.png',
  },
  {
    id: '4',
    name: 'G2 Rivals',
    gameLogo: 'dota-logo.png',
    prize: 250000,
    teamLimit: 4,
    registeredTeams: 4,
    date: '2024-05-25T00:00:00.000Z',
    tournamentLogo: 'tournament-4.png',
  },
];

const UpcomingTournaments = () => {
  return (
    <StyledUpcomingTournaments className="upcoming-tournaments">
      <div className="header">
        <BiTrophy size={20} />
        <h4>Upcoming Tournaments</h4>
      </div>

      <TournamentList list={list} />
      <Divider />
      <button type='button'>See more</button>
    </StyledUpcomingTournaments>
  );
};

export default UpcomingTournaments;
