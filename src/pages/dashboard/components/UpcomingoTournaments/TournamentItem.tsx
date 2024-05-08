import { LiaCoinsSolid } from 'react-icons/lia';
import { GrGroup } from 'react-icons/gr';
import { AiOutlineCalendar } from 'react-icons/ai';
import { iTournamentList } from './types/TournamentListType';

interface TournamentItemProps {
  tournamentItem: iTournamentList;
}

const TournamentItem = ({ tournamentItem }: TournamentItemProps) => {
  const {
    name,
    prize,
    teamLimit,
    registeredTeams,
    date,
    gameLogo,
    tournamentLogo,
  } = tournamentItem;

  return (
    <div className="tournament-item">
      <div className="logo">
        <img src={tournamentLogo} className='tournament-logo' alt="Tournament logo" />
      </div>
      <div className="content">
        <div className="tournament-heading">
          <span>{name}</span>
          <img src={gameLogo} className='game-logo'  alt="The name of the game" />
        </div>
        <div className="prizes-teams">
          <div className="prize">
            <LiaCoinsSolid size={12} /> <span> Prize: {prize} </span>
          </div>
          <div className="teams">
            <GrGroup size={12} />
            <span>
              Teams: {registeredTeams}/{teamLimit}
            </span>
          </div>
        </div>
        <div className="footer">
          <AiOutlineCalendar size={12} />
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default TournamentItem;
