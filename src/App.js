import React, { useState } from 'react'
import './App.css';
import Header from './pages/header';
import Footer from './pages/footer';
import { Route, Switch } from 'react-router-dom';
import Projects from './pages/projects'
import Portfolio from './pages/portfolio'
import About from './pages/about'
import Home from './pages/home'
import Error from './pages/error'
import projects from './db/projectDB.json'
import styled from 'styled-components'
/*NEW PROJECT: Import project js file */
import cloth from './projects/cloth_simulation'
import raid from './projects/table_raid'
import matkoma from './projects/matkoma'
import soundflight from './projects/sound_flight'
import legionen from './projects/legionen'
import legofinder from './projects/setfinder'
import proceduralTerrain from './projects/procedural_terrain'
import proceduralTrees from './projects/procedural_trees'
import ColorMyWorld from './projects/color_my_world'
import FaceRecognition from './projects/face_recognition'
import GlobalIllumination from './projects/global_illumination'
import BobRoss from './projects/bob_ross'
import InteractiveCanvas from './projects/interactive_canvas';

/* 
Olive: #A3BCB6

Green Leaf: #39603D

Brown Grey: #3C403D

Tanly: #DADED4

White: #FFFFFF
*/

const StyledMain = styled.div`
  
`

function App() {
  const [selectedCategory, setSelectedCategory] = useState('SHOW ALL');
  const [projectsToShow, setProjectsToShow] = useState(projects);


  //filter projects based on category 
  const onSelectedCategoryChange = (category) => {
    setSelectedCategory(category);
    const filteredProjects = projects.filter(project => project.categories.includes(category.toLowerCase()));
    category === 'SHOW ALL' ? setProjectsToShow(projects) : setProjectsToShow(filteredProjects);
  }

  return (
    <StyledMain>
      <Header />
      <Switch>

        <Route path="/portfolio" component={Portfolio}></Route>

        {/*NEW PROJECT: Add new projects here, link must match project id */}
        <Route path="/projects/interactive_canvas" component={InteractiveCanvas}></Route>
        <Route path="/projects/cloth_simulation" component={cloth}></Route>
        <Route path="/projects/table_raid" component={raid}></Route>
        <Route path="/projects/matkoma" component={matkoma}></Route>
        <Route path="/projects/soundflight" component={soundflight}></Route>
        <Route path="/projects/legionen" component={legionen}></Route>
        <Route path="/projects/setfinder" component={legofinder}></Route>
        <Route path="/projects/proceduralterrain" component={proceduralTerrain}></Route>
        <Route path="/projects/proceduraltrees" component={proceduralTrees}></Route>
        <Route path="/projects/global_illumination" component={GlobalIllumination}></Route>
        <Route path="/projects/color_my_world" component={ColorMyWorld}></Route>
        <Route path="/projects/facial_recognition" component={FaceRecognition}></Route>
        <Route path="/projects/bobross" component={BobRoss}></Route>

        <Route path="/projects">
          <Projects selectedCat={selectedCategory} onClickFunction={onSelectedCategoryChange} projects={projectsToShow} />
        </Route>
        <Route path="/about" component={About}></Route>
        <Route exact path='' component={Home}></Route>
        <Route component={Error} />

      </Switch>
      <Footer />
    </StyledMain>
  );
}

export default App;
