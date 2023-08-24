import * as EC3 from '../generated'

const client = new EC3.EC3({
    BASE: 'https://buildingtransparency.org/api',
    TOKEN: process.env.TOKEN,
})

client.epds.getEpds().then((result) => {
    console.log(result)
})
