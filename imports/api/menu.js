import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";

//Juan Vega: Agregar paquete correspondiente
import { check } from 'meteor/check';


export const Menu = new Mongo.Collection("menu");  //nombre que va a tener la coleccion en la BD

if(Meteor.isServer){
  Meteor.publish("menu", () =>{
    return Menu.find({});
  });
}

Meteor.methods(
  {
    "producto.add"(name,descrip,tipo,precio){

      //Juan Vega: Faltó incluir verificaciones de seguridad en los métodos de Meteor. Por ejemplo, pudiste validar los tipos de datos 
      //de cada variable, de forma que te protejas contra inserciones de campos inválidos o corruptos.
      
      check(name, String);
      check(descrip, String);
      check(tipo, String);
      check(precio, Number);

      Menu.upsert({creador},{
        name,
        descrip,
        tipo,
        precio

      });

    },

    "producto.del"(name){

      const part = Menu.findOne({name});

      Menu.remove(part);

 
    }

    

  }
);
