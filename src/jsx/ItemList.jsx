import React from 'react';
import ReactDom from 'react-dom';

export class ItemList extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <li className={this.props.cls}>
            <a href={this.props.rf}>{this.props.itemName}</a>
         </li>
      );
   }
};
