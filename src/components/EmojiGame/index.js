import {Component} from 'react'
import NavBar from '../NavBar'
import './index.css'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    emojiArray: [],
    Score: 0,
    topScore: 0,
    resultState: false,
  }

  gamePlay = () => {
    const {Score, topScore} = this.state

    if (Score > topScore) {
      this.setState({
        resultState: false,
        Score: 0,
        emojiArray: [],
        topScore: Score,
      })
    } else {
      this.setState({
        resultState: false,
        Score: 0,
        emojiArray: [],
        topScore,
      })
    }
  }

  Upadteresult = () => {
    console.log('game Finished')
    this.setState(prevState => ({topScore: prevState.emojiArray.length}))
  }

  validateEmoji = id => {
    const {emojiArray, Score} = this.state
    const newArray = [...emojiArray, id]
    if (!emojiArray.includes(id)) {
      if (Score === 11) {
        this.setState(prevState => ({
          emojiArray: newArray,
          Score: prevState.Score + 1,
          resultState: true,
        }))
      } else {
        this.setState(prevState => ({
          emojiArray: newArray,
          Score: prevState.Score + 1,
        }))
      }
    } else {
      this.setState({
        resultState: true,
      })
    }
  }

  render() {
    const {Score, topScore, resultState} = this.state
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const Vik = shuffledEmojisList()
    return (
      <div className="MainPage">
        <NavBar Score={Score} topScore={topScore} resultState={resultState} />
        {resultState ? (
          <WinOrLoseCard Score={Score} gamePlay={this.gamePlay} />
        ) : (
          <ul className="EmojiList">
            {Vik.map(eachEmoji => (
              <EmojiCard
                eachEmoji={eachEmoji}
                key={eachEmoji.id}
                validateEmoji={this.validateEmoji}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default EmojiGame
