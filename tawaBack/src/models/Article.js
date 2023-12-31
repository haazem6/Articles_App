const mongoose = require("mongoose");

const articlesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true},
    description: { type: String, required: true},
    finished: { type: Boolean, required: true, default: false},
    finished_at: { type: Date,  default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Article", articlesSchema);
