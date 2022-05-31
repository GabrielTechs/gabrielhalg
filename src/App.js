import React from "react";
import "./App.css";
import "./assets/colors.css";

import Profile from "./components/Profile/Profile";
import SocialMedia from "./components/SocialMedia/SocialMedia";

function App() {
  return (
    <div className="app">
      <SocialMedia />
      <Profile />
    </div>
  );
}

export default App;
