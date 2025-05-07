const { User } = require('../Models/userSchema');
const bcryptjs = require('bcryptjs')
const signupCtr = async (req, res) => {
    try {
        const { username, firstName, lastName, email, password, role } = req.body;
        console.log(username, firstName, lastName, email, password, role);

        const user = await User.findOne({ email });
        if (user) {
            return res.status(409).json({ message: "User already exists" });
        }
        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
            return res.json({ message: 'Username already taken, try a different one' }).status(409);
        }

        const hashedPassword = await bcryptjs.hash(password, 10)
        const newUser = {
            username, firstName, lastName, email, password: hashedPassword, role
        }
        await User.create(newUser);

        return res.status(201).json({ message: 'User is Created' });

    } catch (error) {
        console.log("Error while creating a User", error.message);
        return res.status(500).json({ message: "Internal Server Error", error: error.message });

    }
}

module.exports = { signupCtr }