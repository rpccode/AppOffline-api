import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../../config/index.js";

const UserType = sequelizeInstance.define('UserType', {
    UserTypeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NameType: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

export default UserType;