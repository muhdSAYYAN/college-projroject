import express from  "express"
import { addProduct, getProduct,deleteProduct } from "../controllers/addProduct.js"
import multer from "multer";

const router = express.Router();



const storage = multer.diskStorage({
    destination: function (req, file, cb){
     cb(null, '../client/public/upload')
    },
    filename: function (req, file, cb){
      cb(null, Date.now() + file.originalname)
    }
  })

  const upload = multer({storage:storage})

router.get('/getProduct',getProduct);
router.post('/uploadProduct',upload.single("file"),(req,res)=>{
    addProduct(req,res)});

router.delete("/dltdeleteProduct/:postId",deleteProduct)

export default router;