import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../../config/index.js";

const Frequency = sequelizeInstance.define('Frequency', {
    FrequencyId: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    Name: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    Fnumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});


export default Frequency;