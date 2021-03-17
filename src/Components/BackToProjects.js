import React from 'react'
import { Link } from 'react-router-dom'


function BackToProjects({_style}) {
    return (
        //TODO css button style 
        <div className="projectBackButton" style={_style}><Link to="/projects"><div>Back to all projects</div></Link></div>
    )
}

export default BackToProjects