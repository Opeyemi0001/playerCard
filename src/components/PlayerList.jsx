import players from "./mockdata/players"
import Player from "./Player"

const PlayerList = () => {
  return (
    <div className="d-flex ">
      {players.map((playes, index) => (
        <Player
          key={index} {...playes} />
      ))}
    </div>
  )
}

export default PlayerList