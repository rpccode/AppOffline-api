import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../../config/index.js";

const Pais = sequelizeInstance.define('Pais', {
    PaisId: {
        type: DataTypes.CHAR(3),
        primaryKey: true
    },
    NombrePais: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
});


export default Pais;