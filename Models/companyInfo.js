// models/CompanyInfo.ts
import mongoose, { Schema, model, models } from 'mongoose'

const CompanyInfoSchema = new Schema({
    name:
    {
        type: String,
        required: true
    },

    address:
    {
        type: String
    },

    phone:
    {
        type: String
    },

    email:
    {
        type: String
    },

    taxId:
    {
        type: String
    },

    logo:
    {
        type: String
    },

    notes:
    {
        type: String
    },
}, { timestamps: true })

const CompanyInfo = mongoose.models('CompanyInfo', CompanyInfoSchema)

export default CompanyInfo
