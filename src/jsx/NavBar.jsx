import React from 'react';
import ReactDOM from 'react-dom';
import {ItemList} from './ItemList.jsx';


const options = {
    menuName: 'Menu',
    srOnly: "Toggle navigation"
};

const arrItems = [
    {
        id: 0,
        cls: "hidden",
        ref: "#page-top",
        name: ""
    },
    {
        id: 1,
        cls: "page-scroll",
        ref: "#portfolio",
        name: "Portafolio"
    },
    {
        id: 2,
        cls: "page-scroll",
        ref: "#about",
        name: "Acerca de mí"
    },
    {
        id: 3,
        cls: "page-scroll",
        ref: "#contact",
        name: "Contacto"
    }        
];

export class NavBar extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        items: arrItems
      };
   }
   renderItems(item) {
        return (
            <ItemList  
                key={item.id}
                cls={item.cls}
                rf={item.ref}
                itemName={item.name}
                 />
        );
   }
   render() {
      return (
       <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
          <div className="container">
             <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                   <span className="sr-only">{options.srOnly}</span> {options.menuName} <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand" href="#page-top">{this.props.user}</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
               <ul className="nav navbar-nav navbar-right">
                    {this.state.items.map(this.renderItems)}
               </ul>
            </div>
         </div>
      </nav>
      )
   }

};