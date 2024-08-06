const mongoose = require("mongoose");

// mongoose
//   .connect(process.env.DB)
//   .then(() => console.log("bd connected"))
//   .catch((e) => console.log({ dberror: e }));

async function connection() {
  try {
    await mongoose.connect(process.env.DB_LOCAL);
    console.log("bd connected");
  } catch (e) {
    console.log({ dberror: e });
  }
}

module.exports = connection;
