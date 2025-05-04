const mongoose = require('mongoose');
const { User } = require('../Models/userSchema');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const loginCtr = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        console.log(username, email, password)
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User does not exist" });
        }
        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Invalid Credential' })
        }
        const Usertoken = {
            username: user.username,
            email: user.email
        }
        const token = jwt.sign(Usertoken, process.env.JWT_SECRET, { expiresIn: '7d' })
        
        return res.status(200).json({ message: 'login Successfully', user: Usertoken, token })

    } catch (error) {
        console.log(error.message)
        return res.status(504).json(error.message)
    }



}


module.exports = { loginCtr }