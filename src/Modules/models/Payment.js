import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../../config/index.js";
import LoanHeader from "./LoanHeader.js";
import Tenant from "./Tenant.js";
import Users from "./Users.js";
import LoanState from "./LoanState.js";

// Modelo para la tabla Payment
const Payment = sequelizeInstance.define('Payment', {
    paymentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    LoanId: {
        type: DataTypes.INTEGER,
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
    PaymentNumber: {
        type: DataTypes.INTEGER
    },
    Balance: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    Capital: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    Interest: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    Dues: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    Payment_amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    StateId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

Payment.belongsTo(Tenant, { foreignKey: 'TenantId', as: 'FK_Payment_Tenants' });
Payment.belongsTo(LoanHeader, { foreignKey: 'LoanId', as: 'FK_Payment_LoanHeader' });
Payment.belongsTo(Users, { foreignKey: 'UserId', as: 'FK_Payment_User' });
Payment.belongsTo(LoanState, { foreignKey: 'StateId', as: 'FK_Payment_LoanState' });

export default Payment
