import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import React, {Component} from "react";
import {ElMenu} from "../api/menu.js";
import {withTracker} from "meteor/react-meteor-data";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class MenuCard extends Component {

  constructor(props){
    super(props);
    this.state = {
        modal: false
    };

    this.eliminar = this.eliminar.bind(this);
    this.editar = this.editar.bind(this);
    this.toggle = this.toggle.bind(this);
    this.acept = this.acept.bind(this);
    this.cancelar = this.cancelar.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

eliminar(e){
 var name =  e.target.id;
 Meteor.call("producto.del",name);
}

editar(){
const valor = document.getElementById("valorProd").value;
Meteor.call("producto.mod",this.props.name,valor);
}

 acept() {
    this.setState({
      modal: !this.state.modal
    });
    this.editar();
  }

    cancelar() {
    this.setState({
      modal: !this.state.modal
    });
  }

 

  render() {  
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={this.props.src} />
        <CardBody>
          <CardTitle>{this.props.name}</CardTitle>
          <CardSubtitle>Precio: {this.props.val}</CardSubtitle>
          <CardText>{this.props.descrp}</CardText>
          {Meteor.user() !== null && Meteor.user().username === "Admin" ? (<div>
          <Button className="btn btn-outline-danger btn-sm" id={this.props.name} onClick={this.eliminar}>Eliminar</Button>
          <Button id={this.props.name} className="btn btn-outline-danger btn-sm" onClick={this.toggle}>Editar</Button>
                  <Modal isOpen={this.state.modal} toggle={this.toggle} className={"modal-dialog modal-lg"}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
          Ingrese nuevo valor
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">Valor:</span>
                      </div>
                      <input type="text" className="form-control" id="valorProd" aria-describedby="basic-addon3"/>         
          </ModalBody>
          <ModalFooter>
            <Button className="btn btn-outline-danger" onClick={this.acept}>Añadir</Button>{' '}
            <Button className="btn btn-outline-secondary" onClick={this.cancelar}>Cancelar</Button>
          </ModalFooter>
        </Modal>
          </div>):(<div></div>)}

        </CardBody>
      </Card>
    </div>
  );
}
}

export default withTracker(() =>{
  
  Meteor.subscribe("menu");
  return{};

}
)(MenuCard);
