const Router = require('express');
const express = require('express')
const router = express.Router()

const {createComment, getAllComments, getComment, deleteAllComments} = require("./server")



router.post("/addComment", createComment)

router.get("/getAllComments", getAllComments)

router.get("/getComment/:id", getComment)

router.post("/deleteAllComments", deleteAllComments)

module.exports = router;
