import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db.js";  // Asegúrate de que el archivo 'db.js' tenga la configuración correcta de Sequelize

export class Usuario extends Model {}

Usuario.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING(50)
        },
        apellido: {
            type: DataTypes.STRING(50)
        },
        email: {
            type: DataTypes.STRING(256),
            unique: true, 
        },
        password: {
            type: DataTypes.STRING(256)  
        },
        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,  
        },
    },
    {
        sequelize,
        modelName: "Usuario",  
        timestamps: true,  
    }
);
