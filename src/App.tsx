import "./styles/global.css"
import "./styles/theme.css"
import { Container } from "./components/Container"
import { Logo } from "./components/Logo"
import { Menu } from "./components/Menu"
import { Count } from "./components/CountDown"
import { DefaultInput } from "./components/DefaultInput"

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
          <DefaultInput labelText= 'label' id="meuInput" type="text"/>
        </div>
        <div className="formRow">
          <p>escrever do formulario</p>
        </div>
        <div className="formRow">
          <p>0 0 0 0 0 0 0 0 0 </p>
        </div>
        <div className="formRow">
          <button>Enviar</button>
        </div>
        </form>
      </Container>
    </>
  )
}

export default App
