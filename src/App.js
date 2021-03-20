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
/*NEW PROJECT: Import project js file */ 
import cloth from './projects/cloth_simulation'



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
    < div >
      <Header />
      <Switch>

        <Route path="/portfolio" component={Portfolio}></Route>
        
        {/*NEW PROJECT: Add new projects link must match project id */}
        <Route path="/projects/cloth_simulation" component={cloth}></Route>
        <Route path="/projects">
          <Projects selectedCat={selectedCategory} onClickFunction={onSelectedCategoryChange} projects={projectsToShow} />
        </Route>
        <Route path="/about" component={About}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route component={Error} />

      </Switch>
      <Footer />
    </div >
  );
}

export default App;
