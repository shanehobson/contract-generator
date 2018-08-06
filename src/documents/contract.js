import React from 'react';
import jsPDF from 'jsPDF';

/* let title = `AGREEMENT FOR WEB DEVELOPMENT SERVICES`;

let intro = `This Agreement is dated [DATE]. This shall be known as the Effective Date.`;

let heading1 = `I. PARTIES`;

let p1 = `This Agreement for Web Development Services is an agreement between [Developer name or Company name], whose [registered] address is [Developer Address] (“Developer”),  and [Customer name or Company name], whose [registered] address is [Customer Address], (“Customer”).`;

let heading2 = `II.  DESCRIPTION OF SERVICES AND SCOPE OF WORK`;

let p2 = `Developer shall render the web development and design services set forth in Schedule A (Description of Services), as per the specifications set forth in Schedule B (Project Specifications). The product of Developer’s web development and design services shall be referred to herein as the Project.`;

let heading3 = `III.  TERM AND TERMINATION`;

let p3 = `This Agreement shall take effect immediately upon the Effective Date, and shall remain in effect until Developer has completed the services described herein. Notwithstanding the foregoing, either Party may terminate this Agreement by providing the other Party written notice if the other Party: (a) is in material breach of this Agreement and has failed to cure such breach within ten (10) days after its receipt of written notice of such breach provided by the non-breaching Party; (b) engages in any unlawful business practice related to that Party's performance under the Agreement; or (c) files a petition for bankruptcy, becomes insolvent, acknowledges its insolvency in any manner, ceases to do business, makes an assignment for the benefit of its creditors, or has a receiver, trustee or similar party appointed for its property (Termination).`;

let p3a = `The Parties may from time to time modify the scope of the Project by including said modifications in a written Modification Order which clearly sets forth and explains the desired modifications and the adjustment to Payment terms that will result from the Modification. Such Modification order will only become effective after being signed and dated by or on behalf of Developer and Customer.`;

let h4 = `IV.  ACCEPTANCE`;

let p4 = `Upon completion of the Project by Developer, the Developer shall invite the Customer to conduct a review of the Project. Customer shall test the compliance of the completed Project with the Specifications set forth in Schedule B. Once the Customer has completed its review, Customer shall determine whether the Project is in conformity with the Project Specifications. If the Project does so conform to the Specifications, Customer shall promptly inform Developer in writing that the Project meets said Specifications. Upon delivery of said writing, the Project shall be deemed accepted (Acceptance).`;

let p4a = `If Customer concludes that the Project does not conform to the Specifications, 
    Customer shall set forth in writing the reasons why the Project does not so conform and shall present said writing to Developer.
    Customer and Developer must then confer and discuss how to rectify the identified Defects.
    If any Defect is is caused by Customer, or any agent, contractor, or representative of Customer, the site shall be deemed to be in conformity with the Specifications and shall be deemed Accepted. If any Defect is caused by Developer, or any agent, contractor, or representative of Developer, Developer shall remedy said Defect. Thereafter, Developer shall invite Customer to conduct a subsequent review of the Project. If the Project conforms to the Specifications,
    Customer shall promptly inform Developer in writing that the Project meets said Specifications, and the Project shall be deemed accepted`;

let heading5 = `V.  PAYMENT`;

let p5 = `In consideration for the services of Developer, Customer shall remit payment to Developer according to the terms set forth in Schedule C (Payment Terms).
Following Acceptance, Developer shall issue a final invoice to Customer, and Customer shall make final payment to Developer
in accordance with the foregoing within 30 days of receipt of the invoice.`;

let heading6 = `VI.  WARRANTIES`;
	
let p6a = `Developer and Customer hereby warrant to the each other that each party has the full power and authority to enter into this Agreement.`;

let p6b = `Developer warrants to Customer that Developer will render the services set forth herein with reasonable care and skill and in accordance with generally recognized commercial practices and standards.`;

let p6c = `Customer agrees to provide Developer with all information and data necessary for completion of the Project, including all text, images, account credentials, and other information, in the format required by Developer.`;

let heading7 = `VII.  INDEPENDENT CONTRACTOR STATUS`;

let p7 = `The Parties intend that Developer will be be engaged as an independent contractor of Customer.
Nothing contained in this Agreement will be construed to create the relationship of employer and employee, principal and agent, partnership or joint venture,
or any other fiduciary relationship.`;

let heading8 = `VIII.  INTELLECTUAL PROPERTY`;

let p8a = `Intellectual Property Rights shall mean all intellectual property rights wherever in the world arising, whether registered or unregistered
        (and including any application), including copyright, know-how, confidential information, trade secrets, business names and domain names, trade marks, service marks,
        trade names, patents, petty patents, utility models, design rights, semi-conductor topography rights, database rights and all rights in the nature of unfair competition
        rights or rights to sue for passing off.`;

let p8b = `All Intellectual Property Rights in the Specification and the Project arising in connection with this Agreement shall be the property of Customer,
    and Developer hereby assigns all such Intellectual Property Rights to Customer.`;

let p8c = `Customer hereby warrants and guarantees that all elements of text, images, trademarks, or other artwork provided to Developer by Customer
    are either owned by Customer or that Customer has permission to use same.`;

let p8d = `Developer reserves the right to display and link to the completed Project as a part of Developer’s portfolio and to write and speak about the project in
    various media, subject to the Confidentiality restrictions contained herein.`;

let p8e = `The Parties intend that, to the extent that any of the services rendered by Developer pursuant to the Agreement (Work Product) qualifies as a
    "work made for hire," within the definition of Section 101 of the Copyright Act of the United States (17 U.S.C. § 101), it will be so deemed a work made for hire.
    If the Work Product or any portion of the Work Product does not qualify as work made for hire, and/or as otherwise necessary to ensure Customer’s complete
    ownership of all rights, titles and interest in the Work Product, Developer shall transfer and assign to Customer all rights,
    titles and interests in and to any and all Work Product. This transfer and assignment includes, but is not limited to, the right to publish,
    distribute, make derivative works of, edit, alter or otherwise use the Work Product in any way Customer sees fit.`;

let heading9 = `IX.  LIMITATION OF REMEDIES`;

let p9a = `Nothing in this agreement shall operate to exclude or limit either party's liability for any breach of  [STATE] law or of any breach of the terms implied by
    [STATE] law. Neither party shall be liable to the other for any loss of profit, anticipated profits, revenues, anticipated savings, goodwill or business opportunity,
    or for any indirect or consequential loss or damage.`;

let p9b = `It is not possible to guarantee that code will function as intended indefinitely. Accordingly, Developer cannot be liable to Customer or any third party
    for damages, including lost profits, lost savings, or other incidental, consequential or special damages, even if Customer has advised Developer of same.`;

let heading10 = `X.  FORCE MAJEURE`;

let p10 = `In this clause, Event of Force Majeure means an event beyond the control of Developer and Customer, which prevents either Party from complying
    with any of its obligations under this Contract. Neither Developer nor Customer shall be considered in breach of this Agreement to the extent that
    performance of their respective obligations (excluding payment obligations) is prevented by an Event of Force Majeure that arises after the Effective Date.`;

let heading11 = `XI.  CONFIDENTIALITY`;

let p11a = `Confidential Information shall mean all information whether technical or commercial (including all specifications, drawings and designs,
    disclosed in writing, on disc, orally or by inspection of documents or pursuant to discussions between the parties), where the information is
    (a) identified as confidential at the time of disclosure, or (b) ought reasonably to be considered confidential given the nature of the information
    or the circumstances of disclosure.`;

let p11b = `Confidential information shared with the receiving party shall remain the exclusive property of the disclosing party.
    Each Party agrees to maintain in confidence all such Confidential Information and not to divulge such Confidential
    Information in whole or in part to any third party and not to make use of such Confidential Information other than in relation to meeting its obligations
    under this Agreement. This obligation shall not apply to:  Information that: (i) is known at the time of the disclosing Party’s disclosure thereof to
    the receiving party; (ii) is, or becomes, publicly known, through no fault of the receiving party subsequent to the time of the disclosing partys disclosure
    thereof to the receiving party; (iii) is developed by the receiving party independently of, and without use of, the Confidential Information; (iv)
    is rightfully obtained by the receiving party from third parties authorized to make such disclosure without restriction; (v)
    is identified in writing by the disclosing party as no longer proprietary or confidential; or (vi) is required to be disclosed by law,
    regulation, or court order after giving reasonable notice to the disclosing party.`;

let heading12 = `XII.  ASSIGNMENT OF RIGHTS AND OBLIGATIONS`;

let p12 = `Developer may not assign or transfer any of its rights or obligations under this agreement.
Customer may assign or transfer any of its rights or obligations under this agreement, provided it gives prior written notice to Developer.`;

let heading13 = `XIII.  ENTIRE AGREEMENT`;

let p13 = `Except as provided in this clause, neither party shall have any remedy in respect of any untrue statement (whether written or oral)
made to it on which it relied in entering into this agreement (Misrepresentation), and neither party shall have any liability other than pursuant
to the express terms of this agreement. Nothing in this agreement shall exclude or limit either party's liability for any Misrepresentation made
knowing that it was untrue. Each party's liability for Misrepresentation as to a fundamental matter, including as to a matter fundamental to that
party's ability to perform its obligations under this agreement, shall be subject to the limit set out in the Limitation of Remedies clause.`;

let heading14 = `XIV.  VARIATION AND WAIVER`;

let p14 = `Any variation of this agreement shall be ineffective unless said variation is set forth in writing and signed by or on behalf of Developer and Customer.
		A waiver of any right under this agreement is only effective if it is in writing, and it applies only to the party to whom the waiver is addressed and the circumstances for which it is given. No waiver shall be implied by taking or failing to take any other action.
        Unless specifically provided otherwise, rights arising under this agreement are cumulative and do not exclude rights provided by federal or state law.`;
        
let heading15 = `XV.  SEVERABILITY`;

let p15 = `Any part, provision, representation or warranty of this Agreement which is prohibited or which is held to be void or unenforceable shall be ineffective
    to the extent of such prohibition or unenforceability without invalidating the remaining provisions hereof.
        Any part, provision, representation or warranty of this Agreement which is prohibited or unenforceable or is held to be void or unenforceable
        in any jurisdiction shall be ineffective, as to such jurisdiction, to the extent of such prohibition or unenforceability without invalidating the
        remaining provisions hereof.`;

let heading16 = `XVI.  GOVERNING LAW`;

let p16 = `This Agreement shall be governed by, and construed in accordance with, the laws of the State of [STATE NAME].`;

let heading17 = `XVII.  SIGNATORIES`

let p17 = `This Agreement shall be signed by [Developer name] (Developer), and [Customer name] (Customer). This Agreement is effective as of the first date written above.`;

let devSignIntro = `DEVELOPER:`;

let devSigLine1 = `By: ______________________________________`;
let devSigLine2 = `[Developer Name or Representative Name]`;
let devSigLine3 = `[if business, title of signer]`;

let customerSignIntro = `CUSTOMER:`;

let customerSigLine1 = `By: ______________________________________`;
let customerSigLine2 = `[Customer Name or Representative Name]`;
let customerSigLine3 = `[if business, title of signer]`;

let scheduleATitle = `SCHEDULE A`;

let scheduleASubTitle = `Description of Services`;

let scheduleABody = `[Insert description of services here]`;

let scheduleBTitle = `SCHEDULE B`;

let scheduleBSubTitle = `Project Specifications`;

let scheduleBBody = `[Insert project specifications here]`;

let scheduleCTitle = `SCHEDULE C`;

let scheduleCSubTitle = `Payment Terms`;

let scheduleCBody = `[Insert payment terms here]`; */

//**********Begin HTML to PDF Code
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

//need to pass in workingDocElement

export const generate = workingDocElement => {
    const pdf = new jsPDF('p', 'pt', 'a4');
    pdf.setFontSize(18);
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


