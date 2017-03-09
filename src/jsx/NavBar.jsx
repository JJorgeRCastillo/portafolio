import React from 'react';
import ReactDOM from 'react-dom';


export class NavBar extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
       <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
          <div className="container">
             <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                   <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand" href="#page-top">{this.props.user}</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
               <ul className="nav navbar-nav navbar-right">
                  <li className="hidden">
                     <a href="#page-top"></a>
                  </li>
                  <li className="page-scroll">
                     <a href="#portfolio">Portafolio</a>
                  </li>
                  <li className="page-scroll">
                     <a href="#about">Acerca de mí</a>
                  </li>
                  <li className="page-scroll">
                     <a href="#contact">Contacto</a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
      )
   }

};