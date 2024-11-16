import { z } from 'zod';

//validaciones con Zod - construir schema
export const personalSchema = z.object({
    nombre: z.string().min(2, "Minimo 10 caracteres").max(200, "Maximo 200 caracteres"),
    direccion: z.string().min(2).max(300),
    telefono: z.string().min(10).max(15),
    estatus: z.number().int().positive()
    // estatus: z.number().int().positive().min(1).max(2, "los valores correctos son 1 y 2")
}).refine(data => data.direccion == "TEC DE CULIACAN", {
    message: "La dirección no es la correcta, debe ser del Tec de Culiacán",
    path: ["direccion"]
}).refine(data => data.estatus <= 2, {
    message: "Los valores correctos son 1(vigente) y 2(no vigente)",
    path: ["estatus"]
})

export const personalSchema2 = z.object({
    id: z.number().int().positive(),
    nombre: z.string().min(2, "Minimo 10 caracteres").max(200, "Maximo 200 caracteres"),
    direccion: z.string().min(2).max(300),
    telefono: z.string().min(10).max(15),
    estatus: z.number().int().positive()
}).refine(data => data.id > 0, {
    message: "El id debe ser mayor a 0",
    path: ["id"]
})