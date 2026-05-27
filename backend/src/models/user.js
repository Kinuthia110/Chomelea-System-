import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(

  {

    fullName: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    phone: {
      type: String
    },

    password: {
      type: String,
      required: true,
      minlength: 6
    },

    role: {
      type: String,

      enum: [
        "ADMIN",
        "MANAGER",
        "WORKER"
      ],

      default: "WORKER"
    },

    profileImage: {
      type: String,
      default: ""
    },

    isActive: {
      type: Boolean,
      default: true
    }

  },

  {
    timestamps: true
  }

);

const User = mongoose.model(
  "User",
  UserSchema
);

export default User;