import React from 'react'
import { Link } from 'react-router-dom';
//import { displayGenres } from '../Components/utilities'
//import imageholder from '/images/placeholder1024.png'


const CATEGORIES = ['SHOW ALL', 'GAMES', 'COMPUTER GRAPHICS', 'PROGRAMMING', 'WEBB'];

{/*const Img = styled.div`
    color: red;

    :hover {
        background-color: green;
    }
`*/}

function Projects({ selectedCat, onChangeFunction, projects }) {
    //const [projectsToShow, setProjectsToShow] = useState(PROJECTS);

    function filterProjectSelection(category) {
        onChangeFunction(category);
        //const filteredProjects = PROJECTS.filter(project => project.categories.includes(category.toLowerCase()));
        //category === 'SHOW ALL' ? setProjectsToShow(PROJECTS) : setProjectsToShow(filteredProjects);
    }
    function DisplayCategories() {
        return (
            <div className={'flexWrapper'} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {
                    CATEGORIES.map((i, index) => (
                        <button key={index} className={i === selectedCat ? 'activeCategory category' : 'category'}
                            onClick={() => onChangeFunction(i)}
                        >
                            {i}
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
                {projects.map(i => (
                    //Creates a relative link to all the different projects using its ID
                    <Link className="projectsWrapperChild" key={i.id} to={{
                        pathname: `/projects/${i.id}`
                    }}
                    >
                        <ProjectThumbnail title={i.title} backgroundImg={i.backgroundURL} />
                    </Link>
                    

                ))}
            </div>
        </div>
    );
}

export default Projects;

function ProjectThumbnail({ title, backgroundImg }) {
    let style = { backgroundImage: `url(${backgroundImg})`, backgroundColor: '#ececec' }
    //<img src={require('../images/placeholder250.png')}></img>
    let url = backgroundImg;

    return (
        <div className="project" style={style}>
            <span>{title}</span>
            {/* <img src={require('../images/placeholder250.png')} /> */}
        </div>
    );
}
