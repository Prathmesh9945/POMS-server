const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  supplierId:
  {
    type: String,
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
    required: true
  },

  website:
  {
    type: String,
  },

  taxId:
  {
    type: String,
    required: true
  },

  paymentTerms:
  {
    type: String,
    required: true

  },

  currencyUsed: 
  {
    type: String,
    required: true
  },

  compliance:
  {
    type: String,
    required: true
  },

  performanceMetrics: 
  {
    type: String,
    required: true
  },
  
  status: 
  {
    type: String,
  },

  isActive:
  {
    type:Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Supplier', supplierSchema);
