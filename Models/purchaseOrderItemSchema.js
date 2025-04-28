const mongoose = require("mongoose");

const purchaseOrderSchema = new mongoose.Schema({
    poNumber: {
        type: String,
        required: true,
        unique: true,
    },
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier',
        required: true,
    },
    items: [
        {
            item: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Item',
                required: true,
            },
            itemName: String, 
            quantity: {
                type: Number,
                required: true,
            },
            unitPrice: {
                type: Number,
                required: true,
            },
            totalPrice: {
                type: Number, 
                required: true,
            },
        },
    ],
    totalAmount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: [
            'Pending Approval',
            'Approved',
            'Rejected',
            'Confirmed',
            'Received',
            'Closed',
        ],
        default: 'Pending Approval',
    },
    expectedDeliveryDate: {
        type: Date,
    },
    notes: String,

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    approvedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    approvedAt: Date,

    rejectedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    rejectedAt: Date,
    rejectedReason: String,

    confirmedAt: Date,
    receivedAt: Date,
    closedAt: Date,
}, {
    timestamps: true,
});

export default mongoose.models.PurchaseOrder || mongoose.model('PurchaseOrder', purchaseOrderSchema);
