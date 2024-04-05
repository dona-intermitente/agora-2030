<div  style='background-color:white; text-align:center' >
  <img alt="Agora Logo" src="https://agora2030.org/en/wp-content/uploads/2022/10/logo.svg">
</div>

<br/>

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This is a copy of Agora web created with [Next.js](https://nextjs.org/) project
bootstrapped with
[create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

You can try a demo [here](https://agora-2030-zvcf.vercel.app), the original page
is [here](https://agora2030.org/en)

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `app/page.tsx`. The page
auto-updates as you edit the file.

This project uses
[`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to
automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/deployment) for more
details.

## Run Test

You can run the tests:

```bash
npm run test
```

## My developers tools for team

These tools allow me to work organized and with good practices

- [Husky](https://typicode.github.io/husky)
- [Commitizen](https://www.npmjs.com/package/commitizen)
- [eslint](https://eslint.org)
- [prettier](https://prettier.io)
- [lint-staged](https://www.npmjs.com/package/lint-staged)

## UI library

- [nextui](https://nextui.org)

## CSS

- [tailwindcss](https://tailwindcss.com)

## Unit test

### form:

rendering of the form inputs and sending the correct sending of the data.

### navbar:

navigation between web pages and correct routing.

#### tool:

- [jest](https://jestjs.io)

## Other component libraries

- [slick-carousel](https://www.npmjs.com/package/slick-carousel)
- [accessibility-react-widget](https://www.npmjs.com/package/accessibility-react-widget)
- [country-list-js](https://www.npmjs.com/package/country-list-js)
- [react-countup](https://www.npmjs.com/package/react-countup)
- [react-hot-toast](https://react-hot-toast.com)

## Sending email

- [nodemailer](https://nodemailer.com)

## Applied improvements

- re-design the cards so that they are fully clickable
- reuse of the card component in all necessary cases, to maintain visual
  coherence
- In the form, I replaced the countries input with an autocomplete selector with
  the flags of each country
- Improve navigation speed between pages
- In the partners and founders section, soften the carousel animation
- In phone view, in the partners and founders section, increase the size of the
  images
- The filter of articles by categories does not make a page reload when clicked

## TODOS

- In phone view when selecting a navbar item it does not close the menu.
- No links other than those that correspond to the blog flow, they work. For
  example the donate button.
- The hero does not look like the one on the original page because the .png of
  the woman is missing
- The form is missing the reCAPTCHA
