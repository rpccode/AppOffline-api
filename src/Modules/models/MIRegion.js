import { DataTypes } from "sequelize";
import MARegion from "./MARegion.js";
import sequelizeInstance from "../../config/sequelize.config.js";

const MIRegion = sequelizeInstance.define('MIRegion', {
    MIRegionId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    MARegionId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    NombreRegion: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    RegionColor: {
        type: DataTypes.STRING(20)
    }
});

MIRegion.belongsTo(MARegion, { foreignKey: 'MARegionId', as: 'FK_MARegion_MIRegion' });

export default MIRegion