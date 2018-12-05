import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";

export const Menu = new Mongo.Collection("menu");  //nombre que va a tener la coleccion en la BD

if(Meteor.isServer){
  Meteor.publish("menu", () =>{
    return Menu.find({});
  });
}

Meteor.methods(
  {
    "producto.add"(name,descrip,tipo,precio){


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