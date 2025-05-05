const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  supplierId: String,
  name: String,
  businessType: String,
  address: String,
  contactPerson: String,
  phone: String,
  email: String,
  website: String,
  taxId: String,
  paymentTerms: String,
  currencyUsed: String,
  compliance: String,
  performanceMetrics: String
}, { timestamps: true });

module.exports = mongoose.model('Supplier', supplierSchema);
