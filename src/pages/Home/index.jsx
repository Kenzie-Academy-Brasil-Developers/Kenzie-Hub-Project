import { Redirect } from "react-router-dom";

const Home = ({ authentication }) => {
  if (!authentication) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <h1>HOME</h1>
    </>
  );
};
export default Home;
