import { useState } from "react"
import { codeVigenere } from "../../../features/cipherCode"
import { decodeVigenere } from "../../../features/cipherDecode"

const Vigenere = ({ ...props }) => {
  const [message, setMessage] = useState("")
  const [key, setKey] = useState("")
  const [cipherText, setCipherText] = useState("")
  const handleCoding = () => {
    setCipherText(codeVigenere(props.characterSet, message, key))
  }

  const handleDecoding = () => {
    setCipherText(decodeVigenere(props.characterSet, message, key))
  }

  return (
    <div className={"entries"}>
      <input
        type={"text"}
        name={"message"}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input
        type={"text"}
        name={"message"}
        maxLength={1}
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <p className={"output"}>Wynik: {cipherText}</p>
      <button className={"action_button"} onClick={handleCoding}>
        zaszyfrować
      </button>
      <button className={"action_button"} onClick={handleDecoding}>
        odszyfrować
      </button>
    </div>
  )
}

export default Vigenere
