import React from 'react'

function ProjectTitle({title, subtitle}) {
    return (
        <div className="projectTitleInfo">
            <h1> {title} </h1>
            <h2> {subtitle} </h2>
        </div>
    );
}

export default ProjectTitle;