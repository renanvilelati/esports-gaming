import { StyledTopGames } from './style';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
interface iTopGamesList {
  id: string;
  background: string;
  gameLogo: string;
}

const list: iTopGamesList[] = [
  {
    id: '1',
    background: './top-games-1.png',
    gameLogo: './dota-logo.png',
  },
  {
    id: '2',
    background: './top-games-2.png',
    gameLogo: './cs-logo.png',
  },
  {
    id: '3',
    background: './top-games-3.png',
    gameLogo: './lol-logo.png',
  },
  {
    id: '4',
    background: './top-games-4.png',
    gameLogo: './fortnite-logo.png',
  },
  {
    id: '5',
    background: './top-games-5.png',
    gameLogo: './cod-logo.png',
  },
];

const TopGames = () => {
  return (
    <StyledTopGames className="top-games">
      <h2>Top Games</h2>
      <button className="preview">
        <SlArrowLeft size={12} />
      </button>
      <button className="next">
        <SlArrowRight size={12} />
      </button>
      <div className="game-list">
        {list.map((game: iTopGamesList) => (
          <div key={game.id} className="game-item">
            <div className="background">
              <img src={game.background} alt="Game logo" height={350} />
            </div>
            <img className="game-logo" src={game.gameLogo} alt="Game logo" />
          </div>
        ))}
      </div>
    </StyledTopGames>
  );
};

export default TopGames;
