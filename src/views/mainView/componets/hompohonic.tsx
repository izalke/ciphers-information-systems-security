import { useState } from "react"
import { codeHomophonic } from "../../../features/cipherCode"
import { decodeHomphonic } from "../../../features/cipherDecode"

const Homphonic = ({ ...props }) => {
  const [message, setMessage] = useState("")
  const [cipherText, setCipherText] = useState("")
  const handleCoding = () => {
    setCipherText(codeHomophonic(props.homophonicMap, message))
  }

  const handleDecoding = () => {
    setCipherText(decodeHomphonic(props.homophonicMap, message))
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

export default Homphonic
