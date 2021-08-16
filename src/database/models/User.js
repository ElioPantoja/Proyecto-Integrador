function userData (sequelize, dataTypes) {

    alias = "brand";

    cols = {
        id : {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true
            },
        nombre : {
            type: dataTypes.STRING(200),          
            },        
        apellido:{
            type: dataTypes.STRING (200)
            },
        email:{
            type: dataTypes.STRING (200)
        },
        telefono: {
            type: dataTypes.INTERGER
        },
        contrasenia:{
            type: dataTypes.STRING (200)
        },
        avatar: {
            type: dataTypes.STRING (200)
        },
        id_direccion: {
            type: dataTypes.INTERGER
        },
      
        
    }

    config = {
        tableName: "user",
        timestamps: false
    };


const usuarios = sequelize.define (alias, cols, config);

return usuarios ;
}

module.exports = userData; 