const mongoose = require('mongoose');
const User = require('../Models/userSchema');

const bcryptjs = require('bcryptjs')
const signupCtr = async (req, res) => {
    try {
        const { username, firstName, lastName, email, password, role } = req.body;
        console.log(username, firstName, lastName, email, password, role);

        const user = await User.findOne({ email });
        if (user) {
            return res.json({ message: 'User is already exists' }).status(200);
        }
        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
            return res.json({ message: 'Username already taken, try a different one' }).status(409);
        }

        const hashedPassword = await bcryptjs.hash(password,10)
        const newUser = {
            username, firstName, lastName, email, password:hashedPassword , role
        }
        await User.create(newUser);

        return res.json({ message: 'User is Created' }).status(201);

    } catch (error) {
        console.log("Error while creating a User", error.message);
        return res.json(error.message).status(true)
    }
}

module.exports = { signupCtr }