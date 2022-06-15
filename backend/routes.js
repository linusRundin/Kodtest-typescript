/**
 * This file routes the functions to the right URL
 */

const express = require('express')
const router = express.Router()

const {createComment, getAllComments, getComment, deleteAllComments} = require("./serverFunctions")



router.post("/addComment", createComment)

router.get("/getAllComments", getAllComments)

router.get("/getComment/:id", getComment)

router.post("/deleteAllComments", deleteAllComments)

module.exports = router;
