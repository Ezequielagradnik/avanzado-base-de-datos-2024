import { Pedido } from "../models/pedido.model.js";
import { PedidoPlato } from "../models/pedidoplato.model.js";
import { Plato } from "../models/plato.model.js";
import { Usuario } from "../models/usuario.model.js";

// Obtener todos los platos de un pedido específico
const getPlatosByPedido = async (idPedido) => {
    const pedidoPlatos = await PedidoPlato.findAll({
        where: { idPedido },
        include: [{ model: Plato }],
    });

    if (!pedidoPlatos.length) throw new Error("Pedido no encontrado");

    return pedidoPlatos.map(pedidoPlato => ({
        ...pedidoPlato.Plato.toJSON(),
        cantidad: pedidoPlato.cantidad,
    }));
};

// Obtener todos los pedidos
const getPedidos = async () => {
    const pedidos = await Pedido.findAll();

    if (!pedidos.length) return [];

    return await Promise.all(
        pedidos.map(async (pedido) => {
            const platos = await getPlatosByPedido(pedido.id);
            return {
                ...pedido.toJSON(),
                platos,
            };
        })
    );
};

// Obtener un pedido específico por ID
const getPedidoById = async (id) => {
    const pedido = await Pedido.findByPk(id);

    if (!pedido) return null;

    const platos = await getPlatosByPedido(id);
    return {
        ...pedido.toJSON(),
        platos,
    };
};

// Obtener pedidos de un usuario específico
const getPedidosByUser = async (idUsuario) => {
    const pedidos = await Pedido.findAll({
        where: { idUsuario },
    });

    if (!pedidos.length) return [];

    return await Promise.all(
        pedidos.map(async (pedido) => {
            const platos = await getPlatosByPedido(pedido.id);
            return {
                ...pedido.toJSON(),
                platos,
            };
        })
    );
};

// Crear un nuevo pedido
const createPedido = async (idUsuario, platos) => {
    // Validar que todos los platos existen
    for (const plato of platos) {
        const existePlato = await Plato.findByPk(plato.id);
        if (!existePlato) throw new Error("Plato no encontrado");
    }

    // Crear el pedido
    const pedido = await Pedido.create({
        idUsuario,
        fecha: new Date(),
        estado: 'pendiente',
    });

    // Agregar los platos al pedido
    await Promise.all(
        platos.map(async (plato) => {
            await PedidoPlato.create({
                idPedido: pedido.id,
                idPlato: plato.id,
                cantidad: plato.cantidad,
            });
        })
    );

    return pedido;
};

// Actualizar el estado de un pedido
const updatePedido = async (id, estado) => {
    const estadosValidos = ["aceptado", "en camino", "entregado"];
    if (!estadosValidos.includes(estado)) throw new Error("Estado inválido");

    const pedido = await Pedido.findByPk(id);
    if (!pedido) throw new Error("Pedido no encontrado");

    pedido.estado = estado;
    await pedido.save();
    return pedido;
};

// Eliminar un pedido
const deletePedido = async (id) => {
    const pedido = await Pedido.findByPk(id);
    if (!pedido) throw new Error("Pedido no encontrado");

    await pedido.destroy();
    return pedido;
};

export default {
    getPedidos,
    getPedidoById,
    getPedidosByUser,
    createPedido,
    updatePedido,
    deletePedido
}

