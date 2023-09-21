import * as EC3 from '../generated'

const client = new EC3.EC3({
  BASE: 'https://openepd.buildingtransparency.org/api',
  TOKEN: process.env.TOKEN,
})

client.epds.getEpds().then((result) => {
  console.log((result as EC3.EPD_List[]).map((e) => e.product_description))
})
