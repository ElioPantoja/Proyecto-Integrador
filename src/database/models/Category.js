function categoryData (sequelize, dataTypes) {

    alias = "category";

    cols = {
        id : {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre : {
            type: dataTypes.STRING(200),
            
        }
    }

    config = {
        tableName: "category",
        timestamps: false
    };


const categories = sequelize.define (alias, cols, config);

return categories;
}

module.exports = categoryData; 