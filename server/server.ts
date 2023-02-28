import express, { Request, Response, Application, Router } from "express"
const app: Application = express()
import { connectDb } from "./db"
import cors from "cors"
import dotenv from "dotenv"
import router from "./route"

dotenv.config()

const controlRoute: Router = router

app.use(cors())
app.use(express.json())

app.use("/api/v1/employees", controlRoute)
app.use("/", (req: Request, res: Response): void => {
    res.json({})
})

const url: string = process.env.MONGO_URI ?? "default"

const port = process.env.PORT || 5001


const start = async (): Promise<void> => {
    try {
        await connectDb(url)
        console.log("connected")
        app.listen(port, (): void => {
            console.log(`Server is listening at port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}
start()
