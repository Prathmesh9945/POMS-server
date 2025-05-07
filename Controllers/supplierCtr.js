const Supplier = require('../Models/supplierSchema');

const supplierCtr = async (req, res) => {
  try {
    const {
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

    function generateSupplierId() {
      const prefix = "SKU";
      const date = new Date();
      const datePart = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
      const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();
      return `${prefix}-${datePart}-${randomPart}`;
    }

    const supplierId = generateSupplierId();

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

const getSupplierCtr = async (req, res) => {
  try {
    const Suppliers = await Supplier.find();
    return res.status(200).json({ message: "Suppliers", Suppliers });
  } catch (error) {
    return res.status(500).json({ message: "Server Error", error: error.message });
  }
};

const getSupplierByIdCtr = async (req, res) => {
  try {
    const id = req.params.id;
    const supplier = await Supplier.findById(id);
    if (!supplier) {
      return res.status(404).json({ message: "Supplier not found" });
    } else {
      return res.status(200).json({ message: "Supplier found", supplier });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server Error", error: error.message });
  }
};

const updateSupplierCtr = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedSupplier = await Supplier.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedSupplier) {
      return res.status(404).json({ message: "Supplier not found" });
    }
    return res.status(200).json({ message: "Supplier updated successfully", updatedSupplier });
  } catch (error) {
    return res.status(500).json({ message: "Server Error", error: error.message });
  }
};

const deleteSupplierByIdCtr = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedSupplier = await Supplier.findByIdAndDelete(id);
    if (!deletedSupplier) {
      return res.status(404).json({ message: "Supplier not found" });
    }
    return res.status(200).json({ message: "Supplier deleted successfully", deletedSupplier });
  } catch (error) {
    return res.status(500).json({ message: "Server Error", error: error.message });
  }
};



module.exports = {
  supplierCtr,
  getSupplierCtr,
  getSupplierByIdCtr,
  updateSupplierCtr,
  deleteSupplierByIdCtr
};
