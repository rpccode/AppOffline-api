import CustomerController from "../controller/customer.controller.js";

const CustomerService = {};


CustomerService.PostCustomer = async (req, res) => {
    return await CustomerController.CreateCustomer(req, res)
}
CustomerService.GetCustomerByTenant = async (req, res) => {
    return await CustomerController.GetAllCustomer(req, res)
}














export default CustomerService;