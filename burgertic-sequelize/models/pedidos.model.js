import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbconfig.js";

export class Pedido extends Model {}

Pedido.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        id_usuario: {
            type: DataTypes.INTEGER,
            references: {
                model: 'usuarios',
                key: 'id',
            },
        },
        fecha: {
            type: DataTypes.DATE,
        },
        estado: {
            type: DataTypes.STRING(50),
        },
    },
    {
        sequelize,
        modelName: "Pedido",
        tableName: "pedidos",
        timestamps: false,
    }
);

