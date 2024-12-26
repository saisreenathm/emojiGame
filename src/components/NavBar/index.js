import './index.css'

const NavBar = ({score, topScore}) => {
  console.log('In NavBar')
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
      <ul>
        <li>Score: {score}</li>
        <li>Top Score: {topScore}</li>
      </ul>
    </nav>
  )
}

export default NavBar
