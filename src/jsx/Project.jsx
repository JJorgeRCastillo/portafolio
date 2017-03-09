import React from 'react';
import ReactDOM from 'react-dom';


const projectStyle = {
   border: "2px solid #EEEEEE"
};

const imgStyle = {
   margin: "auto"
};

export class Project extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         modalRedirect: `#${this.props.openModal}`
      };
   }
   render() {
      return (
         <div className="col-sm-4 portfolio-item text-center">
            <a href={this.state.modalRedirect} className="portfolio-link" data-toggle="modal">
               <div className="caption">
                  <div className="caption-content">
                     <i className="fa fa-search-plus fa-3x"></i>
                  </div>
               </div>
               <img src={this.props.imgFile} className="img-responsive" alt="" style={imgStyle} />
            </a>
            <div className="portfolio-caption" style={projectStyle}>
               <h4>{this.props.projectName}</h4>
               <p>{this.props.projectType}</p>
            </div>
         </div>
      )
   }
};