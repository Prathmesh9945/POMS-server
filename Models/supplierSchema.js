const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  // Basic Information
  supplierId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  businessType: {
    type: String,
    enum: ["Manufacturer", "Wholesaler", "Distributor", "Service Provider"],
    required: true
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  contactPerson: {
    name: String,
    phone: String,
    email: String
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  website: String,

  // Financial & Payment Details
  taxId: {
    type: String,
    required: true
  },
  bankDetails: {
    accountNumber: String,
    bankName: String,
    swiftCode: String,
    ifscCode: String
  },
  paymentTerms: {
    type: String,
    enum: ["Advance", "Net 30", "Net 60", "Credit"],
    required: true
  },
  currencyUsed: {
    type: String,
    required: true
  },


  categories: [String],
  supplierSKU: String,
  pricingAgreements: String,
  moq: Number, // Minimum Order Quantity
  leadTime: String, // e.g., "5 days", "2 weeks"

  // Compliance & Certifications
  compliance: {
    type: String,
    required: true
  },
  licenseNumber: String,
  isoCertifications: [String],
  insuranceDetails: String,

  // Performance Metrics
  performanceMetrics: {
    avgDeliveryTime: Number,
    fulfillmentRate: Number, // %
    defectRate: Number, // %
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    pastPurchaseOrders: [
      {
        poNumber: String,
        date: Date,
        totalAmount: Number
      }
    ]
  },

  // Contract & Agreement Info
  contract: {
    startDate: Date,
    expiryDate: Date,
    discounts: String,
    terminationClauses: String,
    disputeResolutionTerms: String
  },

  // Additional Notes & Attachments
  remarks: String,
  documents: [
    {
      name: String,
      url: String
    }
  ],

  // System Fields
  status: String,
  isActive: {
    type: Boolean,
    default: true
  }

}, { timestamps: true });

module.exports = mongoose.model('Supplier', supplierSchema);
