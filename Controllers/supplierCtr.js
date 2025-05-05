const Supplier = require('../Models/supplierSchema'); // Now it's a model, not just schema

const supplierCtr = async (req, res) => {
  try {
    const {
      supplierId,
      name,
      businessType,
      address,
      contactPerson,
      phone,
      email,
      website,
      taxId,
      paymentTerms,
      currencyUsed,
      compliance,
      performanceMetrics
    } = req.body;

    const newSupplier = {
      supplierId,
      name,
      businessType,
      address,
      contactPerson,
      phone,
      email,
      website,
      taxId,
      paymentTerms,
      currencyUsed,
      compliance,
      performanceMetrics
    };

    const savedSupplier = await Supplier.create(newSupplier);

    return res.status(201).json({
      message: 'New Supplier created successfully',
      data: savedSupplier
    });

  } catch (error) {
    console.error("Error while creating a new supplier:", error.message);
    return res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = supplierCtr;
