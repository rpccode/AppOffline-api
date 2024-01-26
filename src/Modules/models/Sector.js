import { DataTypes } from "sequelize";
import sequelizeInstance from "../../config/sequelize.config.js";
import Ciudad from "./Ciudad.js";

const Sector = sequelizeInstance.define('Sector', {
    SectorId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    CiudadId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    NombreSector: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
});

Sector.belongsTo(Ciudad, { foreignKey: 'CiudadId', as: 'FK_Sectores_Ciudades' });

export default Sector