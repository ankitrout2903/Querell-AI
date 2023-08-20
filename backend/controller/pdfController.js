const pdfjs = require('pdfjs-dist/build/pdf');

let pdfContent = "";


async function getContent(fileBuffer) {
  try {
    const doc = await pdfjs.getDocument({ data: fileBuffer }).promise;
    const numPages = doc.numPages;
    const content = [];

    for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
      const page = await doc.getPage(pageNumber);
      const textContent = await page.getTextContent();
      content.push(textContent.items.map((item) => item.str).join(' '));
    }

    return content;
  } catch (error) {
    throw new Error('Error reading PDF: ' + error.message);
  }
}

// Function to read text from a PDF file
async function readPDFText(fileBuffer) {
  try {
    const content = await getContent(fileBuffer);
    return content.join(' ');
  } catch (error) {
    throw new Error('Error reading PDF: ' + error.message);
  }
}


async function readPDF(req, res) {
  try {
    const pdfFileBuffer = Uint8Array.from(req.file.buffer);
    const textContent = await readPDFText(pdfFileBuffer);
    pdfContent = textContent;
    console.log('PDF text content:', textContent);
    res.status(200).json({ textContent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error reading PDF file.' });
  }
}

module.exports = {
  readPDF,
  readPDFText,
  
};
