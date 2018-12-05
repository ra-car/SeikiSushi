import React, {Component} from "react";
import PropTypes from "prop-types";
import {Meteor} from "meteor/meteor";
import {withTracker} from "meteor/react-meteor-data";
import Producto from './Producto';
class Menu extends Component {

 constructor(props){
    super(props);
    this.state = { 
    };

}

  render() {
    return (
    <div> 
      <nav>
        <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
          <a className="nav-item nav-link text-black" id="nav-Entradas-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Entradas</a>
          <a className="nav-item nav-link text-black" id="nav-Ensaladas-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="true">Ensaladas</a>
          <a className="nav-item nav-link text-black" id="nav-Arroz-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="true">Arroz</a>
          <a className="nav-item nav-link text-black" id="nav-Yakitori-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="true">Yakitori</a>
          <a className="nav-item nav-link text-black" id="nav-Sushi-Sashimi-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="true">Sushi-Sashimi</a>
          <a className="nav-item nav-link text-black" id="nav-Sushi-Nigiri -tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="true">Sushi-Nigiri Fusión</a>
          <a className="nav-item nav-link text-black" id="nav-Rollos-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="true">Rollos Maki</a>
          <a className="nav-item nav-link text-black" id="nav-Bebidas-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="true">Bebidas</a>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><Producto /></div>
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">sd</div>
        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">..ffdg.</div>
        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">..fdg.</div>
        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">.fsdg..</div>
        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">.fdg..</div>
        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">.fg..</div>
      </div>

    
    </div>
      );
  }
}

export default Menu;