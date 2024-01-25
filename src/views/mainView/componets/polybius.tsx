import { useState } from "react"
import { codePolybius } from "../../../features/cipherCode"
import { decodePolybius } from "../../../features/cipherDecode"

const Polybius = ({ ...props }) => {
  const [message, setMessage] = useState("")
  const [cipherText, setCipherText] = useState("")
  const handleCoding = () => {
    setCipherText(codePolybius(props.polybiusSquare, message))
  }

  const handleDecoding = () => {
    setCipherText(decodePolybius(props.polybiusSquare, message))
  }

  return (
    <div className={"entries"}>
      <input
        type={"text"}
        name={"message"}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
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

export default Polybius
