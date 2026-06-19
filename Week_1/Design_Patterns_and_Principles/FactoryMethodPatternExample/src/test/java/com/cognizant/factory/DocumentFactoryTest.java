package com.cognizant.factory;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class DocumentFactoryTest {

    @Test
    public void testFactoryMethod() {
        DocumentFactory wordFactory = new WordDocumentFactory();
        Document wordDoc = wordFactory.createDocument();
        assertTrue(wordDoc instanceof WordDocument);
        wordDoc.open();

        DocumentFactory pdfFactory = new PdfDocumentFactory();
        Document pdfDoc = pdfFactory.createDocument();
        assertTrue(pdfDoc instanceof PdfDocument);
        pdfDoc.open();

        DocumentFactory excelFactory = new ExcelDocumentFactory();
        Document excelDoc = excelFactory.createDocument();
        assertTrue(excelDoc instanceof ExcelDocument);
        excelDoc.open();
    }
}
