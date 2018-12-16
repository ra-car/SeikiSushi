import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";

export const ElMenu = new Mongo.Collection("menu");  //nombre que va a tener la coleccion en la BD

if(Meteor.isServer){
  Meteor.publish("menu", () =>{
    return ElMenu.find({});
  });
}

Meteor.methods(
  {
    "producto.add"(name,descrp,valor,tipo,url){


      ElMenu.upsert({name},{
        name,
        descrp,
        valor,
        tipo,
        url

      });

    },

    "producto.del"(name){

      const part = ElMenu.findOne({name});

      ElMenu.remove(part);

 
    },

      "producto.mod"(name,valor){

       const res = ElMenu.findOne({name});
  
      ElMenu.update({_id: res._id},{
        $set:{
          valor: valor
        }
      });
    
      }
  }
);