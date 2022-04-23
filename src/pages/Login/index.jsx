import { Container, Content } from "./styles";
import Button from "../../components/Button";

const Login = () => {
  return (
    <Container>
      <h1>Kenzie Hub</h1>
      <Content>
        <h2>Login</h2>
        <form>
          <label>Email</label>
          <input type="text" />

          <label>Password</label>
          <input type="password" />
          <Button type="submit" colorSchema={"--primary"}>
            Login
          </Button>
        </form>
      </Content>
    </Container>
  );
};
export default Login;
