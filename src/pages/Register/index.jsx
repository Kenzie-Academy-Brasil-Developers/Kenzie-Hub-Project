import {
  BoxDescription,
  BoxNav,
  BoxSelect,
  Container,
  Content,
} from "./styles";
import { useHistory, Redirect } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

const Register = ({ authentication }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Required field!"),
    email: yup
      .string()
      .required("Required field!")
      .email("Email is not valid!"),
    password: yup
      .string()
      .required("Required field!")
      .min(6, "Minimum 6 characters"),
    confirmpassword: yup
      .string()
      .required("Required field!")
      .oneOf([yup.ref("password")], "Password does not match!"),
    bio: yup.string().required("Required field!"),
    contact: yup.string().required("Required field!"),
    course_module: yup.string().required("Required field!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const formData = ({ name, email, password, bio, contact, course_module }) => {
    const newUser = { name, email, password, bio, contact, course_module };

    api
      .post("/users", newUser)
      .then((_) => {
        toast.success("Sucess! new account created");
        return history.push("/");
      })
      .catch((err) => toast.error("Error! email already registered"));
  };

  if (authentication) {
    return <Redirect to="/home" />;
  }

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
        <form onSubmit={handleSubmit(formData)}>
          <BoxDescription>
            <label>Name:</label>
            {!!errors.name && <span>{errors.name.message}</span>}
          </BoxDescription>
          <Input name="name" placeholder="Type your name" register={register} />

          <BoxDescription>
            <label>Email:</label>
            {!!errors.email && <span>{errors.email.message}</span>}
          </BoxDescription>
          <Input
            name="email"
            placeholder="Type your email"
            register={register}
          />

          <BoxDescription>
            <label>Password:</label>
            {!!errors.password && <span>{errors.password.message}</span>}
          </BoxDescription>
          <Input
            name="password"
            type="password"
            placeholder="Type your password"
            register={register}
          />

          <BoxDescription>
            <label>Confirm password:</label>
            {!!errors.confirmpassword && (
              <span>{errors.confirmpassword.message}</span>
            )}
          </BoxDescription>
          <Input
            name="confirmpassword"
            type="password"
            placeholder="Type your password"
            register={register}
          />

          <BoxDescription>
            <label>Bio:</label>
            {!!errors.bio && <span>{errors.bio.message}</span>}
          </BoxDescription>
          <Input
            name="bio"
            type="text"
            placeholder="Type your bio"
            register={register}
          />

          <BoxDescription>
            <label>Contact:</label>
            {!!errors.contact && <span>{errors.contact.message}</span>}
          </BoxDescription>
          <Input
            name="contact"
            type="text"
            placeholder="Type your contact"
            register={register}
          />

          <BoxSelect>
            <BoxDescription>
              <label>Modules:</label>
              {!!errors.course_modules && (
                <span>{errors.course_modules.message}</span>
              )}
            </BoxDescription>
            <select {...register("course_module")}>
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
