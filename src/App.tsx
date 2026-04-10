import "./styles/global.css"
import "./styles/theme.css"
import { Container } from "./components/Container"
import { Logo } from "./components/Logo"
import { Menu } from "./components/Menu"
import { Count } from "./components/CountDown"
import { DefaultInput } from "./components/DefaultInput"
import { Cycles } from "./components/Cycle"
import { DefaultButton } from "./components/DefaultButton"
import { Heading } from "./components/Heading"
import { CirclePlay, CircleStop } from "lucide-react"
import { useState } from "react"

export function App() {
  
  const [numero, setNumero] = useState(0)
  

  function handleClick(){
    setNumero(estadoAnterior => estadoAnterior + 1)  
  }
  return (
    <>
      <Heading>
        Número: <span id='numero'>{numero}</span>
      </Heading>
      <button onClick={handleClick}>Aumenta</button>
      <Container>
        <Heading>0</Heading>
        <Logo />
        <Menu/>
      </Container>
      <Container>
        <Count/>
      </Container>
      <Container>
        <form className="form" action="">
        <div className="formRow">
          <DefaultInput labelText= 'Inserir Tempo ⏱️' id="meuInput" type="text"/>
        </div>
        <div className="formRow">
          <Cycles/>
        </div>
        <div className="formRow">
          <DefaultButton icon = {<CirclePlay/>} color="green"/>
          <DefaultButton icon = {<CircleStop/>} color="red" />
        </div>
        </form>
      </Container>
    </>
  )
}

export default App
