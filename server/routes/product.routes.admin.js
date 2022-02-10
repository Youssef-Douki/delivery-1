const router =require("express").Router()
const adminControle=require("../controllers/product.controler.admin")


router.post("/signup",adminControle.signUp)
// router.get("/get-cookies",adminControle.getCookies)
router.post("/login",adminControle.login)





module.exports=router