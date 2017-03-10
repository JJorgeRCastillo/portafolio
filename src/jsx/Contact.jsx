import React from 'react';
import ReactDOM from 'react-dom';

import {SectionHeader} from './SectionHeader.jsx';

export class Contact extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         title: "Contacto",
         star: "star-primary",
         action: "https://docs.google.com/forms/d/e/1FAIpQLSd-fS1s2OBoQMdJtGrnnOBpjmdE1LxZxnDrrwJNqGnHdPOAzA/formResponse"
      };
   }
   submitted() {
      return true;
   }
   render() {
      return (
         <section id="contact">
            <div className="container">
               <SectionHeader title={this.state.title} star={this.state.star} />
            </div>
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                    <form name="gform" id="gform" action={this.state.action} target="hidden_iframe" onSubmit={this.submitted} noValidate>
                        <div className="row control-group">
                            <div className="form-group col-xs-12 floating-label-form-group controls">
                                <label>Nombre</label>
                                <input type="text" className="form-control" name="entry.2105322363" placeholder="Nombre" id="entry.2105322363" required data-validation-required-message="Ingrese su nombre." />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="row control-group">
                            <div className="form-group col-xs-12 floating-label-form-group controls">
                                <label>Correo Electrónico</label>
                                <input type="email" className="form-control" name="entry.828599768" placeholder="Correo Electrónico" id="entry.828599768" required data-validation-required-message="Ingrese su correo electrónico." />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="row control-group">
                            <div className="form-group col-xs-12 floating-label-form-group controls">
                                <label>Teléfono</label>
                                <input type="tel" className="form-control" name="entry.1388747081" placeholder="Teléfono" id="entry.1388747081" required data-validation-required-message="Ingrese su número de teléfono." />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="row control-group">
                            <div className="form-group col-xs-12 floating-label-form-group controls">
                                <label>Mensaje</label>
                                <textarea rows="5" className="form-control" name="entry.1075684223" placeholder="Mensaje" id="entry.1075684223" required data-validation-required-message="Ingrese un mensaje."></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <br /> 
                        <div id="success"></div>
                        <div className="row">
                            <div className="form-group col-xs-12 text-center">
                                <button type="submit" className="btn btn-success btn-lg" value="Send">Enviar</button>
                            </div>
                        </div>
                    </form>
                   {/* <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted) {}"></iframe>*/ }
                </div>
            </div>            
         </section>
      );
   }
};