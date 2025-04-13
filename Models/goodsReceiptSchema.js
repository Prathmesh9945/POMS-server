const GoodsReceiptSchema = new mongoose.Schema({
    grnNumber:
    {
        type: String,
        unique: true,
        required: true
    },

    purchaseOrder:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PurchaseOrder',
        required: true
    },

    receivedItems: [{
        item:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item',
            required: true
        },
        quantityReceived:
        {
            type: Number,
            required: true
        },
        condition:
        {
            type: String,
            required: true
        }
    }],

    receivedBy:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    dateReceived:
    {
        type: Date,
        default: Date.now
    }

}, { timestamps: true });

const GoodsReceipt = mongoose.model('GoodsReceipt', GoodsReceiptSchema);
module.exports = {GoodsReceipt};
