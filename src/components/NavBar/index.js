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
      <div>
        <p>{`Score: ${score}`}</p>
        <p>{`Top Score: ${topScore}`}</p>
      </div>
    </nav>
  )
}

export default NavBar
