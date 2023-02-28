import { Document } from "mongoose";

export default interface Employee extends Document {
    firstname: String,
    lastname: String,
    phone: String
    birthday: String
    address: String
    city: String
    zipCode: Number
}
