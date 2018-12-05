import React, {Component} from "react";
import PropTypes from "prop-types";
import {Meteor} from "meteor/meteor";
import {withTracker} from "meteor/react-meteor-data";
import { HTTP } from 'meteor/http';
import AccountsUIWrapper from "./AccountsUIWrapper.js";
class Intro extends Component {

 constructor(props){
    super(props);
    this.state = { 
    };

}

  initMap = () => {
     var myLatLng = {lat: 4.643861, lng: -74.061122};
      var  map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: 4.643861, lng: -74.061122},
          zoom: 16
        });

      var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Seiki Sushi!'
        });
      }

    renderMap =() =>{
      loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDWY4j-pCc6H72iYgTeghHDdDOZh9L7h9U&callback=initMap")
      window.initMap = this.initMap
    }

 componentDidMount(){
  this.renderMap()
 }
  render() {
    return (
    <div> 
        
          {/*<!-- Header with Background Image -->*/}
          <header className="business-header">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h1 id="princ" className="display-3 text-center text-white mt-4">Seiki Sushi</h1>
                </div>
                <div className="col-lg-12 text-center">
                  <button type="button" className="btn btn-outline-light">Únetenos y realiza tu Reserva</button>
                  <br/>
                  <br/>
                  <p className="text-white">¿Qué esperas para ser parte de la Familia Seiki Sushi? </p>
                </div>
              </div>
            </div>
          </header>

          {/*<!-- Page Content -->*/}
          <div className="container">

            <div className="row">
              <div className="col-sm-8">
                <h2 id="princ" className="mt-4">¿Qué se opina de nosotros?</h2>
              </div>
              <div className="col-sm-4">
                <h2 id="princ" className="mt-4">¿Dónde estamos?</h2> 
                <div id="map" style={{ height: '50vh', width: '100%' }} ></div> 
                <blockquote className="blockquote text-center">
                   <p className="mb-0"> <b>Dirección:</b> Carrera 6 # 58-43</p>
                </blockquote>            
              </div>
              
            </div>
            
          </div>
         {/* <!-- /.container -->*/}
</div>
      );
  }
}

function loadScript(url){
  var index = window.document.getElementsByTagName('script')[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}
export default Intro;