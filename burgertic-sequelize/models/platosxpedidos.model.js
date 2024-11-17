import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbconfig.js"; 

export class PedidoPlato extends Model {}

PedidoPlato.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,  
    },
    id_pedido: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Pedidos', 
        key: 'id',
      },
    },
    id_plato: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Platos',  
        key: 'id',
      },
    },
    cantidad: {
      type: DataTypes.INTEGER,
      defaultValue: 1,  
    },
  },
  {
    sequelize,  
    modelName: 'Platoxpedido',  
    tableName: 'platosxpedidos',  
    timestamps: false,  
  }
);

