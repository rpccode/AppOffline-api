import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../../config/index.js";
import { v1 } from "uuid";

const Tenant = sequelizeInstance.define('Tenant', {
    TenantId: {
        type: DataTypes.UUID,
        defaultValue: v1(),
        primaryKey: true,
        allowNull: false

    },
    TenantName: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
});

export default Tenant;