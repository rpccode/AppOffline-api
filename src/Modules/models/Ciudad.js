import { DataTypes } from "sequelize";
import Provincia from "./Provincia.js";
import sequelizeInstance from "../../config/sequelize.config.js";

const Ciudad = sequelizeInstance.define('Ciudad', {
    CiudadId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ProvinciaId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    NombreCiudad: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
});

Ciudad.belongsTo(Provincia, { foreignKey: 'ProvinciaId', as: 'FK_Ciudades_Provincias' });

export default Ciudad