import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import {
  Container,
  ContainerNav,
  BoxNav,
  ContainerUser,
  BoxUser,
  ContainerTech,
  BoxTechDescription,
  BoxTech,
} from "./styles";
import { BsPlus } from "react-icons/bs";
import Button from "../../components/Button";
import Card from "../../components/Card";
import RegisterTech from "../../components/RegisterTech";

const Home = ({ authentication }) => {
  const [toggleNewTech, setToggleNewTech] = useState(false);
  const [techs, setTechs] = useState([]);
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("@Hub:user"));
  const { id } = user;
  // console.log(user);

  useEffect(() => {
    getTechs();
  }, []);

  const getTechs = () => {
    api
      .get(`/users/${id}`)
      .then((resp) => setTechs(resp.data.techs))
      .catch((err) => console.log(err));
  };

  const handleToggle = () => {
    setToggleNewTech(true);
  };

  if (!authentication) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <RegisterTech
        setToggleNewTech={setToggleNewTech}
        toggleNewTech={toggleNewTech}
        getTechs={getTechs}
      />

      <ContainerNav>
        <BoxNav>
          <h1>Kenzie Hub</h1>
          <Button onClick={() => history.push("/")} colorSchema={"--grey-3"}>
            Return
          </Button>
        </BoxNav>
      </ContainerNav>

      <ContainerUser>
        <BoxUser>
          <h2>Welcome, {user.name}</h2>
          <p>{user.course_module}</p>
        </BoxUser>
      </ContainerUser>

      <ContainerTech>
        <BoxTechDescription>
          <h2>Technologies</h2>
          <Button onClick={() => handleToggle()} colorSchema={"--grey-3"}>
            <BsPlus size={20} />
          </Button>
        </BoxTechDescription>

        <BoxTech>
          <Card techs={techs} getTechs={getTechs} />
        </BoxTech>
      </ContainerTech>
    </Container>
  );
};
export default Home;
