import React, {Component} from "react";
import PropTypes from "prop-types";
import {Meteor} from "meteor/meteor";
import {withTracker} from "meteor/react-meteor-data";

class Seiki extends Component {

  render() {
    return (
    <div> 

    <div className="container">

      <h1 className="my-4">¿Quién e Seiki? 
      </h1>

      <div className="row">

        <div className="col-md-5">
          <img className="img-fluid" src="/images/seikiPerf.PNG" alt="seiki chef"/>
        </div>

        <div className="col-md-6">
          <p>Seiki Yamada nació en el sur de Japón en la provincia de Fukuoka, en la isla de Kyushu, donde transcurrió su juventud. Se graduó en la escuela de culinaria Nakamura a la edad de 19 años. Luego comenzó a trabajar en un restaurante de Sushi en Tokio, en la famosa área de Tsukiji donde se convirtió en Chef de Sushi.

          Luego de varios años en Tokio regresó a su natal Kyushu para iniciar una especialización en Decoración de Alimentos en el Instituto de la Moda de Fukuoka.</p><p>

          Tras graduarse comenzó a publicar sus recetas en la revista japonesa de cocina Clim y en televisión en el Food Channel de Japón.</p>

          <p>Las recetas de Seiki eran para entonces exclusivas, con ingredientes de todo el mundo para el mercado japonés, platos como perros calientes americanos con “Kimpira” japonés, tacos mexicanos con pollo teriyaki o sashimi de salmón con pasta de albahaca italiana; creando un estilo muy casual y delicado para el paladar japonés.</p><p>

          Decidió entonces buscar nuevos horizontes y se trasladó al área de Nueva York para mejorar su destreza en decoración de alimentos, tomó clases en Parsons New School mientras trabajaba para un periódico gratuito japonés de la ciudad que publicaba sus recetas.

          Simultáneamente trabajó en un restaurante del Upper East Side donde volvió a preparar Sushi ahora al estilo de los Estados Unidos.</p>


        </div>

      </div>
      <div className="row">
        <p>Abrió entonces Seiki’s Sushi en Teaneck, Nueva Jersey, donde comenzó a crear bocados de Nigiri con adiciones de salsas exclusivas, una idea que imaginó cuando trabajaba para la revista japonesa. Tras varios años decidió mudarse al sur, a la capital del sol, Miami, donde trabajó en el restaurante Zuma de donde dio el salto a Colombia. Aquí estuvo colaborando con Toshiro Robatayaki de la cadena La Fragata y ahora ofrece sus creaciones en Seiki Sushi.

        El Sushi de Seiki se puede describir como muy rico en sabor y para paladares muy sensibles.</p>
      </div>

    </div>

    </div> 
      );
  }
}

export default Seiki;