import './index.css'

const WinOrLoseCard = props => {
  const {Score, gamePlay} = props

  const PlayAgain = () => {
    gamePlay()
  }

  const winelemnet = () => (
    <div className="resultCard">
      <div className="resultDetails">
        <h1>You Won</h1>
        <p>Best Score</p>
        <p className="scoreDetails">{Score}/12</p>
        <button type="submit" onClick={PlayAgain}>
          Play Again
        </button>
      </div>
      <img
        className="REsultimg"
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        alt="win or lose"
      />
    </div>
  )

  const loseElement = () => (
    <div className="resultCard">
      <div className="resultDetails">
        <h1>You Lose</h1>
        <p>Score</p>
        <p className="scoreDetails">{Score}/12</p>
        <button type="submit" onClick={PlayAgain}>
          Play Again
        </button>
      </div>
      <img
        className="REsultimg"
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
      />
    </div>
  )

  return (
    <div className="mainresult">
      {Score < 12 ? loseElement() : winelemnet()}
    </div>
  )
}
export default WinOrLoseCard
