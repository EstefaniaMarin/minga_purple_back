import { Schema, model, Types } from "mongoose";

const collection = "mangas";

const schema = new Schema(
  {
    author_id: { type: Types.ObjectId, ref: "authors", require: true },
    company_id: { type: Types.ObjectId, ref: "companies", require: false},
    title: { type: String, require: true },
    cover_photo: { type: String, require: true },
    description: { type: String, require: true },
    category_id: { type: Types.ObjectId, ref: "categories", require: true },
  },
  {
    timestamps: true,
  }
);

const Manga = model(collection, schema);

export default Manga; 