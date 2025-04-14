const mongoose = require('mongoose');

const SupplierSchema = new mongoose.Schema({
  supplierId:
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

  businessType:
  {
    type: String,
    enum: ['Manufacturer', 'Wholesaler', 'Distributor', 'Service Provider'],
    required: true
  },

  address:
  {
    type: String,
    required: true
  },

  contactPerson:
  {
    type: String,
    required: true
  },

  phone:
  {
    type: String,
    required: true
  },

  email:
  {
    type: String,
    required: true,
    unique: true
  },

  website:
  {
    type: String
  },

  taxId:
  {
    type: String,
    required: true
  },

  bankDetails: {
    accountNumber: String,
    bankName: String,
    swiftCode: String
  },

  paymentTerms:
  {
    type: String,
    enum: ['Advance', 'Net 30', 'Net 60', 'Credit'],
    required: true
  },

  currencyUsed:
  {
    type: String,
    required: true
  },

  compliance: {
    businessLicenseNumber: String,
    isoCertifications: [String],
    insuranceDetails: String
  },

  performanceMetrics: {
    avgDeliveryTime: Number,
    orderFulfillmentRate: Number,
    defectReturnRate: Number,
    rating: Number
  }
}, { timestamps: true });

const Supplier = mongoose.model('Supplier', SupplierSchema);
module.exports = { Supplier };
