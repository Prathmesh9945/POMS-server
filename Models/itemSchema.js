const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
    itemId: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: String,
    category: {
        type: String,
        required: true
    },
    brand: String,
    unitPrice: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    tax: {
        type: Number,
        default: 0
    },
    unitOfMeasure: {
        type: String,
        required: true
    },
    minOrderQuantity: Number,
    reorderLevel: Number,
    preferredSupplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier'
    },
    leadTime: Number,
    warehouseLocation: String,
    packagingDetails: String,
    warrantyPeriod: String,
    returnPolicy: String,
    inspectionRequired: {
        type: Boolean,
        default: false
    },
    attachments: [String]
}, { timestamps: true });

const Product = mongoose.model("Product", ProductsSchema);

module.exports = { Product }
