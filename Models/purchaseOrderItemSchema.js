const mongoose = require("mongoose");

const purchaseOrderSchema = new mongoose.Schema({
    poNumber: {
        type: String,
        required: true,
        unique: true
    },
    supplier: {
        id: { type: String, required: true },
        name: { type: String, required: true },
        email: { type: String, required: true },
        supplierId: { type: String, required: true },
    },
    items: [
        {
            itemObjID: {
                type: String,
                ref: 'Item',
                required: true
            },
            itemName: String,
            quantity: {
                type: Number,
                required: true
            },
            unitPrice: {
                type: Number,
                required: true
            },
            discount: Number,
            tax: Number,
            totalPrice: Number
        }
    ],
    totalAmount: {
        type: Number,
        required: true
    },
    tax: {
        type: Number,
        default: 0
    },
    discount: {
        type: Number,
        default: 0
    },
    shippingCharges: {
        type: Number,
        default: 0
    },
    paid: {
        type: Number
    },
    paymentStatus: {
        type: String,
        enum: ["Paid", "Unpaid", "Partial"]
    },
    status: {
        type: String,
        default: "Pending Approval",
        enum: [
            'Pending Approval',
            'Approved',
            'Rejected',
            'Confirmed',
            'Received',
            'Closed'
        ]
    },
    expectedDeliveryDate: Date,
    notes: String,
    createdBy: {
        type: String, // or mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    approvedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    approvedAt: Date,
    rejectedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    rejectedAt: Date,
    rejectedReason: String,
    confirmedAt: Date,
    receivedAt: Date,
    closedAt: Date
}, { timestamps: true });

const PurchaseOrder = mongoose.model("PurchaseOrder", purchaseOrderSchema);
module.exports = { PurchaseOrder }
