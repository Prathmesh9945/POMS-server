const ItemSchemas = new mongoose.Schema({
    itemId:
    {
        type: String,
        unique: true,
        required: true
    },

    name:
    {
        type: String,
        required: true
    },

    description:
    {
        type: String
    },

    category:
    {
        type: String,
        required: true
    },

    brand:
    {
        type: String
    },

    unitPrice:
    {
        type: Number,
        required: true
    },

    currency:
    {
        type: String,
        required: true
    },

    discount:
    {
        type: Number,
        default: 0
    },

    tax:
    {
        type: Number,
        default: 0
    },

    quantityOrdered:
    {
        type: Number,
        required: true
    },

    unitOfMeasure:
    {
        type: String,
        required: true
    },

    minOrderQuantity:
    {
        type: Number
    },

    reorderLevel:
    {
        type: Number
    },

    preferredSupplier:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier'
    },

    leadTime:
    {
        type: Number
    },

    warehouseLocation:
    {
        type: String
    },

    expectedDeliveryDate:
    {
        type: Date
    },

    packagingDetails:
    {
        type: String
    },

    warrantyPeriod:
    {
        type: String
    },

    returnPolicy:
    {
        type: String
    },

    inspectionRequired:
    {
        type: Boolean,
        default: false

    },

    attachments: [String]
}, { timestamps: true });

const ItemSchema = mongoose.model('User', userSchema);
module.exports = {ItemSchema};
