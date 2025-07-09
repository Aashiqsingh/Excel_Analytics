const userModel = require("../Models/UserModel");
const bcrypt = require('bcryptjs');


const addUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;

        // Create new user
        const newUser = await userModel.create(req.body);

        return res.status(201).json({
            message: "User added successfully",
            data: newUser
        });
        
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Server error",
            error: err.message
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "User not found",
                data: null
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid password",
                data: null
            });
        }

        return res.status(200).json({
            message: "Login successful",
            data: user
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Server error",
            error: err.message
        });
    }
};

module.exports = {
    addUser,
    loginUser
};
