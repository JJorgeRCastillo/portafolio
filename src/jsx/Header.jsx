import React from 'react';
import ReactDOM from 'react-dom';


const imgStyle = {
  width: '256px',
  height: '256px', 
  borderRadius: '50%',
  border: '2px solid white' 
};

export class Header extends React.Component {
   
   constructor(props) {
      super(props);
   }
   
   render() {
      return (
            <header>
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12">                                          
                        <img className="img-responsive" src="img/perfil.jpg" alt="" style={imgStyle} />
                        <div className="intro-text">
                           <span className="name">{this.props.user}</span>
                           <hr className="star-light" />
                           <span className="skills">{this.props.ocpt}<br/>{this.props.dscpt}</span>
                        </div>
                     </div>
                  </div>
               </div>
            </header>                     
      )
   }
};
