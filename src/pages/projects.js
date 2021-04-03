import React from 'react'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components'

const StyledMain = styled.div `
    background: linear-gradient(90deg, #79938d, #496368);
    min-height: 89vh;
    padding-top: var(--gap);
`

const CategoriesWrapper = styled.div `
    display: flex;
    justify-content: space-evenly;
    padding: 50px 0;
    width: 90%;
    margin: auto;
`


const CATEGORIES = ['SHOW ALL', 'GAMES', 'COMPUTER GRAPHICS', 'PROGRAMMING', 'WEBB'];

function Projects({ selectedCat, onClickFunction, projects }) {
    let match = useRouteMatch();

    function DisplayCategories() {
        return (
            <CategoriesWrapper>
                {
                    CATEGORIES.map((category, index) => (
                        <button key={index} className={category === selectedCat ? 'activeCategory category' : 'category buttonAnimation'}
                            onClick={() => onClickFunction(category)}
                        >
                            {category}
                        </button >
                    ))
                }
            </CategoriesWrapper >
        );
    }

    return (
        <StyledMain>
            <DisplayCategories />
            <div className="projectsWrapper">
                {projects.map(project => (
                    //Creates a relative link to all the different projects using its ID
                    <Link className="projectsWrapperChild" key={project.id} to={`${match.url}/${project.id}`}>
                        <ProjectThumbnail title={project.title} backgroundImg={project.backgroundURL} />
                    </Link>
                ))}
            </div>
        </StyledMain>
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

