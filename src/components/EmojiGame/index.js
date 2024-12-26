/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.



*/

import {Component} from 'react'
import NavBar from '../NavBar'
import './index.css'

// Write your code here.
class EmojiGame extends Component {
  state = {
    score: 0,
    clickedEmojis: [],
    topScore: 0,
    gameStatus: '',
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {score, clickedEmojis, topScore, gameStatus} = this.state

    console.log('Shuffled: ', this.shuffledEmojisList())
    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} />
      </div>
    )
  }
}

export default EmojiGame
