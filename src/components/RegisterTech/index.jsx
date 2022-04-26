import {
  Toggle,
  Modal,
  ContentModal,
  BoxDescription,
  BoxForm,
  BoxLabel,
  BoxSelect,
} from "./styles";
import Button from "../Button";
import Input from "../Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

const RegisterTech = ({ toggleNewTech, setToggleNewTech, getTechs }) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Hub:token")) || ""
  );

  const schema = yup.object().shape({
    title: yup.string().required("Required field!"),
    status: yup.string().required("Required field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const formData = (data) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Sucess! Created");
        getTechs();
      })
      .catch((err) =>
        toast.error(
          "Already have this technology created, you can only update it"
        )
      );
  };

  const handleToggle = () => {
    setToggleNewTech(false);
  };
  return (
    <>
      <Toggle toggleNewTech={toggleNewTech}>
        <Modal>
          <ContentModal>
            <BoxDescription>
              <h2>Register Technology</h2>
              <Button onClick={() => handleToggle()}>X</Button>
            </BoxDescription>

            <BoxForm>
              <form onSubmit={handleSubmit(formData)}>
                <BoxLabel>
                  <label>Name:</label>
                  {!!errors.title && <span>{errors.title.message}</span>}
                </BoxLabel>
                <Input
                  name="title"
                  placeholder="Type title"
                  register={register}
                />

                <BoxSelect>
                  <BoxLabel>
                    <label>Status:</label>
                    {!!errors.status && (
                      <span>
                        {(<errors className="status"></errors>).message}
                      </span>
                    )}
                  </BoxLabel>
                  <select {...register("status")}>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediary">Intermediary</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </BoxSelect>

                <Button type="submit" colorSchema={"--primary"}>
                  Register Technology
                </Button>
              </form>
            </BoxForm>
          </ContentModal>
        </Modal>
      </Toggle>
    </>
  );
};
export default RegisterTech;
