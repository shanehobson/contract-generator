import React from 'react';
import jsPDF from 'jsPDF';

const margins = {
    top: 70,
    bottom: 40,
    left: 30,
    width: 550
};

const header = doc => {
    doc.setFontSize(30);
    doc.setTextColor(40);
    doc.setFontStyle('normal');
    doc.text("Report Header Template", margins.left + 50, 40 );
    doc.line(3, 70, margins.width + 43,70); // horizontal line
};

const headerFooterFormatting = doc => {
    const totalPages = doc.internal.getNumberOfPages();

    for(let i = totalPages; i >= 1; i--) { 
        doc.setPage(i);   //make this page, the current page we are currently working on.             
        header(doc);
        //footer(doc, i, totalPages);
    }
};

export const generate = workingDocElement => {
    const pdf = new jsPDF('p', 'pt', 'a4');
    pdf.setFontSize(18);
    pdf.setFont('times');
    pdf.fromHTML(
        workingDocElement,
        margins.left,
        margins.top,
        { width: margins.width },
        dispose => {
            headerFooterFormatting(pdf)
        },
        margins
    );
    pdf.save('contract.pdf');
};


