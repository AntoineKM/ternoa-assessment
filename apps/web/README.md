# web

This is the web app for the Ternoa assessment.

## Getting Started

This app is made with [Turborepo](https://turbo.build/repo) and [Yarn](https://yarnpkg.com/) but if you want to run it independently you can use the following commands:

1. Clone the repository

```bash
git clone https://github.com/AntoineKM/ternoa-assessment
```

2. Go to the app directory

```bash
cd ternoa-assessment/apps/web
```

3. Install dependencies

```bash
yarn install
```

4. Setup the environment variables

Copy the [`.env.example`](.env.example) file and rename it to `.env.local` and fill the variables.

5. Now you can use the following commands:

- `yarn dev` - Runs `next dev` to start the web app in development mode
- `yarn build` - Runs `next build` to build the web app for production
- `yarn start` - Runs `node dist/index` to start the web app in production mode (only after `yarn build`)

## Choices

- TypeScript - For type safety
- Next.js - For building the web app
- Styled Components - For styling the web app
- SWR - For data fetching
- Wagmi - For connecting to Web3 and interacting with the Ethereum blockchain

## Disclaimer

When you add an auction, I did not have the time to make the mutation of the data that would allow to revalidate and refresh it, so once done please reload the page to refresh the data.

## Demo

Visit [live demo](https://nft.hop.sh) to see the project in action.

[![Demo](./assets/demo.png)](https://nft.hop.sh)

## License
[MIT](LICENSE)
