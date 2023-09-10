import { NextApiRequest, NextApiResponse } from 'next'
import Parser from 'rss-parser'

type CustomItem = { enclosure: { url: string} }

const parser: Parser<CustomItem> = new Parser({
  customFields: {
    item: ['enclosure'],
  },
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const feed = await parser.parseURL('https://zenn.dev/hrtk92/feed')
  feed.items = feed.items.splice(0, 2)
  res.json(feed)
}
