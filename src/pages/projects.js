import React from 'react'
import { Link } from 'react-router-dom';
//import { displayGenres } from '../Components/utilities'
import imageholder from '../images/placeholder1024.png'


const CATEGORIES = ['SHOW ALL', 'GAMES', 'COMPUTER GRAPHICS', 'PROGRAMMING', 'WEBB'];


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
                    <Link key={i.id} to={{
                        pathname: `/projects/${i.id}`
                    }}
                    >
                        <ProjectThumbnail title={i.title} backgroundImage={i.image} />
                    </Link>

                ))}
            </div>
            <img src={imageholder} alt=''></img>
            <img src={imageholder} alt=''></img>
        </div>
    );
}

export default Projects;

function ProjectThumbnail({ title, backgroundImage }) {
    let style = { background: backgroundImage ? backgroundImage : 'gray' }

    return (
        <div className="project" style={style}>
            {title}
        </div>
    );
}