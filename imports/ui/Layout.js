import React, {Component} from "react";
import PropTypes from "prop-types";
import {Meteor} from "meteor/meteor";
import {withTracker} from "meteor/react-meteor-data";
import {Reservas} from "../api/reservas.js";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import DatePicker from 'react-date-picker';
class Layout extends Component {
  constructor(props) {
   super(props);
   this.state = {
      items: 10,
      loadingState: false,
      reservas: [],
      activeTab: '1',
      date: new Date()
    };
    this.aceptarReserva = this.aceptarReserva.bind(this)
    this.rechazarReserva = this.rechazarReserva.bind(this)
    this.toggle = this.toggle.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(date) {
  this.setState({ date })
  } 

 
  componentDidMount() {
    this.refs.iScroll.addEventListener("scroll", () => {
      if (this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >=this.refs.iScroll.scrollHeight){
        this.loadMoreItems();
      }
    });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
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
    else if(Meteor.user().username === "Admin" && z.estado === false){
      items.push(
     <li key={i}>
       <div className="card">
        <div className="card-header">
         <h4>Reserva para el {fecha.getDate()} de {monthNames[fecha.getMonth()]} a las {fecha.getHours()}:{fecha.getMinutes()} </h4>
        </div>
        <div className="card-body">
          <h5 className="card-title">Reserva para {z.numPersonas}  personas</h5>
          El estado de esta reserva es: {z.estado === false ? (<p className="text-danger">Pendiente</p>):(null)}{z.estado === true ? (<p className="text-success">Aceptada</p>):(null)} {z.estado === "rechazada" ? (<p className="text-danger">Rechazada</p>):(null)}
          {Meteor.user() && Meteor.user().username === "Admin" ? (<div><button type="button" className="btn btn-outline-danger btn-sm" onClick={() => this.aceptarReserva(z.id)}>Aceptar</button><button type="button" className="btn btn-outline-danger btn-sm" onClick={() => this.rechazarReserva(z.id)}>Rechazar</button></div>):(null)}
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
      <div>
      {Meteor.user() && Meteor.user().username === "Admin" ? (
      <div ref="iScroll" style={{ height: "400px", overflow: "auto" }}>


              <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Resevas para hoy
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Resevas para mañana
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Resevas esta semana
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Reservas por fecha
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <br/>
            <ul>
              {this.displayItems()}
            </ul>
             {this.state.loadingState ? <p className="loading"> loading More Items..</p> : ""}

          </TabPane>
          <TabPane tabId="2">
           
          </TabPane>
          <TabPane tabId="3">
           
          </TabPane>
           <TabPane tabId="4">
            <br/>
            <DatePicker onChange={this.onChange}  value={this.state.date} />
          </TabPane>
        </TabContent>


 
 
      </div>):(<div ref="iScroll" style={{ height: "400px", overflow: "auto" }}>
        <ul>
          {this.displayItems()}
        </ul>
 
        {this.state.loadingState ? <p className="loading"> loading More Items..</p> : ""}
 
      </div>)}
      </div>
    );
  }
}

Layout.propTypes ={
 reservas: PropTypes.array.isRequired
};

 
export default withTracker(() =>{
  var a =Meteor.user().username;
  Meteor.subscribe("reservas");
  return{
    reservas: Reservas.find({}).fetch()
  };

}
)(Layout);