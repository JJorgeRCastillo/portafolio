import React from 'react';
import ReactDOM from 'react-dom';
import {NavBar} from './NavBar.jsx';
import {Header} from './Header.jsx';
import {Portfolio} from './Portfolio.jsx';
import {About} from './About.jsx';
import {Contact} from './Contact.jsx';
import {Footer} from './Footer.jsx';

const usuario = {
   name: "Jorge Rodríguez",
   ocupation: "Web & Mobile Developer",
   description: "Lover of Computer Science"
};

class App extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
      <div>
         <NavBar user={usuario.name}></NavBar>
         <Header user={usuario.name} ocpt={usuario.ocupation} dscpt={usuario.description}></Header> 
         <Portfolio />
         <About />
         <Contact />
         <Footer />
         <div className="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
            <a className="btn btn-primary" href="#page-top">
               <i className="fa fa-chevron-up"></i>
            </a>
         </div>
      </div>
      
      );
   }
};

ReactDOM.render(<App />, document.getElementById('app'));
