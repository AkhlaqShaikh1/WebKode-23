const path = require("path");
const multer = require("multer");
module.exports=multer({
  storage:multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);
    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb(new Error("Only JPG, JPEG and PNG files are allowed"));
    }
  },
  limits: { fileSize: 1024 * 1024 * 5 },
})
// cloudinary.config({
//   cloud_name: "dtxirhjul",
//   api_key: "164976764714351",
//   api_secret: "A3tpcECzWmJrdT2Qeyww0Mk0Yb4",
// });
// const imageMiddleWare = () => {
//   var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, path.join(__dirname, "../../tmp"));
//     },
//     filename: (req, file, cb) => {
//       cb(null, file.fieldname + "-" + Date.now());
//     },
//   });
//   var upload = multer({ storage: storage , limits: { fileSize: 1024 * 1024 }});
//   return upload;
// };

// const uploadToCloudinaryMiddleware = (req, res, next) => {
//   const multerMiddleware = imageMiddleWare();

//   multerMiddleware.single("image")(req, res, (err) => {
//     if (err) {
//       console.error("Failed to upload image:", err);
//       res.status(500).json({ error: "Failed to upload image"});
//       return;
//     }

// /*     if (!req.file) {
//       next();
//       return;
//     }  */

//     cloudinary.uploader.upload(req.file.path, (error, result) => {
//       if (error) {
//         console.error("Failed to upload image to Cloudinary:", error);
//         res.status(500).json({ error: "Failed to upload image to Cloudinary" });
//         return;
//       }

//       req.body.imageURL = result.secure_url
//       const a = req.body.imageURL
//       a);

//       next();
//     });
//   });
// };
// module.exports = uploadToCloudinaryMiddleware