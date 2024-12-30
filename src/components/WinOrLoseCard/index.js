import './index.css'

const WinOrLoseCard = ({currentScore, startOver}) => {
  const handleOnClick = () => {
    startOver()
  }

  const isWin = currentScore === 12
  const gameUrl = `https://assets.ccbp.in/frontend/react-js/${
    isWin ? `won` : `lose`
  }-game-img.png`
  console.log(currentScore)
  return (
    <div className="card">
      <div className="text-elements">
        <h1 className="win-heading">{`You ${isWin ? `Won` : `Lose`}`}</h1>
        <p className="p">{isWin ? `Best Score` : `Score`}</p>
        <p className="p score">{`${currentScore}/12`}</p>
        <button
          className="play-again-btn"
          type="button"
          onClick={handleOnClick}
        >
          Play Again
        </button>
      </div>
      <div className="image-container">
        <img className="win-icon" src={gameUrl} alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
