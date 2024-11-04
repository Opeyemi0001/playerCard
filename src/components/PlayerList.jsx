import players from "./mockdata/players"
import Player from "./Player"

const PlayerList = () => {
  return (
    <div>
      {players.map((player, index) => (
        <Player key={index} {...Player} />
      ))}
    </div>
  )
}

export default PlayerList