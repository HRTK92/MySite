import { NextApiRequest, NextApiResponse } from 'next'
import Parser from 'rss-parser'
import { Z_FILTERED } from 'zlib'

type CustomItem = { enclosure: { url: string} }

const parser: Parser<CustomItem> = new Parser({
  customFields: {
    item: ['enclosure'],
  },
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let feed = await parser.parseURL('https://zenn.dev/hrtk92/feed')
  feed.items = feed.items.splice(2)
  res.json(feed)
}
