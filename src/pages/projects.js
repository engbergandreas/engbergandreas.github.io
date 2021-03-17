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
    /*
    function filterProjectSelection(category) {
        onChangeFunction(category);
        //const filteredProjects = PROJECTS.filter(project => project.categories.includes(category.toLowerCase()));
        //category === 'SHOW ALL' ? setProjectsToShow(PROJECTS) : setProjectsToShow(filteredProjects);
    }
    */
    function DisplayCategories() {
        return (
            <div className={'flexWrapper'} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {
                    CATEGORIES.map((category, index) => (
                        <button key={index} className={category === selectedCat ? 'activeCategory category' : 'category'}
                            onClick={() => onChangeFunction(category)}
                        >
                            {category}
                        </button >
                    ))
                }
            </div >
        );
    }
    function ProjectThumbnail({ title, backgroundImg }) {
        let style = { backgroundImage: `url(${backgroundImg})`, backgroundColor: '#ececec' }
        //<img src={require('../images/placeholder250.png')}></img>
        return (
            <div className="project" style={style}>
                <span>{title}</span>
                {/* <img src={require('../images/placeholder250.png')} /> */}
            </div>
        );
    }

    return (
        <div>
            <h1>From projects </h1>
            <DisplayCategories />
            <div className="projectsWrapper">
                {projects.map(i => (
                    //Creates a relative link to all the different projects using its ID
                    <Link className="projectsWrapperChild" key={i.id} to={{pathname: `/projects/${i.id}`}}>
                        <ProjectThumbnail title={i.title} backgroundImg={i.backgroundURL} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Projects;

