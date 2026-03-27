import "./styles/global.css"
import "./styles/theme.css"
import { Container } from "./components/Container"
import { Logo } from "./components/Logo"
import { Menu } from "./components/Menu"
import { Count } from "./components/CountDown"
import { DefaultInput } from "./components/DefaultInput"
import { Cycles } from "./components/Cycle"
import { DefaultButton } from "./components/DefaultButton"
import { CirclePlay, CircleStop } from "lucide-react"

function App() {


  return (
    <>
      <Container>
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
