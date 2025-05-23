const express = require('express');
const app = express();
require('dotenv').config();
const { ConnectDB } = require('./Config/ConnectDB');
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const cookieParser = require('cookie-parser')
const { verifyUser} = require('./Middleware/authMiddleware')
const SignUpRoute = require('./Routes/Signup')
const loginRoute = require('./Routes/Login')
const PurchaseOrderRoute = require('./Routes/prchaseOrder')
const ProductRoute = require('./Routes/Product')
const SupplierRoute =require('./Routes/Supplier')

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(cookieParser());
app.use(express.json())
app.use('/auth/signup', SignUpRoute);
app.use('/auth/login', loginRoute);
app.use('/purchaseOrder', PurchaseOrderRoute);
app.use('/product', ProductRoute);
app.use('/supplier', SupplierRoute);  

app.get('/', (req, res) => {
    return res.send("Welcome to POMS Server");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

ConnectDB();
