import React from 'react'
import { Link } from 'react-router-dom';
import { displayGenres } from '../Components/utilities'

function projects() {
    return (
        <div>
            <h1>From projects </h1>
            {displayGenres()}
            <div className="projectsWrapper">
                {PROJECTS.map(i => (
                    <Link
                        key={i.id}
                        to={{
                            pathname: `/projects/${i.id}`
                        }}
                    >
                        <ProjectThumbnail title={i.title} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default projects;

const PROJECTS = [
    { id: 'proj1', title: 'project1', genres: ['games', 'programming'] },
    { id: 'another_proj', title: 'another project', genres: ['games'] },
    { id: 'proj_3', title: 'proj_3', genres: ['programming'] },
    { id: 'proj_4', title: 'proj_4', genres: ['webb'] },
    { id: 4, title: 'yet another longer project name', genres: [] }
];
console.log(PROJECTS);

function ProjectThumbnail({ title }) {
    return (
        <div className="projectsWrapperChild">
            {title}
        </div>
    );
}