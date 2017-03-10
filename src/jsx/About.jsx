import React from 'react';
import ReactDOM from 'react-dom';

import {SectionHeader} from './SectionHeader.jsx';

const objAbout = {
   title: "Acerca de mí",
   descripction: "Mi nombre es Jorge Rodríguez Castillo, graduado de la carrera de Ingeniería de Sistemas Computacionales me gusta mucho la investigación, y sobre todo cursos que tienen que ver con mucha lógica. Me gusta las ciencias de la computación y cosas con Machine Learning.",
   subdescription: "Soy programador tanto de páginas web y de aplicaciones móviles para Android, conozco tecnologías como ASP.NET, Java, JavaScript, Python, R, Matlab, etc. Puedes contactarme para desarrollar proyectos o investigar cosas interesantes y darles solución con nuevas tecnologías.",
   linkedin: "https://pe.linkedin.com/in/jorge-rodríguez-castillo-b799a17a",
   btnLinkedin: "Mi Linkedin"
};

export class About extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         about: objAbout,
         star: "star-light"
      }
   }
   render() {
      return (
         <section className="success" id="about">
            <div className="container">
               <SectionHeader title={this.state.about.title} star={this.state.star}/>
               <div className="row">
                  <div className="col-lg-4 col-lg-offset-2">
                     <p>{this.state.about.descripction}</p>
                  </div>
                  <div className="col-lg-4">
                     <p>{this.state.about.subdescription}</p>
                  </div>
                  <div className="col-lg-8 col-lg-offset-2 text-center">
                     <a href={this.state.about.linkedin} className="btn btn-lg btn-outline">
                           {this.state.about.btnLinkedin}<i className=""></i> 
                     </a>
                  </div>
               </div>               
            </div>
         </section>
      )
   }
}