# KFUPMBoard
The main goal of this project is to help college students on campus easily share, donate, or borrow items they don't need. It's all about making life simpler and more connected. We achieve this by this website by allowing students to easily log in and see the available items and offer new items.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## **DISCLAIMER**
**The database does not work on KFUPM wifi it is best to run the website on localhost using your own network or seeing it in the deployed vercel on this link :https://kfupmboard.vercel.app/**

## Features
- **Offer Item**: Our website allows our users to offer items they are not in need of but others may into our website allowing people to find what they might need.
- **Find items**: KFUPMBoard allows people in need of help with resources to easily be able to find what they need either by searching or browsing.
- **Google Cloud authenticated login** : We use supabase integrated Google Cloud for safe user login ensuring everyone's data is safe.
- **Dynamic Web Pages**: Depending on the item selected different products are shown and list item will tie the item to your account allowing you to see your items in the my items page.


## Getting Started

First, run the development server:

```bash
#if not in right directort first
cd kfupmboard

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

# if there is a need to reinitianlize the database
npx prisma migrate dev --name init

npx prisma generate

npx prisma db seed
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Repository Content 
- **api**: This is where we have all our apis that communicate with the database
- **auth**: Matters relatd to the login page 
- **components**: This is where miscelanious components like loading animation is
- **context**: This is where the program manages the user information and return what is needed 
- **hooks**: Where the hooks are 
- **layouts**: This is where the components for the main page are it is split into 3 each for the different layer
- **libs**: This is where prisma database that is called upon when needed to be active and edited
- **list**: This is where the list item page
- **offeredItems**: This is the page that shows the items you are offering
- **product**: This is the page for the products and dynamically works depending on the product id chosen

## Technology Stack
 - **front-end**: REACT, CSS tailwind, javascript
 - **back-end**: Next.js, Supabase, Prisma

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


