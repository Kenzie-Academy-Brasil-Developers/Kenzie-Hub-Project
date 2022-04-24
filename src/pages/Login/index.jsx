import { Container, Content } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  return (
    <Container>
      <h1>Kenzie Hub</h1>
      <Content>
        <h2>Login</h2>
        <form>
          <label>Email</label>
          <Input placeholder="Type your email" />

          <label>Password</label>
          <Input type="password" placeholder="Type your password" />
          <Button type="submit" colorSchema={"--primary"}>
            Login
          </Button>
        </form>
        <div>
          <span>Don't have an account yet?</span>

          <Button
            onClick={() => history.push("/register")}
            colorSchema={"--grey-1"}
          >
            Register
          </Button>
        </div>
      </Content>
    </Container>
  );
};
export default Login;
