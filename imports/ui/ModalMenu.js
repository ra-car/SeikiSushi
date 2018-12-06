import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Producto from './Producto';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      pictures: []
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount(){

    //Juan Vega: Para evitar la exposición del API Key e información sensible pudiste usar variables de entorno, de forma que 
    //no quedaran tus credenciales en texto plano dentro del código.
    fetch('https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=b11db2a17a833d9b1ac4c504bef12f4e&user_id=160816622%40N05&format=json&nojsoncallback=1')
    .then(function(response){
      return response.json();
    })
    .then(function(j){
      alert(JSON.stringify(j));
      let picArray = j.photos.photo.map((pic) => {
        
        var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
        return(
          <img alt={pic.title} src={srcPath}></img>
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

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Producto/>


              {this.state.pictures}
            
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
