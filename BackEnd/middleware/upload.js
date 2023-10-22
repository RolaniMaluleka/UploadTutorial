const util = require("util");
const multer = require("multer"); //we import multer module.
const maxSize = 2 * 1024 * 1024;

let storage = multer.diskStorage({ //we configure multer to use Disk Storage engine.
  destination: (req, file, cb) => { //destination determines folder to store the uploaded files.
    cb(null, __basedir + "/resources/static/assets/uploads/");
  },
  filename: (req, file, cb) => {  //filename determines the name of the file inside the destination folder.
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);  //util.promisify() makes the exported middleware object can be used with async-await
module.exports = uploadFileMiddleware;