import React from "react";
import Dashboard from "./Dashboard/Dashboard.component"
import Education from "./Education/Education.component"
import WorkingHistory from "./WorkingHistory/WorkingHistory.component";
import Project from "./Project/Project.component"
import SkillSet from "./SkillSet/SkillSet.component";

function All() {
    return (
      <div>
        <Dashboard/>
        <div className="space-y-96">
          <Education/>
          <WorkingHistory/>
        </div>
        <Project/>
        <SkillSet/>
      </div>
    )
  }
  
  export default All