const mongoose = require("mongoose");

const talkSchema = mongoose.Schema(
  {
    talk_user: {
      type: mongoose.Schema.Types.ObjectId, // Agregar ususarios referenciado a collecion de Users
      required: true,
      ref: "User",
    },
    talk_message: {
      type: String,
      required: [true, "Talk something"],
    },
    hidden: Boolean,
  },
  {
    timestamps: true, // crea campos automaticos de timestamps
  }
);

module.exports = mongoose.model("Talk", talkSchema); // MOdelo en  Letra Capital en singular por "tareas" collection
