import puppeteer from "puppeteer";
import ejs from "ejs";
import path from "path";
import fs from "fs";

const generateInvoicePDF = async (invoice) => {
  const generatedDir = path.join(process.cwd(), "src/invoices/generated");

  if (!fs.existsSync(generatedDir)) {
    fs.mkdirSync(generatedDir, { recursive: true });
  }

  const templatePath = path.join(
    process.cwd(),
    "src/invoices/templates/invoice.ejs"
  );

  const html = await ejs.renderFile(templatePath, {
    invoice
  });

  const browser = await puppeteer.launch({
    headless: "new"
  });

  const page = await browser.newPage();

  await page.setContent(html, {
    waitUntil: "networkidle0"
  });

  const fileName = `invoice-${invoice.invoiceNumber}.pdf`;
  const pdfPath = path.join(generatedDir, fileName);

  await page.pdf({
    path: pdfPath,
    format: "A4",
    printBackground: true
  });

  await browser.close();

  return `/invoices/${fileName}`;
};

export default generateInvoicePDF;