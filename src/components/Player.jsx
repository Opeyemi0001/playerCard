const Player = ({name, team, nationality, jerseyNumber, age, imgUrl }) => {

  Player.defaultProps = {
    name: "Unknown Player",
    team: "Unknown Team",
    nationality: "Unknown",
    jerseyNumber: 0,
    age: 0,
    imgUrl: "https://example.com/default.jpg"
};

  return (
    <div>
      <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={imgUrl} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Player Name: {name}</h5>
            <p className="card-text">Team: {team}</p>
            <p className="card-text">Nationality: {nationality} </p>
            <p className="card-text">Jersey Number: {jerseyNumber} </p>
            <p className="card-text">Age:{age} </p>
          </div>
      </div>
    </div>
  )
}

export default Player