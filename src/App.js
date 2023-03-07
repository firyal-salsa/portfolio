import { Routes, Route } from "react-router-dom";
import { Component } from "react";
import Dashboard from "./Components/Dashboard/Dashboard.component";
import About from "./Components/About/About.component"
import Education from "./Components/Education/Education.component"
import SkillSet from "./Components/SkillSet/SkillSet.component"
import WorkingHistory from "./Components/WorkingHistory/WorkingHistory.component"
import Project from "./Components/Project/Project.component"
import GetInTouch from "./Components/GetInTouch/GetInTouch.component"
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