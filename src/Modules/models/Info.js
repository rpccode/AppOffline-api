import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../../config/index.js";
import Address from "./Address.js";
import Tenant from "./Tenant.js";
import UserType from "./UserType.js";

const Info = sequelizeInstance.define('Info', {
    InfoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    TenantId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    InfoTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    TypeDNI: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    DNI: {
        type: DataTypes.STRING(20),
        unique: {
            name: 'unique_dni_per_tenant',
            msg: 'Ya existe un usuario con el mismo DNI para este TenantId',
        },
    },
    FirtsName: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    LastName: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    AddressID: {
        type: DataTypes.INTEGER,

    },
    Telefono: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Position: {
        type: DataTypes.INTEGER
    },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

Info.belongsTo(Tenant, { foreignKey: 'TenantId', as: 'FK_Info_Tenants' });
Info.belongsTo(Address, { foreignKey: 'AddressID', as: 'FK_Info_Address' });
Info.belongsTo(UserType, { foreignKey: 'InfoTypeId', as: 'FK_Info_InfoType' });


export default Info;