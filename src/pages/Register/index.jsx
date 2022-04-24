import { BoxNav, BoxSelect, Container, Content } from "./styles";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Register = () => {
  const history = useHistory();
  return (
    <Container>
      <BoxNav>
        <h1>Kenzie Hub</h1>
        <Button onClick={() => history.push("/")} colorSchema={"--grey-3"}>
          Return
        </Button>
      </BoxNav>
      <Content>
        <h2>Create your account</h2>
        <form>
          <label>Name</label>
          <Input placeholder="Type your name" />

          <label>Email</label>
          <Input placeholder="Type your email" />

          <label>Password</label>
          <Input type="password" placeholder="Type your password" />

          <label>Confirm password</label>
          <Input type="password" placeholder="Type your password" />

          <label>Bio</label>
          <Input type="text" placeholder="Type your bio" />

          <label>Contact</label>
          <Input type="text" placeholder="Type your contact" />

          <BoxSelect>
            <label>Select module</label>
            <select>
              <option value="First module (Introduction to Frontend)">
                First module
              </option>
              <option value="Second module (Advanced Frontend)">
                Second module
              </option>
              <option value="Third module (Introduction to Backend)">
                Third module
              </option>
              <option value="Fourth module (Advanced Backend)">
                Fourth module
              </option>
            </select>
          </BoxSelect>

          <Button type="submit" colorSchema={"--primary-negative"}>
            Register
          </Button>
        </form>
      </Content>
    </Container>
  );
};
export default Register;
