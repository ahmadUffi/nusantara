import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Homepage from "./page/Homepage";
import Service from "./page/Service";
import TransparencySection from "./page/TransparencySection";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Homepage />
      <Service />
      <TransparencySection />
      <Footer />
    </>
  );
};

export default App;
