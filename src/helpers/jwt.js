import jwt from 'jsonwebtoken'
import { config } from '../config/index.js';



const generatetoken = (UserId, TenantId) => {
    // Generar un token de acceso
    const payload = {
        UserId,
        TenantId,
    };


    const accessToken = jwt.sign(payload, config.TOKEN_SECRET, {
        expiresIn: '3h', // Tiempo de expiración del token (ejemplo: 1 hora)
    });
    return accessToken;
}

export default generatetoken;