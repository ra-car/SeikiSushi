import React, {Component} from "react";
import PropTypes from "prop-types";
import {Meteor} from "meteor/meteor";
import {withTracker} from "meteor/react-meteor-data";
import {Reservas} from "../api/reservas.js";
 
class LayoutAceptadasAdmin extends Component {
  constructor(props) {
   super(props);
   this.state = {
      items: 10,
      loadingState: false,
      reservas: []
    };
    this.aceptarReserva = this.aceptarReserva.bind(this)
    this.rechazarReserva = this.rechazarReserva.bind(this)
  }
 
  componentDidMount() {
    this.refs.iScroll.addEventListener("scroll", () => {
      if (this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >=this.refs.iScroll.scrollHeight){
        this.loadMoreItems();
      }
    });
  }

  aceptarReserva(id){
    console.log("me estan llamando carajoooo")
    Meteor.call("reserva.aceptar",id);
  }

  rechazarReserva(id){
    console.log("me estan llamando carajoooo")
    Meteor.call("reserva.rechazar",id);
  }

 
  displayItems() {

    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
      ];
    var items = [];
    var reser = this.props.reservas;
   for (var i = 0; i < this.props.reservas.length; i++) 
  //    this.props.reservas.map((p,i)=>
      {
        var z = reser[i];
        var fecha = z.fecha;
      if(z.creador === Meteor.user().username){ 
      items.push(
     <li key={i}>
       <div className="card">
        <div className="card-header">
         <h4>Reserva para el {fecha.getDate()} de {monthNames[fecha.getMonth()]} a las {fecha.getHours()}:{fecha.getMinutes()} </h4>
        </div>
        <div className="card-body">
          <h5 className="card-title">Reserva para {z.numPersonas}  personas</h5>
          El estado de esta reserva es: {z.estado === false ? (<p className="text-danger">Pendiente</p>):(null)} {z.estado === true ? (<p className="text-success">Aceptada</p>):(null)} {z.estado === "rechazada" ? (<p className="text-danger">Rechazada</p>):(null)}
          {Meteor.user() && Meteor.user().username === "Admin" ? (<div><button type="button" className="btn btn-outline-danger btn-sm" onClick={() => this.aceptarReserva(z.id)}>Aceptar</button><button type="button" className="btn btn-outline-danger btn-sm" onClick={() => this.rechazarReserva(z.id)}>Rechazar</button></div>):(null)}
        </div>
      </div>
      <br/>
    </li>);
    }
    else if(Meteor.user().username === "Admin" && z.estado !== false){
      items.push(
     <li key={i}>
       <div className="card">
        <div className="card-header">
         <h4>Reserva para el {fecha.getDate()} de {monthNames[fecha.getMonth()]} a las {fecha.getHours()}:{fecha.getMinutes()} </h4>
        </div>
        <div className="card-body">
          <h5 className="card-title">Reserva para {z.numPersonas}  personas</h5>
          El estado de esta reserva es: {z.estado === false ? (<p className="text-danger">Pendiente</p>):(null)}{z.estado === true ? (<p className="text-success">Aceptada</p>):(null)} {z.estado === "rechazada" ? (<p className="text-danger">Rechazada</p>):(null)}
        </div>
      </div>
      <br/>
    </li>);
    }
    }
    return items;
  }
 
  loadMoreItems() {
    this.setState({ loadingState: true });
    setTimeout(() => {
      this.setState({ items: this.state.items + 10, loadingState: false });
    }, 3000);
  }
 
  render() {

    return (
      <div ref="iScroll" style={{ height: "400px", overflow: "auto" }}>
        <ul>
          {this.displayItems()}
        </ul>
 
        {this.state.loadingState ? <p className="loading"> loading More Items..</p> : ""}
 
      </div>
    );
  }
}

LayoutAceptadasAdmin.propTypes ={
 reservas: PropTypes.array.isRequired
};

 
export default withTracker(() =>{
  var a =Meteor.user().username;
  Meteor.subscribe("reservas");
  return{
    reservas: Reservas.find({}).fetch()
  };

}
)(LayoutAceptadasAdmin);