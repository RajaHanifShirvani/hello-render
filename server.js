const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Halo kami dari Kelompok Berkelompok");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server berjalan di port " + port));
