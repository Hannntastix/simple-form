import mongoose, { Schema } from "mongoose";

const validatorSchema = new Schema({
    fullName: {
        type: String,
        required: [true, "Name is required."],
        trim: true,
        minLength: [2, "Nama harus diisi minimal lebih dari 2 huruf"],
        maxLength: [50, "Nama harus kurang dari 50 huruf"],
    },

    email: {
        type: String,
        required: [true, "Email harus diisi"],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Isi dengan email yang valid"],
    },

    message: {
        type: String,
        required: [true, "Pesan harus diisi"],
    },

    date: {
        type: Date,
        default: Date.now,
    },
})

const Validator = mongoose.models.Validator || mongoose.model("Validator", validatorSchema)

export default Validator;