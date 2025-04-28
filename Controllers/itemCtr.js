const mongoose = require("mongoose");
const { itemSchema } = require("../Models/itemSchema")
const ItemCtr = async (req, res) => {
    try {
        const { itemId, name, description, category, brand, unitPrice, currency, discount, tax, quantityOrdered,
            unitOfMeasure, minOrderQuantity, reorderLevel, preferredSupplier, leadTime, warehouseLocation,
            expectedDeliveryDate, packagingDetails, warrantyPeriod, returnPolicy, inspectionRequired } = req.body

        const newItem = {
            itemId, name, description, category, brand, unitPrice, currency, discount, tax, quantityOrdered,
            unitOfMeasure, minOrderQuantity, reorderLevel, preferredSupplier, leadTime, warehouseLocation,
            expectedDeliveryDate, packagingDetails, warrantyPeriod, returnPolicy, inspectionRequired
        }

        await ItemCtr.create(newItem);

        return res.json({ message: 'New Item Order Is Created' }).status(201);

    } catch (error) {
        console.log("Error while creating a New Purchase Order", error.message);
        return res.json(error.message).status(true)

    }
}

module.exports = {ItemCtr};


