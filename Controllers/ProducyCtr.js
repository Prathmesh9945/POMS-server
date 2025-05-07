const { Product } = require('../Models/itemSchema');

const ProductCtr = async (req, res) => {
    try {
        const {
            name, description, category, brand, unitPrice, currency, discount, tax, unitOfMeasure,
            minOrderQuantity, reorderLevel, preferredSupplier, leadTime, warehouseLocation,
            packagingDetails, warrantyPeriod, returnPolicy, inspectionRequired, attachments
        } = req.body;

        if (!name || !category || !unitPrice) {
            return res.status(400).json({ message: "Required fields are missing." });
        }

        const existingProduct = await Product.findOne({
            name: name.trim(),
            brand: brand.trim(),
            category: category.trim()
        });
        if (existingProduct) {
            return res.status(409).json({ message: 'Product with this name, brand, and category already exists.' });
        }

        function generateProductId() {
            const prefix = "SKU";
            const date = new Date();
            const datePart = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
            const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();
            return `${prefix}-${datePart}-${randomPart}`;
        }

        const newProduct = {
            itemId: generateProductId(),
            name,
            description,
            category,
            brand,
            unitPrice,
            currency,
            discount,
            tax,
            unitOfMeasure,
            minOrderQuantity,
            reorderLevel,
            preferredSupplier,
            leadTime,
            warehouseLocation,
            packagingDetails,
            warrantyPeriod,
            returnPolicy,
            inspectionRequired,
            attachments
        };

        await Product.create(newProduct);

        return res.status(201).json({ message: 'New Product Created Successfully' });

    } catch (error) {
        console.error('Error while creating a product:', error.message);
        return res.status(500).json({ message: 'Server Error', error: error.message });
    }
};


const getProduct = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).json({ message: "Products Data", products });
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

const getProductByID = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.status(200).json({ message: "Product fetched successfully", product });
    } catch (error) {
        return res.status(400).json({ message: "Invalid request", error: error.message });
    }
};

const updateProductByID = async (req, res) => {
    try {
        const id = req.params.id;
        const updateFields = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { $set: updateFields },
            { new: true, runValidators: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: 'Product is updated', updatedProduct });
    } catch (error) {
        res.status(500).json({ message: "Error updating product", error: error.message });
    }
};

const deleteById = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(id)
    } catch (error) {

    }
}



module.exports = { ProductCtr, getProduct, getProductByID, updateProductByID };
