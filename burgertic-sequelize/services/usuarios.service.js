import { Usuario } from "../models/usuarios.model.js";

// Obtener un usuario por su correo electrónico
const getUsuarioByEmail = async (email) => {
    try {
        const usuario = await Usuario.findOne({ where: { email } });
        return usuario; 
    } catch (error) {
        console.error("Error al obtener el usuario por email:", error);
        throw error; 
    }
};

// Obtener un usuario por su ID
const getUsuarioById = async (id) => {
    try {
        const usuario = await Usuario.findByPk(id);
        return usuario; 
    } catch (error) {
        console.error("Error al obtener el usuario por ID:", error);
        throw error; 
    }
};

// Crear un nuevo usuario
const createUsuario = async (usuario) => {
    try {
        const nuevoUsuario = await Usuario.create({
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            email: usuario.email,
            password: usuario.password,
            admin: usuario.admin,
        });
        return nuevoUsuario; 
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        throw error; 
    }
};

export default { getUsuarioByEmail, getUsuarioById, createUsuario };
