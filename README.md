# Contract Generator

A web app that walks freelance web developers through a short series of forms and produces an Agreement for Web Development Services as a downloadable PDF. I wrote the contract language myself, drawing on my experience as a licensed attorney and former litigator.

**Live demo:** https://dtame3ylp25go.cloudfront.net

> Built in 2018. This project is not actively maintained.

## Why it exists

Freelancers often start client work on a handshake or a one-line email, then have nothing to rely on when scope, payment, or ownership is disputed. This app gives them a complete, plain-English services agreement tailored to their project, without needing to hire a lawyer to draft one from scratch.

## Features

- **Guided intake.** A step-by-step form flow with a progress bar collects:
  - whether the developer and the customer are individuals or registered business entities
  - names and addresses for both parties, with a US state selector
  - the project description (Schedule A), project specifications (Schedule B), and payment terms (Schedule C)
  - the name and title of each authorized signatory when a party is a business
- **Live preview.** The contract renders beside the form and updates as you type. It shows a "DRAFT" watermark until the required fields are filled in.
- **Drafting help.** Example dialogs show sample project descriptions (basic, and with a timetable) and sample payment terms (one-time fee, hourly rate, retainer).
- **PDF export.** Once the forms are complete, a "Generate PDF" button exports the contract with jsPDF.
- **Saved progress.** Your answers and your place in the flow are kept in `localStorage`, so a refresh doesn't lose your work.

## The agreement

The generated contract is a full services agreement, not a fill-in-the-blanks template. It covers:

| Section | What it addresses |
| --- | --- |
| Parties | Identifies each party, using its registered address when it is a business |
| Scope of work | Ties the services to Schedules A and B, with written Modification Orders for changes in scope |
| Term and termination | When the agreement takes effect and how either party can end it |
| Acceptance | Customer review against the specifications, with a written process for non-conforming work |
| Payment | Payment per Schedule C, with a final invoice after acceptance |
| Warranties | Authority to contract, a reasonable-care standard, and the customer's duty to supply materials |
| Independent contractor | Makes clear the relationship is not employment, agency, or partnership |
| Intellectual property | Assigns IP to the customer, includes work-made-for-hire language under the Copyright Act, and preserves the developer's right to show the work in a portfolio |
| Limitation of remedies | Excludes consequential damages and recognizes that code cannot be guaranteed to work indefinitely |
| Boilerplate | Force majeure, confidentiality, assignment, entire agreement, variation and waiver, severability, and governing law (the developer's state) |
| Signatures | Signature blocks for individuals or for representatives signing on behalf of a business |

> This project is a software demo. It is not legal advice, and using it does not create an attorney-client relationship.

## Tech stack

- React 16 and Redux (with redux-thunk)
- Material-UI v1
- jsPDF for generating the PDF
- Webpack 4 and Babel 6
- Express, which serves the built app

## Getting started

The build depends on `node-sass` 4.x, which needs an older Node.js release. Node 12 is the version this project was built against.

```bash
npm install

# Development server with live reload
npm run dev-server

# Production build to public/dist
npm run build:prod

# Serve public/ with Express (defaults to port 3000)
npm start
```

`server.js` reads one environment variable, `PORT`, which is optional.

## Project structure

```
src/
  components/
    formPages/        # One component per step (Page1 ... Page9)
    Contract.js       # The contract text, populated from Redux state
    WorkingDocument.js# Live preview, DRAFT state, and the PDF button
    *Dialog.js        # Example descriptions and payment terms
  documents/contract.js # jsPDF export
  actions/, reducers/, store/ # Redux state, persisted to localStorage
  JSONdata/USstates.json
server.js             # Static Express server
```

## Related

- [invoice-generator-fe](https://github.com/shanehobson/invoice-generator-fe) and [invoice-generator](https://github.com/shanehobson/invoice-generator): a companion tool for freelancers that generates PDF invoices
- Portfolio: https://www.shanehobson.me
