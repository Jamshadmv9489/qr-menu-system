import mongoose from "mongoose";

// Category Schema
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true              // remove extra spaces
    },
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true
    }
}, {
    timestamps: true          // adds createdAt & updatedAt
});

// Export Category model
export default mongoose.model("Category", categorySchema);