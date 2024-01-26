import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../../config/index.js";
import Ciudad from "./Ciudad.js";
import Pais from "./Pais.js";
import Provincia from "./Provincia.js";
import Sector from "./Sector.js";
import Tenant from "./Tenant.js";

const Address = sequelizeInstance.define('Address', {
    AddressID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    TenantId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Apartamento: {
        type: DataTypes.STRING(100)
    },
    Barrio: {
        type: DataTypes.STRING(100)
    },
    Sector: {
        type: DataTypes.INTEGER
    },
    Ciudad: {
        type: DataTypes.INTEGER
    },
    Provincia: {
        type: DataTypes.INTEGER
    },
    Pais: {
        type: DataTypes.CHAR(3)
    },
    Address_url: {
        type: DataTypes.STRING(255)
    }
});

Address.belongsTo(Tenant, { foreignKey: 'TenantId', as: 'FK_Address_Tenants' });
Address.belongsTo(Sector, { foreignKey: 'Sector', as: 'FK_Address_Sector' });
Address.belongsTo(Ciudad, { foreignKey: 'Ciudad', as: 'FK_Address_Ciudades' });
Address.belongsTo(Provincia, { foreignKey: 'Provincia', as: 'FK_Address_Provincias' });
Address.belongsTo(Pais, { foreignKey: 'Pais', as: 'FK_Address_Paises' });

export default Address