import { Schema, model, Types } from "mongoose";

const collection = "chapter";

const schema = new Schema(
  {
    manga_id: { type: Types.ObjectId, ref: "mangas", require: true },
    title: { type: String, require: true },
    cover_photo: { type: String, require: true },
    pages: { type: Array, require: true },
    order: { type: Number, require: true },
  },
  {
    timestamps: true,
  }
);

const Chapter = model(collection, schema);

export default Chapter; 