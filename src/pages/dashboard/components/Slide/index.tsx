import { FiUsers } from 'react-icons/fi';
import { StyledSlide } from './style';

const Slide = () => {
  return (
    <StyledSlide className="slide">
      <div className="background"></div>

      <div className="content">
        <div className="text">
          <h2>League of legends</h2>
          <p>
            League of Legends is a team-based strategy game where two teams of
            five powerful champions face off to destroy the other's base.
          </p>
        </div>

        <div className="players-quantity">
          <div className="avatars">
            <img src="./player-3.png" alt="" />
            <img src="./player-2.png" alt="" />
            <img src="./player-1.png" alt="" />
          </div>
          <div className="quantity">
            <FiUsers size={20} />
            +27k Players
          </div>
        </div>
      </div>

      <img
        className="slide-image"
        src="./morgana.png"
        alt="character morgana of league of legends"
      />

      <div className="see-more-wrapper">
        <button>See more</button>
      </div>
    </StyledSlide>
  );
};

export default Slide;
