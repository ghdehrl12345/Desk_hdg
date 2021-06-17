import Mongoose from "mongoose";

const Schema = mongoose.Schema;

const Desk = new Schema(
  {
    color: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);
