import { Info } from "../../models/index.js";

const CustomerController = {};


CustomerController.CreateCustomer = async (req, res) => {

    const { TenantIdl, UserId } = req.user
    try {

        const customer = await Info.create({
            TenantId: TenantIdl,
            ...req.body
        })

        return res.status(200).json({
            ok: true,
            msg: 'Informacion a sido registrada correctamente ',
            customer
        })

    } catch (error) {
        res.status(500).json('Error en el Servidor:' + error)
    }
}

CustomerController.GetAllCustomer = async (req, res) => {
    const TenantIdl = req.user.TenantIdl
    // console.log(TenantIdl);
    // console.log(req);
    try {
        const AllCustomer = await Info.findAll({ where: { TenantId: TenantIdl } })


        res.status(200).json(AllCustomer)
    } catch (error) {
        res.status(500).json('Error en el Servidor:' + error)
    }
}

CustomerController.GetOneCustomer = async (req, res) => {
    const { TenantIdl } = req.user;
    const customerId = req.params.customerId; // Asumo que el customerId se pasa como parámetro en la ruta

    try {
        const customer = await Info.findOne({ where: { TenantId: TenantIdl, id: customerId } });

        if (!customer) {
            return res.status(404).json({
                ok: false,
                msg: 'Cliente no encontrado',
            });
        }

        res.status(200).json({
            ok: true,
            customer,
        });
    } catch (error) {
        res.status(500).json('Error en el Servidor: ' + error);
    }
};

CustomerController.GetPayByCustomer = async (req, res) => {
    const { TenantIdl } = req.user;
    const customerId = req.params.customerId; // Asumo que el customerId se pasa como parámetro en la ruta

    try {
        const payments = await Info.findAll({
            attributes: ['paymentMethod', 'amount'], // Ajusta los atributos según tu modelo
            where: { TenantId: TenantIdl, id: customerId },
        });

        if (!payments || payments.length === 0) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontraron pagos para el cliente',
            });
        }

        res.status(200).json({
            ok: true,
            payments,
        });
    } catch (error) {
        res.status(500).json('Error en el Servidor: ' + error);
    }
};

CustomerController.UpdateCustomer = async (req, res) => {
    const { TenantIdl } = req.user;
    const customerId = req.params.customerId;

    try {
        const { DNI } = req.body;
        const existingCustomer = await Info.findOne({ where: { TenantId: TenantIdl, DNI } });

        if (existingCustomer && existingCustomer.InfoId !== customerId) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe un cliente con el mismo DNI para este TenantId',
            });
        }

        const [updatedRows] = await Info.update(req.body, {
            where: { TenantId: TenantIdl, InfoId: customerId },
        });

        if (updatedRows === 0) {
            return res.status(404).json({
                ok: false,
                msg: 'Cliente no encontrado o no se realizaron cambios',
            });
        }

        const updatedCustomer = await Info.findOne({ where: { TenantId: TenantIdl, InfoId: customerId } });

        res.status(200).json({
            ok: true,
            msg: 'Cliente actualizado correctamente',
            customer: updatedCustomer,
        });
    } catch (error) {
        res.status(500).json('Error en el Servidor: ' + error);
    }
};

CustomerController.DeleteCustomer = async (req, res) => {
    const { TenantIdl } = req.user;
    const customerId = req.params.customerId;

    try {
        const deletedRows = await Info.destroy({ where: { TenantId: TenantIdl, InfoId: customerId } });

        if (deletedRows === 0) {
            return res.status(404).json({
                ok: false,
                msg: 'Cliente no encontrado o no se realizó la eliminación',
            });
        }

        res.status(200).json({
            ok: true,
            msg: 'Cliente eliminado correctamente',
        });
    } catch (error) {
        res.status(500).json('Error en el Servidor: ' + error);
    }
};
export default CustomerController