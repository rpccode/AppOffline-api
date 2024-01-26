import jwt from 'jsonwebtoken'
import { Users } from '../../models/index.js';
import { config } from '../../../config/index.js';


const authenticateMiddleware = async (req, res, next) => {
    try {
        // Obtener el token de la solicitud (generalmente se encuentra en el encabezado Authorization)
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ error: 'Token de autenticación no proporcionado' });
        }

        // Verificar el token y decodificarlo
        const decodedToken = jwt.verify(token, config.TOKEN_SECRET); // Reemplaza 'JWT_SECRET' con tu secreto de JWT
        // console.log(decodedToken);
        // Buscar al usuario en la base de datos por su ID (u otro identificador único)
        const user = await Users.findOne({ where: { UserId: decodedToken.UserId, TenantId: decodedToken.TenantId } })

        if (!user) {
            return res.status(401).json({ error: 'Usuario no encontrado' });
        }

        // Asignar la información del usuario al objeto de solicitud (req.user)
        req.user = {
            UserId: user.UserId,
            TenantIdl: decodedToken.TenantId,
        };

        next(); // Continuar con la ejecución de la ruta
    } catch (error) {
        console.error(error);
        return res.status(401).json({ error: 'Token de autenticación inválido' });
    }
};

export default authenticateMiddleware;