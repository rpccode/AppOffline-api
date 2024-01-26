import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../../config/index.js";
import Sector from "./Sector.js";

const Barrio = sequelizeInstance.define('Barrio', {
    BarrioId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    SectorId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    NombreSector: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
});
Barrio.belongsTo(Sector, { foreignKey: 'SectorId', as: 'FK_Barrios_Sectores' });
export default Barrio