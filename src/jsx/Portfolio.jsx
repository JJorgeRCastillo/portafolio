import React from 'react';
import ReactDOM from 'react-dom';

import {Project} from './Project.jsx';
import {SectionHeader} from './SectionHeader.jsx';

//AlmacenSoft
//Desarrollo Web
const arrProjects = [
   {
      id: "1",
      name: "AlmacenSoft",
      type: "Desarrollo Web",
      img: "src/img/portfolio/github.png",
      openModal: "portfolioModal1"
   },
   {
      id: "2",
      name: "SisClinicaSoft",
      type: "Desarrollo Web",
      img: "src/img/portfolio/github.png",
      openModal: "portfolioModal2"
   },
   {
      id: "3",
      name: "SisHotelSoft",
      type: "Desarrollo Web",
      img: "src/img/portfolio/github.png",
      openModal: "portfolioModal3"
   },
   {
      id: "4",
      name: "Gson Xml-Helper",
      type: "Librería Web & Móvil",
      img: "src/img/portfolio/github.png",
      openModal: "portfolioModal4"
   },
   {
      id: "5",
      name: "The Last Survivor",
      type: "Videojuego",
      img: "src/img/portfolio/github.png",
      openModal: "portfolioModal5"
   },
   {
      id: "6",
      name: "Financiera Móvil",
      type: "Desarrollo Móvil - Android",
      img: "src/img/portfolio/github.png",
      openModal: "portfolioModal6"
   }            
];

const objProject = {
   title: "Portafolio"
};

export class Portfolio extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         projects: arrProjects,
         curProject: objProject,
         star: "star-primary"
      }
   }
   renderProjects(project) {
      return ( 
             <Project key={project.id} 
                      openModal={project.openModal} 
                      imgFile={project.img} 
                      projectName={project.name} 
                      projectType={project.type}>
            </Project>
      );
   }
   render() { 
      return (
         <section id="portfolio">
            <div className="container">
               <SectionHeader title={this.state.curProject.title} star={this.state.star}/>
               <div className="row">
                  {this.state.projects.map(this.renderProjects)}
               </div>
            </div>
         </section>
      )
   }
};