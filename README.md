# EC3 Client for TypeScript

This is a programmatically-generated client for the [EC3 public API](https://openepd.buildingtransparency.org) based on the [openEPD](https://www.buildingtransparency.org/programs/openepd/) standard. It is based on [EC3's OpenAPI spec](https://openepd.buildingtransparency.org/openapi.json), and generated using [openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen).

## Usage

For example:

```ts
import { EC3 } from '@cercula-io/ec3'
import type { EPD_List } from '@cercula-io/ec3'

const client = new EC3({
  BASE: 'https://openepd.buildingtransparency.org/api',
  TOKEN: process.env.TOKEN,
})

client.epds.getEpds().then((result) => {
  console.log((result as EPD_List[]).map((e) => e.product_description))
})
```

See the `/examples` directory for more.

## Developing

Getting set up:

1. Clone the repo
1. Run `npm install` to pull dependencies

Iterating:

1. Update the OpenAPI spec from https://openepd.buildingtransparency.org/openapi.json and put the contents in `openapi.json`, if desired
1. Run `npm run gen` to generate new code
1. Run `npm run build` to transpile the TypeScript code
