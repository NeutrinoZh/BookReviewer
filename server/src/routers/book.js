import express from "express";

import config from "../config.js";
import add_new_book from "../controllers/book/add_new_book.js";
import delete_book from "../controllers/book/delete_book.js";
import like_book from "../controllers/book/like_book.js";
import load_books from "../controllers/book/load_books.js";

const router = express.Router()

router.post(config.urls.add_book, add_new_book)
router.post(config.urls.like_book + ':id', like_book)
router.post(config.urls.load_books, load_books)
router.post(config.urls.delete_book + ':id', delete_book)

export default router