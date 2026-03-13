import "./styles/global.css"
import "./styles/theme.css"
import { Container } from "./components/Container"
import { Logo } from "./components/Logo"
import { Menu } from "./components/Menu"

function App() {


  return (
    <>
      <h1>Bem vindo Felipe</h1>
      <Container>
        Hello world container
        <Logo />
        <Menu/>
      </Container>
    </>
  )
}

export default App
