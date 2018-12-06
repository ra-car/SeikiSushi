import React, {Component} from "react";
import PropTypes from "prop-types";
import {Meteor} from "meteor/meteor";
import {withTracker} from "meteor/react-meteor-data";
import Producto from './Producto';
import ModalMenu from './ModalMenu';
import classnames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
class Menu extends Component {

 constructor(props){
    super(props);
    this.state = { 
      loadingState: false,
      activeTab: '1'
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

  render() {
    return (
    <div> 
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
            {Meteor.user() && Meteor.user().username === "Admin" ? (<ModalMenu buttonLabel={"Agregar Producto"} className={"modal-dialog modal-lg"}/>):(<br/>)}
            <ul>
              1
            </ul>
             {this.state.loadingState ? <p className="loading"> loading More Items..</p> : ""}

          </TabPane>
          <TabPane tabId="2">
            <br/>
            {Meteor.user() && Meteor.user().username === "Admin" ? (<ModalMenu buttonLabel={"Agregar Producto"} className={"modal-dialog modal-lg"}/>):(<br/>)}
            <ul>
              2
            </ul>
             {this.state.loadingState ? <p className="loading"> loading More Items..</p> : ""}
          
          </TabPane>
          <TabPane tabId="3">
            <br/>
            {Meteor.user() && Meteor.user().username === "Admin" ? (<ModalMenu buttonLabel={"Agregar Producto"} className={"modal-dialog modal-lg"}/>):(<br/>)}
            <ul>
              3
            </ul>
             {this.state.loadingState ? <p className="loading"> loading More Items..</p> : ""}

          </TabPane>
           <TabPane tabId="4">
            <br/>
            {Meteor.user() && Meteor.user().username === "Admin" ? (<ModalMenu buttonLabel={"Agregar Producto"} className={"modal-dialog modal-lg"}/>):(<br/>)}
            4

            <ul>
             
            </ul>
             {this.state.loadingState ? <p className="loading"> loading More Items..</p> : ""}
          </TabPane>
          <TabPane tabId="5">
            <br/>
            {Meteor.user() && Meteor.user().username === "Admin" ? (<ModalMenu buttonLabel={"Agregar Producto"} className={"modal-dialog modal-lg"}/>):(<br/>)}
            <ul>
             5
            </ul>
             {this.state.loadingState ? <p className="loading"> loading More Items..</p> : ""}

          </TabPane>
          <TabPane tabId="6">
            <br/>
            {Meteor.user() && Meteor.user().username === "Admin" ? (<ModalMenu buttonLabel={"Agregar Producto"} className={"modal-dialog modal-lg"}/>):(<br/>)}
            <ul>
              6
            </ul>
             {this.state.loadingState ? <p className="loading"> loading More Items..</p> : ""}
          
          </TabPane>
          <TabPane tabId="7">
            <br/>
            {Meteor.user() && Meteor.user().username === "Admin" ? (<ModalMenu buttonLabel={"Agregar Producto"} className={"modal-dialog modal-lg"}/>):(<br/>)}
            <ul>
              7
            </ul>
             {this.state.loadingState ? <p className="loading"> loading More Items..</p> : ""}

          </TabPane>
           <TabPane tabId="8">
            <br/>
            {Meteor.user() && Meteor.user().username === "Admin" ? (<ModalMenu buttonLabel={"Agregar Producto"} className={"modal-dialog modal-lg"}/>):(<br/>)}
            8

            <ul>
             
            </ul>
             {this.state.loadingState ? <p className="loading"> loading More Items..</p> : ""}
          </TabPane>
        </TabContent>
  
    </div>
      );
  }
}

export default Menu;