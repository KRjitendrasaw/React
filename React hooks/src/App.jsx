import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CustomButton from "./Components/Button";


const App = () => {
  const handleClicked = () => {
    alert("Clicked");
  };
  
  return (
    <div>
      <CustomButton
        text={"Click me"}
        onclick={handleClicked}
        className="color: red"
      />
      <CustomButton
        text={"Submit me"}
        type="Submit"
        className="bg-green-500"
      />
    </div>
  );
};

export default App;
