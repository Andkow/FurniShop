import path from "path";
import express from "express";
import multer from "multer";
const router = express.Router();

// Initialising storage engine
const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "uploads/");
  },
  filename(req, file, callback) {
    callback(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}` // Naming our upload
    );
  },
});

function checkFileType(file, callback) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase()); //Checking file extention
  const mimetype = filetypes.test(file.mimetype); // Checking mimetype

  if (extname && mimetype) {
    return callback(null, true);
  } else {
    callback("Images only!");
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, callback) {
    checkFileType(file, callback);
  },
});

router.post("/", upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});

export default router;
