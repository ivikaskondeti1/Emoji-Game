import './index.css'

const EmojiCard = props => {
  const {eachEmoji, validateEmoji} = props
  const {emojiName, emojiUrl, id} = eachEmoji
  // console.log(emojiUrl)
  const emojiButton = () => {
    validateEmoji(id)
  }
  return (
    <li className="EmojiItem">
      <button type="submit" onClick={emojiButton} className="Buttonemojis">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
