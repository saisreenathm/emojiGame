import './index.css'

const EmojiCard = ({item, handleOnClick}) => {
  const {emojiName, emojiUrl} = item
  const handleOnClickBtn = () => {
    handleOnClick(item)
  }
  return (
    <li className="li-container">
      <button className="li-btn" type="button" onClick={handleOnClickBtn}>
        <img className="emoji" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
