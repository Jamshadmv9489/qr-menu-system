import mongoose from "mongoose"

// Schema for each item inside an order
const orderItemSchema = new mongoose.Schema({
    menuItemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MenuItem",      // Reference to MenuItem collection
        required: true
    },
    name: {
        type: String,
        required: true        // Snapshot of item name at order time
    },
    quantity: {
        type: Number,
        required: true,
        min: 1                 // Minimum quantity = 1
    },
    price: {
        type: Number,
        required: true,
        min: 0                 // Price cannot be negative
    }
}, { _id: false });           // Prevents automatic _id for subdocuments


// Main Order Schema
const orderSchema = new mongoose.Schema({
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",    // Reference to Restaurant
        required: true
    },

    tableNumber: {
        type: Number,
        required: true,
        min: 1                 // Table number must be positive
    },

    items: [orderItemSchema], // List of ordered items

    status: {
        type: String,
        default: "pending",   // Order status (pending, preparing, served, etc.)
        trim: true
    }

}, {
    timestamps: true          // Adds createdAt and updatedAt
});

module.exports = mongoose.model("Order", orderSchema);