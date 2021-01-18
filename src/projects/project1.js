import React from 'react'
import BackButton from '../Components/BackToProjects'
// import Placeholder1024 from '../images/placeholder1024.png'
// import Placeholder640 from '../images/placeholder640.png'


function Project1() {
    return (
        <div>
            <h1>THIS IS PROJECT TITLE</h1>
            <BackButton />

            <div>
                <p>Here is some great info about this project and perhaps a small summary of what the project
                is all about. After this perhaps an image or two would be a good idea. I will also need
                to come up with some more info so that this paragrahp actually has some length.
                </p>
                {/*<img src={Placeholder1024} alt=''></img>*/}

                <p>then after an image we have some more text to explain something else about the project, which can also include some maths
                or w/e is nessesary. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>

                {/* <img src={Placeholder640} alt='' /> */}
            </div>
            <BackButton />
        </div>

    );
}

export default Project1;