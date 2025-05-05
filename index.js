const express = require('express');
const app = express();
require('dotenv').config();
const { ConnectDB } = require('./Config/ConnectDB');
const PORT = process.env.PORT || 3001;
const cors = require('cors');

const SignUpRoute = require('./Routes/Signup')
const loginRoute = require('./Routes/Login')
const PurchaseOrderRoute = require('./Routes/prchaseOrder')
const SupplierRoute = require('./Routes/Supplier')

app.use(cors());
app.use(express.json())
app.use('/auth/signup', SignUpRoute);
app.use('/auth/login', loginRoute);
app.use('/purchaseOrder', PurchaseOrderRoute);
app.use('/supplier' , SupplierRoute);


app.get('/', (req, res) => {
    return res.send("Welcome to POMS Server")
})

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);

})
ConnectDB();