import { UserData,CustomerData,getUserId} from '../models/addUser.js';
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

function getSignPage (req,res) {
    res.render("sign");
}

async function SignDataPost(req,res){
    const data = req.body
    const tcPhoto = '/img/' + req.file.originalname;
    //const userId = await getUserId();
    await UserData(data);
    //const userId = await UserData(data);
    //console.log(userId);
    await CustomerData(data,tcPhoto,userId);
    res.render('success', {message: 'User Added', redirect: '/sign', delay: 2000});   
}

export {
    SignDataPost,
    getSignPage
}