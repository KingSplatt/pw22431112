import mysql from 'mysql2/promise';
import { Personal, PersonalNuevo } from '../typesPersonal';
import { personalSchema, personalSchema2 } from '../schema/personal.schema';

const conexion = mysql.createPool({
    host: '127.0.0.1',
    user: 'splatt',
    password: 'splatt123',
    database: 'pw2024m',
    multipleStatements: false
});

export const obtienePersonal = async () => {
    try {
        const [results] = await conexion.query("SELECT * FROM personal");
        return results;
    } catch (error) {
        return { error: "no se puede obtener el personal" };
    }
}

export const encuentraPersonal = async (id: number) => {
    try {
        const identificador = { id: id };
        const validacion = personalSchema2.safeParse(identificador);
        if (!validacion.success) {
            return { error: validacion.error };
        }
        const [results] = await conexion.query("SELECT * FROM personal WHERE id = ? LIMIT 1", id);
        return results;
    } catch (error) {
        return { error: "no se puede obtener el personal" };
    }
}

export const encuentraPersonalTelefono = async (telefono: string) => {
    try {
        const tel = { telefono: telefono };
        const validacion = personalSchema2.safeParse(tel);
        if (!validacion.success) {
            return { error: validacion.error };
        }
        // const consulta = `SELECT * FROM personal WHERE telefono = '${telefono}' AND estatus = 1`;
        // const [results] = await conexion.query(consulta);
        const [results] = await conexion.query("SELECT * FROM personal WHERE telefono = ? AND estatus = 1", telefono);
        return results;

    } catch (error) {
        return { error: "no se puede obtener el personal con ese numero de telefono" };
    }
}

export const agregarPersonal = async (nuevo: PersonalNuevo) => {
    try {
        const validacion = personalSchema.safeParse(nuevo);
        if (!validacion.success) {
            return { error: validacion.error };
        }
        //validacion de tipo lista blanca
        if (nuevo.estatus == 1 || nuevo.estatus == 2) {
            const [results] = await conexion.query("INSERT INTO personal (nombre, direccion, telefono, estatus) VALUES (?, ?, ?, ?)", [nuevo.nombre, nuevo.direccion, nuevo.telefono, nuevo.estatus]);
            return results;
        } else {
            return { error: "El estatus debe ser 1(vigente) o 2(no vigente)" };
        }
    } catch (error) {
        return { error: "no se puede agregar el personal" };
    }
}

export const modificaPersonal = async (nuevo: Personal) => {
    const validacion = personalSchema2.safeParse(nuevo);
    if (!validacion.success) {
        return { error: validacion.error };
    }
    try {
        const [results] = await conexion.query("UPDATE personal SET nombre = ?, direccion = ?, telefono = ?, estatus = ? WHERE id = ?", [nuevo.nombre, nuevo.direccion, nuevo.telefono, nuevo.estatus, nuevo.id]);
        return results;
    } catch (error) {
        return { error: "no se puede modificar el personal" };
    }
}

export const borrarPersonal = async (id: number) => {
    try {
        const [results] = await conexion.query("DELETE FROM personal WHERE id = ?", id);
        return results;
    } catch (error) {
        return { error: "no se puede borrar el personal" };
    }
}