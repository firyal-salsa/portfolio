import React from 'react'
import Home from './Dashboard.component'
import Education from '../Education/Education.component'
import WorkingHistory from '../WorkingHistory/WorkingHistory.component'
import Project from '../Project/Project.component'

const WelcomePage = () => {
return (
	<div>
    <Home/>
	<Education/>
	<WorkingHistory/>
    <Project/>
	</div>
)
}

export default WelcomePage
