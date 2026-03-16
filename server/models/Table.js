import mongoose from "mongoose"

// Table Schema
const tableSchema = new mongoose.Schema({
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true          // table must belong to a restaurant
    },

    tableNumber: {
        type: Number,
        required: true,
        min: 1                  // table number must be positive
    },

    qrCode: {
        type: String,
        default: null           // QR code image/url
    }

}, {
    timestamps: true          // adds createdAt & updatedAt
});

module.exports = mongoose.model("Table", tableSchema);