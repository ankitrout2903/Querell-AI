const express = require('express');
const multer = require('multer');
const { readPDF } = require('../controller/pdfController');
const router = express.Router();
const upload = multer();

router.post('/read-pdf', upload.single('pdfFile'), readPDF);

module.exports = router;
