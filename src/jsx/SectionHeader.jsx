import React from 'react';
import ReactDOM from 'react-dom';

export class SectionHeader extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <div className="row">
            <div className="col-lg-12 text-center">
               <h2>{this.props.title}</h2>
               <hr className={this.props.star} />
            </div>
         </div>
      )
   }
};
