<p style="text-align: center;">
    <img src="./docs/images/next-logo-dark.webp" alt="NextJS Logo Dark"/>
    <br />
    <a href="https://vercel.com"><img src="https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=fff&style=plastic" alt="Vercel"/></a>
    <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=plastic" alt="Typescript"/></a>
    <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=plastic" alt="NextJS" /></a>
    <a href="https://ui.shadcn.com"><img src="https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff&style=plastic" alt="shadcn/ui" /></a>
    <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=plastic" alt="Tailwind CSS" /></a>
    <a href="https://www.sanity.io"><img src="https://img.shields.io/badge/Sanity-F03E2F?logo=sanity&logoColor=fff&style=plastic" alt="Sanity.io" /></a>
    <a href="https://stripe.com/en-my"><img src="https://img.shields.io/badge/Stripe-008CDD?logo=stripe&logoColor=fff&style=plastic" alt="Stripe" /></a>
</p>

# NextCommerce

E-commerce platform built entirely in TypeScript, leveraging NextJS, shadcn/ui
components, TailwindCSS for styling, Sanity.io for CMS, and Stripe for payment
integration.

## Project Overview

- **Framework:** [NextJS 14](https://nextjs.org)
- **Component Library:** [shadcn/ui](https://ui.shadcn.com)
- **Styling:** [TailwindCSS](https://tailwindcss.com)
- **Content Management:** [Sanity.io](https://sanity.io)
- **Payment Integration:** [Stripe](https://stripe.com/)
- **Deployment:** Hosted on [Vercel](http://vercel.com)

## Project Status

While the platform is already functional, there are a few areas that needs to be improved such as:-

- Improving the user flow for successful and error-free payments.
- Implementing advanced searching, sorting and filtering options for product listings.
- Code improvements such as constants (for managing categories), creating a common template page for all and category based listing pages and general code cleanliness
- Running the application agains various 
- Other common features within an e-commerce web application

## Getting Started
1. Clone the repo:
    ```git
    git clone git@github.com:mrarvind90/next-commerce.git
    ```
2. Navigate to the repository:
    ```shell
    cd <repository_directory>
    ```
   Change <repository_directory> to the name of the cloned directory.
3. Install Dependencies:
    ```shell
    pnpm install
    ```
   This command will install all the necessary dependencies for the application.
4. Navigate to the `studio` subdirectory:
   ```shell
   cd studio
   ```
5. Install Dependencies:
    ```shell
    pnpm install
    ```
6. In the same directory, start Sanity Studio
    ```shell
    pnpm dev
    ```
7. Navigate back to the root folder and start the NextJS server
    ```shell
    pnpm dev
    ```
8. You should now be able to access the Sanity Studio via `http://localhost:3333` and the web application via `http://localhost:3000`

## License

This project is licensed under the [MIT License](./LICENSE).

## Acknowledgments

Built with inspiration from the comprehensive tutorial by [@janmarshalcoding](https://www.youtube.com/@janmarshalcoding).
Check out the full tutorial: [Next.js 14 E-Commerce Website with Stripe, and Sanity.io | Full Stack Tutorial | 2023](https://www.youtube.com/watch?v=UnwmPuPdhFc&t=10560s).
