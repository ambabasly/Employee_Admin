import { Response, Request } from "express";
import Employees from "./EmployeesModel"
import { StatusCodes } from "http-status-codes";

const createEmployee = async (req: Request, res: Response): Promise<void> => {

    const { firstname, lastname, phone, birthday, address, city, zipCode } = req.body
    const re = /^[a-zA-Z0-9\s,.'-]{3,}$/
    const isValidAddress = re.test(String(address))

    if (!firstname || !lastname || !phone || !birthday || !address || !city || !zipCode) {
        res.status(StatusCodes.BAD_REQUEST).json({ msg: "all field must be filled" })
    }
    if (firstname.length < 3 || lastname.length < 3) {
        res.status(StatusCodes.BAD_REQUEST).json({ msg: "firstname and lastname should be above 3 characters" })
    }
    if (zipCode.length < 4) {
        res.status(StatusCodes.BAD_REQUEST).json({ msg: "firstname and lastname should be above 3 characters" })
    }
    if (city.length < 3) {
        res.status(StatusCodes.BAD_REQUEST).json({ msg: "please a valid city name" })
    }
    if (!isValidAddress) {
        res.status(StatusCodes.BAD_REQUEST).json({ msg: "Please enter a valid address" })
    }

    const employee = await Employees.create({ firstname, lastname, phone, birthday, address, city, zipCode })

    res.status(StatusCodes.CREATED).json({
        employee: {
            firstname: employee.firstname,
            lastname: employee.lastname,
            phone: employee.phone,
            address: employee.address,
            city: employee.city,
            zipCode: employee.zipCode
        }
    })
}

const updateEmployee = async (req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined> => {
    const {
        body: { firstname, lastname, phone, birthday, address, city, zipCode },
        params: { id: employeeId }
    } = req
    const re = /^[a-zA-Z0-9\s,.'-]{3,}$/
    const isValidAddress = re.test(String(address))
    try {

        if (!firstname || !lastname || !phone || !birthday || !address || !city || !zipCode) {
            return res.status(StatusCodes.BAD_REQUEST).json({ msg: "all field must be filled" })
        }
        if (firstname.length < 3 || lastname.length < 3) {
            return res.status(StatusCodes.BAD_REQUEST).json({ msg: "firstname and lastname should be above 3 characters" })
        }
        if (zipCode.length < 4) {
            return res.status(StatusCodes.BAD_REQUEST).json({ msg: "firstname and lastname should be above 3 characters" })
        }
        if (city.length < 3) {
            return res.status(StatusCodes.BAD_REQUEST).json({ msg: "please a valid city name" })
        }
        if (!isValidAddress) {
            return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Please enter a valid address" })
        }
        const employee = await Employees.findByIdAndUpdate({ _id: employeeId }, req.body, { new: true, runValidators: true })
        return res.status(StatusCodes.OK).json({ employee })
    } catch (error) {
        console.log(error)
    }
}

const deleteEmployee = async (req: Request, res: Response): Promise<void> => {
    const {
        params: { id: employeeId }
    } = req

    const employee = await Employees.findByIdAndRemove({ _id: employeeId })
    res.status(StatusCodes.OK).json({ employee })
}

const getAllEmployees = async (req: Request, res: Response): Promise<void> => {
    const employees = await Employees.find({}).sort("createdAt")
    res.status(StatusCodes.OK).json({ employees })
}

export { createEmployee, updateEmployee, deleteEmployee, getAllEmployees }
