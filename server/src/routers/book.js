import express from "express";

import config from "../config.js";
import add_new_book from "../controllers/book/add_new_book.js";

const router = express.Router()

router.post(config.urls.add_book, add_new_book)

export default router