import Routes from "./routes";
import GlobalStyle from "./styles/global";
import { Container } from "./styles/styles";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Routes />
    </Container>
  );
}

export default App;
