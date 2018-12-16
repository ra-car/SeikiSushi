import React, {Component} from "react";
import PropTypes from "prop-types";
import {Meteor} from "meteor/meteor";
import {withTracker} from "meteor/react-meteor-data";
import Producto from './Producto';
import ModalMenu from './ModalMenu';
import MenuCard from './MenuCard';
import classnames from 'classnames';
import {ElMenu} from "../api/menu.js";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
class Menu extends Component {

 constructor(props){
    super(props);
    this.state = { 
      loadingState: false,
      activeTab: '1',
      productos:[]
    };

    this.toggle = this.toggle.bind(this);
}

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  eliminarProducto(){

  const name = document.getElementById("nombreProd").value;

  Meteor.call("producto.del",name);

}

editarProducto(){
  const name = document.getElementById("nombreProd").value;
  const descrp = document.getElementById("descrpProd").value;
  const valor = document.getElementById("nombreProd").value;
  const tipo = document.getElementById("tipoProd").value;

   Meteor.call("producto.add",name,descrp,"a",valor);
}



  render() {

    let losProductos = this.props.productos.map(prodct =>{
      return(
            <div>
            {prodct.tipo === this.state.activeTab ?  (<div className="col-sm-6"><MenuCard src={prodct.url} name={prodct.name} val={prodct.valor} descrp={prodct.descrp}/></div>):(<div></div>)}
            </div>
        )
    })

    return (
    <div id="tabs"> 
              <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Entradas
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Ensaladas
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Arroz
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Yakitori
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >
              Sushi-Sashimi
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '6' })}
              onClick={() => { this.toggle('6'); }}
            >
              Sushi-Nigiri Fusión
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '7' })}
              onClick={() => { this.toggle('7'); }}
            >
              Rollos Maki
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '8' })}
              onClick={() => { this.toggle('8'); }}
            >
              Bebidas
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <br/>
            {Meteor.user() && Meteor.user().username === "Admin" ? (<ModalMenu buttonLabel={"Agregar Producto"} className={"modal-dialog modal-lg"} tipo={this.state.activeTab}/>):(<br/>)}
            <br/>
            <br/>
            {console.log(this.props.productos.length)}
             <div ref="iScroll" style={{ height: "400px", overflow: "auto" }}>
               <div className="row">
                {losProductos}
               </div>
             </div>

          </TabPane>
          <TabPane tabId="2">
            <br/>
            {Meteor.user() && Meteor.user().username === "Admin" ? (<ModalMenu buttonLabel={"Agregar Producto"} className={"modal-dialog modal-lg"} tipo={this.state.activeTab}/>):(<br/>)}
            <br/>
            <br/>
             <div ref="iScroll" style={{ height: "400px", overflow: "auto" }}>
               <div className="row">
                 {losProductos}
               </div>
             </div>
          </TabPane>
          <TabPane tabId="3">
            <br/>
            {Meteor.user() && Meteor.user().username === "Admin" ? (<ModalMenu buttonLabel={"Agregar Producto"} className={"modal-dialog modal-lg"} tipo={this.state.activeTab}/>):(<br/>)}
            <br/>
            <br/>
             <div ref="iScroll" style={{ height: "400px", overflow: "auto" }}>
               <div className="row">
                 {losProductos}
               </div>
             </div>
          </TabPane>
           <TabPane tabId="4">
            <br/>
            {Meteor.user() && Meteor.user().username === "Admin" ? (<ModalMenu buttonLabel={"Agregar Producto"} className={"modal-dialog modal-lg"} tipo={this.state.activeTab}/>):(<br/>)}
            <br/>
            <br/>
             <div ref="iScroll" style={{ height: "400px", overflow: "auto" }}>
               <div className="row">
                 {losProductos}
               </div>
             </div>
          </TabPane>
          <TabPane tabId="5">
            <br/>
            {Meteor.user() && Meteor.user().username === "Admin" ? (<ModalMenu buttonLabel={"Agregar Producto"} className={"modal-dialog modal-lg"} tipo={this.state.activeTab}/>):(<br/>)}
            <br/>
            <br/>
             <div ref="iScroll" style={{ height: "400px", overflow: "auto" }}>
               <div className="row">
                 {losProductos}
               </div>
             </div>
          </TabPane>
          <TabPane tabId="6">
            <br/>
            {Meteor.user() && Meteor.user().username === "Admin" ? (<ModalMenu buttonLabel={"Agregar Producto"} className={"modal-dialog modal-lg"} tipo={this.state.activeTab}/>):(<br/>)}
            <br/>
            <br/>
             <div ref="iScroll" style={{ height: "400px", overflow: "auto" }}>
               <div className="row">
                 {losProductos}
               </div>
             </div>
          </TabPane>
          <TabPane tabId="7">
            <br/>
            {Meteor.user() && Meteor.user().username === "Admin" ? (<ModalMenu buttonLabel={"Agregar Producto"} className={"modal-dialog modal-lg"} tipo={this.state.activeTab}/>):(<br/>)}
            <br/>
            <br/>
             <div ref="iScroll" style={{ height: "400px", overflow: "auto" }}>
               <div className="row">
                 {losProductos}
               </div>
             </div>
          </TabPane>
           <TabPane tabId="8">
            <br/>
            {Meteor.user() && Meteor.user().username === "Admin" ? (<ModalMenu buttonLabel={"Agregar Producto"} className={"modal-dialog modal-lg"} tipo={this.state.activeTab}/>):(<br/>)}
            <br/>
            <br/>
             <div ref="iScroll" style={{ height: "400px", overflow: "auto" }}>
               <div className="row">
                 {losProductos}
               </div>
             </div>
          </TabPane>
        </TabContent>
  
    </div>
      );
  }
}

Menu.propTypes ={
 productos: PropTypes.array.isRequired
};


export default withTracker(() =>{
  Meteor.subscribe("menu");
  return{
    productos: ElMenu.find({}).fetch()
  };

}
)(Menu);
