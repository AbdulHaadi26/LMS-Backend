import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { IUserProps, UserSchema } from "../schemas/user.schema";
import { UserSchemaValidator } from "../validators/userSchema.dto";
import { hashString } from "../services";

UserSchema.index({ _id: 1, email: 1, isActive: 1 });

UserSchema.pre("validate", async function (next) {
  await UserSchemaValidator.validateAsync(this.toObject());
  next();
});

UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await hashString(this.password);
  }
  next();
});

const UserModel = mongoose.model<IUserProps>("users", UserSchema);

export { UserModel, IUserProps };
