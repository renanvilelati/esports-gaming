import { LiaCoinsSolid } from 'react-icons/lia';
import { GrGroup } from 'react-icons/gr';
import { AiOutlineCalendar } from 'react-icons/ai';
import { iTournamentList } from './types/TournamentListType';
import { StyledTournamentItem } from './style';
import { dateFormat } from '../../../../utils/DateFormat';

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
    <StyledTournamentItem>

      <div className="logo">
        <img src={tournamentLogo} className='tournament-logo' alt="Tournament logo" />
      </div>

      <div className="content">

        <div className="tournament-heading">
          <h4>{name}</h4>
          <img src={gameLogo} className='game-logo'  alt="The name of the game" />
        </div>
        
        <div className="prizes-teams">
          <div className="prize">
            <LiaCoinsSolid size={18} /> <span> Prize: {prize} </span>
          </div>
          <div className="teams">
            <GrGroup size={18} />
            <span>
              Teams: {registeredTeams}/{teamLimit}
            </span>
          </div>
        </div>

        <div className="footer">
          <AiOutlineCalendar size={18} />
          <span>{dateFormat(date)}</span>
        </div>

      </div>
    </StyledTournamentItem>
  );
};

export default TournamentItem;
