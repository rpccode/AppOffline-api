// Agrega estos estados al modelo Frequency.js
import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../../config/index.js";

const LoanState = sequelizeInstance.define('LoanState', {
    StateId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Name: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

export default LoanState;
