import mongoose from "mongoose"

// Restaurant Schema
const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true        // remove extra spaces
    },
    email: {
        type: String,
        required: true,
        unique: true,     // prevent duplicate emails
        lowercase: true   // store email in lowercase
    },
    phone: {
        type: String,
        required: true    // restaurant contact number
    },
    address: {
        type: String,
        required: true    // restaurant location/address
    }
}, {
    timestamps: true    // automatically adds createdAt & updatedAt
});

// Export Restaurant model
module.exports = mongoose.model("Restaurant", restaurantSchema);