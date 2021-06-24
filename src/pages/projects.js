import React from 'react'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components'

const StyledMain = styled.div `
    /*background: linear-gradient(90deg, #79938d, #496368);*/
    background: #121212;
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
const ProjectsWrapper = styled.div `
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
    gap: 15px;
    padding-bottom: 50px;   
    width: 90%;
    margin: 0 auto;

`;

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
            <ProjectsWrapper>
                {projects.map(project => (
                    //Creates a relative link to all the different projects using its ID
                    <Link className="" key={project.id} to={`${match.url}/${project.id}`}>
                        <ProjectThumbnail title={project.title} backgroundImg={project.backgroundURL} />
                    </Link>
                ))}
            </ProjectsWrapper>
        </StyledMain>
    );
}


const ProjectContainer = styled.div `
    background: white;
    overflow: hidden;
    position: relative;


    &:before {
        content: "";
        padding: 0 0px 60% 0;
        display: block;
    }

`; 

const StyledImg = styled.img `
    background: white;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    object-fit: cover;
`;

const StyledProjectTitle = styled.div `
    background: #07145200;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    font-size: 2em;
    transition: 0.5s ease;
    opacity: 0;

    &:hover {
        background: #0714528c;
        opacity: 1;
    }
`;

function ProjectThumbnail({ title, backgroundImg }) {
    let style = { backgroundImage: `url(${backgroundImg})`, backgroundColor: '#ececec' }
    //<img src={require('../images/placeholder250.png')}></img>
    return (
        <ProjectContainer>
            <StyledImg src={backgroundImg}></StyledImg>
            <StyledProjectTitle><span>{title}</span></StyledProjectTitle>
        </ProjectContainer>
    );
}

export default Projects;

