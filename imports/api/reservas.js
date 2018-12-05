import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";

export const Reservas = new Mongo.Collection("reservas");  //nombre que va a tener la coleccion en la BD

if(Meteor.isServer){
  Meteor.publish("reservas", () =>{
    return Reservas.find({});
  });
}

Meteor.methods(
  {
    "reserva.add"(name,fecha,numPersonas){

      const creador = Meteor.user().username;
      let id = creador + name;

      Reservas.upsert({name},{
        id,
        fecha,
        numPersonas,
        estado: false,
        creador

      });

    },

    "reserva.del"(id){

      const part = Menu.findOne({id});

      Reservas.remove(part);

 
    },
      
      "reserva.aceptar"(id){

       const res = Reservas.findOne({id});
      Reservas.update({_id: res._id},{
        $set:{
          estado: true  
        }
      });
 
    },

     "reserva.rechazar"(id){

      const res = Reservas.findOne({id});
      Reservas.update({_id: res._id},{
        $set:{
          estado: "rechazada"  
        }
      });
 
    }

    

  }
);