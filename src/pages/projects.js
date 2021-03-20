import React from 'react'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';



const CATEGORIES = ['SHOW ALL', 'GAMES', 'COMPUTER GRAPHICS', 'PROGRAMMING', 'WEBB'];

function Projects({ selectedCat, onClickFunction, projects }) {
    let match = useRouteMatch();

    function DisplayCategories() {
        return (
            <div className={'flexWrapper'} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {
                    CATEGORIES.map((category, index) => (
                        <button key={index} className={category === selectedCat ? 'activeCategory category' : 'category'}
                            onClick={() => onClickFunction(category)}
                        >
                            {category}
                        </button >
                    ))
                }
            </div >
        );
    }

    return (
        <div>
            <h1>From projects </h1>
            <DisplayCategories />
            <div className="projectsWrapper">
                {projects.map(project => (
                    //Creates a relative link to all the different projects using its ID
                    <Link className="projectsWrapperChild" key={project.id} to={`${match.url}/${project.id}`}>
                        <ProjectThumbnail title={project.title} backgroundImg={project.backgroundURL} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

function ProjectThumbnail({ title, backgroundImg }) {
    let style = { backgroundImage: `url(${backgroundImg})`, backgroundColor: '#ececec' }
    //<img src={require('../images/placeholder250.png')}></img>
    return (
        <div className="project" style={style}>
            <span>{title}</span>
        </div>
    );
}

export default Projects;

