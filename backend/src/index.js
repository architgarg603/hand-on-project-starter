const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const fileUpload = require("express-fileupload");
const { removeBackgroundFromImageFile } = require("remove.bg");

dotenv.config();

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to Mongodb");
  })
  .catch((err) => {
    console.log("Error conneting to database" + err);
  });

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: newPassword,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user) {
    return { status: "error", error: "Invalid login" };
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password,
  );

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "secret123",
    );

    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});

app.post("/bgremove", async (req, res) => {
  let sampleFile;
  let uploadPath;
  // console.log(req.files);
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.file;
  uploadPath = __dirname + "\\public\\" + sampleFile.name;
  console.log(uploadPath);
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);

    const localFile = uploadPath;
    const outputFile = __dirname + "\\public\\f" + sampleFile.name;

    removeBackgroundFromImageFile({
      path: localFile,
      apiKey: "4PP2znowi679dTKpNstBgdf2",
      size: "regular",
      type: "auto",
      scale: "50%",
      outputFile,
    })
      .then((result) => {
        console.log(`File saved to ${outputFile}`);
        const base64img = result.base64img;
        res.json({ base64img });
      })
      .catch((errors) => {
        console.log(JSON.stringify(errors));
      });
  });
});

app.listen(process.env.PORT, () => {
  console.log("Backend server has started at " + process.env.PORT);
});
