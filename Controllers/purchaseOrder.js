const mongoose = require("mongoose");
const { purchaseOrder } = require('../Models/purchaseOrderItemSchema');
const purchaseOrderCtr = async (req, res) => {
    try {
        const { poNumber, supplier, items, deliveryAddress, paymentTerms, status, expectedDeliveryDate, notes } = req.body;
        console.log( poNumber, supplier, items, deliveryAddress, paymentTerms, status, expectedDeliveryDate, notes);
        

        const newPurchaseOrder = {
            poNumber, supplier, items, deliveryAddress, paymentTerms, status, expectedDeliveryDate, notes
        }
        const purchaseOdr=await purchaseOrder.create(newPurchaseOrder);

        return res.json({ message: 'New Purchase Order Is Created' ,purchaseOdr}).status(201);

    } catch (error) {
        console.log("Error while creating a New Purchase Order", error.message);
        return res.json(error.message).status(true)

    }
}


module.exports = { purchaseOrderCtr };