import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/img/')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname  )
    }
  })
const upload = multer({ storage: storage })

function getLoginPage (req,res) {
    res.render("login");
}
/*
async function LoginDataPost(req,res){
     const data = req.body;
     const thumbnail = '/img/' + req.file.originalname;
     await LoginData(data,thumbnail);
     res.render('success', {message: 'Car Added', redirect: '/car-add', delay: 2000});   
}
 */
export {
    getLoginPage
}



























