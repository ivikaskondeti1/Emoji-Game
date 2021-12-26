import './index.css'

const NavBar = props => {
  const {Score, topScore, resultState} = props

  const EmojiPage = () => (
    <div className="Navbar">
      <div className="NavbarHeading">
        <img
          className="emojiLogo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      <div className="NavbarHeading">
        <p className="score">Score: {Score}</p>
        <p>Top Score: {topScore}</p>
      </div>
    </div>
  )

  const resultpage = () => (
    <div className="Navbar2">
      <div className="NavbarHeading">
        <img
          className="emojiLogo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
    </div>
  )

  return <>{resultState ? resultpage() : EmojiPage()}</>
}

export default NavBar
