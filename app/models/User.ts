import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      default: null,
    },
    is_admin: {
      type: Boolean,
      default: false,
    },
    login_type: {
      type: String,
      enum: ["Google", "Local"],
      default: "Local",
    },
    login_method: {
      type: String,
      enum: ["Email", "SSO"],
      default: "Email",
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    mfa_enabled: {
      type: Boolean,
      default: false,
    },
    mfa_key: {
      type: String,
      default: null,
    },
    forgot_password_code: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
