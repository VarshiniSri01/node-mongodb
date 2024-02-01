const User = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create({
            ...req.body,
        });
        res.status(200).json({
            status: "success",
           data: {
              user: newUser,
           },
           message : "User created successfully"

        });
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err.message,
        })
    }
};
exports.updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const newUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                email: req.body.email,
                phoneNumber: req.body.phoneNumber,
                dob: req.body.dob,
            },
            {
                new: true,
                runValidators: true,
            }
        );
        res.status(200).json({
            status: "success",
            data: {
                user: newUser,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err.message,
        });
    }
};

exports.getAllUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            status: "success",
            totalUser:users.length,
            data: {
                users: users,
            },
            message: "All Users Retrived Sucessfully"
        });
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err.message,
        });
    }
};
exports.getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const newUser = await User.findById(id);
        res.status(200).json({
            status: "success",
            data: {
                user: newUser,
            },
            message: "User Retrived Sucessfully"
        });
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err.message,
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const newUser = await User.findByIdAndDelete(id);
        res.status(200).json({
            status: "success",
            message: "User Deleted Sucessfully"
        });
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err.message,
        });
    }
};