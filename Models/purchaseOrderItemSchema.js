const mongoose = require("mongoose");

const PurchaseOrderSchema = new mongoose.Schema({
    poNumber:
    {
        type: String,
        unique: true,
        required: true
    },

    supplier:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier',
        required: true
    },

    items: [{
        item:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item',
            required: true
        },
        quantity:
        {
            type: Number,
            required: true
        },
        unitPrice:
        {
            type: Number,
            required: true
        },
        totalCost:
        {
            type: Number,
            required: true
        }
    }],

    deliveryAddress:
    {
        type: String,
        required: true
    },

    paymentTerms:
    {
        type: String,
        required: true
    },

    status:
    {
        type: String,
        enum: ['Pending', 'Approved', 'Shipped', 'Delivered', 'Closed'],
        default: 'Pending'
    },

    expectedDeliveryDate:
    {
        type: Date
    },

    notes:
    {
        type: String
    }
}, { timestamps: true });

const orderSchema = mongoose.Schema(PurchaseOrderSchema, { collection: 'orders' });
module.exports = {orderSchema};
