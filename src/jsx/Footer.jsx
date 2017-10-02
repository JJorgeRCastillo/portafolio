import React from 'react';
import ReactDOM from 'react-dom';

export class Footer extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <footer className="text-center">
            <div className="footer-above">
               <div className="container">
                  <div className="row">
                     <div className="footer-col col-md-4">
                        <h3>Dirección</h3>
                        <p>David Lozano #854
                        <br/>Trujillo, Perú</p>
                     </div>
                     <div className="footer-col col-md-4">
                        <h3>Mis redes sociales</h3>
                        <ul className="list-inline">
                           <li>
                              <a href="https://www.facebook.com/jjrodcast" className="btn-social btn-outline"><i className="fa fa-fw fa-facebook"></i></a>
                           </li>
                           <li>
                              <a href="https://twitter.com/jjrodcast" className="btn-social btn-outline"><i className="fa fa-fw fa-twitter"></i></a>
                           </li>
                           <li>
                              <a href="https://www.linkedin.com/in/jorge-rodr%C3%ADguez-castillo-b799a17a" className="btn-social btn-outline"><i className="fa fa-fw fa-linkedin"></i></a>
                           </li>
                        </ul>
                     </div>
                     <div className="footer-col col-md-4">
                        <h3>Más sobre mí</h3>
                        <p>Siempre por mis redes sociales.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="footer-below">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12">
                        Copyright &copy; OneCode 2016
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      );
   }
};