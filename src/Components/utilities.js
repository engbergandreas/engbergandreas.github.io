import React from 'react'
import { Link } from 'react-router-dom';


const GENRES = ['GAMES', 'COMPUTER GRAPHICS', 'PROGRAMMING', 'WEBB'];
const PROJECTS = [
    { id: 'proj1', title: 'project1', genres: ['games', 'programming'] },
    { id: 'another_proj', title: 'another project', genres: ['games'] },
    { id: 'proj_3', title: 'proj_3', genres: ['programming'] },
    { id: 'proj_4', title: 'proj_4', genres: ['webb'] },
    { id: 5, title: 'yet another longer project name', genres: ['computer graphics'] }
];

function displayGenres() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            {
                GENRES.map((i, index) => (
                    <div key={index} style={{
                        height: 50,
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid black',
                        cursor: 'pointer'
                    }} onClick={() => displayProjects(i)}>
                        {i}
                    </div >
                ))
            }
        </div >
    );
}

export {
    displayGenres
}

function displayProjects(genre) {
    console.log("clicked button")
    console.log(genre);
    let filteredProjects = PROJECTS.filter(project => project.genres.includes(genre.toLowerCase()));
    console.log(filteredProjects);
    return (<div> {
        filteredProjects.map(i => (
            <Link
                key={i.id}
                to={{
                    pathname: `/projects/${i.id}`
                }}
            >
                <ProjectThumbnail title={i.title} />
            </Link>
        ))}
    </div>)

}

function ProjectThumbnail({ title }) {
    console.log('created div')
    return (
        <div className="projectsWrapperChild">
            {title}
        </div>
    );
}