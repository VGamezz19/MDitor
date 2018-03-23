import mongoose, { Schema, Model, model } from "mongoose";

import { NextFunction } from "express";

import bcrypt from "bcrypt-nodejs";

import { IUserModel } from "./IUserModel.interface";

/**
 * Folder Schema, Object Mongoose (Object)
 *
 * Defines Schema to use in collection Folder
 *
 * @version 1.0.0
 */
const UserSchema: Schema = new Schema({
  name: String,
  surname: String,
  email: String,
  username: String,
  password: String,
  folders: [{ type: Schema.Types.ObjectId, ref: "Folder" }]
});

/**
 *
 * Pre save Schema
 * Password hash middleware.
 */
UserSchema.pre("save", function save(next: NextFunction) {
  const user = this;

  if (!user.isModified("password")) { return next(); }

  bcrypt.genSalt(10, (err, salt) => {

    if (err) { return next(err); }

    bcrypt.hash(user.password, salt, undefined, (err: mongoose.Error, hash) => {

      if (err) { return next(err); }

      user.password = hash;

      next();
    });
  });
});

/**
 *
 * new method comparePassword in User Schema
 *
 * Static method to compare password
 */
UserSchema.methods.comparePassword = function (candidatePassword: string, cb: (err: any, isMatch: any) => {}) {

  bcrypt.compare(candidatePassword, this.password, (err: mongoose.Error, isMatch: boolean) => {

    cb(err, isMatch);
  });
};

const User: Model<IUserModel> = model<IUserModel>("User", UserSchema);

export { User };