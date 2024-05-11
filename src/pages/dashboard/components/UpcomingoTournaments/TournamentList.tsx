import TournamentItem from "./TournamentItem"
import { iTournamentList } from "./types/TournamentListType"

interface TournamentListProps {
  list: iTournamentList[]
}

const TournamentList = ({list}: TournamentListProps) => {
  return (
    list.map( item => <TournamentItem key={item.id} tournamentItem={item} />)
  )
}

export default TournamentList
