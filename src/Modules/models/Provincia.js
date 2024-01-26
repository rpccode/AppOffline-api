import { DataTypes } from "sequelize";
import MIRegion from "./MIRegion.js";
import Pais from "./Pais.js";
import sequelizeInstance from "../../config/sequelize.config.js";

const Provincia = sequelizeInstance.define('Provincia', {
    ProvinciaId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    PaisId: {
        type: DataTypes.CHAR(3),
        allowNull: false
    },
    MIRegion: {
        type: DataTypes.INTEGER
    },
    NombreProvincia: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
});

Provincia.belongsTo(MIRegion, { foreignKey: 'MIRegion', as: 'FK_Provincias_MIRegion' });
Provincia.belongsTo(Pais, { foreignKey: 'PaisId', as: 'FK_Provincias_Paises' });

export default Provincia;