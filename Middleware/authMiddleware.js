const { User } = require('../Models/userSchema');
const jwt = require('jsonwebtoken');

const verifyUser = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Token not found" });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ email: decodedToken.email });

        // if (!user || !user.isVerified) {
        //     return res.status(401).json({ message: "Unauthorized, please verify your email" });
        // }

        if (user.role !== 'admin') {
            return res.status(403).json({ message: "Forbidden: Admins only" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Authorization failed:", error.message);
        return res.status(500).json({ message: "Authorization failed", error: error.message });
    }
};

module.exports = { verifyUser };
