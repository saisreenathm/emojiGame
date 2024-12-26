/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.



*/

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    clickedEmojis: [],
    topScore: 0,
    gameStatus: true,
  }

  handleOnClick = emoji => {
    this.setState(prevState => {
      const {clickedEmojis, score, topScore} = prevState
      if (clickedEmojis.filter(each => each.id === emoji.id).length >= 1) {
        console.log('Game Over')
        return {
          topScore: topScore < score ? score : topScore,
          clickedEmojis: [],
          gameStatus: false,
        }
      }
      const gameStatus = score !== 11
      return {
        score: score + 1,
        clickedEmojis: [...clickedEmojis, emoji],
        gameStatus,
      }
    })
  }

  startOver = () => {
    this.setState({
      score: 0,
      clickedEmojis: [],
      gameStatus: true,
    })
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {score, topScore, gameStatus} = this.state
    const currentEmojiList = this.shuffledEmojisList()

    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} />
        {gameStatus ? (
          <ul className="game-container">
            {currentEmojiList.map(emoji => (
              <EmojiCard
                key={emoji.id}
                item={emoji}
                handleOnClick={this.handleOnClick}
              />
            ))}
          </ul>
        ) : (
          <WinOrLoseCard currentScore={score} startOver={this.startOver} />
        )}
      </div>
    )
  }
}

export default EmojiGame
