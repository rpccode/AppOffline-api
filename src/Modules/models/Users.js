import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../../config/index.js";
import Info from "./Info.js";
import Tenant from "./Tenant.js";
import UserType from "./UserType.js";

const Users = sequelizeInstance.define('Users', {
    UserId: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    TenantId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    infoId: {
        type: DataTypes.INTEGER
    },
    UserType: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 2
    },
    Email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    Password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    token: {
        type: DataTypes.TEXT
    },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

Users.belongsTo(Tenant, { foreignKey: 'TenantId', as: 'FK_Usuarios_Tenants' });
Users.belongsTo(Info, { foreignKey: 'infoId', as: 'FK_Usuarios_Info' });
Users.belongsTo(UserType, { foreignKey: 'UserType', as: 'FK_Usuarios_UserType' });


export default Users;