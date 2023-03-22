const { Router } = requeri("express")
const router  = Router()
const employeesctrl = requeri("../controllers/employees.controllers.js")

router.get("/", employeesctrl, GETemployees);
router.post("/", employeesctrl, POSTemployees);
router.update("/id", employeesctrl, UPDATEemployees);
router.delete("/id", employeesctrl, DELETEemployees);

module.exports = router