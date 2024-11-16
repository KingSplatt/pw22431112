import express, { Request, Response } from 'express';
import * as personalServices from '../services/personalServices';
//Activamos las rutas
const router = express.Router();

//htpp://localhost:3001/api/personal
router.get('/', async (_req: Request, res: Response) => {
    let personal = await personalServices.obtienePersonal();
    res.send(personal);
    console.log("holaaaaa");
})

//htpp://localhost:3001/api/personal/1 <--- numero de id del personal
router.get('/:id', async (req: Request, res: Response) => {
    // req.params.id
    let personal = await personalServices.encuentraPersonal(Number(req.params.id));
    res.send(personal);
})

//htpp://localhost:3001/api/personal/telefono/12134123 <--- numero de telefono del personal
router.get('/telefono/:telefono', async (req: Request, res: Response) => {
    // req.params.id
    let personal = await personalServices.encuentraPersonalTelefono(req.params.telefono);
    res.send(personal);
})

router.post('/', async (req: Request, res: Response) => {
    try {
        const { nombre, direccion, telefono, estatus } = req.body;
        const nuevo = await personalServices.agregarPersonal({
            nombre,
            direccion,
            telefono,
            estatus
        });
        res.send(nuevo);
    } catch (error) {
        res.status(400).send("No se pudo agregar el personal");
    }
})
//modificar datos
router.put('/', async (req: Request, res: Response) => {
    try {
        const { id, nombre, direccion, telefono, estatus } = req.body;
        const modificado = await personalServices.modificaPersonal({
            id,
            nombre,
            direccion,
            telefono,
            estatus
        });
        res.send(modificado);
    } catch (error) {
        res.send(400).send("error en los datos")
    }
})

//eliminar o borrar datos del personal
router.delete('/', async (req: Request, res: Response) => {
    try {
        const { id } = req.body;
        const eliminado = await personalServices.borrarPersonal(Number(id));
        res.send(eliminado);
    } catch (error) {
        res.status(400).send("error en los datos")
    }
})


export default router;