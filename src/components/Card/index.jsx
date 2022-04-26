import {
  Container,
  Toggle,
  Modal,
  ContentModal,
  BoxDescription,
  BoxForm,
  BoxLabel,
  BoxSelect,
  BoxButtons,
} from "./styles";
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

const Card = ({ techs, getTechs }) => {
  const [techId, setTechId] = useState("");
  const [techTitle, setTechTitle] = useState("");
  const [toggleDetails, setToggleDetails] = useState(false);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Hub:token")) || ""
  );

  const schema = yup.object().shape({
    status: yup.string().required("Required field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleClick = (id, title) => {
    setTechId(id);
    setToggleDetails(true);
    setTechTitle(title);
  };

  const formData = (data) => {
    delete data.title;
    api
      .put(`users/techs/${techId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Updated");
        getTechs();
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = () => {
    api
      .delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Deleted");
        getTechs();
      })
      .catch((err) => console.log(err));
  };

  const handleToggle = () => {
    setToggleDetails(false);
  };

  return (
    <>
      {techs &&
        techs.map((item, index) => (
          <Container
            onClick={() => handleClick(item.id, item.title)}
            key={index}
          >
            <h2>{item.title}</h2>
            <span>{item.status}</span>
          </Container>
        ))}

      <Toggle toggleDetails={toggleDetails}>
        <Modal>
          <ContentModal>
            <BoxDescription>
              <h2>Technology Details</h2>
              <Button onClick={() => handleToggle()}>X</Button>
            </BoxDescription>

            <BoxForm>
              <form onSubmit={handleSubmit(formData)}>
                <BoxLabel>
                  <label>Name of the project:</label>
                  {!!errors.title && <span>{errors.title.message}</span>}
                </BoxLabel>
                <Input
                  name="title"
                  placeholder="Type title"
                  register={register}
                  value={techTitle}
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

                <BoxButtons>
                  <Button type="submit" colorSchema={"--primary-negative"}>
                    Save changes
                  </Button>
                  <div>
                    <Button
                      type="button"
                      onClick={() => handleDelete()}
                      colorSchema={"--grey-1"}
                    >
                      Delete
                    </Button>
                  </div>
                </BoxButtons>
              </form>
            </BoxForm>
          </ContentModal>
        </Modal>
      </Toggle>
    </>
  );
};
export default Card;
