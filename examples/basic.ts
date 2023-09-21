import { EC3 } from '../generated'
import type { EPD_List } from '../generated'

const client = new EC3({
  BASE: 'https://openepd.buildingtransparency.org/api',
  TOKEN: process.env.TOKEN,
})

client.epds.getEpds().then((result) => {
  console.log((result as EPD_List[]).map((e) => e.product_description))
})
