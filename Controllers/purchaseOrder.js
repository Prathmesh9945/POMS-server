const { PurchaseOrder } = require('../Models/purchaseOrderItemSchema');
const purchaseOrderCtr = async (req, res) => {
    try {
        const { poNumber, supplier, poDate,  paidAmount,totalAmount, paymentStatus,items, deliveryAddress, paymentTerms, status, createdBy, tax, discount, expectedDeliveryDate, shippingCharges, remark } = req.body;
        console.log(poNumber, supplier, poDate, paidAmount,paymentStatus, totalAmount, items, deliveryAddress, paymentTerms, status, createdBy, tax, discount, expectedDeliveryDate, shippingCharges, remark);
        console.log(req.body)

        function generateOrderId() {
            const prefix = "ORD";
            const date = new Date();
            const datePart = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
            const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase(); // 6-char random
            return `${prefix}${datePart}-${randomPart}`;
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
            paid: paidAmount,
            paymentStatus,
            shippingCharges,
            createdBy,
            status: status || 'Pending Approval',
            expectedDeliveryDate: new Date(expectedDeliveryDate),
            notes: remark
        }
        const purchaseOdr = await PurchaseOrder.create(newPurchaseOrder);

        return res.json({ message: 'New Purchase Order Is Created', purchaseOdr }).status(201);

    } catch (error) {
        console.log("Error while creating a New Purchase Order", error.message);
        return res.status(500).json(error.message)

    }
}

const getPurchaseOrderCtr = async (req, res) => {
    try {
        const Purchaseorders = await PurchaseOrder.find();
        return res.status(200).json({ message: "Purchase Orders", Purchaseorders })
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const getPurchaseOrderById = async (req, res) => {
    try {
        const id = req.params.id;
        const purchaseOrderById = await PurchaseOrder.findById(id);
        if (!purchaseOrderById) {
            return res.status(404).json({ message: "Purchase order not found" })
        }
        return res.status(200).json({ message: "Purchase Order", purchaseOrderById })
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const updatePurchaseOrderCtr = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedField = req.body;
        const updatedPO = await PurchaseOrder.findByIdAndUpdate(id, updatedField, { new: true });
        return res.status(200).json({ message: 'Updated Purchase Order', updatedPO })
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const deletePurchaseOrderCtr = async (req, res) => {

}



module.exports = { purchaseOrderCtr, getPurchaseOrderCtr, getPurchaseOrderById, updatePurchaseOrderCtr };
