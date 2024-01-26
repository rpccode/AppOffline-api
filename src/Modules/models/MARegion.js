import { DataTypes } from "sequelize";
import Pais from "./Pais.js";
import sequelizeInstance from "../../config/sequelize.config.js";

const MARegion = sequelizeInstance.define('MARegion', {
    MARegionId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    PaisId: {
        type: DataTypes.CHAR(3),
        allowNull: false
    },
    NombreRegion: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
});

MARegion.belongsTo(Pais, { foreignKey: 'PaisId', as: 'FK_MARegions_Paises' });


export default MARegion;