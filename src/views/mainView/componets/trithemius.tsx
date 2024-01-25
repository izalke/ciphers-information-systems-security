import { useState } from "react"
import { codeTrithemius } from "../../../features/cipherCode"
import { decodeTrithemius } from "../../../features/cipherDecode"

const Homphonic = ({ ...props }) => {
  const [message, setMessage] = useState("")
  const [key, setKey] = useState("");
  const [cipherText, setCipherText] = useState("")
  const handleCoding = () => {
    setCipherText(codeTrithemius(key, message, props.characterSet))
  }

  const handleDecoding = () => {
    setCipherText(decodeTrithemius(key, message, props.characterSet))
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

export default Homphonic;
