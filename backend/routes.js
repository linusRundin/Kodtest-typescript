const Router = require('express');
const express = require('express')
const router = express.Router()

const comment = require("./server")


router.post("/addComment", comment.createComment)

router.get("/getAllComments", comment.getAllComments)

router.get("/getComment/:id", comment.getComment)

router.post("/deleteAllComments", comment.deleteAllComments)

module.exports = router;
