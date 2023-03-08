import { Routes, Route } from "react-router-dom";
import { Component } from "react";
import All from "./Components/all"

class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<All />} />
        </Routes>
      </>
    );
  }
}

export default App;

// Features
// 1. Dark Mode Night Mode
// 2. Chat Bot
// 3. Mini Games