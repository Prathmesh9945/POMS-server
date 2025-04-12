const mongoose = require('mongoose')
async function ConnectDB(){
try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to Database")
} catch (error) {
    console.log("Unable to connect ",error.message)
}
}

module.exports = {ConnectDB}