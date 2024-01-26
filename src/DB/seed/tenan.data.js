
import Tenant from "../../Modules/models/Tenant.js";
import { v4 as uuidv4, v1 as uuidv1 } from 'uuid'
import argon from 'argon2'
import Users from '../../Modules/models/Users.js';

export const insertTenants = async (req, res) => {
    try {
        // Utiliza el método bulkCreate para insertar múltiples filas a la vez
        const tenantRpccode = uuidv1();
        const pwd = await argon.hash('Raee0923')
        await Tenant.bulkCreate([
            { TenantId: tenantRpccode, TenantName: 'rpccode' },

        ]);
        console.log(tenantRpccode);
        await Users.bulkCreate([
            { UserId: tenantRpccode, TenantId: tenantRpccode, UserType: 1, Email: 'rpccode@gmail.com', Password: pwd }
        ])

        return res.status(200).json({
            ok: true,
            msg: 'Inserción exitosa'
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Error al insertar los inquilinos:' + error.message
        });
    }
};


