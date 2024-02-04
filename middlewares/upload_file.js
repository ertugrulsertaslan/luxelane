import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/img/')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname =  Date.now() +"_" + file.originalname   )
    }
  })
const upload = multer({ storage: storage })

export {
    upload,
}


