import { Router } from "express"
const router = Router()
import { createEmployee, updateEmployee, deleteEmployee, getAllEmployees } from "./control"


router.route('/').post(createEmployee).get(getAllEmployees)
router.route('/:id').delete(deleteEmployee).patch(updateEmployee)

export default router
