/**
 * This file routes the functions to the right URL
 */

const express = require('express')
const router = express.Router()

const {createComment, getAllComments, getComment, deleteAllComments, saveState, getLastState} = require("./serverFunctions")



router.post("/addComment", createComment)

router.get("/getAllComments", getAllComments)

router.get("/getComment/:id", getComment)

router.post("/deleteAllComments", deleteAllComments)

router.post("/saveState", saveState)

router.get("/getLastState", getLastState)

module.exports = router;
