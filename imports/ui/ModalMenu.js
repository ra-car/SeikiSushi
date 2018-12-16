import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Producto from './Producto';
import {withTracker} from "meteor/react-meteor-data";
import {ElMenu} from "../api/menu.js";

class ModalMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      pictures: [],
      url : ""
    };

    this.toggle = this.toggle.bind(this);
    this.clickImagen = this.clickImagen.bind(this);
    this.añadir = this.añadir.bind(this);
    this.cancelar = this.cancelar.bind(this);
    this.agregarProducto = this.agregarProducto.bind(this);

  }

  agregarProducto(){
  const name = document.getElementById("nombreProd").value;
  const descrp = document.getElementById("descrpProd").value;
  const valor = document.getElementById("valorProd").value;
  const tipo = this.props.tipo;
  const url = this.state.url;
  Meteor.call("producto.add",name,descrp,valor,tipo,url);
}


  clickImagen(e) {
    var direc =  e.target.src;
    this.setState({
      url: direc
    });
  }

  componentDidMount(){

    fetch('https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=560202d12fd961be3b28ad3bc0c5d224&user_id=160816622%40N05&format=json&nojsoncallback=1')
    .then(function(response){
      return response.json();
    })
    .then(function(j){
      let picArray = j.photos.photo.map((pic) => {
        
        var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
        return(
          <div className="col-sm-4"><button className="btn btn-outline-danger"><img alt={pic.title} src={srcPath} onClick={this.clickImagen} height="200" width="200"/></button></div>
        )
      })
      this.setState({pictures: picArray});
    }.bind(this))

  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  añadir() {
    this.setState({
      modal: !this.state.modal
    });
    this.agregarProducto();
  }

  cancelar() {
    this.setState({
      modal: !this.state.modal
    });

  }

  render() {
    return (
      <div id="divagregarProd" align="center">
        <Button className="btn btn-outline-danger" id="agregarProd" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Producto</ModalHeader>
          <ModalBody>
              <div className="input-group mb-3">
              {/*Aca van las opciones*/}
                <div className="row">

                 <div className="col">
                    <label >¡Ingresa la información del producto que deseas añadir!</label>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">Nombre:</span>
                      </div>
                      <input type="text" className="form-control" id="nombreProd" aria-describedby="basic-addon3"/>
                    </div>  
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">Desripcion del producto:</span>
                      </div>
                      <textarea rows="4" cols="50" id="descrpProd" name="comment" form="usrform"/>
                    </div> 
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">Valor:</span>
                      </div>
                      <input type="text" className="form-control" id="valorProd" aria-describedby="basic-addon3"/>
                    </div> 
                 </div>
        
              </div>
            <div className="col">
            </div>
          </div>

            <br/>
            A continuación, selecciona la imagen del producto:
            <br/>
            <br/>
             <div ref="iScroll" style={{ height: "900px", overflow: "auto" }}>
               <div className="row">
                 {this.state.pictures}
               </div>
             </div>
          </ModalBody>
          <ModalFooter>

            <Button className="btn btn-outline-danger" onClick={this.añadir}>Añadir</Button>{' '}
            <Button className="btn btn-outline-secondary" onClick={this.cancelar}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default withTracker(() =>{
  
  Meteor.subscribe("menu");
  return{};

}
)(ModalMenu);
