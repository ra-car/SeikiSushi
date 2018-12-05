import React, {Component} from "react";
import PropTypes from "prop-types";
import {Meteor} from "meteor/meteor";
import {withTracker} from "meteor/react-meteor-data";
import DateTimePicker from 'react-datetime-picker';
//import moment from 'moment';
import Layout from './Layout';
import LayoutAceptadasAdmin from "./LayoutAceptadasAdmin";
// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
class Reservas extends Component {

 constructor(props){
    super(props);
    this.state = {
     date: new Date() 
    };
  this.onChange = this.onChange.bind(this);
  this.hacerReserva = this.hacerReserva.bind(this);
}

onChange(date) {
  this.setState({ date })
  } 


hacerReserva(){
  const numeroPersonas = document.getElementById("npersonas").value;
  let code =  Math.floor((Math.random() * 1000) + 1);
  Meteor.call("reserva.add",code,this.state.date,numeroPersonas);
}


  render() {
    return (
       <div className="container-fluid">
       {Meteor.user() && Meteor.user().username !== "Admin" ? (

        <div className="container-fluid" id="lobby">
        <br/>
        <br/>
        <h2> Bienvenid@ {Meteor.user().username} </h2>
        <br/>
        <br/>
        <div className="row">
          <div className="col">
            <h2>Realizar solicitud reserva</h2>
            <hr/>
          </div>
          <div className="col">
            <h2>Historial de Reservas</h2>
            <hr/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <br/>
            <p>Por favor ingresa los datos  correspondientes a la reserva en los siguientes campos: </p>
            <br/>
            <div className="input-group mb-3">

                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">Numero de Personas:</span>
                      </div>
                      <input type="text" className="form-control" id="npersonas" aria-describedby="basic-addon3"/>
                    </div>

                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">Fecha y Hora:</span>
                      </div>
                          {/*  aca va el datePicker*/}
                            <DateTimePicker
                              onChange={this.onChange}
                              value={this.state.date}
                            />       
                      

                    </div>
            </div>
          </div>
          <div className="col">
              <Layout />
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col">
            <div className="input-group mb-3">
              <p>Una vez enviada la solicitud para una reserva, tendrás que esperar a que el administrador del restaurante la acepte. En tu historial de reservas podrás ver si la reserva fue aceptada o rechazada.</p>
              <br/>
              <br/>
                <button className="btn btn-outline-danger" type="button" onClick={this.hacerReserva}>Realizar reserva </button>
            </div>
          </div>
          <div className="col">
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
      </div> ): (
      <div></div>
)}

      {Meteor.user() && Meteor.user().username === "Admin" ? (  <div>
        <br/>
        <h2> Bienvenid@ {Meteor.user().username} </h2>
        <br/>
        <br/>
        <div className="row">
          <div className="col">
            <h2>Reservas pendientes</h2>
            <hr/>
          </div>
          <div className="col">
            <h2>Historial de Reservas</h2>
            <hr/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <br/>
                <Layout />
          </div>
          <div className="col">
                <LayoutAceptadasAdmin />
          </div>
        </div>
        <br/>
       
        <br/>
        <br/>
        <br/>
        <br/>
       </div>):( <div></div>)}

        {!Meteor.user()   ? (<div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h1 className="mt-5">¿No has iniciado sesión?</h1>
          <p className="lead">Por favor inicia sesión para poder realizar una reserva en Seiki Sushi o regístrate si aun no perteneces a la familia !</p>

        </div>
      </div>
    </div>):(null)}

       </div>
    
      );
  }
}

export default Reservas;