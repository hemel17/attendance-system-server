const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (v) => {
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: (prop) => `Invalid email : ${prop.value}`,
    },
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password must be at least 6 characters long"],
  },
  roles: {
    type: [String],
    required: true,
    default: "STUDENT",
  },
  accountStatus: {
    type: String,
    required: true,
    enum: ["PENDING", "ACTIVE", "REJECTED"],
    default: "PENDING",
  },
});

const User = model("User", userSchema);

module.exports = User;
