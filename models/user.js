const moongoose = require("mongoose");

const userSchema = moongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: String,
});

module.exports = moongoose.model("user", userSchema);
