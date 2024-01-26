import { DataTypes, NOW } from "sequelize";
import { sequelizeInstance } from "../../config/index.js";
import Frequency from "./Frequency.js";
import Tenant from "./Tenant.js";
import Users from "./Users.js";
import LoanState from "./LoanState.js";
import Info from "./Info.js";

const LoanHeader = sequelizeInstance.define('LoanHeader', {
    LoanId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    TenantId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    UserId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    infoId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    FrequencyId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    Dues: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Interest: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    Start_date: {
        type: DataTypes.DATE,
        allowNull: false,
        default: NOW()

    },
    StateId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

LoanHeader.belongsTo(Tenant, { foreignKey: 'TenantId', as: 'FK_LoanHeader_Tenants' });
LoanHeader.belongsTo(Users, { foreignKey: 'UserId', as: 'FK_LoanHeader_User' });
LoanHeader.belongsTo(Info, { foreignKey: 'infoId', as: 'FK_LoanHeader_Info' });
LoanHeader.belongsTo(Frequency, { foreignKey: 'FrequencyId', as: 'FK_LoanHeader_Frecuency' });
LoanHeader.belongsTo(LoanState, { foreignKey: 'StateId', as: 'FK_LoanHeader_LoanState' })

export default LoanHeader;