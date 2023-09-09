const { Router } = require("express");
const  router = Router(); 
//const  db = require("../db/connection"); 
const Comment = require("../models/CommentModel");


router.get("/all/", (async (req, res) => { 
   
       /*Comment.all((comments, err) => { 
         if(err){
            res.send(err);
         }else{
            res.send({ 
                status: 200,
                comments: comments
               });
         }
       });*/
       res.send({ 
        "status": "200"
       });

}));

//publicPath: process.env.NODE_ENV === 'production' ? '/app/' : '',
router.post("/new/", (async (req, res) => {
      /*Comment.create(req.body.msg, (err) => {
        res.send(err);
      });*/  
}));

router.get("/:id/", (async (req, res) => {
    /*res.send({
     "message": "Comment " + req.params.id,
     "status": "200"
    });*/
}));


module.exports = router;

