import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db.js";

export class pedidos extends Model {}

pedidos.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        id_usuario: {
            type: DataTypes.INTEGER,
            ForeignKey : true
        },
        fecha: {
            type: DataTypes.date,
        },
        estado: {
            type: DataTypes.VARCHAR(50) // hacer lo de pendiente aceptado en camino y entregado

        },
    },
    {
        sequelize,
        modelName: "pedidos",
        timestamps: false,
    }
);
