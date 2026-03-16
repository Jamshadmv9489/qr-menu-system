import mongoose from "mongoose"

// Variant Schema (for size/portion pricing)
const variantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,       // e.g., Small, Medium, Large
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    }
}, { _id: false });


// Menu Item Schema
const menuItemSchema = new mongoose.Schema({
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true
    },

    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },

    name: {
        type: String,
        required: true,
        trim: true
    },

    image: {
        type: String,
        default: null        // optional image
    },

    variants: [variantSchema],   // pricing options

    available: {
        type: Boolean,
        default: true
    }

}, {
    timestamps: true              // adds createdAt & updatedAt
});

// Export MenuItem model
export default mongoose.model("MenuItem", menuItemSchema);