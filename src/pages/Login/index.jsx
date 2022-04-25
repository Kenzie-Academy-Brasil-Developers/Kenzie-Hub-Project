import { BoxNewAccount, Container, Content } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useHistory, Redirect } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BoxDescription } from "../Login/styles";
import api from "../../services/api";
import { toast } from "react-toastify";

const Login = ({ authentication, setAuthentication }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Required field!")
      .email("Email is not valid!"),
    password: yup
      .string()
      .required("Required field!")
      .min(6, "Minimum 6 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const formData = (data) => {
    api
      .post("/sessions", data)
      .then((resp) => {
        const { token, user } = resp.data;
        localStorage.setItem("@Hub:token", JSON.stringify(token));
        localStorage.setItem("@Hub:user", JSON.stringify(user));
        setAuthentication(true);
        return history.push("/home");
      })
      .catch((err) => toast.error("email or password invalid"));
  };

  if (authentication) {
    return <Redirect to="/home" />;
  }

  return (
    <Container>
      <h1>Kenzie Hub</h1>
      <Content>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(formData)}>
          <BoxDescription>
            <label>Email:</label>
            {!!errors.email && <span>{errors.email.message}</span>}
          </BoxDescription>
          <Input
            name="email"
            register={register}
            placeholder="Type your email"
          />

          <BoxDescription>
            <label>Password:</label>
            {!!errors.password && <span>{errors.password.message}</span>}
          </BoxDescription>
          <Input
            name="password"
            register={register}
            type="password"
            placeholder="Type your password"
          />
          <Button type="submit" colorSchema={"--primary"}>
            Login
          </Button>
        </form>

        <BoxNewAccount>
          <span>Don't have an account yet?</span>

          <Button
            onClick={() => history.push("/register")}
            colorSchema={"--grey-1"}
          >
            Register
          </Button>
        </BoxNewAccount>
      </Content>
    </Container>
  );
};
export default Login;
