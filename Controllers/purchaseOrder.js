const { PurchaseOrder } = require('../Models/purchaseOrderItemSchema');
const purchaseOrderCtr = async (req, res) => {
    try {
        const { poNumber, supplier, poDate, totalAmount, items, deliveryAddress, paymentTerms, status, createdBy, tax, discount, expectedDeliveryDate, shippingCharges, remark } = req.body;
        console.log(poNumber, supplier, poDate, totalAmount, items, deliveryAddress, paymentTerms, status, createdBy, tax, discount, expectedDeliveryDate, shippingCharges, remark);
        console.log(req.body)

        function generateOrderId() {
            const prefix = "ORD";
            const date = new Date();
            const datePart = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
            const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase(); // 6-char random
            return `${prefix}-${datePart}-${randomPart}`;
        }

        const newPurchaseOrder = {
            poNumber: generateOrderId(),
            supplier,
            items,
            deliveryAddress,
            paymentTerms,
            totalAmount,
            tax,
            discount,
            shippingCharges,
            createdBy,
            status,
            expectedDeliveryDate,
            notes: remark
        }
        const purchaseOdr = await PurchaseOrder.create(newPurchaseOrder);

        return res.json({ message: 'New Purchase Order Is Created', purchaseOdr }).status(201);

    } catch (error) {
        console.log("Error while creating a New Purchase Order", error.message);
        return res.json(error.message).status(true)

    }
}

const getPurchaseOrderCtr = async (req, res) => {
    try {
        const Purchaseorders = await PurchaseOrder.find();
        return res.status(200).json({ message: "PUrchase Orders", Purchaseorders })
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const updatePurchaseOrderCtr = async (req, res) => {

}
const deletePurchaseOrderCtr = async (req, res) => {

}



module.exports = { purchaseOrderCtr, getPurchaseOrderCtr };
