const InvoiceSchema = new mongoose.Schema({
    invoiceNumber:
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

    supplier:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier',
        required: true
    },

    invoiceDate:
    {
        type: Date,
        required: true
    },

    dueDate:
    {
        type: Date,
        required: true
    },

    totalAmount:
    {
        type: Number,
        required: true
    },

    paymentStatus:
    {
        type: String,
        enum: ['Pending', 'Paid'], default: 'Pending'
    }

}, { timestamps: true });

const Invoice = mongoose.model('Invoice', InvoiceSchema);
module.exports = {Invoice};
