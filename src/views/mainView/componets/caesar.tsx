import { useState } from "react"
import { codeCaesar } from "../../../features/cipherCode"
import { decodeCaesar } from "../../../features/cipherDecode"

const Caesar = ({ ...props }): JSX.Element => {
  const [message, setMessage] = useState("")
  const [key, setKey] = useState<number>(1)
  const [cipherText, setCipherText] = useState("")
  const handleCoding = () => {
    setCipherText(codeCaesar(props.characterSet, message, key))
  }

  const handleDecoding = () => {
    setCipherText(decodeCaesar(props.characterSet, message, key))
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
        type={"number"}
        name={"key"}
        value={key}
        onChange={(e) => setKey(Number(e.target.value))}
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

export default Caesar
