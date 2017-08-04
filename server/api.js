var express=require("express");
var finalCtrl=require("./controllers/final.ctrl");

var router=express.Router();

router.use("/books", finalCtrl);

module.exports=router;
