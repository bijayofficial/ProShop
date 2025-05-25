import React from "react";
import Header from "./components/Header/Header";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./screens/HomeScreen";
const App = () => {
  return (
    <>
      <Header />
      <Container>
        <HomeScreen/>
      </Container>
      <Footer/>
    </>
  );
};

export default App;
