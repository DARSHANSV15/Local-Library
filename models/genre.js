const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 100  },
//   author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
//   summary: { type: String, required: true },
//   isbn: { type: String, required: true },
//   genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
});

// Virtual for genre's URL
GenreSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/genre/${this._id}`;
});

// Export model
module.exports = mongoose.model("Genre", GenreSchema);
