import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const custSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Compering entered pass to the one which is hashed in the database using bcrypt
custSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Encryptong password before save
custSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  // Encrypting password using bcrypt salt
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const Cust = mongoose.model("Cust", custSchema);

export default Cust;
