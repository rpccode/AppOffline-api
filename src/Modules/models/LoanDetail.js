import { DataTypes, Sequelize } from "sequelize";
import LoanHeader from "./LoanHeader.js";
import Tenant from "./Tenant.js";
import { sequelizeInstance } from "../../config/index.js";
import LoanState from "./LoanState.js";

const LoanDetail = sequelizeInstance.define('LoanDetail', {
    LoanId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    TenantId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    Dues_amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    Total_amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    Total_interest: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    Start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    StateId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

LoanDetail.belongsTo(Tenant, { foreignKey: 'TenantId', as: 'FK_LoanDetail_Tenants' });
LoanDetail.belongsTo(LoanHeader, { foreignKey: 'LoanId', as: 'FK_LoanDetail_LoanHeader' });
LoanDetail.belongsTo(LoanState, { foreignKey: 'StateId', as: 'FK_LoanDetail_LoanState' });

export default LoanDetail