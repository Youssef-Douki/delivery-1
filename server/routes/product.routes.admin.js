const router =require("express").Router()
const adminControle=require("../controllers/product.controler.admin")
router.get("/getMenuOneRestaurant",adminControle.getMenuOneRestaurant)
router.post("/addrestaurant",adminControle.addRestaurant)
router.post("/addMenu",adminControle.addMenu)
router.post("/signup",adminControle.signUp)

router.post("/signup",adminControle.signUp)
// router.get("/get-cookies",adminControle.getCookies)
router.post("/login",adminControle.login)





module.exports=router