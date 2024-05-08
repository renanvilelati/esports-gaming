import PageTitle from '../../components/PageTitle';
import GeneralChat from './components/GeneralChat';
import Slide from './components/Slide';
import TopGames from './components/TopGames';
import UpcomingTournaments from './components/UpcomingoTournaments';
import { StyledDashboard } from './style';

const Dashboard = () => {
  return (
    <>
      <PageTitle>
        <span> Welcome back,</span> Renan
      </PageTitle>
      <StyledDashboard>
        <Slide />
        <TopGames />
        <UpcomingTournaments />
        <GeneralChat />
      </StyledDashboard>
    </>
  );
};

export default Dashboard;
