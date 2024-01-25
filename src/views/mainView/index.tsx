import { useState, lazy, Suspense } from "react";
import "./main.css";
import Caesar from "./componets/caesar";
import Homphonic from "./componets/hompohonic";
import Polybius from "./componets/polybius";
import Trithemius from "./componets/trithemius";
import Vigenere from "./componets/vigenere";

const MainView = ({ ...props }) => {
  const [cipher, setCipher] = useState("caesar");
  const getProperComponent = (
    cipherName: string,
    characterSet: string[],
    polybiusSquare: string[][],
    homophonicMap: any
  ) => {
    switch (cipherName) {
      case "caesar":
        return (
          <Caesar
            characterSet={characterSet}
            polybiusSquare={polybiusSquare}
            homophonicMap={homophonicMap}
          />
        );
      case "polybius":
        return (
          <Polybius
            characterSet={characterSet}
            polybiusSquare={polybiusSquare}
            homophonicMap={homophonicMap}
          />
        );
      case "homophonic":
        return (
          <Homphonic
            characterSet={characterSet}
            polybiusSquare={polybiusSquare}
            homophonicMap={homophonicMap}
          />
        );
      case "trithemius":
        return (
          <Trithemius
            characterSet={characterSet}
            polybiusSquare={polybiusSquare}
            homophonicMap={homophonicMap}
          />
        );
      case "vigenere":
        return (
          <Vigenere
            characterSet={characterSet}
            polybiusSquare={polybiusSquare}
            homophonicMap={homophonicMap}
          />
        );
      default:
        return (
          <Caesar
            characterSet={characterSet}
            polybiusSquare={polybiusSquare}
            homophonicMap={homophonicMap}
          />
        );
    }
  };

  return (
    <section className={"wrapper"}>
      <div className={"tabs"}>
        <button
          className={cipher === "caesar" ? "tab_active" : "tab"}
          onClick={() => setCipher("caesar")}
        >
          Cezar
        </button>
        <button
          className={cipher === "polybius" ? "tab_active" : "tab"}
          onClick={() => setCipher("polybius")}
        >
          Polibiusz
        </button>
        <button
          className={cipher === "homophonic" ? "tab_active" : "tab"}
          onClick={() => setCipher("homophonic")}
        >
          Homofoniczny
        </button>
        <button
          className={cipher === "trithemius" ? "tab_active" : "tab"}
          onClick={() => setCipher("trithemius")}
        >
          Tritemiusz
        </button>
        <button
          className={cipher === "vigenere" ? "tab_active" : "tab"}
          onClick={() => setCipher("vigenere")}
        >
          Vigener
        </button>
      </div>
      {getProperComponent(
        cipher,
        props.characterSet,
        props.polybiusSquare,
        props.homophonicMap
      )}
      {/* <DynamicComponent
          characterSet={props.characterSet}
          polybiusSquare={props.polybiusSquare}
          homophonicMap={props.homophonicMap}
        /> */}
    </section>
  );
};

export default MainView;
