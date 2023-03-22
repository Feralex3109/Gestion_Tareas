const employeectrl = {}
const employee = require("../models/Employee");

employeectrl.POSTemployees = async(req, res) => {
    const employees = await Employee.find()
    res.json(employees)
}
employeectrl.GETemployees = async (req, res) => {
    const nweEmployee = new Employee(req.body)
    res.send({message: "employee get"});
}

employeectrl.UPDATEemployees = async (req, res) => {
    await Employee.findByidUpdate(req.params.Id, req.body)   
    res.json({status: "employee update"});
}

employeectrl.DELETEemployees = async (req, res) => {
    await Employee.findByidAndDelete(req.params.Id)
    await nweEmployee.save();
    res.json({status: "employee delete"});
}

employeectrl.UPDATEemployees = (req, res) => {}
employeectrl.DELETEemployees = (req, res) => {}

module.export = employeectrl