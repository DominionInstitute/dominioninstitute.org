# DominionInstitute.org

This is the website for [Dominion Institute](https://dominioninstitute.org).

## Deploy

It is deployed to Cloudflare Pages on any merge to the `master` branch.

Merge requests to the `master` branch create temporary deployments.

## Local Development

You can run it locally for development purposes.


Make sure you have Node.js installed, then install dependencies:

```bash
npm install
```

Then start using:

```bash
npm run dev
```

## Building

To create a production version of the site:

```bash
npm run build
```

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
