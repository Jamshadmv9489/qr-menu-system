import mongoose from "mongoose"
import bcrypt from "bcryptjs"

// User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true                // remove extra spaces
    },

    email: {
        type: String,
        required: true,
        unique: true,             // prevent duplicate users
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: true            // hashed password will be stored
    },

    role: {
        type: String,
        enum: ["superadmin", "restaurantAdmin", "kitchenAdmin"], // allowed roles
        required: true
    },

    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",        // reference to Restaurant model
        default: null             // optional for superadmin
    },

    isEmailVerified: {
        type: Boolean,
        default: false            // becomes true after OTP verification
    },

    emailOtp: {
        type: String,
        default: null             // store generated OTP
    },

    emailOtpExpires: {
        type: Date,
        default: null             // OTP expiry time
    }

}, {
    timestamps: true
});

// Hash password before saving
userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10);
});

// Export User model
module.exports = mongoose.model("User", userSchema);