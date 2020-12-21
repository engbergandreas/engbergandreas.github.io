import React, { useState } from 'react'
import './App.css';
import Header from './pages/header';
import { Route, Switch } from 'react-router-dom';
import Projects from './pages/projects'
import Portfolio from './pages/portfolio'
import About from './pages/about'
import Home from './pages/home'
import Error from './pages/error'
import project1 from './projects/project1'
import projects from './db/projectDB.json'



function App() {
  const [selectedCategory, setSelectedCategory] = useState('SHOW ALL');
  const [projectsToShow, setProjectsToShow] = useState(projects);


  const onSelectedCategoryChange = (category) => {
    setSelectedCategory(category);
    const filteredProjects = projects.filter(project => project.categories.includes(category.toLowerCase()));
    category === 'SHOW ALL' ? setProjectsToShow(projects) : setProjectsToShow(filteredProjects);
  }

  return (
    < div >
      <Header />
      <Switch>

        <Route path="/portfolio" component={Portfolio}></Route>
        <Route path="/projects/project1" component={project1}></Route>

        <Route path="/projects" //component={Projects} selectedCat={selectedCategory}
        // onChangeFunction={onSelectedCategoryChange}>
        >
          <Projects selectedCat={selectedCategory} onChangeFunction={onSelectedCategoryChange} projects={projectsToShow} />
        </Route>
        <Route path="/about" component={About}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route component={Error} />

      </Switch>
    </div >
  );
}

export default App;
