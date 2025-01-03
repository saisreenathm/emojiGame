import './index.css'

const NavBar = ({score, topScore}) => {
  console.log('In NavBar')
  console.log(score)
  const displayScore = score !== 12
  const topScoreText = displayScore ? `Top Score: ${topScore}` : ''
  const scoreText = displayScore ? `Score: ${score}` : ''
  return (
    <nav className="nav-bar">
      <div className="heading">
        <img
          className="nav-icon"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="nav-heading">Emoji Game</h1>
      </div>
      <div>
        <p>{scoreText}</p>
        <p>{topScoreText}</p>
      </div>
    </nav>
  )
}

export default NavBar
