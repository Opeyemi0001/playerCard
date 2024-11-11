const Player = ({name, team, nationality, jerseyNumber, age, imgUrl }) => {

  Player.defaultProps = {
    name: "Unknown Player",
    team: "Unknown Team",
    nationality: "Unknown",
    jerseyNumber: 0,
    age: 0,
    imgUrl: "https://th.bing.com/th/id/OIP.AWX4OdiKNkWcQw80HEUh7gAAAA?rs=1&pid=ImgDetMain"
};

  return (
    <div>
      <div className="card rounded" style={{width: "16rem", margin: "0.5rem"}}>
        <img className="card-img-top" src={imgUrl} alt="player image" style={{height: "12rem"}} />
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